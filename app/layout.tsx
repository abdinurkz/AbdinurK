import { Fira_Code } from '@next/font/google'
import { Header } from '../components/Header'


const font = Fira_Code({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
