import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import classes from '../../assets/styleSheets/kits/timezonesList.module.scss';
import { useSelector } from 'react-redux';

export default function TimezonesList({
    open,
    handleClickAway,

}) {
    const timezones = useSelector((state) => state.users.timezones)

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.timezonesListContainer}>
                {open ? (
                    <div className={classes.timezonesList}>
                        {timezones.map((timezone) => (
                            <MenuItem value={timezone.timezone}>{timezone.timezone}</MenuItem>
                        ))}
                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    );
}