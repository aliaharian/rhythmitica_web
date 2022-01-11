import { Button, Checkbox, FormControlLabel, List, ListItemText, useMediaQuery, useTheme } from "@material-ui/core";
import { useEffect, useState } from "react";
import classes from '../../assets/styleSheets/singleEvent.module.scss'
import Moment from 'react-moment';
import "moment-timezone";
import moment from 'moment';

const SingleEventcountdown = ({
    timezone,
    startTime
}) => {
    let myInterval;
    const [duration, setDuration] = useState()
    useEffect(() => {
        myInterval = setInterval(showTime, 1000);
        return () => clearInterval(myInterval);
    });

    const showTime = () => {
        let start = moment(startTime.start_date);
        let now = moment().tz(timezone);
        var duration = moment.duration(start.diff(now));
        if (duration._data.milliseconds >= 0) {
            setDuration(duration._data)
        } else {
            setDuration(null)
            clearInterval(myInterval);
        }
    }

    // console.log('duration', duration)


    return (

        <>
            <div className={classes.countDownItem}>
                <p>{duration?.days || 0}</p>
                <p>Days</p>
            </div>
            <div className={classes.countDownItem}>
                <p>{duration?.hours || 0}</p>
                <p>Hours</p>
            </div>
            <div className={classes.countDownItem}>
                <p>{duration?.minutes || 0}</p>
                <p>Minutes</p>
            </div>
            <div className={classes.countDownItem}>
                <p>{duration?.seconds || 0}</p>
                <p>Seconds</p>
            </div>
        </>
    )
}
export default SingleEventcountdown;