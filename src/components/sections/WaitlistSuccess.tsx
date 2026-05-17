"use client"

import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Check, Copy, Share2 } from "lucide-react"

interface WaitlistSuccessProps {
  position: number
  totalCount: number
  nome: string
}

export function WaitlistSuccess({ position, totalCount, nome }: WaitlistSuccessProps) {
  const [copied, setCopied] = useState(false)
  const isFounder = position <= 1000

  const shareText = encodeURIComponent(
    "Acabei de entrar na lista de espera do Bookim, um app de estudos com IA pra medicina e odonto! Entra também: https://www.bookim.com.br/lista-de-espera?utm_source=whatsapp&utm_medium=referral&utm_campaign=waitlist-share"
  )
  const whatsappLink = `https://wa.me/?text=${shareText}`
  const waitlistLink = "https://www.bookim.com.br/lista-de-espera?utm_source=referral&utm_medium=copy-link&utm_campaign=waitlist-share"

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(waitlistLink)
    setCopied(true)
  }, [waitlistLink])

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(id)
  }, [copied])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-center py-6"
    >
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center"
      >
        <Check className="w-10 h-10 text-emerald-600" strokeWidth={3} />
      </motion.div>

      <h3 className="text-2xl font-bold text-[var(--bookim-text-primary)] mb-2">
        Você está na lista, {nome.split(" ")[0]}!
      </h3>

      {/* Position */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="my-6"
      >
        <p className="text-sm text-[var(--bookim-text-muted)] mb-1">Sua posição</p>
        <p className="text-5xl font-extrabold text-[#2D4057] tracking-tighter">#{position}</p>
      </motion.div>

      {/* Founder badge */}
      {isFounder && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6"
        >
          <span className="text-emerald-700 text-sm font-bold">
            Vaga de fundador garantida — preço congelado!
          </span>
        </motion.div>
      )}

      {/* Total counter */}
      <p className="text-sm text-[var(--bookim-text-secondary)] mb-8">
        Já somos <span className="font-bold text-[var(--bookim-text-primary)]">{totalCount}</span> na lista
      </p>

      {/* Share buttons */}
      <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-all"
        >
          <Share2 className="w-4 h-4" />
          Compartilhar no WhatsApp
        </a>
        <button
          onClick={handleCopy}
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-white border border-[var(--bookim-border)] text-[var(--bookim-text-primary)] font-semibold text-sm hover:bg-gray-50 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-500" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copiar link
            </>
          )}
        </button>
      </div>
    </motion.div>
  )
}
