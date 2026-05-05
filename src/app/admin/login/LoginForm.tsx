"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Lock } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password) return

    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (!data.success) {
        setError(data.message || "Senha incorreta.")
        setSubmitting(false)
        return
      }
      router.replace("/admin")
      router.refresh()
    } catch {
      setError("Erro ao conectar. Tente novamente.")
      setSubmitting(false)
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

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting || !password}
        className="w-full h-12 rounded-xl bg-[#2D4057] text-white font-semibold text-sm hover:bg-[#1e2d3d] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
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
