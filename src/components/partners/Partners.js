import classes from '../../assets/styleSheets/partners.module.scss'
import Slider from "react-slick";
import partner1 from '../../assets/images/partners/banafsh.jpg';
// import partner2 from '../../assets/images/partners/1.jpg';
// import partner3 from '../../assets/images/partners/2.jpg';
import partner2 from '../../assets/images/partners/SHOP.jpg';
import partner3 from '../../assets/images/partners/KIDS.jpg';
import PartnerItem from './PartnerItem';
const Partners = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        className: classes.partnersSlider

    };
    const partners = [
        {
            key: 0,
            title: 'Rhythmitica',
            desc: 'Online Music Academy',
            image: partner1,
            link: '#'
        },
        {
            key: 2,
            title: 'Rhythmitica Kids',
            desc: 'Online Music & Farsi Lessons For Kids',
            image: partner3,
            link: '#'
        },
        {
            key: 1,
            title: 'Rhythmitica Online Shop',
            desc: 'World Musical instrument ',
            image: partner2,
            link: '#'
        },

    ]
    return (
        <>
            <div className={classes.topColor}></div>
            <div className={classes.partnersGrandContainer}>
                <div className={classes.partnersContainer}>
                    <h2 className={classes.partnersTitle}>Partners</h2>
                    <div className={classes.partnersBodyContainer}>
                        <Slider {...settings}>
                            {partners.map((partner, index) => (
                                <PartnerItem key={index} partner={partner} />
                            ))}

                        </Slider>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Partners;