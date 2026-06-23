import type { Metadata } from 'next'
import { Bebas_Neue, Parisienne, Poppins } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const parisienne = Parisienne({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-parisienne',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://plixel.com.br'),
  title: {
    default: 'Plixel — Design que vende, não decora',
    template: '%s | Plixel',
  },
  description:
    'Agência de design especializada em identidade visual, social media, vídeo e campanha. Design estratégico para marcas que querem resultado.',
  keywords: ['agência de design', 'identidade visual', 'social media', 'design estratégico', 'Plixel'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://plixel.com.br',
    siteName: 'Plixel',
    title: 'Plixel — Design que vende, não decora',
    description:
      'Agência de design especializada em identidade visual, social media, vídeo e campanha. Design estratégico para marcas que querem resultado.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plixel — Design que vende, não decora',
    description: 'Design estratégico para marcas que querem resultado.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${parisienne.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
