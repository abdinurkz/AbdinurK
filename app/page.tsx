import styles from './styles.module.scss'
import Image from 'next/image'


export default function Home() {
    return (
        <main className={styles['page-wrapper']}>
            <section className={styles['page-content']}>
                <div className={styles['info']}>
                    <div className={styles['details']}>
                        <h1 className={styles['full-name']}>
                            Қуатбек Әбдінұр
                        </h1>
                        <h2 className={styles['position']}>
                            Орташа фронтенд әзірлеуші
                        </h2>
                        <p className={styles['description']}>
                            Идеяларымды жүзеге асыру арқылы әлемді жақсартқым келеді.
                        </p>
                    </div>
                    <figure>
                        <Image 
                            src="/avatar.png" 
                            alt="avatar" 
                            width={116} 
                            height={116}
                        />
                    </figure>
                </div>
            </section>
        </main>
    )
}