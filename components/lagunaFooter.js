import React, { Component} from 'react'
import styles from '../styles/Home.module.css'

export default class LagunaFooter extends Component{
    
    render(){
        return (
            <div className={styles.footer}>
                <div className="desktop-container row footer-div">
                    <div className="col-5 mobile-container text-left">
                        <object data="images/logo_lagunalabs.svg" className={styles.logo_lagunalabs}/>
                    </div>
                    <div className="col-7 social_icon_div mobile-container">
                        <a href="https://twitter.com/laguna_labs" target="_blank">
                            <img src="images/twitter.svg" className="twitter-svg"/>
                        </a>
                        <a href="https://www.linkedin.com/company/lagunalabs" target="_blank">
                            <img src="images/linkedin.svg"/>
                        </a>
                        <a href="https://www.facebook.com/xrengine" target="_blank">
                            <img src="images/facebook.svg"/>
                        </a>
                        <a href="https://www.linkedin.com/company/lagunalabs" target="_blank">
                            <img src="images/email.svg"/>
                        </a>
                        <a href="https://github.com/xr3ngine" target="_blank">
                            <img src="images/github.svg"/>
                        </a>
                    </div>
                    <div className="col-5 mobile-container privacy-txt-div">
                        <div className="width-200 pt-3 bottom_main_text_div_left">
                            <p className="bottom_main_text">Privacy Policy</p>
                            <p className="bottom_main_text">Support</p>
                        </div>
                    </div>
                    <div className="col-7 pt-3 mobile-container terms-txt-div">
                        <span className="bottom_main_text">Terms of service&nbsp;</span>
                        <span className="bottom_main_text">@ 2020 Laguna Labs Team. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        )
    }
}