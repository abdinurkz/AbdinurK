import styles from './styles.module.scss'
import Up from 'components/animations/motions/Up'
import Image from 'next/image'


export default function Home() {
  return (
    <main className={styles['page-wrapper']}>
      <section className={styles['page-content']}>
        <div className={styles['info']}>
          <div className={styles['details']}>
            <Up>
              <h1 className={styles['full-name']}>
                                Kuatbek Abdinur
              </h1>
            </Up>
            <Up delay={0.2}>
              <h2 className={styles['position']}>
                                Middle front-end developer
              </h2>
            </Up>
            <Up delay={0.4}>
              <p className={styles['description']}>
                                Front-end developer with 2.5 years of commercial experience. Basic skills:
              </p>
              <ul>
                <li>HTML, CSS, SASS, ES6+.</li>
                <li>React, Next, Typescript, Redux Toolkit / Query, Antd design, Eslint, Webpack.</li>
                <li>I am able to complete tasks on time.</li>
                <li>Easy to adapt and learn.</li>
                <li>Ability to read code, also writing understandable code using DRY, KISS, SOLID programming principles.</li>
                <li>Communication and tolerance.</li>
              </ul>
            </Up>
            <Up delay={0.6}>
              <p>
                                I will be glad to cooperate! Also open to new suggestions.
              </p>
            </Up>
          </div>
          <figure>
            <Up delay={0.1}>
              <Image 
                src="/avatar.png" 
                alt="avatar" 
                width={116} 
                height={116}
              />
            </Up>
          </figure>
        </div>
      </section>
    </main>
  )
}