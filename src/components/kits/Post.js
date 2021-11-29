import classes from '../../assets/styleSheets/kits/post.module.scss';
import clsx from 'clsx';
import { Button, Divider, makeStyles } from '@material-ui/core';
import dateTime from '../../utilities/dateTime';
import { useEffect, useRef, useState } from 'react';
const useStyles = makeStyles({
    overlay: {
        bottom: (props) => props.tit - props.ov + 15,
    }
});
const Post = ({
    image,
    name,
    brief,
    date,
    sm
}) => {
    let datep = dateTime.convertLaravelTime(date)
    let overlayRef = useRef();
    let titleRef = useRef();
    const [props, setProps] = useState({ ov: 0, tit: 0 })
    const muiClass = useStyles(props);

    console.log('titleRef?.current?.clientHeight', titleRef?.current?.clientHeight);
    console.log('overlayRef?.current?.clientHeight', overlayRef?.current?.clientHeight);
    useEffect(() => {
        setProps({ ov: overlayRef.current?.clientHeight, tit: titleRef?.current?.clientHeight })
    }, [overlayRef, titleRef])
    return (
        <div className={clsx(classes.postContainer, sm && classes.postContainerSm, muiClass.postContainer)}>
            <div className={classes.imageContainer}>
                <img src={image} />
            </div>
            <div ref={overlayRef} className={clsx(classes.overlay, muiClass.overlay)}>
                <h3 ref={titleRef}>{name}</h3>
                <div className={classes.divider}></div>
                <div className={classes.brief} dangerouslySetInnerHTML={{ __html: brief }}></div>
                <div className={classes.actionsContainer}>
                    <p>{`${datep.day} ${datep.month} ${datep.year}`}</p>
                    <Button>Read More</Button>
                </div>
            </div>
        </div>
    )
}
export default Post;