import Link from 'next/link'
import styles from './Header.module.scss'


export const Header = () => {
    
  return (
    <nav className={styles['menu']}>
      <ul className={styles['menu-list']}>
        <li className={styles['menu-item']}>
          <Link href="/">Main</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link href="/cv">CV</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}