import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import {
  FaMoneyBillWave,
  FaPhoenixFramework,
  FaUserGraduate,
} from 'react-icons/fa';
import { GiPayMoney, GiSpellBook } from 'react-icons/gi';

const useStyles = makeStyles(theme => ({
  iconsGridContainer: {
    color: 'yellow',
    background: 'black',
    paddingTop: '20px',
  },

  card_1: {
    marginTop: '-70px',
    height: '150px',
    marginBottom: '20px',
    background: '#264653',
    textAlign: 'center',
    '&:hover': {
      background: 'black',
    },
  },

  card_2_3: {
    textAlign: 'center',
    marginBottom: '20px',
    '&:hover': {
      background: 'black',
    },
  },

  icons: {
    fontSize: '4rem',
    textAlign: 'center',
    marginRight: '10px',
    marginLeft: '10px',
  },

  icon_1: {
    fontSize: '4rem',
    textAlign: 'center',
    marginRight: '80px',
    marginLeft: '100px',
    color: 'yellow',
  },
}));

const IconsGrid = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.iconsGridContainer}
        container
        direction='row'
        justify='space-evenly'>
        <Grid item xs={12} md={3}>
          <Card elevation={0} className={classes.card_1}>
            <CardContent>
              <div>
                <div>
                  <GiPayMoney className={classes.icon_1} />
                </div>
                <div>
                  <h3>Free Scholarship</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.card_2_3}>
            <CardContent>
              <div className={classes.card_2_3_parent}>
                <div>
                  <GiSpellBook className={classes.icons} />
                </div>
                <div>
                  <h3> A+ Score</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.card_2_3}>
            <CardContent>
              <div className={classes.card_2_3_parent}>
                <div>
                  <FaUserGraduate className={classes.icons} />
                </div>
                <div>
                  <h3>GRASAC</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default IconsGrid;
