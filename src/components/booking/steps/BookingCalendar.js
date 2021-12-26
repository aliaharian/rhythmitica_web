import { useEffect, useState } from 'react';
import classes from '../../../assets/styleSheets/booking.module.scss'
import Instructor from '../../kits/Instructor';
import RhRadioButton from '../../kits/RhRadioButton';
import durationIcon from '../../../assets/images/icons/durationIcon.svg'
import listIcon from '../../../assets/images/icons/listIcon.svg'
import updateIcon from '../../../assets/images/icons/updateIcon.svg'
import priceIcon from '../../../assets/images/icons/priceIcon.svg'
import clsx from 'clsx'
import { Button ,Skeleton} from '@mui/material';
import grayCheckIcon from '../../../assets/images/icons/grayCheckIcon.svg'
import purpleCheckIcon from '../../../assets/images/icons/purpleCheckIcon.svg'
import { useSnackbar } from 'notistack';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const BookingCalendar = ({
        packageInfo,
        bookingData,
        setBookingData,
        timesData,
        setTimesData
    }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    useEffect(() => {
        if (packageInfo , bookingData.selectedDuration) {
            handleFetchTimes();
        }
    }, [])
    const handleFetchTimes = async () => {
        try {
            const response = await axios.post(`v1.0/staffs/${packageInfo.package.id}/${packageInfo.staff.id}/checkTimes/preview`,{
                sessionsCount:bookingData.selectedSession.count,
                // sessionsType:
                // timezone:
            });
        }
        catch (e) {
            // enqueueSnackbar('something went wrong!', {
            //     variant: 'error'
            // })
        }

    }
  

    return (
        <>
            {timesData ?
                <div className={classes.bookingTimesContainer}>
                    
                </div>
                :
                <div className={classes.bookingTimesContainer}>
                        <Skeleton variant="rectangular" className={classes.bookingTimesSkeleton} />
                        <Skeleton variant="rectangular" className={classes.bookingTimesSkeleton} />
                        <Skeleton variant="rectangular" className={classes.bookingTimesSkeleton} />
                </div>
                }
        </>
    );
}
export default BookingCalendar;