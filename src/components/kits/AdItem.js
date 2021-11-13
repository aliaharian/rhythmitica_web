import classes from '../../assets/styleSheets/kits/adItem.module.scss';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
const AdItem = ({
    image,
    color
}) => {
    const useStyles = makeStyles(theme => ({
        adContainer:{
            border: '1px solid #c2c1ba !important',
            '&:hover':{
                border: `1px solid ${color} !important`,
            }
        }
    }))
    const style = useStyles();
    return (
        <div className={clsx(classes.adContainer,style.adContainer)}>
            <img src={image} />
        </div>
    )
}
export default AdItem;