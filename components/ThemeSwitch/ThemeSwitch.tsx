import { ReactNode, useCallback } from 'react'
import { SunIcon, MoonIcon } from 'components/Icons'
import { useMounted } from 'utils/hooks/useMounted'
import { useTheme } from 'next-themes'
import cn from 'clsx'


type ThemeSwitchProps = {
  lite?: boolean
  className?: string
}
export function ThemeSwitch({
  lite,
  className
}: ThemeSwitchProps): ReactNode {
  const mounted = useMounted()
  const { setTheme, resolvedTheme } = useTheme()
  const IconToUse = mounted && resolvedTheme === 'dark' ? MoonIcon : SunIcon
  const handleChangeTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])
  return (
    <button
      type="button"
      aria-label="Toggle Dark Mode"
      className="h-10 w-10 mr-2.5 flex items-center justify-center rounded hover:ring-2 ring-gray-300 transition-all"
      onClick={handleChangeTheme}
    >
      {mounted && (
        <IconToUse />
      )}
    </button>
  )
}


