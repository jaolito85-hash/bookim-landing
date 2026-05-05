import { Suspense } from "react"
import type { Metadata } from "next"
import { WaitlistPageContent } from "./WaitlistPageContent"

export const metadata: Metadata = {
  title: "Lista de Espera | Bookim",
  description:
    "Entre na lista de espera do Bookim e garanta preço de fundador. App de estudos com IA para medicina e odontologia.",
  openGraph: {
    title: "Bookim — Entre na lista de espera",
    description:
      "App de estudos com IA para medicina e odontologia. Os primeiros 1000 viram fundadores e congelam o preço!",
    url: "https://bookim.com.br/lista-de-espera",
    siteName: "Bookim",
    type: "website",
  },
}

export default function WaitlistPage() {
  return (
    <Suspense fallback={null}>
      <WaitlistPageContent />
    </Suspense>
  )
}
