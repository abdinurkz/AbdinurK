import { ReactElement, useCallback } from 'react'
import { SunIcon, MoonIcon } from 'components/Icons'
import { useMounted } from 'utils/hooks/useMounted'
import { useTheme } from 'next-themes'


type ThemeSwitchProps = {
  lite?: boolean
  className?: string
}
export function ThemeSwitch({
  lite,
  className
}: ThemeSwitchProps): ReactElement {
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
      className="h-10 w-10 mr-2.5 flex items-center justify-center rounded-md transition-all flex-1 min-w-[40px] hover:bg-gray-100 hover:text-gray-900"
      onClick={handleChangeTheme}
    >
      {mounted && (
        <IconToUse />
      )}
    </button>
  )
}


