import { ReactNode } from 'react'
import { IBM_Plex_Mono } from '@next/font/google'
import { Header } from 'components/Header'


const font = IBM_Plex_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  preload: true
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang='en' className={font.className}>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
