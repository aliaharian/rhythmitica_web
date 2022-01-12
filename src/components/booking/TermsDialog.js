import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import classes from '../../assets/styleSheets/booking.module.scss'

export default function TermsDialog({
  open,
  setOpen,
  handleAccept,
  termsText
}) {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      disableScrollLock
      PaperProps={{ className: classes.termsDialog }}
    >

      <DialogTitle id="alert-dialog-title">
        {"Rhythmitica Terms"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div dangerouslySetInnerHTML={{ __html: termsText }}></div>
        </DialogContentText>
        <DialogActions>
          <Button className={classes.bookingBookMoreBtn} onClick={handleClose}>Disagree</Button>
          <Button className={classes.bookingPayBtn} onClick={handleAccept} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </DialogContent>

    </Dialog>
  );
}