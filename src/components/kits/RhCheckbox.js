import classes from '../../assets/styleSheets/kits/checkbox.module.scss';
import clsx from 'clsx';
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
const RhCheckbox = ({
    label,
    checked,
    key,
    onChange
}) => {
    return (
        <div key={key} onClick={onChange} className={classes.checkbox}>
            <div className={checked?classes.checkedIcon:classes.icon}></div>
            <label>{label}</label>
        </div>
    )
}
export default RhCheckbox;