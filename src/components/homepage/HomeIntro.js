import React from "react";
import classes from '../../assets/styleSheets/homepage.module.scss';
import groupImg from '../../assets/images/groupLessonBanner.jpg';
import privateImg from '../../assets/images/privateLessonBanner.jpg';
import Link from 'next/Link';
const HomeIntro = () => {
    return (

        <div className={classes.IntroGrandContainer}>
            <div className={classes.IntroContainer}>
                <div><img src={privateImg} />
                    <Link href={'#'}><a>Private Lessons</a></Link>
                </div>
                <div><img src={groupImg} />
                    <Link href={'#'}><a>Group Lessons</a></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeIntro;