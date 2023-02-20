'use client'
import Link from 'next/link'
import styles from './Header.module.scss'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'


const navItems = {
  '/': {
    name: 'Main',
    x: 10,
    y: 0,
    w: '57.6px',
  },
  '/about': {
    name: 'About',
    x: 77.6,
    y: 0,
    w: '66px',
  },
  '/cv': {
    name: 'CV',
    x: 153.6,
    y: 0,
    w: '40.8px',
  },
  '/projects': {
    name: 'Projects',
    x: 204.2,
    y: 0,
    w: '91.2px',
  }
}
export const Header = () => {
  let pathname = usePathname()
  return (
    <nav className="flex justify-between items-center mx-auto max-w-2xl w-full pt-8 pb-16">
      <ul className="relative m-0 p-0 list-none flex items-center gap-2.5">
        {pathname && navItems[pathname] && (
          <div>
            <motion.div
              className={styles['menu-motion']}
              layoutId="nav"
              initial={{ 
                opacity: 0, 
                x: navItems[pathname].x 
              }}
              animate={{
                opacity: 1,
                x: navItems[pathname].x,
                width: navItems[pathname].w,
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
          const isActive = path === pathname;
          return (
            <li 
              key={path}
              className={styles['menu-item']}
            >
              <Link
                href={path}
                className={clsx({
                  'active': isActive,
                })}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}