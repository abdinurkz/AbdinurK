'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ThemeSwitch } from 'components/ThemeSwitch'
import { useTranslation } from 'i18n/client'




export const Header = ({ lng }: {
  lng: string;
}) => {
  
  const pathname = usePathname()
  const { t } = useTranslation(lng, 'header')
  const navItems = {
    '/': {
      name: t('main'),
      x: 10,
      y: 0,
      w: '57.6px',
    },
    '/cv': {
      name: t('cv'),
      x: 77.6,
      y: 0,
      w: '40.8px',
    },
    '/projects': {
      name: t('projects'),
      x: 128.4,
      y: 0,
      w: '91.2px',
    },
    '/about': {
      name: t('about'),
      x: 229.6,
      y: 0,
      w: '66px',
    },
  }

  return (
    <nav className="flex justify-between items-center mx-auto max-w-2xl w-full pt-5 pb-16">
      <ul className="relative m-0 p-0 list-none flex items-center gap-2.5">
        {pathname && navItems[pathname.replace('/en', '')] && (
          <div>
            <motion.div
              className="absolute top-0 h-10 rounded-lg z-[-1] bg-gray-800 dark:bg-[#222222]"
              layoutId="nav"
              initial={{ 
                opacity: 0, 
                x: navItems[pathname.replace('/en', '')].x 
              }}
              animate={{
                opacity: 1,
                x: navItems[pathname.replace('/en', '')].x,
                width: navItems[pathname.replace('/en', '')].w,
              }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 30,
              }}
            />
          </div>
        )}
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname.replace('/en', '');
          return (
            <li 
              key={path}
              className="flex items-center justify-center"
            >
              <Link
                href={`/${lng}/${path}`}
                className={clsx({
                  'text-white': isActive,
                  'dark:text-white': isActive,
                  'font-semibold': isActive
                }, 
                'no-underline', 
                'font-normal', 
                'px-3', 
                'py-2', 
                'text-[14px]',
                'leading-6',
                'hover:rounded-lg'
                )}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ThemeSwitch 
        lite={false}
      />
    </nav>
  )
}