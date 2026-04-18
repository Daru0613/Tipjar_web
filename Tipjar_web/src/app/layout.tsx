import { Space_Grotesk, Inter } from 'next/font/google'

import { Providers } from './providers'
import './globals.css'

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="app-shell">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
