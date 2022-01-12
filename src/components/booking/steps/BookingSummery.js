import { useEffect, useState } from 'react';
import classes from '../../../assets/styleSheets/booking.module.scss'
import Instructor from '../../kits/Instructor';
import RhRadioButton from '../../kits/RhRadioButton';
import clsx from 'clsx'
import { Button, Tooltip } from '@mui/material';
import { withStyles } from '@mui/styles';
import grayCheckIcon from '../../../assets/images/icons/grayCheckIcon.svg'
import purpleCheckIcon from '../../../assets/images/icons/purpleCheckIcon.svg'
import { useSnackbar } from 'notistack';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import UpdateIcon from '@mui/icons-material/Update';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
const BookingSummery = ({
    packageInfo,
    bookingData,
    setBookingData,
    sessions,
    renderOffText,
    handleSubmitCoupon,
    handleChangeCouponCode

}) => {

    const [showTrial, setShowTrial] = useState(false)
    const [activeCouponInput, setActiveCouponInput] = useState(false)

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#9a3381',

        },
    }))(Tooltip);


    // console.log('bookingData',bookingData)
    console.log('packageInfo', packageInfo)
    useEffect(() => {
        if (packageInfo && !bookingData?.selectedType) {
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



    const handleCheckshowTrial = async () => {
        try {
            const response = await axios.get(`v1.0/staffs/${packageInfo.staff.id}/${packageInfo.package.id}/booking/checkShowTrial`);
            setShowTrial(true)
        }
        catch (e) {
            // enqueueSnackbar('something went wrong!', {
            //     variant: 'error'
            // })
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
                    // nameBgColorTransparent
                    />
                    <div className={classes.summeryItem}>
                        <div className={classes.summeryIcon}>
                            {/* <img src={durationIcon} /> */}
                            <TimelapseIcon />
                        </div>
                        <p className={classes.summeryTitle}>Duration</p>
                        <div className={clsx(classes.summeryBody, classes.dFlexCenter, classes.pl18)}>
                            {packageInfo.durations.map((duration, index) => {
                                if ((duration.trial && showTrial) || (duration.gift && showTrial) || (!duration.gift && !duration.trial)) {
                                    return (
                                        <RhRadioButton
                                            label={duration.trial ? `trial(${duration.duration} min)` : duration.gift ? `gift(${duration.duration} min)` : `${duration.duration} minutes`}
                                            checked={duration.id == bookingData.selectedDuration.id}
                                            key={duration.id + 'duration'}
                                            onChange={() => { handleChangeDuration(duration) }}
                                            className={index < packageInfo.durations.length - 1 ? classes.radioButtonMb : ""}
                                            xl
                                        />
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className={classes.summeryItem}>
                        <div className={classes.summeryIcon}>
                            {/* <img src={listIcon} /> */}
                            <FormatListNumberedRoundedIcon />
                        </div>
                        <p className={classes.summeryTitle}>Session</p>
                        <div className={clsx(classes.summeryBody, classes.dFlexCenter, classes.pl18)}>
                            {((bookingData.selectedDuration.gift || bookingData.selectedDuration.trial) ?
                                sessions.slice(0, 1)
                                :
                                sessions).map((session, index) => (
                                    <RhRadioButton
                                        label={`${session.count} ${session.count > 1 ? ' sessions' : 'session'}`}
                                        checked={bookingData.selectedSession.count === session.count}
                                        key={session.count + 'session'}
                                        onChange={() => { handleChangeSession(session) }}
                                        className={index < sessions.length - 1 ? classes.radioButtonMb : ""}
                                        xl
                                    />
                                ))}

                        </div>
                    </div>
                    <div className={classes.summeryItem}>
                        <div className={classes.summeryIcon}>
                            {/* <img src={updateIcon} /> */}
                            <UpdateIcon />
                        </div>
                        <p className={classes.summeryTitle}>Type</p>
                        <div className={clsx(classes.summeryBody, classes.dFlexCenter, classes.pl18)}>
                            {((bookingData.selectedSession.count == 1) ?
                                bookingData.selectedDuration.types.slice(0, 1)
                                :
                                bookingData.selectedDuration.types).map((type, index) => (
                                    <RhRadioButton
                                        label={`${type.type}`}
                                        checked={bookingData.selectedType?.id == type.id}
                                        key={type.id + 'type'}
                                        onChange={() => { handleChangeType(type) }}
                                        className={index < bookingData.selectedDuration.types.length - 1 ? classes.radioButtonMb : ""}
                                        xl
                                    />
                                ))}

                        </div>
                    </div>
                    <div className={classes.summeryItem}>
                        <div className={classes.summeryIcon}>
                            {/* <img src={priceIcon} /> */}
                            <PaidOutlinedIcon />
                        </div>
                        <p className={classes.summeryTitle}>Price</p>
                        <HtmlTooltip title={renderOffText()}>
                            <p className={classes.offStat}>{renderOffText()}</p>
                        </HtmlTooltip>
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
                        <div className={clsx(classes.couponApplySection, (activeCouponInput || bookingData.couponCode !== '') && classes.couponApplySectionActive)}>
                            <input
                                className={bookingData.appliedCoupon && classes.disabledInput}
                                disabled={bookingData.appliedCoupon}
                                value={bookingData.couponCode}
                                onChange={handleChangeCouponCode}
                                placeholder={`Coupon`}
                                onFocus={() => setActiveCouponInput(true)}
                                onBlur={() => setActiveCouponInput(false)}
                            />
                            <Button onClick={handleSubmitCoupon} className={clsx(classes.submitCouponButton, bookingData.couponCode == '' && classes.submitCouponDisabled)}>

                                {bookingData.appliedCoupon ?
                                    <CloseIcon style={{ fontSize: 20 }} />
                                    :
                                    <CheckRoundedIcon style={{ color: bookingData.couponCode == '' ? 'rgba(41, 23, 32, 0.4)' : '#820263' }} />
                                }
                            </Button>
                        </div>
                    </div>
                </div>}
        </>
    );
}
export default BookingSummery;