import type { ReactElement } from 'react'
import { SunIcon, MoonIcon } from 'components/Icons'
import { useMounted } from 'utils/hooks/useMounted'
import { useTheme } from 'next-themes'
import { Select } from 'components/Select'
import cn from 'clsx'


type ThemeSwitchProps = {
    lite?: boolean
    className?: string
  }
  
const OPTIONS = [
  { key: 'light', name: 'Light' },
  { key: 'dark', name: 'Dark' },
  { key: 'system', name: 'System' }
]


export function ThemeSwitch({
  lite,
  className
}: ThemeSwitchProps): ReactElement {
  const { setTheme, resolvedTheme, theme = '' } = useTheme()
  const mounted = useMounted()
  const IconToUse = mounted && resolvedTheme === 'dark' ? MoonIcon : SunIcon
  return (
    <div className={cn('nx-relative', className)}>
      <Select
        title="Change theme"
        className="nx-w-full"
        options={OPTIONS}
        onChange={option => {
          setTheme(option.key)
        }}
        selected={{
          key: theme,
          name: (
            <div className="nx-flex nx-items-center nx-gap-2 nx-capitalize">
              <IconToUse />
              <span className={lite ? 'md:nx-hidden' : ''}>
                {mounted ? theme : 'light'}
              </span>
            </div>
          )
        }}
      />
    </div>
  )
}


