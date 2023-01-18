import { FC } from 'react'
import styles from './JobCard.module.scss'

interface JobCardProps {
    job: {
        id: number
        position: string
        start_date: string
        end_date: string
        duration: string
        company: string
        type: string
        description: {
            text: string
            responsibilities: Array<string>
            technologies: Array<string>
        }
    }
}
const JobCard: FC<JobCardProps> = ({ job }) => {
    return (
        <article className={styles['cv-job']}>
            <div className={styles['cv-job__info']}>
                <h3 className={styles['cv-job__position']}>{ job.position }</h3>
                <p className={styles['cv-job__duration']}>
                    <time dateTime="2020-05-01">{ job.start_date }</time> - <time dateTime="2020-08-31">{ job.end_date }&nbsp;·&nbsp;{ job.duration }</time>
                </p>
            </div>
            <div className={styles['cv-job__company']}>
                <h4 className={styles['cv-job__company-name']}>
                    { job.company }
                </h4>&nbsp;·&nbsp;
                <p className={styles['cv-job__type']}>{ job.type }</p>
            </div>
            <div className={styles['cv-job__description']}>
                { job.description.text }
                <ul>
                    { job.description.responsibilities.map((r, index) => (
                        <li key={index}>
                            - { r }
                        </li>
                    )) }
                </ul>
                            
                <b>Technologies used:</b> {job.description.technologies.map((s) => s).join(', ')}.
            </div>
        </article>
    )
}


export {
    JobCard
}