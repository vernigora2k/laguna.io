import React, { Component} from 'react'
import styles from '../styles/Home.module.css'
import Carousel from 'react-bootstrap/Carousel'

export default class LagunaCarousel extends Component{
    
    render(){
        const imgArray = ["1.jpg", "2.png", "3.jpg", "5.png", "6.png"];

        return (
                <div className="row position_relative">
                    <Carousel className={styles.main_carousel} 
                        prevIcon={<img src="images/arrow_back.svg" />}
                        nextIcon={<img src="images/arrow_forward.svg" />}
                        indicators={false}>
                            {imgArray.map((imgFileName, key)=>{
                                return <Carousel.Item key={key}>
                                            <img className="d-block w-100" src={"images/slider/"+imgFileName} alt={"slide"+key} key={key}/>
                                        </Carousel.Item>
                            })}
                        {/* // <Carousel.Item>
                        //     <img
                        //     className="d-block w-100"
                        //     src="images/slider/1.jpg"
                        //     alt="First slide"/>
                        //     {/* <Carousel.Caption>
                        //     <h3>First slide label</h3>
                        //     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        //     </Carousel.Caption> */}
                    </Carousel>
                    {/* <div className="overlay_slide_back_div text-right">
                        <object data="images/overlay_slide_back.svg"></object>
                    </div> */}
                </div>
        )
    }
}