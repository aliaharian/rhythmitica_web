import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from '../../assets/styleSheets/singleEvent.module.scss'
import SingleEventSidebar from './SingleEventSidebar';
import axios from 'axios'
import { Button, Skeleton } from '@mui/material';
import EventSessionsDialog from './EventSessionsDialog';
import { useSnackbar } from 'notistack';

const SingleEvent = ({ eventInfo, timezone }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const timezones = useSelector((state) => state.users.timezones)
    const [selectedTimezone, setSelectedTimezone] = useState(timezone);
    const [openTimeZones, setOpenTimeZones] = useState(false);
    const [appliedCoupon, setAppliedCoupon] = useState()
    const [couponCode, setCouponCode] = useState('')
    const [eventInfoState, setEventInfoState] = useState()
    const [openSessionsDialog, setOpenSessionsDialog] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if (eventInfo) {
            setEventInfoState(eventInfo)
        }
        if (timezone) {
            setSelectedTimezone(timezone)
        }
        if (typeof localstorage != undefined) {
            setIsAuth(localStorage.getItem("isAuth"));
        }
    }, [])
    console.log('eventInfo', eventInfo)
    const handleChangeTimezone = async (e) => {
        console.log('e', e)
        setEventInfoState(null);
        setSelectedTimezone(e)
        const eventInfoTmp = await axios.get(`v1.0/workshops/${eventInfo.slug}?timezone=${e}`);
        setEventInfoState(eventInfoTmp.data);
        setOpenTimeZones(false)
    }
    const handleSubmitCoupon = async () => {
        if (appliedCoupon) {
            setAppliedCoupon(null)
            setCouponCode('')
        } else {
            if (!isAuth) {
                enqueueSnackbar('Log in to use your coupon', {
                    variant: 'error'
                })
            } else {
                const key = enqueueSnackbar('please wait...', {
                    variant: 'info',
                })
                try {
                    const response = await axios.post('admin/mc/coupons/check', {
                        code: couponCode,
                        place_type: 'WORKSHOP',
                        place_id: eventInfo.id
                    })
                    setAppliedCoupon(response.data.data)
                    closeSnackbar(key);
                    enqueueSnackbar('your coupon has been applied!', {
                        variant: 'success',
                    })
                }
                catch (e) {
                    closeSnackbar(key);
                    console.log(e)
                    enqueueSnackbar('your coupon code is wrong!', {
                        variant: 'error'
                    })
                }
            }
        }

    }
    const handleChangeCouponCode = (e) => {
        setCouponCode(e.target.value);
    }
    const handleClickAway = () => {
        setOpenTimeZones(false)
    }
    const handleOpenTimezones = () => {
        setOpenTimeZones(true)
    }
    const handleOpenSessionsDialog = () => {
        setOpenSessionsDialog(true)
    }
    return (
        <div className={classes.singleEventMainContainer}>
            {eventInfoState ?
                <>
                    <EventSessionsDialog
                        open={openSessionsDialog}
                        setOpen={setOpenSessionsDialog}
                        handleAccept={() => { }}
                        sessions={eventInfoState.parsedSessions}
                    />
                    <SingleEventSidebar
                        eventInfo={eventInfoState}
                        timezones={timezones}
                        selectedTimezone={selectedTimezone}
                        handleChangeTimezone={handleChangeTimezone}
                        openTimeZones={openTimeZones}
                        appliedCoupon={appliedCoupon}
                        couponCode={couponCode}
                        handleSubmitCoupon={handleSubmitCoupon}
                        handleChangeCouponCode={handleChangeCouponCode}
                        handleClickAway={handleClickAway}
                        handleOpenTimezones={handleOpenTimezones}
                        handleOpenSessionsDialog={handleOpenSessionsDialog}
                    />
                    <div className={classes.eventBodyContainer}>
                        <img src={`${process.env.REACT_APP_IMAGE_URL}${eventInfoState.banner}`} />
                        <h2>{eventInfoState.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: eventInfoState.body }} className={classes.eventDesc}></div>
                    </div>
                </>
                :

                <>
                    <Skeleton variant="rectangular" animation="wave" className={classes.eventSkeleton} />
                    <Skeleton variant="rectangular" animation="wave" className={classes.eventSkeleton} />
                </>
            }
        </div>
    )
}

export default SingleEvent;