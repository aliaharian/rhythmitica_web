import { useEffect, useState } from 'react';
import classes from '../../../assets/styleSheets/booking.module.scss'

import clsx from 'clsx'
import { Button, List, ListItemButton, ListItemText, Skeleton } from '@mui/material';
import grayCheckIcon from '../../../assets/images/icons/grayCheckIcon.svg'
import purpleCheckIcon from '../../../assets/images/icons/purpleCheckIcon.svg'
import { useSnackbar } from 'notistack';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import RhDatepicker from '../../kits/RhDatepicker';
import transform from '../../../utilities/transform';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import TimelapseRoundedIcon from '@mui/icons-material/TimelapseRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import Scrollbars from "react-custom-scrollbars"
import Lottie from 'react-lottie';
import * as animationData from '../../../assets/lottie/calendar.json'
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const BookingCalendar = ({
    packageInfo,
    bookingData,
    setBookingData,
    timesData,
    setTimesData,
    setDisabledNext
}) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const userIp = useSelector((state) => state.users.userIp)
    const timezones = useSelector((state) => state.users.timezones)
    const [activeDay, setActiveDay] = useState({ date: 0 - 0 - 0, day: 0 });
    const [activePageIndex, setActivePageIndex] = useState(0);
    const [selectedHour, setSelectedHour] = useState();
    const [allHours, setAllHours] = useState();
    const [selectedTimezone, setSelectedTimezone] = useState(userIp.timezone);
    const [openTimeZones, setOpenTimeZones] = useState(false);

    useEffect(() => {
        if (packageInfo, bookingData.selectedDuration) {
            handleFetchTimes();
            setBookingData({ ...bookingData, timezone: userIp.timezone })
        }
    }, [])
    useEffect(() => {
        selectedHour ? setDisabledNext(false) : setDisabledNext(true)
    }, [selectedHour])

    const handleClickAway = () => {
        setOpenTimeZones(false)
    }
    const handleOpenTimezones = () => {
        setOpenTimeZones(true)
    }
    const handleFetchTimes = async (timezone = userIp.timezone) => {
        try {
            const response = await axios.post(`v1.0/staffs/${packageInfo.staff.id}/${bookingData.selectedType.staff_package_id}/checkTimes/preview`, {
                sessionsCount: bookingData.selectedSession.count,
                sessionsType: bookingData.selectedType.type,
                timezone: timezone
            });
            setTimesData({ ...response.data.data });
            let timesTmp = {}
            let timesDataTmp = response.data.data
            Object.keys(timesDataTmp.available).map(function (key, index) {

                let hourTmp = []
                Object.keys(timesDataTmp.available).length > 0 && timesDataTmp.available[key]?.map((item) => {
                    hourTmp.push({ time: item, available: true })

                })

                Object.keys(timesDataTmp.bookedDays).length > 0 && timesDataTmp.bookedDays[key]?.map((item) => {
                    hourTmp.push({ time: item, available: false })
                })


                Object.keys(timesDataTmp.notAvailable).length > 0 && timesDataTmp.notAvailable[key]?.map((item) => {
                    hourTmp.push({ time: item, available: false })
                })
                hourTmp.sort(function (a, b) {
                    return a.time.localeCompare(b.time);
                });
                timesTmp[key] = [...hourTmp]

            });
            setAllHours({ ...timesTmp });
        }
        catch (e) {
            console.log(e)
        }

    }
    

    const handleChangeTimezone = async (e) => {
        console.log(e)
        setSelectedTimezone(e)
        setBookingData({ ...bookingData, timezone: e })
        setTimesData(null);
        daySelectedHandler(0, null);
        setActivePageIndex(0);
        setSelectedHour(null);
        handleFetchTimes(e)
        setOpenTimeZones(false)
    }
    console.log('bookingData', bookingData);

    const handleSelectHour = (time) => {
        time.available && setSelectedHour(time)
        setBookingData({ ...bookingData, selectedDay: activeDay, selectedTime: time })
    }
    const daySelectedHandler = (day, index, weekDay) => {
        console.log(index);
        setSelectedHour(null);
        setActiveDay({ date: index, day: day, weekday: transform.mapDayToWeekDay[weekDay] });
    };

    const calendarPrevButtonClickedHandler = () => {
        daySelectedHandler(0, null);
        setActivePageIndex(activePageIndex - 1);
        setSelectedHour(null);
    };
    const calendarNextButtonClickedHandler = () => {
        daySelectedHandler(0, null);
        setActivePageIndex(activePageIndex + 1);
        setSelectedHour(null);
    };


    return (

        <>
            {timesData ?
                <div className={classes.bookingTimesContainer}>

                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div className={classes.bookingDetailsContainer}>
                            <p className={classes.bookingDetailsHeader}>Booking Details</p>
                            <ul>
                                <li>
                                    <PersonOutlineRoundedIcon />
                                    <span>Teacher : </span>
                                    <span>{packageInfo.staff.name} {packageInfo.staff.family}</span>
                                </li>
                                <li>
                                    <FormatListNumberedRoundedIcon />
                                    <span>Sessions : </span>
                                    <span>{bookingData.selectedSession.count}</span>
                                </li>
                                <li>
                                    <TimelapseRoundedIcon />
                                    <span>Sessions : </span>
                                    <span>{bookingData.selectedDuration.duration} minutes</span>
                                </li>
                                <li>
                                    <UpdateRoundedIcon />
                                    <span>Type : </span>
                                    <span>{bookingData.selectedType.type}</span>
                                </li>
                            </ul>

                            <Button className={classes.openTimezonesBtn} onClick={handleOpenTimezones}>
                                {selectedTimezone}
                                <div className={classes.timezoneBtnIcon}>
                                    <ArrowDropDownRoundedIcon />
                                </div>
                            </Button>
                            {openTimeZones ? (

                                <div className={classes.timezonesListContainer}>
                                    <Scrollbars
                                        renderTrackHorizontal={props => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                    >
                                        <List className={classes.timezonesList}>
                                            {timezones.map((timezone) => (
                                                <ListItemButton component="li">
                                                    <ListItemText onClick={() => handleChangeTimezone(timezone.timezone)} primary={timezone.timezone} />
                                                </ListItemButton>
                                            ))}
                                        </List>
                                    </Scrollbars>

                                </div>
                            ) : null}
                        </div>
                    </ClickAwayListener>

                    <RhDatepicker
                        isLoading={false}
                        iranianCalendar={false}
                        selectedDay={activeDay.day}
                        onSelectDay={daySelectedHandler}
                        months={timesData.template.map(month => ({ ...month, max_day: Number(month.max_day) }))}
                        activePageIndex={activePageIndex}
                        onPrevButtonClick={calendarPrevButtonClickedHandler}
                        onNextButtonClick={calendarNextButtonClickedHandler}
                    />

                    <div className={classes.bookingSelectTimeContainer}>
                        <p className={classes.bookingSelectTimeHeader}>Select  First Sessions Time</p>
                        <Scrollbars
                            renderTrackHorizontal={props => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                        >
                            <div className={classes.bookingSelectTimeItems}>
                                {
                                    (activeDay.day != 0 && allHours) ? allHours[activeDay.date]?.map((time) => {
                                        return (
                                            <>
                                                <div
                                                    className={clsx(time.available == false && classes.timeDisabled, selectedHour?.time == time.time && classes.timeSelected)}
                                                    onClick={() => handleSelectHour(time)}
                                                >
                                                    {time.time.replace(':', ' : ')}
                                                </div>
                                              
                                            </>

                                        )
                                    }) :
                                        <>
                                            <div className={classes.chooseDay}>
                                                <p>Choose The Day!</p>
                                                {/* <Lottie options={defaultOptions}
                                                    height={200}
                                                    width={200}
                                                /> */}
                                            </div>
                                        </>
                                }
                            </div>
                        </Scrollbars>
                    </div>
                </div >
                :
                <div className={classes.bookingTimesContainer}>
                    <Skeleton
                        sx={{ bgcolor: '#29172026' }}
                        variant="rectangular"
                        animation="wave"
                        className={classes.bookingTimesSkeleton} />
                    <Skeleton sx={{ bgcolor: '#29172026' }}
                        variant="rectangular"
                        animation="wave"
                        className={classes.bookingTimesSkeleton} />
                    <Skeleton sx={{ bgcolor: '#29172026' }}
                        variant="rectangular"
                        animation="wave"
                        className={classes.bookingTimesSkeleton} />
                </div>
            }
        </>
    );
}
export default BookingCalendar;