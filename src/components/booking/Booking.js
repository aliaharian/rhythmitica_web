import { useState } from 'react';
import classes from '../../assets/styleSheets/booking.module.scss'
import StepperComponent from './StepperComponent';
import BookingSummery from './steps/BookingSummery';
import BookingCalendar from './steps/BookingCalendar';
import arrowNext from '../../assets/images/icons/arrowNext.svg';
import { Button } from '@material-ui/core';
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
    const [step, setStep] = useState(0)
    const [bookingData, setBookingData] = useState({ selectedDuration: null })
    const [timesData, setTimesData] = useState()
    const [disabledNext, setDisabledNext] = useState(false)

    const renderStep = (step) => {
        switch (step) {
            case 0:
                return (<BookingSummery
                    packageInfo={packageInfo}
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                    sessions={sessions}
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
        }
    }
    const handleStep = () => {
        switch (step) {
            case 0:
                setTimesData(null);
                setDisabledNext(true)
                break;
        }
        setStep(step + 1);
    }
    const handleBack = () => {
        switch (step) {
            case 1:
                setDisabledNext(false)
                break;
        }
        setStep(step - 1);
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
                            {step < 2 &&
                                <Button onClick={handleStep} disabled={disabledNext} className={classes.bookingNextBtn}>
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