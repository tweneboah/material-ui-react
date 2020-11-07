import React from 'react';
import { Container, Hidden, makeStyles, Button } from '@material-ui/core';
import MainContent from '../MainContent/MainContent';
import IconsGrid from '../IconsGrid/IconsGrid';

const useStyles = makeStyles(theme => ({
  conatainer: {
    height: '100vh',
    background: `linear-gradient(rgba(38, 70, 83, .8), rgba(33, 70, 131, .5)), url(
      'https://cdn.pixabay.com/photo/2015/09/04/23/04/library-922998_960_720.jpg'
    )`,
    backgroundPosition: 'contained',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexDirection: 'column',
  },
  title: {
    fontSize: '4rem',
    color: '#fff1e6',
  },
  text: {
    fontSize: '1.4rem',
    marginBottom: '20px',
  },
}));

const HomeBanner = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.conatainer} maxWidth={false}>
        <Hidden mdDown>
          <h1 className={classes.title}>Your Classroom</h1>
          <p className={classes.text}>Your Graduate School of management</p>

          <Button variant='contained' color='secondary'>
            Discover more
          </Button>
        </Hidden>
      </div>
      <IconsGrid />
      <MainContent />
    </>
  );
};

export default HomeBanner;
