import { useEffect, useState } from 'react';
import classes from '../../../assets/styleSheets/booking.module.scss'
import Instructor from '../../kits/Instructor';
import RhRadioButton from '../../kits/RhRadioButton';
import durationIcon from '../../../assets/images/icons/durationIcon.svg'
import listIcon from '../../../assets/images/icons/listIcon.svg'
import updateIcon from '../../../assets/images/icons/updateIcon.svg'
import priceIcon from '../../../assets/images/icons/priceIcon.svg'
import clsx from 'clsx'
import { Button } from '@mui/material';
import grayCheckIcon from '../../../assets/images/icons/grayCheckIcon.svg'
import purpleCheckIcon from '../../../assets/images/icons/purpleCheckIcon.svg'
import { useSnackbar } from 'notistack';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const BookingSummery = ({ packageInfo, bookingData, setBookingData ,sessions}) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [couponCode, setCouponCode] = useState('')
    const [showTrial, setShowTrial] = useState(false)
    console.log('bookingData',bookingData)
    useEffect(() => {
        if (packageInfo) {
            setBookingData({
                ...bookingData,
                selectedDuration: packageInfo.durations[0],
                selectedSession: sessions[0],
                selectedType: packageInfo.durations[0].types[0]
            })
            handleCheckshowTrial();

        }
    }, [])
    const handleChangeDuration = (duration) => {
        setBookingData({
            ...bookingData,
            selectedDuration: duration,
            selectedSession: sessions[0],
            selectedType: duration.types[0]
        })
    }
    const handleChangeSession = (session) => {
        setBookingData({
            ...bookingData,
            selectedSession: session
        })
    }
    const handleChangeType = (type) => {
        setBookingData({
            ...bookingData,
            selectedType: type
        })
    }
    const renderOffText = () => {
        if (bookingData.appliedCoupon) {
            return (`${parseInt(bookingData.appliedCoupon.code.percentage)}% off discount code`)
        } else if (bookingData.selectedSession.off > 0 && bookingData.selectedType.type == 'weekly') {
            return (`${bookingData.selectedSession.off}% off for ${bookingData.selectedSession.count} sessions`)
        } else {
            return (`...`)

        }
    }
    const handleChangeCouponCode = (e) => {
        setCouponCode(e.target.value)
    }

    const handleCheckshowTrial = async () => {
        try {
            const response = await axios.get(`v1.0/staffs/${packageInfo.package.id}/${packageInfo.staff.id}/booking/checkShowTrial`);
            setShowTrial(true)
        }
        catch (e) {
            // enqueueSnackbar('something went wrong!', {
            //     variant: 'error'
            // })
        }

    }

    const handleSubmitCoupon = async () => {
        let isAuth = localStorage.getItem("isAuth");
        if (bookingData.appliedCoupon) {
            setBookingData({
                ...bookingData,
                appliedCoupon: null
            })
            setCouponCode('');
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
                        place_type: 'PACKAGE',
                        place_id: packageInfo.package.id
                    })
                    setBookingData({
                        ...bookingData,
                        appliedCoupon: response.data.data
                    })
                    closeSnackbar(key);
                    enqueueSnackbar('your coupon has been applied!', {
                        variant: 'success',
                    })
                }
                catch (e) {
                    closeSnackbar(key);
                    enqueueSnackbar('your coupon code is wrong!', {
                        variant: 'error'
                    })
                }
            }
        }

    }


    return (
        <>
            {bookingData.selectedDuration &&
                <div className={classes.bookingSummeryContainer}>
                    <Instructor
                        image={process.env.REACT_APP_IMAGE_URL + packageInfo.staff.avatar}
                        name={packageInfo.staff.name}
                        family={packageInfo.staff.family}
                        instrument={packageInfo.package.name}
                        disableLangs
                        imageBorder={'#820263'}
                    />
                    <div className={classes.summeryItem}>
                        <div className={classes.summeryIcon}>
                            <img src={durationIcon} />
                        </div>
                        <p className={classes.summeryTitle}>Duration</p>
                        <div className={clsx(classes.summeryBody, classes.dFlexCenter, classes.pl30)}>
                            {packageInfo.durations.map((duration, index) => {
                                if ((duration.trial && showTrial) || (duration.gift && showTrial) || (!duration.gift && !duration.trial)) {
                                    return (
                                        <RhRadioButton
                                            label={duration.trial ? `trial(${duration.duration} min)` : duration.gift ? `gift(${duration.duration} min)` : `${duration.duration} minutes`}
                                            checked={duration.id == bookingData.selectedDuration.id}
                                            key={duration.id + 'duration'}
                                            onChange={() => { handleChangeDuration(duration) }}
                                            style={index < packageInfo.durations.length - 1 ? { marginBottom: 28 } : {}}
                                            xl
                                        />
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className={classes.summeryItem}>
                        <div className={classes.summeryIcon}>
                            <img src={listIcon} />
                        </div>
                        <p className={classes.summeryTitle}>Session</p>
                        <div className={clsx(classes.summeryBody, classes.dFlexCenter, classes.pl30)}>
                            {((bookingData.selectedDuration.gift || bookingData.selectedDuration.trial) ?
                                sessions.slice(0, 1)
                                :
                                sessions).map((session, index) => (
                                    <RhRadioButton
                                        label={`${session.count} ${session.count > 1 ? ' sessions' : 'session'}`}
                                        checked={bookingData.selectedSession.count === session.count}
                                        key={session.count + 'session'}
                                        onChange={() => { handleChangeSession(session) }}
                                        style={index < sessions.length - 1 ? { marginBottom: 28 } : {}}
                                        xl
                                    />
                                ))}

                        </div>
                    </div>
                    <div className={classes.summeryItem}>
                        <div className={classes.summeryIcon}>
                            <img src={updateIcon} />
                        </div>
                        <p className={classes.summeryTitle}>Type</p>
                        <div className={clsx(classes.summeryBody, classes.dFlexCenter, classes.pl30)}>
                            {((bookingData.selectedSession.count == 1) ?
                                bookingData.selectedDuration.types.slice(0, 1)
                                :
                                bookingData.selectedDuration.types).map((type, index) => (
                                    <RhRadioButton
                                        label={`${type.type}`}
                                        checked={bookingData.selectedType?.id == type.id}
                                        key={type.id + 'type'}
                                        onChange={() => { handleChangeType(type) }}
                                        style={index < bookingData.selectedDuration.types.length - 1 ? { marginBottom: 28 } : {}}
                                        xl
                                    />
                                ))}

                        </div>
                    </div>
                    <div className={classes.summeryItem} style={{ paddingBottom: 32 }}>
                        <div className={classes.summeryIcon}>
                            <img src={priceIcon} />
                        </div>
                        <p className={classes.summeryTitle}>Price</p>
                        <p className={classes.offStat}>{renderOffText()}</p>
                        <div className={classes.showOffSection}>
                            <div className={classes.offPriceContainer}>
                                {
                                    (bookingData.appliedCoupon || bookingData.selectedSession.off > 0 && bookingData.selectedType.type == 'weekly') &&
                                    <p className={classes.textLineThrough}>{bookingData.selectedDuration.price * bookingData.selectedSession.count}</p>
                                }
                                {

                                    (bookingData.appliedCoupon || bookingData.selectedSession.off > 0 && bookingData.selectedType.type == 'weekly') ?
                                        <p className={classes.textMainPrice}>
                                            {
                                                bookingData.appliedCoupon ?
                                                    Math.floor((100 - bookingData.appliedCoupon.code.percentage) * bookingData.selectedDuration.price * bookingData.selectedSession.count / 100)
                                                    :
                                                    Math.floor((100 - bookingData.selectedSession.off) * bookingData.selectedDuration.price * bookingData.selectedSession.count / 100)
                                            }
                                        </p>
                                        :
                                        <p className={classes.textMainPrice}>{bookingData.selectedDuration.price * bookingData.selectedSession.count}</p>

                                }
                            </div>
                            <p>$</p>
                        </div>
                        {/* <button onClick={handleCheckshowTrial}>click</button>
                        <button onClick={handleSetCookie}>setCookie</button> */}
                        <div className={classes.couponApplySection}>
                            <input className={bookingData.appliedCoupon && classes.disabledInput} disabled={bookingData.appliedCoupon} value={couponCode} onChange={handleChangeCouponCode} placeholder={`Coupon`} />
                            <Button onClick={handleSubmitCoupon} className={clsx(classes.submitCouponButton, couponCode == '' && classes.submitCouponDisabled)}>

                                {bookingData.appliedCoupon ?
                                    <CloseIcon style={{ fontSize: 20 }} />
                                    :
                                    <img src={couponCode == '' ? grayCheckIcon : purpleCheckIcon} />
                                }
                            </Button>
                        </div>
                    </div>
                </div>}
        </>
    );
}
export default BookingSummery;