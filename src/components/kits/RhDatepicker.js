import React from 'react';
import * as PropTypes from 'prop-types';
import classes from '../../assets/styleSheets/kits/datepicker.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { IconButton } from '@material-ui/core';

const RhDatepicker = props => {

    const handleCellSelect = (cell, weekDay) => (cell && cell.active && cell.day) && props.onSelectDay(cell.day, formatDate(cell.day), weekDay);

    const NextButtonClickedHandler = () => (props.activePageIndex !== props.months.length - 1) && props.onNextButtonClick();

    const PrevButtonClickedHandler = () => (props.activePageIndex !== 0) && props.onPrevButtonClick();

    const formatDate = day => activePage.month + (day > 9 ? `-${day}` : `-0${day}`);

    const activePage = props.months[props.activePageIndex];

    let matrix = [[], [], [], [], [], [], []];
    const startDay = activePage ? activePage.start_day : 0;
    const maxDay = activePage ? activePage.max_day : 30;
    let activeDays = activePage ? activePage.active_days : [];
    const h = startDay > 4 ? 6 : 5;
    let day = 1;
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < 7; j++) {
            if (i > 0 || startDay <= j)
                matrix[i][j] = day <= maxDay ? ({
                    day: day++,
                    active: activeDays.indexOf(day - 1) !== -1
                }) : null;
            else {
                matrix[i][j] = null;
            }
        }
    }

    // console.log('matrix',matrix)
    return (
        <div className={classes.calendar}>
            {
                props.isLoading ? (
                    <Loading isLoading color={'#FF7200'} height={300} width={300} />
                ) : (
                    activePage ? (
                        <>
                            <div className={classes.calendarHeader}>
                                <IconButton onClick={PrevButtonClickedHandler}
                                    style={{ opacity: (props.activePageIndex !== 0) ? 1 : 0.5 }}
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    disableRipple
                                >
                                    <NavigateBeforeIcon />
                                </IconButton>
                                <div className={classes.calendarHeaderTitle}>{activePage.name}</div>
                                <IconButton
                                    title='بعدی'
                                    onClick={NextButtonClickedHandler}
                                    style={{ opacity: (props.activePageIndex !== props.months.length - 1) ? 1 : 0.5 }}
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    disableRipple
                                >
                                    <NavigateNextIcon />
                                </IconButton>
                            </div>
                            <div className={classes.calendarBody}>
                                <div className={classes.calendarTitle}>
                                    <div>{'Sa'}</div>
                                    <div>{'Su'}</div>
                                    <div>{'Mo'}</div>
                                    <div>{'Tu'}</div>
                                    <div>{'We'}</div>
                                    <div>{'Th'}</div>
                                    <div>{'Fri'}</div>
                                </div>
                                <div className={classes.calendarDates}>
                                    {
                                        matrix.map((row, i) => (
                                            <div key={i + 1}>
                                                {
                                                    row.map((cell, j) => (
                                                        <div
                                                            key={(i + 1) * j}
                                                            onClick={() => handleCellSelect(cell, j)}
                                                            className={cell && cell.active ? (props.selectedDay === cell.day ? [classes.available, classes.selected].join(' ') : classes.available) : ""}>
                                                            <span>{cell && cell.day}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    ) : <div style={{ width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        هیچ زمان خالی ای موجود نیست
                    </div>
                )
            }
        </div>
    )
};

export default RhDatepicker;
