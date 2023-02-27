'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'


export const ThemeContext = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      { children }
    </ThemeProvider>
  )
}



