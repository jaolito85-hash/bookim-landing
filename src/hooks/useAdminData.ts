"use client"

import { useCallback, useEffect, useReducer, useRef } from "react"
import { useRouter } from "next/navigation"

export type Stats = {
  total: number
  founders_count: number
  founders_remaining: number
  today_count: number
  last_7_days_count: number
  medicina_count: number
  odontologia_count: number
  outro_count: number
}
export type DailyPoint = { dia: string; total: number }
export type SourcePoint = { source: string; total: number }
export type Lead = {
  lead_position: number
  nome: string
  email: string
  whatsapp: string
  area_de_estudo: string
  utm_source: string | null
  utm_campaign: string | null
  created_at: string
}

type Data = {
  stats: Stats | null
  daily: DailyPoint[]
  sources: SourcePoint[]
  leads: Lead[]
  lastUpdated: Date | null
}

type AdminState = {
  status: "loading" | "ready" | "refreshing" | "error"
  data: Data
  errorMessage: string | null
}

type Action =
  | { type: "FETCH_START"; silent: boolean }
  | { type: "FETCH_SUCCESS"; data: Omit<Data, "lastUpdated"> }
  | { type: "FETCH_ERROR"; message: string }

const initialState: AdminState = {
  status: "loading",
  data: { stats: null, daily: [], sources: [], leads: [], lastUpdated: null },
  errorMessage: null,
}

function reducer(state: AdminState, action: Action): AdminState {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        status: action.silent ? "refreshing" : "loading",
        errorMessage: null,
      }
    case "FETCH_SUCCESS":
      return {
        status: "ready",
        data: { ...action.data, lastUpdated: new Date() },
        errorMessage: null,
      }
    case "FETCH_ERROR":
      return { ...state, status: "error", errorMessage: action.message }
  }
}

const REFRESH_INTERVAL_MS = 30_000

export function useAdminData(filterArea: string, filterSource: string) {
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)
  const abortRef = useRef<AbortController | null>(null)

  const fetchData = useCallback(
    async (silent = false) => {
      abortRef.current?.abort()
      const controller = new AbortController()
      abortRef.current = controller

      dispatch({ type: "FETCH_START", silent })
      try {
        const params = new URLSearchParams({ limit: "100", days: "14" })
        if (filterArea) params.set("area", filterArea)
        if (filterSource) params.set("source", filterSource)

        const res = await fetch(`/api/admin/data?${params.toString()}`, {
          cache: "no-store",
          signal: controller.signal,
        })
        if (res.status === 401) {
          router.replace("/admin/login")
          return
        }
        const data = await res.json()
        dispatch({
          type: "FETCH_SUCCESS",
          data: {
            stats: data.stats,
            daily: data.daily || [],
            sources: data.sources || [],
            leads: data.leads || [],
          },
        })
      } catch (err) {
        if ((err as Error).name === "AbortError") return
        dispatch({ type: "FETCH_ERROR", message: (err as Error).message })
      }
    },
    [filterArea, filterSource, router]
  )

  useEffect(() => {
    fetchData()
    const id = setInterval(() => fetchData(true), REFRESH_INTERVAL_MS)
    return () => {
      clearInterval(id)
      abortRef.current?.abort()
    }
  }, [fetchData])

  return { state, refetch: fetchData }
}
