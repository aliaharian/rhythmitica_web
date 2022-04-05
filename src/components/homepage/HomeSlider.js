import React, { Component } from "react";
import Slider from "react-slick";
import classes from '../../assets/styleSheets/homepage.module.scss';
import slide0 from '../../assets/images/slider/slide1.jpg';

import slide1 from '../../assets/images/slider/1.jpg';
import slide2 from '../../assets/images/slider/2.jpg';
import slide3 from '../../assets/images/slider/3.jpg';
import slide4 from '../../assets/images/slider/4.jpg';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        fade: true,

      };
    return (
        <div className={classes.sliderContainer}>
            <Slider {...settings}>
            <div className={classes.slideItem}>
                    <img src={slide1}/>
                </div>
                <div className={classes.slideItem}>
                    <img src={slide2}/>
                </div>
                <div className={classes.slideItem}>
                    <img src={slide3}/>
                </div>
                <div className={classes.slideItem}>
                    <img src={slide4}/>
                </div>
                
            </Slider>
        </div>
    )
}

export default HomeSlider;