import React from "react";
import classes from '../../assets/styleSheets/homepage.module.scss';
// import groupImg from '../../assets/images/groupLessonBanner.jpg';
// import privateImg from '../../assets/images/PrivateLessonBanner.jpg';
// import groupImg from '../../assets/images/Group-lessons.jpg';
// import privateImg from '../../assets/images/Private-lessons.jpg';
import groupImg from '../../assets/images/Group.jpg';
import privateImg from '../../assets/images/private.jpg';

import Image from 'next/image'
import Link from 'next/link';
const HomeIntro = () => {
    console.log('ok@')
    return (

        <div className={classes.IntroGrandContainer}>
            <div className={classes.IntroContainer}>
                <div>
                    <Image loading="eager" layout="fill" alt="private lessons" src={privateImg} />
                    <Link href={'/privateLessons'}><a>Private Lessons</a></Link>
                </div>
                <div>
                    <Image loading="eager" layout="fill" alt="group lessons" src={groupImg} />
                    <Link href={'/events'}><a>Group Lessons</a></Link>
                </div>


            </div>
        </div>
    )
}

export default HomeIntro;