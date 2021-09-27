import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Calendar, Badge } from 'antd';

import Grid from '@material-ui/core/Grid';

// import contents from different js files
import Clocking from './Clocking';
import Table from './Table';
import Profile from './Profile';
import AntCalendar from './components/antcalendar/AntCalendar';
import NpmCalendar from "./components/npmCalendar/NpmCalendar"
import CalendarNew from './components/calendarNew/CalendarNew';





const useStyles = makeStyles({
  content: {
    backgroundColor: 'white',
    padding: '2%',
  },
});

export default function Content(props) {
  const classes = useStyles();
  //console.log(props)
  return (
    <React.Fragment>
      <div className={classes.content}>
        <Grid container>
          <Grid item lg="12" md="12" sm="12" xs="12"><Profile /></Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Grid item lg="3" md="3" sm="12" xs="12"><Clocking /></Grid>
          <Grid item lg="9" md="9" sm="12" xs="12"><Table /></Grid>
        </Grid>
        <br />
        <CalendarNew />

        <br />
      </div>
    </React.Fragment>
  );
}