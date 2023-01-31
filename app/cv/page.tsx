import styles from './styles.module.scss'
import { JobCard } from 'components/JobCard'
import data from 'mock/cv.json'

export default function CV() {
    
    return (
        <main className={styles['page-wrapper']}>
            <section className={styles['page-content']}>
                <div className="cv-page">
                    <h2 className={styles['cv-subtitle']}>
                        Language
                    </h2>
                    {
                        data.languages.map((lang) => (
                            <article key={lang.id}>
                                <span>{ lang.text }</span> - <span>{ lang.level }</span>
                            </article>
                        ))
                    }
                    <h2 className={styles['cv-subtitle']}>
                        Experience
                    </h2>
                    {
                        data.jobs.map((job) => <JobCard key={job.id} job={job} />)
                    }
                </div>
            </section>
        </main>
    ) 
} 