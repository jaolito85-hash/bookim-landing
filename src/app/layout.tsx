import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Bookim — Estude medicina com IA e retenha mais',
  description: 'App de estudos com inteligência artificial para estudantes de medicina. Transforme fotos em flashcards, estude com repetição espaçada e domine mais conteúdo.',
  authors: [{ name: 'Bookim Team' }],
  keywords: ['app estudos medicina', 'flashcard IA', 'repetição espaçada', 'estudar medicina', 'bookim'],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "antialiased bg-[var(--bookim-bg-primary)] text-[var(--bookim-text-primary)] min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
