"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"

export function WaitlistCounter({ className = "" }: { className?: string }) {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {})
  }, [])

  if (count === null || count === 0) return null

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D4057]/8 border border-[#2D4057]/10 ${className}`}>
      <Users className="w-4 h-4 text-[#2D4057]" />
      <span className="text-sm font-semibold text-[var(--bookim-text-primary)]">
        Já {count === 1 ? "tem" : "temos"} <span className="text-[#2D4057] font-bold">{count.toLocaleString("pt-BR")}</span> {count === 1 ? "estudante" : "estudantes"} na lista
      </span>
    </div>
  )
}
