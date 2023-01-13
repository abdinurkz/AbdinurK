import { ReactNode } from 'react'
import { Fira_Code } from '@next/font/google'
import { Header } from '../components/Header'


const font = Fira_Code({
  subsets: ['latin'],
  display: 'optional',
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
