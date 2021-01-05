import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Laguna Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Build your world online
        </h1>

        <p className={styles.description}>
          Social technology to bring people together.
          <br />
          Anywhere and everywhere.
        </p>
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}
