import React from 'react';
import {
  Avatar,
  Grid,
  ListItem,
  List,
  ListItemAvatar,
  useTheme,
  makeStyles,
  Hidden,
} from '@material-ui/core';

import {
  FcAutomotive,
  FcPhone,
  FcOnlineSupport,
  FcVoicemail,
} from 'react-icons/fc';
import './Footer.css';
import { GiBookAura } from 'react-icons/gi';

const useStyles = makeStyles(theme => ({
  footer_icons: {
    fontSize: '2rem',
  },
  text: {
    fontSize: '1.1rem',
  },
  logo: {
    fontSize: '8rem',
    color: 'yellow',
  },
}));

const FooterComponent = () => {
  const classes = useStyles();
  return (
    <div className='footer'>
      <Hidden smDown>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'>
          <Grid item sm={12} xs={12} md={4}>
            <div className='childe1__container'>
              <div>
                <GiBookAura className={classes.logo} />
              </div>
            </div>
          </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='childe2__container'>
              <div className='childe2__title'>
                <List dense>
                  <ListItem>
                    <ListItemAvatar>
                      <FcOnlineSupport className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>24/7 Support</ListItem>
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <FcPhone className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>+2338942722</ListItem>
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <FcVoicemail className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>
                      We answer within 2 hours during working days
                    </ListItem>
                  </ListItem>
                </List>
              </div>
            </div>
          </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='child3__container'>
              <div className='child3__title'>
                <h1>About Us</h1>
                <p className={classes.text}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime quod fuga maiores. Ducimus accusantium, vero
                  praesentium deleniti excepturi, quod, inventore earum
                  asperiores odio laborum numquam repellat at error corrupti
                  debitis.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default FooterComponent;
