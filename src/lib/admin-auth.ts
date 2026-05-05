import { cookies } from "next/headers"
import { createHmac, timingSafeEqual } from "crypto"

const COOKIE_NAME = "bookim_admin"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

function getSecret(): string {
  return process.env.ADMIN_PASSWORD || ""
}

function sign(value: string, secret: string): string {
  return createHmac("sha256", secret).update(value).digest("hex")
}

/**
 * Build the cookie value: timestamp + signature.
 * Anyone with the password can mint these, but no one else can.
 */
export function mintAdminCookie(): string {
  const secret = getSecret()
  if (!secret) throw new Error("ADMIN_PASSWORD not configured")
  const issuedAt = Date.now().toString()
  const sig = sign(issuedAt, secret)
  return `${issuedAt}.${sig}`
}

/**
 * Verify the admin cookie. Returns true if valid and not expired.
 */
export function verifyAdminCookie(value: string | undefined): boolean {
  if (!value) return false
  const secret = getSecret()
  if (!secret) return false
  const [issuedAt, sig] = value.split(".")
  if (!issuedAt || !sig) return false

  const expected = sign(issuedAt, secret)
  if (expected.length !== sig.length) return false

  const expectedBuf = Buffer.from(expected, "hex")
  const sigBuf = Buffer.from(sig, "hex")
  if (expectedBuf.length !== sigBuf.length) return false
  if (!timingSafeEqual(expectedBuf, sigBuf)) return false

  // Check expiration (7 days)
  const issued = parseInt(issuedAt, 10)
  if (Number.isNaN(issued)) return false
  const ageMs = Date.now() - issued
  if (ageMs > COOKIE_MAX_AGE * 1000) return false

  return true
}

export function checkPassword(submitted: string): boolean {
  const expected = getSecret()
  if (!expected) return false
  if (submitted.length !== expected.length) return false
  try {
    return timingSafeEqual(
      Buffer.from(submitted),
      Buffer.from(expected),
    )
  } catch {
    return false
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(COOKIE_NAME)
  return verifyAdminCookie(cookie?.value)
}

export const ADMIN_COOKIE = {
  name: COOKIE_NAME,
  maxAge: COOKIE_MAX_AGE,
}
