'use client'
import Link from 'next/link'
import styles from './Header.module.scss'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'


const navItems = {
  '/': {
    name: 'Main',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'About',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/cv': {
    name: 'CV',
    x: 127,
    y: 69,
    w: '56px',
  },
  '/projects': {
    name: 'Projects',
    x: 182,
    y: 104,
    w: '100px',
  },
  '/contacts': {
    name: 'Contacts',
    x: 182,
    y: 104,
    w: '100px',
  },
};


export const Header = () => {
  let pathname = usePathname()
  return (
    <nav className={styles['menu']}>
      <ul className={styles['menu-list']}>
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <li className={styles['menu-item']} key={path}>
              <Link
                href={path}
                className={clsx(
                  'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]',
                  {
                    'text-neutral-500': !isActive,
                    'font-bold': isActive,
                  }
                )}
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