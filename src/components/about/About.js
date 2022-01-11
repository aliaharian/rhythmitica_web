import classes from '../../assets/styleSheets/about.module.scss'

const About = () => {
    return (
        <>
            <div className={classes.topColor}></div>
            <div className={classes.aboutGrandContainer}>
                <div className={classes.aboutContainer}>
                    <h2 className={classes.aboutTitle}>About Us</h2>
                    <div className={classes.aboutBodyContainer}>
                        <h3>About Rhythmitica</h3>
                        <p>
                            Rhythmitica is the very first world online music academy that was founded by Hooman Tootoonchian and Parinaz Pourrezaei and established in 2012 based in Toronto, Canada. The academic tutoring of traditional world music to interested students across the globe and promoting world music are the main goals of Rhythmitica. Currently, Rhythmitica’s team includes more than 20 instructors expert in the field of traditional world music and beyond. The students and audience of Rhythmitica include any individual with passion to learn traditional music across the world. The main focus of Rhythmitica is to provide weekly online video lessons through our standard platforms. The lessons are either an hour or half an hour long and the service provides direct access and interaction with the instructors. Other services include online educational contents in different formats such as video tutorials, webinars, workshops, music samples and iBooks. Rhythmitica has established its own web platform to facilitate the high-quality connection between the students and their teachers. The platform is simple to use and it is very user-friendly.
                        </p>
                        <div className={classes.hr} />
                        <h3>Our Story</h3>
                        <p>
                        We believe that producing and educating art and ideas are among the noblest jobs in the world. Academic education of world music and promoting its art has been our goal from the beginning and we aspire to keep our endeavours towards this goal. Through the years, many have contacted us and have stated that they cannot find a professional instructor for world music in their respective location. Even if they had been able to find a teacher, the quality and the authenticity of the teachings have been a constant concern. This conceived the idea to form and establish Rhythmitica online music academy. First, we collected a powerful team of educators and experienced teachers and performers. Then, with the help of an experienced team of web producers, we made an exclusive platform for the educational content. Just like that, Rhythmitica has become a bridge to connect our excellent teachers with the students across the world.
                        </p>
                        <div className={classes.hr}/>
                        <h3>OUR STUDENTS</h3>
                        <p>
                        Our audience is interested people around the world at any age. The lessons can be held in English or Farsi. Some of our classes are also taught in Turkish and Spanish. You do not have to have any prior knowledge of music to start your learning journey. Our students range from 3 years old to seniors. Rhythmitica provides student discounts at any level. To receive the discount coupon simply send us a scanned version of your student ID.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;