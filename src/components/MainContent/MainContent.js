import React from 'react';
import { Grid, Button, makeStyles, Typography } from '@material-ui/core';
import studentsPic from '../../img/bannerimg.png';
import school from '../../img/scho.svg';
import './MainContent.css';

const useStyles = makeStyles(theme => ({
  content: {
    fontSize: '1.2rem',
  },
  container: {
    border: '1px solid white',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    '&:hover': {
      background: 'black',
    },
  },
  btn: {
    color: 'yellow',
    border: '1px solid yellow',
  },
  imgText: {
    color: '#457b9d',
    border: '1px solid white',
    width: '100%',
    textAlign: 'right',
    paddingRight: '10px',
    zIndex: '-1',
    fontSize: '2rem',
    padding: '90px',
  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={5} item>
          <div className='me'>
            <p className={classes.imgText}>fun fun time</p>
          </div>
        </Grid>

        <Grid md={5} item>
          <div className={classes.container}>
            <Typography variant='h2'>Be a Hero</Typography>
            <p className={classes.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sint
              corporis excepturi quidem ducimus aut repellat, aliquid quisquam
              nulla provident modi ratione aliquam inventore possimus minus, ad
              natus distinctio tempore! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloremque cupiditate eius facilis eveniet
              expedita dignissimos ipsam laboriosam odit, consectetur
              repellendus, tempora error enim perspiciatis rerum ex, sunt quia
              dicta delectus.
            </p>
            <Button variant='outlined' className={classes.btn}>
              Read More
            </Button>
          </div>
        </Grid>
      </Grid>
      {/* Container 2 */}
      <Grid container justify='space-around' alignItems='center'>
        <Grid md={5} item>
          <div className={classes.container}>
            <Typography variant='h2'>Success is our priority</Typography>
            <p className={classes.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sint
              corporis excepturi quidem ducimus aut repellat, aliquid quisquam
              nulla provident modi ratione aliquam inventore possimus minus, ad
              natus distinctio tempore!
            </p>
            <Button className={classes.btn} variant='outlined' color='primary'>
              Read More
            </Button>
          </div>
        </Grid>

        <Grid md={5} item>
          <div className='main'>
            <img
              style={{ width: '80%', height: '30rem' }}
              src={school}
              alt=''
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MainContent;
