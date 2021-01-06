import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel' 

export default function Home() { 
    return (
    <div className={styles.container}>
        <Head>
            <title>Lander</title>
            <link rel="icon" href="images/favicon.png" />
            <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/> 
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;600;900&display=swap" rel="stylesheet"/>
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
                        <div className="devide_line"></div>
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
                    <div className={styles.mission_txt_div}>
                        <p className="desktop_section_title">Our Mission</p>
                        <div className="pt-4">
                            <p className="main-text">
                                We all need to do business and stay connected to loved ones, regardless of what's happening in the world outside. Our applications
                            </p>
                            <p className="main-text">
                                are immediates, lightweight, and designed to reach peopel on the devices have today as well as the devices they'll have tomorrow
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.second_container}>
                
                <div className="row desktop-container">
                    <div className="col-3">
                        <div className={styles.middle_component_circle_1}></div>
                    </div>
                    <div className="col-2">
                        <div className={styles.middle_component_line_div_1}>
                            <div className={styles.middle_component_line_gap_1}></div>
                            <object className={styles.middle_component_line_1} data="images/polygon_1.svg" type="image/svg+xml"/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className={styles.middle_component_line_div_2}>
                            <div className={styles.middle_component_line_gap_2}></div>
                            <object data="images/polygon_2.svg" type="image/svg+xml"/>
                        </div>
                        <div className={styles.middle_component_circle_2}></div>
                    </div>
                    <div className="col-2">
                        <div className={styles.middle_component_line_div_3}>
                            <div className={styles.middle_component_line_gap_1}></div>
                            <object className={styles.middle_component_line_1} data="images/polygon_1.svg" type="image/svg+xml"/>
                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className={styles.middle_component_circle_3}></div>
                    </div>
                </div>
                <div className="row mt-minus-5 desktop-container">
                    <div className="col-6">
                        <p className="desktop_section_title text-left">The Overlay</p>
                        <p className="desktop_sub_title">Your home in the spatial web</p>
                        <p className="main-text text-left">
                            Virtual places on any device with a web browser, from your mobile phone or laptop to VR and AR. Run a business, present a keynote, hold a conference or throw an event, right from your own website. No App Store. No installation. One click and you're there.
                        </p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <object className="mt-5 pt-5" data="images/overlay_mark.svg"></object>
                    </div>
                </div>
                <div className="row position_relative">
                    <Carousel className={styles.main_carousel} 
                        // prevIcon={<object data="images/arrow_back.svg" type="image/svg+xml"/>}
                        // nextIcon={<object data="images/arrow_forward.svg" type="image/svg+xml"/>}
                        indicators={false}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="images/blank_img_carousel.png"
                            alt="First slide"/>
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="images/blank_img_carousel.png"
                            alt="Second slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="images/blank_img_carousel.png"
                            alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                    <div className="overlay_slide_back_div text-right">
                        <object data="images/overlay_slide_back.svg"></object>
                    </div>
                </div>
                
            </div>
            <div className={styles.third_container}>
                <div className="xr_engine_div">
                    <div className="desktop-container row">
                        <div className="col-6 text-left pt-5">
                            <object data="images/xrengine.svg"></object>
                            <object className={styles.moon_svg} data="images/moon.svg"></object>
                        </div>
                        <div className="col-6 z-index-9">
                            <p className="desktop_section_title text-left">XREngine</p>
                            <p className="desktop_sub_title">The social multiplayer engine for the future</p>
                            <p className="main-text text-left">
                                XREngine is a cross platform social engine for realtime voice, video, chat, avatars and computer vision. Built with scalability in mind on web standards, it's the fastest way to deliver scalable real-time apps.
                            </p>
                            <button className="main_button mt-5">Visit Project Page</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.fourth_container}>
                <div className="desktop-container row">
                    <div className="col-4 mt-50">
                        <p className="desktop_section_title text-left">Get in touch</p>
                        <p className="desktop_sub_title pr-5">Contact us for start of partnership</p>
                        <img src="images/contact_rocket.png" className="mt-4"/>
                    </div>
                    <div className="col-8 contact_input_div mt-4">
                        <div className="row">
                            <input type="text" className={styles.firstname_input} placeholder="First Name"/>
                            <input type="text" className={styles.lastname_input} placeholder="Last Name"/>
                        </div>
                        <div className="row mt-4">
                            <input type="text" id="" placeholder="Email"/>
                        </div>
                        <div className="row mt-4">
                            <input type="text" id="" placeholder="Company"/>
                        </div>
                        <div className="row mt-4">
                            <textarea type="text" id="" rows="5" placeholder="Describe your Dream"/>
                        </div>
                        <div className="row mt-3">
                            <button className="main_button send_btn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className="desktop-container row">
                    <div className="col-5">
                        <object data="images/logo_lagunalabs.svg" className={styles.logo_lagunalabs}/>
                    </div>
                    <div className="col-7 text-right social_icon_div">
                        <object data="images/twitter.svg"/>
                        <object data="images/linkedin.svg"/>
                        <object data="images/facebook.svg"/>
                        <object data="images/email.svg"/>
                        <object data="images/github.svg"/>
                    </div>
                    <div className="col-5">
                        <div className="width-200 pt-3 bottom_main_text_div_left">
                            <p className="bottom_main_text">Privacy Policy</p>
                            <p className="bottom_main_text">Support</p>
                        </div>
                    </div>
                    <div className="col-7 pt-3 text-right">
                        <p className="bottom_main_text">Terms of service @ 2020 Laguna Labs Team. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </main>

        {/* <footer className={styles.footer}>
        </footer> */}
    </div>
    )
}
