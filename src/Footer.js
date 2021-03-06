import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: '#64FECC',
    backgroundColor: 'black',
    color: 'white',
    // marginTop: theme.spacing(3),
    padding: theme.spacing(3, 0),
  },
  copyright: {
    color: 'white',
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        {/* Copyright */}
        <Typography className={classes.copyright} variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://www.reesby.com.au" target="_blank">
            Reesby Pty Ltd
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
