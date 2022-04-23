import { useEffect, useState } from 'react';
import classes from '../../assets/styleSheets/booking.module.scss'
import StepperComponent from './StepperComponent';
import BookingSummery from './steps/BookingSummery';
import BookingCalendar from './steps/BookingCalendar';
import arrowNext from '../../assets/images/icons/arrowNext.svg';
import { Button } from '@material-ui/core';
import BookingCheckout from './steps/BookingCheckout';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const sessions = [
    {
        count: 1,
        off: 0,
    },
    {
        count: 4,
        off: 0,
    },
    {
        count: 8,
        off: 5,
    },
    {
        count: 12,
        off: 10,
    }
];
const Booking = ({ packageInfo }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [step, setStep] = useState(0)
    const [bookingData, setBookingData] = useState({ selectedDuration: null, couponCode: "" })
    const [timesData, setTimesData] = useState()
    const [disabledNext, setDisabledNext] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    console.log('packageInfo', packageInfo)
    useEffect(() => {
        if (typeof localstorage != undefined) {
            setIsAuth(localStorage.getItem("isAuth"));

        }
    }, [])
    const renderStep = (step) => {
        switch (step) {
            case 0:
                return (<BookingSummery
                    packageInfo={packageInfo}
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                    sessions={sessions}
                    renderOffText={renderOffText}
                    handleSubmitCoupon={handleSubmitCoupon}
                    handleChangeCouponCode={handleChangeCouponCode}
                />)
            case 1:
                return (<BookingCalendar
                    packageInfo={packageInfo}
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                    timesData={timesData}
                    setTimesData={setTimesData}
                    setDisabledNext={setDisabledNext}
                />)
            case 2:
                return (<BookingCheckout
                    packageInfo={packageInfo}
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                    timesData={timesData}
                    setTimesData={setTimesData}
                    setDisabledNext={setDisabledNext}
                    renderOffText={renderOffText}
                    handleSubmitCoupon={handleSubmitCoupon}
                    handleChangeCouponCode={handleChangeCouponCode}


                />)
        }
    }
    const handleStep = () => {
        let flag = true;
        switch (step) {
            case 0:
                setTimesData(null);
                setDisabledNext(true)
                break;
            case 1:
                if (disabledNext) {
                    enqueueSnackbar('Please choose the date and time.', {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'center',
                        }
                    })
                    flag = false;
                }
                setDisabledNext(true)
                break;
        }
        if (flag) {
            setStep(step + 1);
        }
    }
    const handleBack = () => {
        switch (step) {
            case 1:
                setDisabledNext(false)
                break;
            case 2:
                setTimesData(null);
                break;

        }
        setStep(step - 1);
    }

    const renderOffText = () => {
        if (bookingData.appliedCoupon) {
            return (`${parseInt(bookingData.appliedCoupon.code.percentage)}% off discount code`)
        } else if (bookingData.selectedSession.off > 0 && bookingData.selectedType.type == 'weekly') {
            return (`${bookingData.selectedSession.off}% off for ${bookingData.selectedSession.count} sessions`)
        } else {
            return (`0% off for ${bookingData.selectedSession.count} ${bookingData.selectedSession.count > 1 ? 'sessions' : 'session'}`)

        }
    }
    const handleChangeCouponCode = (e) => {
        setBookingData({
            ...bookingData,
            couponCode: e.target.value
        })
    }
    const handleSubmitCoupon = async () => {
        if (bookingData.appliedCoupon) {
            setBookingData({
                ...bookingData,
                appliedCoupon: null,
                couponCode: ""
            })
        } else {
            if (!isAuth) {
                enqueueSnackbar('Log in to use your coupon', {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    }
                })
            } else {
                const key = enqueueSnackbar('please wait...', {
                    variant: 'info',
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    }
                })
                try {
                    const response = await axios.post('admin/mc/coupons/check', {
                        code: bookingData.couponCode,
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
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'center',
                        }
                    })
                }
                catch (e) {
                    closeSnackbar(key);
                    console.log(e)
                    enqueueSnackbar('your coupon code is wrong!', {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'center',
                        }
                    })
                }
            }
        }

    }
    const termsAcceptError = () => {
        console.log('here')
        enqueueSnackbar('Please accept terms!', {
            variant: 'error',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }
        })
    }
    const handleClickBookMore = () => {
        if (disabledNext) {
            termsAcceptError()
        }
    }
    const handleClickPay = () => {
        if (disabledNext) {
            termsAcceptError()
        }
    }
    return (
        <>
            <div className={classes.topColor}></div>
            <div className={classes.bookingGrandContainer}>

                <div className={classes.bookingContainer}>
                    <div className={classes.stepperContainer}>
                        <StepperComponent step={step} />
                    </div>
                    <div className={classes.bookingFormContainer}>
                        <div className={classes.bookingFormBody}>
                            {
                                renderStep(step)
                            }
                        </div>
                        <div className={classes.bookingFormFooter}>
                            {step == 2 &&
                                <div>
                                    {/* {isAuth ? */}
                                    <>
                                        <Button onClick={handleClickBookMore} className={classes.bookingBookMoreBtn}>
                                            Book More
                                        </Button>
                                        <Button onClick={handleClickPay} className={classes.bookingPayBtn}>
                                            Pay Now
                                        </Button>
                                    </>
                                    {/* :
                                        <Button onClick={() => { }} disabled={disabledNext} className={classes.bookingLoginBtn}>
                                            Login
                                        </Button>} */}
                                </div>
                            }

                            {step < 2 &&
                                <Button onClick={handleStep}
                                    // disabled={disabledNext}
                                    className={classes.bookingNextBtn}>
                                    Next
                                    <img src={arrowNext} />
                                </Button>
                            }
                            {step > 0 &&
                                <Button onClick={handleBack} className={classes.bookingBackBtn}>
                                    <img src={arrowNext} />

                                    Back
                                </Button>}


                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Booking;