import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import styles from '../styles/Home.module.scss'


const inter = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kuatbek Abdinur - Frontend Developer</title>
        <meta name="description" content="JavaScript enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>

      </main>
    </>
  )
}
