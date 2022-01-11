import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import classes from '../../assets/styleSheets/singleEvent.module.scss'
import moment from 'moment'
export default function EventSessionsDialog({
  open,
  setOpen,
  sessions
}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText className={classes.eventSessionsTableContainer} id="alert-dialog-description">
        <p className={classes.eventSessionsTableHeader}>Event Schedule</p>
          <div className={classes.eventSessionsTable}>
            <div className={classes.eventSessionsTableThead}>
              <div>
                <div>Session</div>
                <div>Day</div>
                <div>Date</div>
                <div>Time</div>
              </div>
            </div>
            <div className={classes.eventSessionsTableTBody}>
              {
                sessions.map((session, index) => {
                  let date = session.start_date.split(' ')[0]
                  let time = session.start_date.split(' ')[1]
                  return (
                    <div>
                      <div>{index + 1}</div>
                      <div>{moment(date).format('dddd')}</div>
                      <div>{date}</div>
                      <div>{time}</div>
                    </div>)
                })
              }


            </div>
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}