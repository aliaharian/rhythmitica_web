import classes from '../../assets/styleSheets/kits/event.module.scss';
import clsx from 'clsx';
import arrowRight from '../../assets/images/icons/right-arrow.svg'
// import ArrowRight from '../../assets/images/icons/RightArrow'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@material-ui/core';
import Link from 'next/link'
import Image from 'next/image'

const Event = ({
    image,
    name,
    instructor,
    price,
    sessions,
    sm,
    whiteBg,
    id
}) => {
    //needs container for width
    return (
        <div className={clsx(classes.eventContainer, sm && classes.eventSm, whiteBg && classes.eventWhite)}>
            <div className={classes.imageContainer}>
                <Image alt={name} src={image} layout="fill"/>
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
            {/* <Link href={`/events/${id}`}> */}
                <Button className={classes.actionBtn}>
                    <Image loading="eager" width={7} height={12} alt="" src={arrowRight} />
                    {/* <ChevronRightIcon /> */}
                </Button>
            {/* </Link> */}
        </div>
    )
}
export default Event;