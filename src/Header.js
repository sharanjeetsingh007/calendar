import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './img/reesby_logo.jpeg';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    // backgroundColor: '#64FECC',
    backgroundColor: 'black',
    color: 'white',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  img: {
    height: '70px',
    borderRadius: '50%',
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <a href=""><img className={classes.img} src={logo} /></a>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>

        <Button color="inherit" size="large">
          Settings
        </Button>
        <Button color="inherit" size="large">
          Logout
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
