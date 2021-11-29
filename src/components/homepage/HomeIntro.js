import React from "react";
import classes from '../../assets/styleSheets/homepage.module.scss';
import groupImg from '../../assets/images/Group.jpg';
import privateImg from '../../assets/images/Private.jpg';
import Link from 'next/link';
const HomeIntro = () => {
    return (

        <div className={classes.IntroGrandContainer}>
            <div className={classes.IntroContainer}>
            <div><img src={groupImg} />
                    <Link href={'/groupLessons'}><a>Group Lessons</a></Link>
                </div>
                <div><img src={privateImg} />
                    <Link href={'/privateLessons'}><a>Private Lessons</a></Link>
                </div>
              
            </div>
        </div>
    )
}

export default HomeIntro;