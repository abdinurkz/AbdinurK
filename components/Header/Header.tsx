import Link from 'next/link'
import styles from './Header.module.scss'


export const Header = () => {
    
    return (
        <nav className={styles['menu']}>
            <ul className={styles['menu-list']}>
                <li className={styles['menu-item']}>
                    <Link href="/">Басты бет</Link>
                </li>
                <li className={styles['menu-item']}>
                    <Link href="/cv">Түйіндеме</Link>
                </li>
                <li className={styles['menu-item']}>
                    <Link href="/projects">Жобалар</Link>
                </li>
                <li className={styles['menu-item']}>
                    <Link href="/contacts">Контактілер</Link>
                </li>
            </ul>
        </nav>
    )
}