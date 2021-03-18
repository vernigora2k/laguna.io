import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import TopMenu from '../components/topMenu'
import LagunaCarousel from '../components/lagunaCarousel'
import LagunaFooter from '../components/lagunaFooter'
import LagunaContact from '../components/lagunaContact'

export default function Home() { 
    const [modalShown, setShowModal] = useState(false);

    const showModal=()=>setShowModal(true);
    const hideModal=()=>setShowModal(false);

    const goToGetInTouch=()=>{
        var offsetYContact=document.getElementById("get_touch_div").getBoundingClientRect().top-document.body.getBoundingClientRect().top;
        
        doScrolling( offsetYContact,400);
    }

    const doScrolling=(elementY, duration)=>{ 
        var startingY = 0;//window.pageYOffset;
        var diff = elementY - startingY;
        var start;
      
        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(function step(timestamp) {
          if (!start) start = timestamp;
          // Elapsed milliseconds since start of scrolling.
          var time = timestamp - start;
          // Get percent of completion in range [0, 1].
          var percent = Math.min(time / duration, 1);
      
          window.scrollTo(0, startingY + diff * percent);
      
          // Proceed with animation as long as we wanted it to.
          if (time < duration) {
            window.requestAnimationFrame(step);
          }
        })
      }

    return (
    <div className={styles.container}>
        <Head>
            <title>Laguna LABS</title>
            <link rel="icon" href="images/favicon.png" />
            <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/> 
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;900&display=swap" rel="stylesheet"/>
        </Head>
        {modalShown?
        <TopMenu hideModal={hideModal}/>:
        <main className={styles.main}>
            <div className={[styles.first_container,styles.subcontainer].join(" ")}
            style={{"backgroundImage":"url('images/background-1.jpeg')"}}>
                <div className="row pt-5rem pb-2 header">
                    <div className="col-10">
                        <div className="desktop-container">
                            <span className={styles.logo_title_gradiant}>LAGUNA </span> 
                            <span className={[styles.logo_title_gradiant, styles.white_font].join(" ")}>LABS</span>
                        </div>
                    </div>
                    <div className="col-2 menu_icon_div">
                        <button className={styles.menu_btn} onClick={showModal}>
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
                    {/* <a href="#get_touch_div"> */}
                        <button className="main_button" onClick={goToGetInTouch}>Get In Touch</button>
                    {/* </a> */}
                </div>
                <div className={styles.line_30_degree_group}>
                    <div className={styles.line_top_1}></div>
                    <div className={styles.line_top_2}></div>
                    <div className={styles.line_top_3}></div>
                </div>
                <div className="gradiant_horizontal">
                    <div className={styles.mission_txt_div}>
                        <p className="desktop_section_title mission_txt_title">Our Mission</p>
                        <div className="pt-4 desktop-container">
                            <p className="main-text line_3_txt">
                                We all need to do business and stay connected to loved ones, regardless of what's happening in the world outside. Our applications
                                are immediates, lightweight, and designed to reach people on the devices thay have today as well as the devices they'll have tomorrow
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.second_container}>
                
                <div className="row desktop-container vertical-line-container">
                    <div className="col-3 circle-1">
                        <div className={styles.middle_component_circle_1}></div>
                    </div>
                    <div className="col-2 line-1">
                        <div className={styles.middle_component_line_div_1}>
                            <div className={styles.middle_component_line_gap_1}></div>
                            <object className={styles.middle_component_line_1} data="images/polygon_1.svg" type="image/svg+xml"/>
                        </div>
                    </div>
                    <div className="col-2 line-2">
                        <div className={styles.middle_component_line_div_2}>
                            <div className={styles.middle_component_line_gap_2}></div>
                            <object data="images/polygon_2.svg" type="image/svg+xml"/>
                        </div>
                        <div className={styles.middle_component_circle_2}></div>
                    </div>
                    <div className="col-2 line-3">
                        <div className={styles.middle_component_line_div_3}>
                            <div className={styles.middle_component_line_gap_1}></div>
                            <object className={styles.middle_component_line_1} data="images/polygon_1.svg" type="image/svg+xml"/>
                        </div>
                    </div>
                    
                    <div className="col-3 circle-3">
                        <div className={styles.middle_component_circle_3}></div>
                    </div>
                </div>
                <div className="row mt-minus-5 desktop-container overlay_div">
                    <div className="col-6 overlay_txt mobile-container">
                        <p className="desktop_section_title text-left">The Overlay</p>
                        <p className="desktop_sub_title">Your home in the spatial web</p>
                        <p className="main-text text-left">
                            Virtual places on any device with a web browser, from your mobile phone or laptop to VR and AR. Run a business, present a keynote, hold a conference or throw an event, right from your own website. No App Store. No installation. One click and you're there.
                        </p>
                    </div>
                    <div className="col-5 overlay_logo mobile-container">
                        <object className="mt-5 pt-5" data="images/overlay_mark.svg"></object>
                    </div>
                </div>
                <LagunaCarousel />
                
            </div>
            <div className={styles.third_container} style={{"backgroundImage":"url('images/Vector-1.png')"}}>
                <div className="xr_engine_div">
                    <div className="desktop-container row">
                        <div className="col-6 xrengine_logo mobile-container">
                            <object data="images/xrengine.svg" className="xrenginLogImg"></object>
                            <object className={styles.moon_svg} data="images/moon.svg"></object>
                        </div>
                        <div className="col-6 z-index-9 xrengine_txt mobile-container">
                            <p className="desktop_section_title text-left">XREngine</p>
                            <p className="desktop_sub_title">The social multiplayer engine for the future</p>
                            <p className="main-text text-left">
                                XREngine is a cross platform social engine for realtime voice, video, chat, avatars and computer vision. Built with scalability in mind on web standards, it's the fastest way to deliver scalable real-time apps.
                            </p>
                            <a href="http://theoverlay.io">
                                <button className="main_button mt-5 mobile_none">Visit Project Page</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.fourth_container} style={{"backgroundImage":"url('images/Vector-2.png')"}}>
                <div className="desktop-container row get_touch_div" id="get_touch_div">
                    <div className="col-4 mt-50 get_touch_txt mobile-container">
                        <p className="desktop_section_title text-left">Get in touch</p>
                        <p className="desktop_sub_title pr-5">Contact us for start of partnership</p>
                        <img src="images/contact_rocket.png" className="mt-4 mobile_none contact_rocket"/>
                    </div>
                    <LagunaContact />
                </div>
            </div>
            <LagunaFooter />
        </main>
        }
        
    </div>
    )
}