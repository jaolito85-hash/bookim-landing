import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bookim — Estude medicina com IA',
    short_name: 'Bookim',
    description:
      'App de estudos com IA para estudantes de medicina e odontologia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B14',
    theme_color: '#6C5CE7',
    lang: 'pt-BR',
    icons: [
      {
        src: '/bookim-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
