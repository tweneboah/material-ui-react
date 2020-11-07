import React from 'react';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  conatainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
}));
const SubscribeEmail = () => {
  const classes = useStyles();
  return (
    <div className={classes.conatainer}>
      <div>
        <TextField label='Enter Email' variant='outlined' color='secondary' />
      </div>
      <Button variant='contained' color='primary'>
        Send
      </Button>
    </div>
  );
};

export default SubscribeEmail;
