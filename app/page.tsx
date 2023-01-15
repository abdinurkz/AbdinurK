import styles from './styles.module.scss'
import Image from 'next/image'


export default function Home() {
    return (
        <main className={styles['page-wrapper']}>
            <section className={styles['page-content']}>
                <div className={styles['info']}>
                    <div className={styles['details']}>
                        <h1 className={styles['full-name']}>
                            Kuatbek Abdinur
                        </h1>
                        <h2 className={styles['position']}>
                            Middle front-end developer
                        </h2>
                        <p className={styles['description']}>
                            I want to improve the world by realizing my ideas.
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