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
            <link rel="preconnect" href="https://fonts.gstatic.com"/> 
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@800;900&display=swap" rel="stylesheet"/>
        </Head>

        <main className={styles.main}>
            <div className={[styles.first_container,styles.subcontainer].join(" ")}>
                <div className="row pt-5rem pb-2">
                    <div className="col-10">
                        <div className="desktop-container">
                            <span className={styles.logo_title_gradiant}>LAGUNA </span> 
                            <span className={[styles.logo_title_gradiant, styles.white_font].join(" ")}>LABS</span>
                        </div>
                    </div>
                    <div className="col-2">
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
                <div className="desktop-container mt-150">
                    <div>
                        <span className={styles.big_text}>
                            Build <span className={styles.black_font}>your</span>
                        </span>
                    </div>
                    <div>
                        <span className={styles.big_text}>
                            <span className={styles.black_font}>world</span> online
                        </span>
                    </div> 
                </div>
                <div className="desktop-container mt-4">
                    <p className={styles.small_text}>Social technology to bring people together</p>
                    <p className={styles.small_text}>Anywhere and everywhere</p> 
                </div>
                <div className="desktop-container mt-5">
                    <button className="main_button">Get In Touch</button>
                </div>
                <div className={styles.line_30_degree_group}>
                    <div className={styles.line_top_1}></div>
                    <div className={styles.line_top_2}></div>
                    <div className={styles.line_top_3}></div>
                </div>
                <div className="gradiant_horizontal">
                    <p className="desktop_section_title">Our Mission</p>
                </div>
            </div>
            <div className={styles.second_container}>
                <div className="pt-4">
                    <p className="main-text">
                        We all need to do business and stay connected to loved ones, regardless of what's happening in the world outside. Our applications
                    </p>
                    <p className="main-text">
                        are immediates, lightweight, and designed to reach peopel on the devices have today as well as the devices they'll have tomorrow
                    </p>
                </div>
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
