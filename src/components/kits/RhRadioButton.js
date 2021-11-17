import classes from '../../assets/styleSheets/kits/radioButton.module.scss';
import clsx from 'clsx';
const RhRadioButton = ({
    label,
    checked,
    key,
    onChange,
    color
}) => {
    return (
        <div key={key} onClick={onChange} className={clsx(classes.checkbox,color=='green'&&classes.greenBg)}>
            <div className={checked?classes.checkedIcon:classes.icon}></div>
            <label>{label}</label>
        </div>
    )
}
export default RhRadioButton;