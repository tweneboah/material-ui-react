import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

//For Grid the container is 12

const GridContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction='row'>
        <Grid item sm={12} md={4} style={{ backgroundColor: 'red' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod in
          reprehenderit minus vero iste sit ea fugit quos sequi, quam eligendi
          inventore voluptas. Quisquam fugit nesciunt quae nulla error iure!
        </Grid>

        <Grid item sm={12} md={4}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <div>
              <h1>News</h1>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              odio eos facere eligendi est voluptatem, accusamus enim delectus
              saepe ex. Eaque eos optio quia quisquam laboriosam odio quae omnis
              reprehenderit.
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>am here</h1>
                <h1>am here</h1>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item sm={12} md={4} style={{ backgroundColor: 'green' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          sequi id vitae minus delectus ullam, explicabo nesciunt omnis
          repudiandae quasi debitis quisquam? Id impedit veniam aliquam corrupti
          dolores magni quos.
        </Grid>
      </Grid>
    </div>
  );
};

export default GridContainer;
