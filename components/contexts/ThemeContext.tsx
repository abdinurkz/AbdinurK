'use client'
import { ReactNode, FC, ReactElement } from 'react'
import { ThemeProvider } from 'next-themes'


export const ThemeContext = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}



