import React from "react"

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { grey, lightBlue } from "@material-ui/core/colors"
import CssBaseline from "@material-ui/core/CssBaseline"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[500],
      main: grey[700],
      dark: grey[900],
      contrastText: "#fff"
    },
    secondary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700],
      contrastText: "#fff"
    }
  },
});

const withRoot = (Component: React.FC) => {
  
  const WithRoot = (props: any) => {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot