import React, { Component } from "react";
import Slider from "react-slick";
import classes from '../../assets/styleSheets/homepage.module.scss';
import slide1 from '../../assets/images/slider/slide1.jpg';
const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      };
    return (
        <div className={classes.sliderContainer}>
            <Slider {...settings}>
            <div className={classes.slideItem}>
                    <img src={slide1}/>
                </div>
                <div className={classes.slideItem}>
                    <img src={slide1}/>
                </div>
                <div className={classes.slideItem}>
                    <img src={slide1}/>
                </div>
                
            </Slider>
        </div>
    )
}

export default HomeSlider;