import styles from './styles.module.scss'
import Link from 'next/link'


export default function Contacts() {
    return (
        <main className={styles['page-wrapper']}>
            <section className={styles['page-content']}>
                <p>Phone: <Link href="tel:87007002161" >+77007002161</Link></p>
                <p>Telegram: <Link href="https://t.me/abdinur08" >@abdinur08</Link></p>
                <p>Github: <Link href="https://github.com/AbdinurK">AbdinurK</Link></p>
                <p>Gmail: <Link href="mailto:kuatbekabdinur@gmail.com">kuatbekabdinur@gmail.com</Link></p>
            </section>
        </main>
    ) 
} 