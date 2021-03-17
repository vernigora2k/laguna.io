import React, { Component} from 'react'
import styles from '../styles/Home.module.css'
import emailjs from 'emailjs-com'
import * as gtag from '../lib/gtag'

export default class LagunaContact extends Component{

    state={
        firstName:  "",
        secondName: "",
        emailAddress:   "",
        companyName:    "",
        message:        ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
    
        gtag.event({
          action: 'submit_form',
          category: 'Contact',
          label: this.state.message,
        })

        var templateParams = {
            from_name:  this.state.firstName + " " + this.state.secondName,
            to_name:    'Administrator',
            company:    this.state.companyName,
            email:      this.state.emailAddress,
            message:    this.state.message
        };

        emailjs.send(
            process.env.SERVICE_ID, 
            process.env.TEMPLATE_ID, 
            templateParams, 
            process.env.USER_ID
        ).then(
            result => {
                alert('Message Sent, I\'ll get back to you shortly', result.text);
            },
            error => {
                alert( 'An error occured, Plese try again',error.text);
            }
        )

        this.setState({
            firstName:  "",
            secondName: "",
            emailAddress:   "",
            companyName:    "",
            message:        ""
        })
    }

    handleChange=(e)=>{
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return (
                    <div className="col-8 contact_input_div mt-4 get_touch_input mobile-container">
                        <div className="row full-name-inputs">
                            <input type="text" className={styles.firstname_input} value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder="First Name"/>
                            <input type="text" className={styles.lastname_input} value={this.state.secondName} name="secondName" onChange={this.handleChange} placeholder="Last Name"/>
                        </div>
                        <div className="row mt-4">
                            <input type="text" id="" value={this.state.emailAddress} name="emailAddress" onChange={this.handleChange} placeholder="Email"/>
                        </div>
                        <div className="row mt-4">
                            <input type="text" id="" value={this.state.companyName} name="companyName" onChange={this.handleChange} placeholder="Company"/>
                        </div>
                        <div className="row mt-4">
                            <textarea type="text" id="" rows="5" placeholder="Describe your Dream" 
                            value={this.state.message} name="message" onChange={this.handleChange}/>
                        </div>
                        <div className="row mt-3">
                            <button className="main_button send_btn" type="button" onClick={this.handleSubmit}>Send</button>
                        </div>
                    </div>
        )
    }
}