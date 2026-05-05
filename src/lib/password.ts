import { randomBytes } from "crypto"

// Characters excluding ambiguous ones (0, O, l, 1, I)
const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"

export function generateTempPassword(length = 10): string {
  const bytes = randomBytes(length)
  let password = ""
  for (let i = 0; i < length; i++) {
    password += CHARS[bytes[i] % CHARS.length]
  }
  return password
}
