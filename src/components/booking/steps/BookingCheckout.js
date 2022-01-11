import { useEffect, useState } from 'react';
import classes from '../../../assets/styleSheets/booking.module.scss'
import personIcon from '../../../assets/images/icons/personIcon.svg'
import listIcon from '../../../assets/images/icons/listIcon.svg'
import updateIcon from '../../../assets/images/icons/updateIcon.svg'
import durationIcon from '../../../assets/images/icons/durationIcon.svg'
import calendarIcon from '../../../assets/images/icons/calendarIcon.svg'
import clockIcon from '../../../assets/images/icons/clockIcon.svg'
import clsx from 'clsx'
import { Button, Skeleton } from '@mui/material';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import transform from '../../../utilities/transform';
import grayCheckIcon from '../../../assets/images/icons/grayCheckIcon.svg'
import purpleCheckIcon from '../../../assets/images/icons/purpleCheckIcon.svg'
import RhCheckbox from '../../kits/RhCheckbox';
import TermsDialog from '../TermsDialog';
const BookingCheckout = ({
    packageInfo,
    bookingData,
    setBookingData,
    timesData,
    setTimesData,
    setDisabledNext,
    renderOffText,
    handleChangeCouponCode,
    handleSubmitCoupon
}) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const userIp = useSelector((state) => state.users.userIp)
    const timezones = useSelector((state) => state.users.timezones)
    const [checkoutTable, setCheckoutTable] = useState();
    const [openTermsModal, setOpenTermsModal] = useState(false);
    const [checkedTerms, setCheckedTerms] = useState(false);
    useEffect(() => {
        if (packageInfo, bookingData.selectedDuration) {
            handleFetchCheckoutTable();
        }
    }, [])
    useEffect(() => {
        setDisabledNext(!checkedTerms)
    }, [checkedTerms])


    const handleFetchCheckoutTable = async () => {
        try {
            const response = await axios.post(`v1.0/dates`, {
                date: `${bookingData.selectedDay.date} ${bookingData.selectedTime.time}`,
                is_iran: false,
                package_id: bookingData.selectedDuration.id,
                sessions: bookingData.selectedSession.count,
                staff_slug: packageInfo.staff.slug,
                timezone: bookingData.timezone,
                type: bookingData.selectedType.type,
            });
            setCheckoutTable({ ...response.data });
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleAcceptTerms = () => {
        setOpenTermsModal(false);
        setCheckedTerms(true);
    }
    const handleOpenTermsDialog = () => {
        if (checkedTerms) {
            setCheckedTerms(false);

        } else {
            setOpenTermsModal(true);
        }
    }


    return (
        <>
            {checkoutTable ?
                <div className={classes.bookingCheckoutContainer}>
                    <TermsDialog
                        open={openTermsModal}
                        setOpen={setOpenTermsModal}
                        handleAccept={handleAcceptTerms}
                        termsText={packageInfo.terms.value}
                    />
                    <div className={classes.bookingDetailsContainer}>
                        <p className={classes.bookingDetailsHeader}>Booking Details</p>
                        <ul>
                            <li>
                                <img src={personIcon} />
                                <span>Teacher : </span>
                                <span>{packageInfo.staff.name} {packageInfo.staff.family}</span>
                            </li>
                            <li>
                                <img src={listIcon} />
                                <span>Sessions : </span>
                                <span>{bookingData.selectedSession.count}</span>
                            </li>
                            <li>
                                <img src={durationIcon} />
                                <span>Sessions : </span>
                                <span>{bookingData.selectedDuration.duration} minutes</span>
                            </li>
                            <li>
                                <img src={updateIcon} />
                                <span>Type : </span>
                                <span>{bookingData.selectedType.type}</span>
                            </li>
                            <li>
                                <img src={calendarIcon} />
                                <span>Start Date : </span>
                                <span>{bookingData.selectedDay.date}</span>
                            </li>
                            <li style={{ marginBottom: 0 }}>
                                <img src={clockIcon} />
                                <span>Start Time : </span>
                                <span>{bookingData.selectedTime.time}</span>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.bookingCheckoutTableContainer}>
                        <p className={classes.bookingCheckoutTableHeader}>Course Schedule</p>
                        <div className={classes.bookingCheckoutTable}>
                            <div className={classes.bookingCheckoutTableThead}>
                                <div>
                                    <div>Session</div>
                                    <div>Day</div>
                                    <div>Date</div>
                                    <div>Times</div>
                                </div>
                            </div>
                            <div className={classes.bookingCheckoutTableTBody}>
                                {
                                    Object.keys(checkoutTable).map(function (key, index) {
                                        let dateArray = checkoutTable[key].date.split(',');
                                        return (
                                            <div className={!checkoutTable[key].valid && classes.errorColor}>
                                                <div>{index + 1}</div>
                                                <div>{dateArray[0]}</div>
                                                <div>{dateArray[1]}</div>
                                                <div>{dateArray[2].replace('$', '')}</div>
                                            </div>)
                                    })
                                }


                            </div>
                        </div>

                    </div>
                    <div className={classes.bookingFinalPriceContainer}>
                        <p className={classes.bookingFinalPriceHeader}>Total Price</p>
                        <div className={classes.bookingFinalPriceItems}>
                            <p className={classes.offStat}>{renderOffText()}</p>
                            <div className={classes.finalPriceDetails}>
                                <p>Subtotal :</p>
                                <p>$ {bookingData.selectedDuration.price * bookingData.selectedSession.count}</p>
                            </div>
                            <div className={classes.finalPriceDetails}>
                                <p>Discount :</p>
                                <p>$  -{
                                    bookingData.appliedCoupon ?
                                        Math.floor((bookingData.appliedCoupon.code.percentage) * bookingData.selectedDuration.price * bookingData.selectedSession.count / 100)
                                        :
                                        Math.floor((bookingData.selectedSession.off) * bookingData.selectedDuration.price * bookingData.selectedSession.count / 100)
                                }
                                </p>
                            </div>
                            <div className={classes.finalPriceText}>
                                <p>Total</p>
                                <p>$ {
                                    bookingData.appliedCoupon ?
                                        Math.floor((100 - bookingData.appliedCoupon.code.percentage) * bookingData.selectedDuration.price * bookingData.selectedSession.count / 100)
                                        :
                                        Math.floor((100 - bookingData.selectedSession.off) * bookingData.selectedDuration.price * bookingData.selectedSession.count / 100)
                                }
                                </p>
                            </div>

                            <div className={classes.couponApplySectionContainer}>
                                <div className={classes.couponApplySection}>
                                    <input className={bookingData.appliedCoupon && classes.disabledInput} disabled={bookingData.appliedCoupon} value={bookingData.couponCode} onChange={handleChangeCouponCode} placeholder={`Coupon`} />
                                    <Button onClick={handleSubmitCoupon} className={clsx(classes.submitCouponButton, bookingData.couponCode == '' && classes.submitCouponDisabled)}>

                                        {bookingData.appliedCoupon ?
                                            <CloseIcon style={{ fontSize: 20 }} />
                                            :
                                            <img src={bookingData.couponCode == '' ? grayCheckIcon : purpleCheckIcon} />
                                        }
                                    </Button>
                                </div>
                            </div>
                            <div className={classes.termsCheckboxContainer}>
                                <RhCheckbox
                                    label={' I Accept Accept The Terms'}
                                    checked={checkedTerms}
                                    key={'terms'}
                                    onChange={handleOpenTermsDialog}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                :
                <div className={classes.bookingCheckoutContainer}>
                    <Skeleton variant="rectangular" animation="wave" className={classes.bookingTimesSkeleton} />
                    <Skeleton variant="rectangular" animation="wave" className={classes.bookingTimesSkeleton} />
                    <Skeleton variant="rectangular" animation="wave" className={classes.bookingTimesSkeleton} />
                </div>
            }
        </>
    );
}
export default BookingCheckout;