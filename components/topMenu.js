import React, { Component} from 'react'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default class TopMenu extends Component{
    render(){
        return (
            <div className={styles.menu_container}>
                <div className="row pt-5rem pb-2 header">
                    <div className="col-10">
                        <div className="desktop-container">
                            <span className={styles.logo_title_gradiant}>LAGUNA </span> 
                            <span className={[styles.logo_title_gradiant, styles.white_font].join(" ")}>LABS</span>
                        </div>
                    </div>
                    <div className="col-2 menu_icon_div">
                        <button className={styles.menu_btn} onClick={this.props.hideModal}>
                            <FontAwesomeIcon icon={faBars} className={styles.menu_icon}/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="devide_line"></div>
                    </div>
                </div>
                <div className="row text-center menu-div pt-5">
                    <p className="col-12 pt-3 menu-txt menu-div-item">Documentation</p>
                    <p className="col-12 pt-3 menu-txt menu-div-item">Faqs</p>
                    <p className="col-12 pt-3 menu-txt menu-div-item">About Us</p>
                    <p className="col-12 pt-3 menu-txt menu-div-item">Support & Contact</p>
                    <p className="col-12 pt-3 menu-txt menu-div-item">Social</p>
                    <div className="login_div">
                        <button className="main_button mt-5">Sign Up</button>
                        <button className="main_button p-0 login_btn">
                            <div className="main_button_outline_div">Log In</div>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}