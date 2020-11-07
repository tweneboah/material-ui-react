import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import HomeBanner from './components/HomeBanner/HomeBanner';
import Navbar from './components/Navbar/Navbar';
import theme from './utils/theme';
import FooterComponent from './components/FooterComponent/FooterComponent';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <HomeBanner />

        <FooterComponent />
      </ThemeProvider>
    </>
  );
};

export default App;
