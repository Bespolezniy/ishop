import React from "react";
import { Link } from "react-router-dom";

import { 
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton
} from "@material-ui/core";
import { 
  PhoneIphone, 
  TabletMac, 
  LaptopMac, 
  DesktopMac, 
  Watch 
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import MobileAppBar from "./MobileAppBar";

const useStyles = makeStyles( theme => ({
  appBar: {
    backgroundColor: "black",
    padding: "10px 0",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  categoryButton: {
    "&:hover": {
      color: theme.palette.secondary.main,
    }
  },
  buttonText: {
    alignItems: "center",
    color: "white",
    display: "flex",
    margin: "0 40px",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    },
    [theme.breakpoints.down("md")]: {
      margin: "0 15px"
    }
  },
  categoryText: {
    marginLeft: 10
  },
  toolBar: {
    display: "flex",
    justifyContent: "center"
  }
}))

interface Props {
  window?: () => Window
  children?: React.ReactElement
}

const FixOnScroll = (props: Props) => {

  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Box style={!trigger ? {
        position:"relative"
      } : {
        position:"fixed", 
        top: 0, 
        width: "100%",
        zIndex: 10000
      }}>
      {children}
    </Box>
  );
}

const AppBarHeader = (props: Props) => {
  
  const classes = useStyles()

  return (
    <>
      <MobileAppBar />

      <FixOnScroll {...props}>
        <AppBar className={classes.appBar} position="relative">
          <Toolbar className={classes.toolBar} variant="dense">
            <IconButton className={classes.categoryButton}>
              <Link to="mac/" className={classes.buttonText} color="inherit" aria-label="menu">
                <DesktopMac />
                <Typography className={classes.categoryText} variant="h6" color="inherit">
                  Mac
                </Typography>
              </Link>
            </IconButton>

            <IconButton className={classes.categoryButton}>
              <Link to="macbook/" className={classes.buttonText} aria-label="menu">
                <LaptopMac />
                <Typography className={classes.categoryText} variant="h6" color="inherit">
                  Macbook
                </Typography>
              </Link>
            </IconButton>

            <IconButton className={classes.categoryButton}>
              <Link to="ipad/" className={classes.buttonText} aria-label="menu">
                <TabletMac />
                <Typography className={classes.categoryText} variant="h6" color="inherit">
                  iPad
                </Typography>
              </Link>
            </IconButton>

            <IconButton className={classes.categoryButton}>
              <Link to="iphone/" className={classes.buttonText} aria-label="menu">
                <PhoneIphone />
                <Typography className={classes.categoryText} variant="h6" color="inherit">
                  iPhone
                </Typography>
              </Link>
            </IconButton>

            <IconButton className={classes.categoryButton}>
              <Link to="watch/" className={classes.buttonText} aria-label="menu">
                <Watch />
                <Typography className={classes.categoryText} variant="h6" color="inherit">
                  Watch
                </Typography>
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </FixOnScroll>
    </>
  )
}

export default AppBarHeader