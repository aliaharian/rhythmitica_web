import classes from '../../assets/styleSheets/kits/radioButton.module.scss';
import clsx from 'clsx';
const RhRadioButton = ({
    label,
    checked,
    key,
    onChange,
    color,
    style,
    xl,
    className
}) => {
    return (
        <div key={key} style={style ? style : {}} onClick={onChange} className={clsx(classes.checkbox, color == 'green' && classes.greenBg, className && className)}>
            <div className={checked ? clsx(classes.checkedIcon, xl && classes.checkedIconXl) : clsx(classes.icon, xl && classes.iconXl)}></div>
            <label className={xl && classes.xlLabel}>{label}</label>
        </div>
    )
}
export default RhRadioButton;