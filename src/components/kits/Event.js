import classes from '../../assets/styleSheets/kits/event.module.scss';
import clsx from 'clsx';
import arrowRight from '../../assets/images/icons/right-arrow.svg'
import { Button } from '@material-ui/core';
const Event = ({
    image,
    name,
    instructor,
    price,
    sessions,
    sm
}) => {
    //needs container for width
    return (
        <div className={clsx(classes.eventContainer, sm && classes.eventSm)}>
            <div className={classes.imageContainer}>
                <img src={image} />
            </div>
            <div className={classes.dataContainer}>
                <h3>{name}</h3>
                <p>{instructor}</p>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.divider}></div>
            <div className={classes.priceContainer}>
                <p>Sessions: {sessions}</p>
                <p>Price: {price}</p>
            </div>
            <Button className={classes.actionBtn}><img src={arrowRight} /></Button>
        </div>
    )
}
export default Event;