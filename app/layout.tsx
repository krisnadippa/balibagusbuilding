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
  title: 'Bali Bagus Building - Konstruksi & Arsitektur Premium',
  description: 'Bali Bagus Building - Dari Visi ke Realita, Dibangun dengan Keahlian dan Tujuan. Jasa konstruksi dan arsitektur premium di Bali, Indonesia.',
  keywords: 'konstruksi bali, arsitektur bali, bali bagus building, kontraktor bali, bangun rumah bali',
  openGraph: {
    title: 'Bali Bagus Building',
    description: 'Dari Visi ke Realita — Dibangun dengan Keahlian dan Tujuan',
    type: 'website',
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
