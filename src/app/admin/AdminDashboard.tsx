"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Users, TrendingUp, Crown, Calendar, RefreshCw, Download, LogOut,
  Stethoscope, Heart, Sparkles, Loader2, Filter,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useAdminData, type Stats, type DailyPoint, type SourcePoint, type Lead } from "@/hooks/useAdminData"

export function AdminDashboard() {
  const router = useRouter()
  const [filterArea, setFilterArea] = useState<string>("")
  const [filterSource, setFilterSource] = useState<string>("")
  const { state, refetch } = useAdminData(filterArea, filterSource)
  const { status, data, errorMessage } = state
  const { stats, daily, sources, leads, lastUpdated } = data
  const refreshing = status === "refreshing"

  const handleLogout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" })
    router.replace("/admin/login")
  }

  const handleExport = () => {
    window.location.href = "/api/admin/export-csv"
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bookim-bg-primary)]">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--bookim-primary)]" />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[var(--bookim-bg-primary)] text-[var(--bookim-text-primary)]">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-[var(--bookim-border)]">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold font-outfit text-[var(--bookim-text-primary)]">
              Bookim Admin
            </h1>
            <p className="text-xs text-[var(--bookim-text-muted)] mt-0.5">
              {status === "error" && errorMessage ? (
                <span className="text-red-500">Falha ao atualizar: {errorMessage}</span>
              ) : lastUpdated ? (
                <>Atualizado às {lastUpdated.toLocaleTimeString("pt-BR")} · auto-refresh 30s</>
              ) : null}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => refetch()}
              disabled={refreshing}
              className="h-9 px-3 rounded-lg bg-white border border-[var(--bookim-border)] text-[var(--bookim-text-secondary)] hover:bg-gray-50 transition-all flex items-center gap-2 text-sm font-medium disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Atualizar</span>
            </button>
            <button
              onClick={handleExport}
              className="h-9 px-3 rounded-lg bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-[0_2px_8px_rgba(5,150,105,0.25)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exportar CSV</span>
            </button>
            <button
              onClick={handleLogout}
              className="h-9 w-9 rounded-lg bg-white border border-[var(--bookim-border)] text-[var(--bookim-text-muted)] hover:bg-gray-50 hover:text-red-600 transition-all flex items-center justify-center"
              title="Sair"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8 space-y-8">
        {/* Stats Cards */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={Users}
            label="Total inscritos"
            value={stats?.total ?? 0}
            accent="primary"
          />
          <StatCard
            icon={Crown}
            label="Vagas de fundador"
            value={stats?.founders_remaining ?? 0}
            sublabel={`${stats?.founders_count ?? 0} ocupadas de 1000`}
            accent="emerald"
          />
          <StatCard
            icon={Calendar}
            label="Hoje"
            value={stats?.today_count ?? 0}
            accent="indigo"
          />
          <StatCard
            icon={TrendingUp}
            label="Últimos 7 dias"
            value={stats?.last_7_days_count ?? 0}
            accent="violet"
          />
        </section>

        {/* Charts row */}
        <section className="grid lg:grid-cols-2 gap-5">
          <DailyChart data={daily} />
          <AreaBreakdown stats={stats} />
        </section>

        {/* Sources */}
        <section>
          <SourcesBreakdown sources={sources} />
        </section>

        {/* Leads table */}
        <section className="bg-white rounded-2xl border border-[var(--bookim-border)] overflow-hidden">
          <div className="p-5 border-b border-[var(--bookim-border)] flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-base font-bold font-outfit">Inscritos recentes</h2>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-3.5 h-3.5 text-[var(--bookim-text-muted)]" />
              <select
                value={filterArea}
                onChange={(e) => setFilterArea(e.target.value)}
                className="h-8 px-3 rounded-lg bg-white border border-[var(--bookim-border)] text-xs font-medium focus:outline-none focus:border-[var(--bookim-primary)]"
              >
                <option value="">Todas as áreas</option>
                <option value="medicina">Medicina</option>
                <option value="odontologia">Odontologia</option>
                <option value="outro">Outro</option>
              </select>
              <select
                value={filterSource}
                onChange={(e) => setFilterSource(e.target.value)}
                className="h-8 px-3 rounded-lg bg-white border border-[var(--bookim-border)] text-xs font-medium focus:outline-none focus:border-[var(--bookim-primary)]"
              >
                <option value="">Todas as fontes</option>
                {sources.map((s) => (
                  <option key={s.source} value={s.source}>{s.source}</option>
                ))}
              </select>
            </div>
          </div>
          <LeadsTable leads={leads} />
        </section>
      </div>
    </main>
  )
}

// =========================================================================
// Stat Card
// =========================================================================
function StatCard({
  icon: Icon,
  label,
  value,
  sublabel,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: number
  sublabel?: string
  accent: "primary" | "emerald" | "indigo" | "violet"
}) {
  const accentMap = {
    primary: "bg-[#2D4057]/10 text-[#2D4057]",
    emerald: "bg-emerald-100 text-emerald-700",
    indigo: "bg-indigo-100 text-indigo-700",
    violet: "bg-violet-100 text-violet-700",
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-5 border border-[var(--bookim-border)] hover:border-[var(--bookim-primary)]/20 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accentMap[accent]}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="text-3xl font-bold tracking-tight font-outfit text-[var(--bookim-text-primary)]"
        >
          {value.toLocaleString("pt-BR")}
        </motion.div>
      </AnimatePresence>
      <p className="text-xs font-medium text-[var(--bookim-text-secondary)] mt-1">
        {label}
      </p>
      {sublabel && (
        <p className="text-[11px] text-[var(--bookim-text-muted)] mt-1">{sublabel}</p>
      )}
    </motion.div>
  )
}

// =========================================================================
// Daily inscriptions chart (SVG line)
// =========================================================================
function DailyChart({ data }: { data: DailyPoint[] }) {
  if (data.length === 0) return null

  const max = Math.max(...data.map((d) => d.total), 1)
  const W = 560
  const H = 200
  const PAD = { top: 16, right: 16, bottom: 28, left: 32 }
  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top - PAD.bottom

  const points = data.map((d, i) => {
    const x = PAD.left + (data.length === 1 ? innerW / 2 : (i * innerW) / (data.length - 1))
    const y = PAD.top + innerH - (d.total / max) * innerH
    return { x, y, total: d.total, dia: d.dia }
  })

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${PAD.top + innerH} L ${points[0].x} ${PAD.top + innerH} Z`

  const formatDay = (iso: string) => {
    const d = new Date(iso)
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}`
  }

  return (
    <div className="bg-white rounded-2xl p-5 border border-[var(--bookim-border)]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold font-outfit">Inscrições por dia</h2>
        <span className="text-xs text-[var(--bookim-text-muted)]">Últimos 14 dias</span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2D4057" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2D4057" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y axis grid */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = PAD.top + innerH - t * innerH
          return (
            <g key={t}>
              <line x1={PAD.left} y1={y} x2={W - PAD.right} y2={y} stroke="#E5E7EB" strokeDasharray="3 3" />
              <text x={PAD.left - 6} y={y + 3} textAnchor="end" fontSize="10" fill="#9CA3AF">
                {Math.round(max * t)}
              </text>
            </g>
          )
        })}

        {/* Area + line */}
        <path d={areaPath} fill="url(#areaGradient)" />
        <path d={linePath} fill="none" stroke="#2D4057" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

        {/* Data points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill="white" stroke="#2D4057" strokeWidth="2" />
            {p.total > 0 && (
              <text x={p.x} y={p.y - 10} textAnchor="middle" fontSize="10" fontWeight="600" fill="#2D4057">
                {p.total}
              </text>
            )}
          </g>
        ))}

        {/* X axis labels — render every Nth so they don't collide */}
        {points.map((p, i) => {
          const stride = Math.max(1, Math.ceil(points.length / 7))
          if (i % stride !== 0 && i !== points.length - 1) return null
          return (
            <text
              key={`x-${i}`}
              x={p.x}
              y={H - 8}
              textAnchor="middle"
              fontSize="10"
              fill="#9CA3AF"
            >
              {formatDay(p.dia)}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

// =========================================================================
// Area breakdown
// =========================================================================
function AreaBreakdown({ stats }: { stats: Stats | null }) {
  if (!stats) return null
  const total = stats.total || 1

  const items = [
    { icon: Stethoscope, label: "Medicina", count: stats.medicina_count, color: "from-blue-500 to-cyan-500" },
    { icon: Heart, label: "Odontologia", count: stats.odontologia_count, color: "from-rose-500 to-pink-500" },
    { icon: Sparkles, label: "Outro", count: stats.outro_count, color: "from-violet-500 to-purple-500" },
  ]

  return (
    <div className="bg-white rounded-2xl p-5 border border-[var(--bookim-border)]">
      <h2 className="text-base font-bold font-outfit mb-5">Áreas de estudo</h2>
      <div className="space-y-4">
        {items.map((item, i) => {
          const pct = (item.count / total) * 100
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[var(--bookim-text-primary)]">{item.label}</span>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-[var(--bookim-text-primary)]">{item.count}</span>
                  <span className="text-[var(--bookim-text-muted)] ml-1.5">({pct.toFixed(1)}%)</span>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.6, delay: i * 0.05 + 0.1 }}
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// =========================================================================
// Sources breakdown
// =========================================================================
function SourcesBreakdown({ sources }: { sources: SourcePoint[] }) {
  if (sources.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-5 border border-[var(--bookim-border)] text-center text-sm text-[var(--bookim-text-muted)]">
        Sem dados de fonte ainda.
      </div>
    )
  }
  const max = Math.max(...sources.map((s) => s.total), 1)

  const sourceLabels: Record<string, { label: string; color: string }> = {
    instagram: { label: "Instagram", color: "from-pink-500 to-rose-500" },
    tiktok: { label: "TikTok", color: "from-gray-800 to-black" },
    whatsapp: { label: "WhatsApp", color: "from-green-500 to-emerald-500" },
    referral: { label: "Indicação", color: "from-blue-500 to-cyan-500" },
    direto: { label: "Direto", color: "from-amber-500 to-orange-500" },
    video: { label: "Vídeo", color: "from-purple-500 to-violet-500" },
  }

  return (
    <div className="bg-white rounded-2xl p-5 border border-[var(--bookim-border)]">
      <h2 className="text-base font-bold font-outfit mb-5">De onde vieram</h2>
      <div className="space-y-3">
        {sources.map((s, i) => {
          const meta = sourceLabels[s.source] || { label: s.source, color: "from-slate-400 to-slate-500" }
          const pct = (s.total / max) * 100
          return (
            <motion.div
              key={s.source}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3"
            >
              <span className="w-24 text-sm font-medium text-[var(--bookim-text-primary)] flex-shrink-0">
                {meta.label}
              </span>
              <div className="flex-1 h-7 bg-gray-50 rounded-lg overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.6, delay: i * 0.04 + 0.1 }}
                  className={`h-full bg-gradient-to-r ${meta.color}`}
                />
              </div>
              <span className="w-10 text-right text-sm font-bold text-[var(--bookim-text-primary)] flex-shrink-0">
                {s.total}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// =========================================================================
// Leads table
// =========================================================================
function LeadsTable({ leads }: { leads: Lead[] }) {
  if (leads.length === 0) {
    return (
      <div className="p-12 text-center text-sm text-[var(--bookim-text-muted)]">
        Nenhum inscrito encontrado.
      </div>
    )
  }

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    return d.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatWhatsApp = (raw: string) => {
    const digits = raw.replace(/\D/g, "")
    if (digits.length === 13 && digits.startsWith("55")) {
      return `(${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`
    }
    if (digits.length === 12 && digits.startsWith("55")) {
      return `(${digits.slice(2, 4)}) ${digits.slice(4, 8)}-${digits.slice(8)}`
    }
    return raw
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--bookim-border)] bg-gray-50/50">
            <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--bookim-text-muted)]">#</th>
            <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--bookim-text-muted)]">Nome</th>
            <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--bookim-text-muted)]">Email</th>
            <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--bookim-text-muted)]">WhatsApp</th>
            <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--bookim-text-muted)]">Área</th>
            <th className="text-left px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--bookim-text-muted)]">Fonte</th>
            <th className="text-right px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--bookim-text-muted)]">Quando</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => {
            const isFounder = lead.lead_position <= 1000
            return (
              <tr key={lead.lead_position} className="border-b border-[var(--bookim-border)] last:border-b-0 hover:bg-gray-50/40 transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-[var(--bookim-text-primary)]">#{lead.lead_position}</span>
                    {isFounder && <Crown className="w-3 h-3 text-emerald-600" />}
                  </div>
                </td>
                <td className="px-5 py-3 font-medium text-[var(--bookim-text-primary)]">{lead.nome}</td>
                <td className="px-5 py-3 text-[var(--bookim-text-secondary)]">
                  <a href={`mailto:${lead.email}`} className="hover:text-[var(--bookim-primary)] hover:underline">
                    {lead.email}
                  </a>
                </td>
                <td className="px-5 py-3 text-[var(--bookim-text-secondary)]">
                  <a href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 hover:underline">
                    {formatWhatsApp(lead.whatsapp)}
                  </a>
                </td>
                <td className="px-5 py-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 text-[var(--bookim-text-secondary)] capitalize">
                    {lead.area_de_estudo}
                  </span>
                </td>
                <td className="px-5 py-3 text-[var(--bookim-text-muted)] text-xs">
                  {lead.utm_source || "direto"}
                  {lead.utm_campaign && (
                    <span className="text-[10px] block">{lead.utm_campaign}</span>
                  )}
                </td>
                <td className="px-5 py-3 text-right text-xs text-[var(--bookim-text-muted)] font-mono">
                  {formatDate(lead.created_at)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
