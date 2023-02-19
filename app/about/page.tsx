import styles from './styles.module.scss'
import Link from 'next/link'


export default function About() {
  return (
    <main className={styles['page-wrapper']}>
      <main className={styles['page-wrapper']}>
        <section className={styles['page-content']}>
          <p>Telegram: <Link href="https://t.me/abdinur08" >@abdinur08</Link></p>
          <p>Github: <Link href="https://github.com/AbdinurK">AbdinurK</Link></p>
          <p>Gmail: <Link href="mailto:kuatbekabdinur@gmail.com">kuatbekabdinur@gmail.com</Link></p>
          <p>LinkedIn: <Link href="https://www.linkedin.com/in/abdinur-kuatbek-80241b190/">Abdinur Kuatbek</Link></p>
        </section>
      </main>
    </main>
  )
}