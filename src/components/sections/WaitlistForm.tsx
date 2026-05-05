"use client"

import { useState, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { WaitlistSuccess } from "./WaitlistSuccess"

const areas = [
  { value: "medicina", label: "Medicina" },
  { value: "odontologia", label: "Odontologia" },
  { value: "outro", label: "Outro" },
] as const

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

type FormState = "idle" | "submitting" | "success" | "duplicate" | "error"

export function WaitlistForm() {
  const searchParams = useSearchParams()
  const [state, setState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [position, setPosition] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [area, setArea] = useState<string>("")
  const [lgpd, setLgpd] = useState(false)

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!nome || !email || !whatsapp || !area || !lgpd) return

      setState("submitting")
      setErrorMsg("")

      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome,
            email,
            whatsapp,
            area_de_estudo: area,
            lgpd_consent: lgpd,
            utm_source: searchParams.get("utm_source"),
            utm_medium: searchParams.get("utm_medium"),
            utm_campaign: searchParams.get("utm_campaign"),
            utm_content: searchParams.get("utm_content"),
          }),
        })

        const data = await res.json()

        if (!res.ok) {
          setErrorMsg(data.message || "Erro ao se inscrever. Tente novamente.")
          setState("error")
          return
        }

        if (data.duplicate) {
          setState("duplicate")
          return
        }

        setPosition(data.position)
        setTotalCount(data.totalCount)
        setState("success")
      } catch {
        setErrorMsg("Erro de conexão. Tente novamente.")
        setState("error")
      }
    },
    [nome, email, whatsapp, area, lgpd, searchParams]
  )

  if (state === "success") {
    return <WaitlistSuccess position={position} totalCount={totalCount} nome={nome} />
  }

  if (state === "duplicate") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-2xl">👋</span>
        </div>
        <h3 className="text-xl font-bold text-[var(--bookim-text-primary)] mb-2">
          Você já está na lista!
        </h3>
        <p className="text-[var(--bookim-text-secondary)] text-sm">
          Fique tranquilo, vamos te avisar quando o Bookim estiver pronto.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div>
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full h-12 px-4 rounded-xl bg-white border border-[var(--bookim-border)] text-[var(--bookim-text-primary)] text-sm placeholder:text-[var(--bookim-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--bookim-primary)]/30 focus:border-[var(--bookim-primary)] transition-all"
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-12 px-4 rounded-xl bg-white border border-[var(--bookim-border)] text-[var(--bookim-text-primary)] text-sm placeholder:text-[var(--bookim-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--bookim-primary)]/30 focus:border-[var(--bookim-primary)] transition-all"
        />
      </div>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[var(--bookim-text-muted)] font-medium">
          +55
        </span>
        <input
          type="tel"
          placeholder="(XX) XXXXX-XXXX"
          value={whatsapp}
          onChange={(e) => setWhatsapp(formatPhone(e.target.value))}
          required
          className="w-full h-12 pl-12 pr-4 rounded-xl bg-white border border-[var(--bookim-border)] text-[var(--bookim-text-primary)] text-sm placeholder:text-[var(--bookim-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--bookim-primary)]/30 focus:border-[var(--bookim-primary)] transition-all"
        />
      </div>

      {/* Area de estudo - pill selector */}
      <div>
        <p className="text-xs text-[var(--bookim-text-secondary)] font-medium mb-2">
          Área de estudo
        </p>
        <div className="flex gap-2">
          {areas.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setArea(opt.value)}
              className={`flex-1 h-10 rounded-xl text-sm font-medium transition-all duration-200 ${
                area === opt.value
                  ? "bg-[#2D4057] text-white shadow-md"
                  : "bg-white border border-[var(--bookim-border)] text-[var(--bookim-text-secondary)] hover:border-[var(--bookim-primary)]/30"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* LGPD consent */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={lgpd}
          onChange={(e) => setLgpd(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#2D4057] focus:ring-[#2D4057]"
        />
        <span className="text-xs text-[var(--bookim-text-muted)] leading-relaxed">
          Concordo com o tratamento dos meus dados conforme a{" "}
          <a href="/privacidade" className="underline hover:text-[var(--bookim-primary)]">
            Política de Privacidade
          </a>
          .
        </span>
      </label>

      {(state === "error") && (
        <p className="text-sm text-red-500 text-center">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="group rainbow-btn w-full"
      >
        <span className="rainbow-btn-inner flex items-center justify-center gap-2">
          {state === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Inscrevendo...
            </>
          ) : (
            "Garantir minha vaga"
          )}
        </span>
      </button>

      <p className="text-center text-xs text-[var(--bookim-text-muted)]">
        Sem spam. Sem compromisso. Seus dados estão protegidos.
      </p>
    </form>
  )
}
