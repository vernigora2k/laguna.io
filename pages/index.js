import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() { 
    return (
    <div className={styles.container}>
        <Head>
            <title>Lander</title>
            <link rel="icon" href="images/favicon.png" />
            <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
        </Head>

        <main className={styles.main}>
            <div className={[styles.first_container,styles.subcontainer].join(" ")}>
                <div className="row pt-6rem pb-2">
                    <div className="col-11">
                        <div className={styles.logo_title_div}>
                            <span className={styles.logo_title_gradiant}>LAGUNA </span> 
                            <span className={[styles.logo_title_gradiant, styles.white_font].join(" ")}>LABS</span>
                        </div>
                    </div>
                    <div className="col-1">
                        <button className={styles.menu_btn}>
                            <FontAwesomeIcon icon={faBars} className={styles.menu_icon}/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className={styles.devide_line}></div>
                    </div>
                </div>
                <div className={styles.big_text_div}>
                    <div>
                        <span className={styles.big_text}>
                            Build your
                        </span>
                    </div>
                    <div>
                        <span className={styles.big_text}>
                            world online
                        </span>
                    </div> 
                </div>
            </div>
            <div className={styles.second_container}>

            </div>
            <div className={styles.third_container}>

            </div>
            <div className={styles.fourth_container}>

            </div>
        </main>

        <footer className={styles.footer}>
        </footer>
    </div>
    )
}
