import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui//core/Button';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// styling for buttons, with success, warning and danger, since Material UI button colors do not have the colors needed
const useStyles = makeStyles({
  btnSuccess: {
    background: '#52C41A',
    color: 'white',
    width: '100%',
    height: '50px',
  },
  btnWarning: {
    background: '#FAAD14',
    color: 'white',
    width: '100%',
    height: '50px',
  },
  btnDanger: {
    background: '#FF4D4F',
    color: 'white',
    width: '100%',
    height: '50px',
  },
});

export default function Clocking() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <h1>Available? Clock In!</h1>
        <Grid container spacing={1}>
          <Grid item lg="12" md="12" sm="4" xs="4"><Button variant="contained" className={classes.btnSuccess}>Clock In</Button></Grid>
          <Grid item lg="12" md="12" sm="4" xs="4"><Button variant="contained" className={classes.btnWarning}>Take Break</Button></Grid>
          <Grid item lg="12" md="12" sm="4" xs="4"><Button variant="contained" className={classes.btnDanger}>Clock Out</Button></Grid>
        </Grid>
        <h3>Total Time: 00:00:00</h3>
      </React.Fragment>
    );
}