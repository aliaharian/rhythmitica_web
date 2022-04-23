import React, { Component } from "react";
import classes from '../../assets/styleSheets/homepage.module.scss';
import laptopIcon from '../../assets/images/icons/laptop.svg';
import earthIcon from '../../assets/images/icons/earth.svg';
import PersonIcon from '../../assets/images/icons/person.svg';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image'

const HomeWhyRhythimtica = () => {
    const handleGotoGlobe = ()=>{
        window.open(`/globe`, '_self')
    }
    return (
        <div className={classes.whyContainer}>
            <h2 className={clsx(classes.sectionTitle, classes.whyTitle)}>Why Rhythmitica</h2>
            <div className={classes.whyItemsContainer}>
                <div className={classes.whyItem}>
                    <div className={classes.whyIcon}>
                        <Image width={42} height={42} alt="unique platform" src={laptopIcon} />
                    </div>
                    <h3>Unique Platform</h3>
                    <p>
                        We have developed an accessible online
                        platform since 2015.
                    </p>
                </div>
                <div className={classes.whyItem} onClick={handleGotoGlobe}>
                    <div className={clsx(classes.whyIcon, classes.animateBorderIcon , classes.pointer)}>
                        <Image width={42} height={42} alt="Explore the World Music" src={earthIcon} />

                    </div>
                    <h3>Explore the World Music</h3>
                    <p>
                        Learn the Ethnic Music with the
                        Professional Instructors around the world.
                    </p>
                </div>
                <div className={classes.whyItem}>
                    <div className={classes.whyIcon}>
                        <Image width={42} height={42} alt="Trusted by Musicians" src={PersonIcon} />

                    </div>
                    <h3>Trusted by Musicians </h3>
                    <p>
                        We bridge cultural chasms to bring
                        diverse people and cultures together.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeWhyRhythimtica;