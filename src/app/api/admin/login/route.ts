import { NextRequest, NextResponse } from "next/server"
import { checkPassword, mintAdminCookie, ADMIN_COOKIE } from "@/lib/admin-auth"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    if (typeof password !== "string" || !password) {
      return NextResponse.json({ success: false, message: "Senha obrigatória." }, { status: 400 })
    }

    if (!checkPassword(password)) {
      // Slow down brute force a bit
      await new Promise((r) => setTimeout(r, 800))
      return NextResponse.json({ success: false, message: "Senha incorreta." }, { status: 401 })
    }

    const cookieValue = mintAdminCookie()
    const response = NextResponse.json({ success: true })
    response.cookies.set({
      name: ADMIN_COOKIE.name,
      value: cookieValue,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: ADMIN_COOKIE.maxAge,
      path: "/",
    })
    return response
  } catch {
    return NextResponse.json({ success: false, message: "Erro interno." }, { status: 500 })
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.set({
    name: ADMIN_COOKIE.name,
    value: "",
    httpOnly: true,
    maxAge: 0,
    path: "/",
  })
  return response
}
