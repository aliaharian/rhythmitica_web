import classes from '../../assets/styleSheets/kits/post.module.scss';
import clsx from 'clsx';
import { Button, Divider } from '@material-ui/core';
import dateTime from '../../utilities/dateTime';
const Post = ({
    image,
    name,
    brief,
    date
}) => {
    let datep = dateTime.convertLaravelTime(date)
    console.log('ssss', datep)
    return (
        <div className={classes.postContainer}>
            <div className={classes.imageContainer}>
                <img src={image} />
            </div>
            <div className={classes.overlay}>
                <h3>{name}</h3>
                <div className={classes.divider}></div>
                <div className={classes.brief} dangerouslySetInnerHTML={{__html:brief}}></div>
                <div className={classes.actionsContainer}>
                    <p>{`${datep.day} ${datep.month} ${datep.year}`}</p>
                    <Button>Read More</Button>
                </div>
            </div>
        </div>
    )
}
export default Post;