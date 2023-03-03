import { ReactNode } from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import { ThemeContext } from 'components/contexts/ThemeContext'
import { VercelAnalytics } from 'components/analytics/VercelAnalytics'
import { languages } from 'i18n/settings'
import { Header } from './Header'
import { dir } from 'i18next'
import './globals.css'


const font = IBM_Plex_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  preload: true
})

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: ReactNode,
  params: {
    lng: any
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)} className={`${font.className}`}>
      <head />
      <body>
        <ThemeContext>
          <Header lng={lng} />
          {children}
        </ThemeContext>
        <VercelAnalytics />
      </body>
    </html>
  )
}
