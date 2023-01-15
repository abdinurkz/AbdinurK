import styles from './styles.module.scss'


export default function CV() {
    return (
        <main className={styles['page-wrapper']}>
            <section className={styles['page-content']}>
                <div className="cv-page">
                    <h2 className={styles['cv-subtitle']}>
                        Experience
                    </h2>
                    <article className={styles['cv-job']}>
                        <div className={styles['cv-job__info']}>
                            <h3 className={styles['cv-job__position']}>Full Stack Engineer</h3>
                            <p className={styles['cv-job__duration']}>
                                <time dateTime="2020-05-01">May 2020</time> - <time dateTime="2020-08-31">Aug 2020</time>
                            </p>
                        </div>
                        <div className={styles['cv-job__company']}>
                            <h4 className={styles['cv-job__company-name']}>LLP Decode Group</h4>&nbsp;·&nbsp;<p className={styles['cv-job__type']}>Contract</p>
                        </div>
                        <div className={styles['cv-job__description']}>
                            Development of an educational online platform, a personal brand marathon of a well-known marketer.

                            <ul>
                                <li>
                                    - Maintained and developed various page components.
                                </li>
                                <li>
                                    - Developed business logic, UML modeling together with the team.
                                </li>
                                <li>
                                    - Implemented an API for creating courses and lessons, as well as an admin part, CRUD operations.
                                </li>
                            </ul>
                            
                            <b>Technologies used:</b> Node.js, Express, Sequelize, PostgreSQL, React, Redux, SCSS.
                        </div>
                    </article>
                </div>
            </section>
        </main>
    ) 
} 