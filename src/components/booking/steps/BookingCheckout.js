import { useEffect, useState } from 'react';
import classes from '../../../assets/styleSheets/booking.module.scss'
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
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import TimelapseRoundedIcon from '@mui/icons-material/TimelapseRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Scrollbars from "react-custom-scrollbars"

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
    const [activeCouponInput, setActiveCouponInput] = useState(false)

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
                            <li>
                                <DateRangeRoundedIcon />
                                <span>Start Date : </span>
                                <span>{bookingData.selectedDay.date}</span>
                            </li>
                            <li style={{ marginBottom: 0 }}>
                                <AccessTimeRoundedIcon />
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

                                <Scrollbars
                                    renderTrackHorizontal={props => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
                                    autoHide
                                    autoHideTimeout={1000}
                                    autoHideDuration={200}
                                >
                                    <div className={classes.bookingCheckoutTableTBodyChild}>
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


                                </Scrollbars>
                            </div>

                        </div>

                    </div>
                    <div className={classes.bookingFinalPriceContainer}>
                        <p className={classes.bookingFinalPriceHeader}>Total Price</p>
                        <div className={classes.bookingFinalPriceItems}>
                            <p className={clsx(classes.offStat , classes.w100)}>{renderOffText()}</p>
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
                                <div className={clsx(classes.couponApplySection,classes.couponApplyCustomHeight ,  (activeCouponInput || bookingData.couponCode !== '') && classes.couponApplySectionActive)}>
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