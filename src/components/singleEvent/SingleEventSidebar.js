import { Button, Checkbox, FormControlLabel, List, ListItemText, useMediaQuery, useTheme } from "@material-ui/core";
import classes from '../../assets/styleSheets/singleEvent.module.scss'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import CloseIcon from '@mui/icons-material/Close';
import grayCheckIcon from '../../assets/images/icons/grayCheckIcon.svg'
import greenCheckIcon from '../../assets/images/icons/greenCheckIcon.svg'
import { useState } from "react";
import clsx from 'clsx'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { ListItemButton } from "@mui/material";
import SingleEventcountdown from "./SingleEventcountdown";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const SingleEventSidebar = ({
    eventInfo,
    handleChangeTimezone,
    selectedTimezone,
    timezones,
    openTimeZones,
    handleSubmitCoupon,
    handleChangeCouponCode,
    handleClickAway,
    handleOpenTimezones,
    couponCode,
    appliedCoupon,
    handleOpenSessionsDialog
}) => {

    const [activeCouponInput, setActiveCouponInput] = useState(false)


    return (
        <div className={classes.singleEventSidebarContainer}>
            <ClickAwayListener onClickAway={handleClickAway}>

                <div className={classes.singleEventSidebar}>
                    <div className={classes.eventInfoContainer}>
                        <div className={classes.eventInfo}>
                            <PersonOutlinedIcon />
                            <p>instructor: </p>
                            <span>{`${eventInfo.staff.user.name} ${eventInfo.staff.user.family}`}</span>
                        </div>
                        <div className={classes.eventInfo}>
                            <FormatListNumberedOutlinedIcon />
                            <p>sessions: </p>
                            <span>{eventInfo.parsedSessions.length}</span>
                        </div>
                        <div className={classes.eventInfo}>
                            <MonetizationOnOutlinedIcon />
                            <p>price: </p>
                            <span className={appliedCoupon && classes.prevPrice}>$ {eventInfo.price}</span>

                            {appliedCoupon &&
                                <span>$ {eventInfo.price - ((appliedCoupon.code.percentage / 100) * eventInfo.price)}</span>
                            }
                        </div>
                        <div className={classes.eventInfo}>
                            <PeopleOutlinedIcon />
                            <p>capacity: </p>
                            <span>{eventInfo.capacity}</span>
                        </div>
                        <div className={classes.eventInfo}>
                            <LanguageOutlinedIcon />
                            <p>language: </p>
                            <span>{eventInfo.lang}</span>
                        </div>
                        <div className={classes.eventInfo}>
                            <DateRangeOutlinedIcon />
                            <p>{eventInfo.parsedSessions.length > 1 ? 'start' : 'event'} date: </p>
                            <span>{eventInfo.parsedSessions.length > 0 && eventInfo.parsedSessions[0]?.start_date.split(' ')[0]}</span>

                            {
                                eventInfo.parsedSessions.length > 1 &&
                                <div className={classes.eventSessionsFloatBtn}>
                                    <Button onClick={handleOpenSessionsDialog}>
                                        <DateRangeOutlinedIcon />
                                    </Button>
                                </div>
                            }
                        </div>
                        <div className={classes.eventInfo}>
                            <AccessTimeOutlinedIcon />
                            <p>{eventInfo.parsedSessions.length > 1 ? 'start' : 'event'} time: </p>
                            <span>{eventInfo.parsedSessions.length > 0 && eventInfo.parsedSessions[0]?.start_date.split(' ')[1]}</span>
                        </div>
                        <div className={classes.eventInfo}>
                            <TimelapseOutlinedIcon />
                            <p>duration: </p>
                            <span>{eventInfo.duration} minutes</span>
                        </div>
                    </div>
                    <div className={classes.eventSidebarInputs}>
                        <div className={clsx(classes.couponApplySection, (activeCouponInput || couponCode !== '') && classes.couponApplySectionActive)}>
                            <input
                                className={appliedCoupon && classes.disabledInput}
                                disabled={appliedCoupon}
                                value={couponCode}
                                onChange={handleChangeCouponCode}
                                placeholder={`Coupon`}
                                onFocus={() => setActiveCouponInput(true)}
                                onBlur={() => setActiveCouponInput(false)}
                            />
                            <Button
                                onClick={handleSubmitCoupon}
                                className={clsx(classes.submitCouponButton, couponCode == '' && classes.submitCouponDisabled)}
                            >

                                {appliedCoupon ?
                                    <CloseIcon style={{ fontSize: 20 }} />
                                    :
                                    <CheckRoundedIcon style={{ color: couponCode == '' ? 'rgba(41, 23, 32, 0.4)' : '#04a777' }} />
                                }
                            </Button>
                        </div>

                        <Button className={classes.openTimezonesBtn} onClick={handleOpenTimezones}>
                            {selectedTimezone}
                            <div className={classes.timezoneBtnIcon}>
                                <ArrowDropDownRoundedIcon />
                            </div>
                        </Button>
                        {openTimeZones ? (
                            <div className={classes.timezonesListContainer}>

                                <List className={classes.timezonesList}>
                                    {timezones.map((timezone) => (
                                        <ListItemButton component="li">
                                            <ListItemText onClick={() => handleChangeTimezone(timezone.timezone)} primary={timezone.timezone} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </div>
                        ) : null}
                    </div>
                    <div className={classes.eventCountDownContainer}>
                        <SingleEventcountdown timezone={selectedTimezone} startTime={eventInfo.parsedSessions[0]} />
                    </div>
                    <div className={classes.eventRegisterContainer}>
                        <Button>Register Now</Button>
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    )
}
export default SingleEventSidebar;