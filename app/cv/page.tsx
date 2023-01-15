import styles from './styles.module.scss'
import { JobCard } from '../../components/JobCard'

export default function CV() {
    return (
        <main className={styles['page-wrapper']}>
            <section className={styles['page-content']}>
                <div className="cv-page">
                    <h2 className={styles['cv-subtitle']}>
                        Experience
                    </h2>
                    <JobCard />
                </div>
            </section>
        </main>
    ) 
} 