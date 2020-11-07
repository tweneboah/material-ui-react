const { createMuiTheme } = require('@material-ui/core');

//Dark mode

// const darkTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// });

// export default darkTheme

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#003049',
    },
    secondary: {
      main: '#d62828',
    },
    type: 'dark', //This is will make your component dark theme
  },
  typography: {
    h1: {
      fontWeight: 800,
      fontSize: '30rem',
    },
  },
});

export default theme;
