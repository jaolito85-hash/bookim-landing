import type { AppProps } from 'next/app'
import { Inter, Outfit } from 'next/font/google'
import '@/app/globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={cn(inter.variable, outfit.variable, "antialiased bg-[var(--bookim-bg-primary)] text-[var(--bookim-text-primary)] min-h-screen")}>
            <Component {...pageProps} />
        </div>
    )
}
