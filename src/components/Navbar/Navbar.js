import React, { useState } from 'react';
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import DrawerComponent from './DrawerComponent/DrawerComponent';
import { GiBookAura } from 'react-icons/gi';
import { FiBookOpen } from 'react-icons/fi';
import { RiMoneyPoundCircleLine } from 'react-icons/ri';
import { BsFillPersonPlusFill, BsFillBrightnessHighFill } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';

import { ImHappy } from 'react-icons/im';

const useStyles = makeStyles(theme => ({
  logo: {
    fontSize: '1.9rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
    },
  },
  acount: {
    marginLeft: 'auto',
    '&:hover': {
      background: 'purple',
    },
  },
  tabsContainer: {
    marginLeft: 'auto',
  },
  iconLogo: {
    color: 'yellow',
    fontSize: '3rem',
  },
  icons: {
    fontSize: '1.4rem',
  },
}));

const Navbar = () => {
  //Hooks
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //Boolean(anchorEl) This is use to convert a null value in to a boolean
  //anchorEl Is us to set the position of the menu

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  //Functions
  const handleClickTab = (e, newValue) => {
    //The second value contains the current index
    setValue(newValue);
  };

  const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar elevation={0} color='primary'>
        <Toolbar>
          <Typography>
            <GiBookAura className={classes.iconLogo} />
          </Typography>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                onChange={handleClickTab}
                className={classes.tabsContainer}
                indicatorColor='secondary'
                value={value}>
                <Tab
                  disableRipple
                  icon={<FiBookOpen className={classes.icons} />}
                  label='Courses'
                />
                <Tab
                  disableRipple
                  icon={<RiMoneyPoundCircleLine className={classes.icons} />}
                  label='Fees'
                />
                <Tab
                  disableRipple
                  icon={<BsFillPersonPlusFill className={classes.icons} />}
                  label='Parents Account'
                />

                <Tab
                  disableRipple
                  icon={<ImHappy className={classes.icons} />}
                  label='Holidays'
                />

                <Tab
                  disableRipple
                  icon={<VscAccount className={classes.icons} />}
                  label='Teachers Account'
                />

                <Tab
                  disableRipple
                  icon={<BsFillBrightnessHighFill className={classes.icons} />}
                  label='Openings'
                />
              </Tabs>
              <Button
                aria-controls='menu'
                onMouseOver={handleOpenMenu}
                className={classes.acount}
                disableElevation
                disableRipple
                variant='contained'
                color='secondary'>
                Profile
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Menu */}
      <Menu
        style={{ marginTop: '50px' }}
        id='menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>
        <MenuItem onClick={handleCloseMenu}>My Account</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Examination Results</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Promotions</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Pending Fees</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Final Project</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
