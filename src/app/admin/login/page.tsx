import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { LoginForm } from "./LoginForm"

export const metadata: Metadata = {
  title: "Admin · Bookim",
  robots: { index: false, follow: false },
}

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bookim-bg-primary)] px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[var(--bookim-text-primary)] mb-2 font-outfit">
            Bookim Admin
          </h1>
          <p className="text-sm text-[var(--bookim-text-secondary)]">
            Acesso restrito ao dashboard
          </p>
        </div>

        <div className="bg-white rounded-2xl p-7 border border-[var(--bookim-border)] shadow-[0_20px_60px_-15px_rgba(45,64,87,0.12)]">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
