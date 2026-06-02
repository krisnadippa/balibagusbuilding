import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/app/context/LanguageContext'
import ClientInit from '@/app/components/ClientInit'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL
      ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://balibagusbuilding.com'
  ),
  title: {
    default: 'Bali Bagus Building - Konstruksi & Arsitektur Premium Bali',
    template: '%s | Bali Bagus Building',
  },
  description: 'Bali Bagus Building membantu mewujudkan properti impian Anda dari visi ke realita. Layanan konstruksi premium, arsitektur, kontraktor bangunan, dan desain interior terbaik di Bali.',
  keywords: [
    'konstruksi bali',
    'arsitektur bali',
    'bali bagus building',
    'kontraktor bali',
    'bangun rumah bali',
    'villa builder bali',
    'kontraktor villa bali',
    'arsitek premium bali',
    'luxury construction bali',
  ],
  authors: [{ name: 'Bali Bagus Building', url: 'https://balibagusbuilding.com' }],
  creator: 'Bali Bagus Building',
  publisher: 'Bali Bagus Building',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Bali Bagus Building - Konstruksi & Arsitektur Premium Bali',
    description: 'Dari Visi ke Realita — Dibangun dengan Keahlian dan Tujuan. Kontraktor dan arsitek premium tepercaya di Bali.',
    url: '/',
    siteName: 'Bali Bagus Building',
    images: [
      {
        url: '/images/logob3.jpg',
        width: 1200,
        height: 630,
        alt: 'Bali Bagus Building - Konstruksi & Arsitektur Premium Bali',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bali Bagus Building - Konstruksi & Arsitektur Premium Bali',
    description: 'Dari Visi ke Realita — Dibangun dengan Keahlian dan Tujuan. Kontraktor dan arsitek premium tepercaya di Bali.',
    images: ['/images/logob3.jpg'],
    creator: '@balibagusbuilding',
  },
  verification: {
    google: 'google-site-verification-code', // User can replace this with actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body>
        <LanguageProvider>
          <ClientInit />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
