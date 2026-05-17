"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Lock } from "lucide-react"

type LoginState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "error"; message: string }

export function LoginForm() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState<LoginState>({ kind: "idle" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password) return

    setLogin({ kind: "submitting" })

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (!data.success) {
        setLogin({ kind: "error", message: data.message || "Senha incorreta." })
        return
      }
      router.replace("/admin")
      router.refresh()
    } catch {
      setLogin({ kind: "error", message: "Erro ao conectar. Tente novamente." })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--bookim-text-muted)]" />
        <input
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha de admin"
          required
          className="w-full h-12 pl-11 pr-4 rounded-xl bg-white border border-[var(--bookim-border)] text-[var(--bookim-text-primary)] text-sm placeholder:text-[var(--bookim-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--bookim-primary)]/30 focus:border-[var(--bookim-primary)] transition-all"
        />
      </div>

      {login.kind === "error" && (
        <p className="text-sm text-red-500 text-center">{login.message}</p>
      )}

      <button
        type="submit"
        disabled={login.kind === "submitting" || !password}
        className="w-full h-12 rounded-xl bg-[#2D4057] text-white font-semibold text-sm hover:bg-[#1e2d3d] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {login.kind === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Entrando...
          </>
        ) : (
          "Entrar"
        )}
      </button>
    </form>
  )
}
