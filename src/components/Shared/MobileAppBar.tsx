import React from "react";
import { Link } from "react-router-dom";

import { 
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuProps,
  MenuItem,
  Button,
  ListItemIcon,
} from "@material-ui/core";
import { 
  PhoneIphone, 
  TabletMac, 
  LaptopMac, 
  DesktopMac, 
  Watch,
  Add
} from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledMenu = withStyles({
  paper: {
    color: "white",
    backgroundColor: "black",
    minHeight: 280,
    width: "100%",
  },
})((props: MenuProps) => (
  <Menu
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const useStyles = makeStyles( theme => ({
  appBar: {
    backgroundColor: "black",
    padding: "10px 0",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex"
    }
  },
  buttonText: {
    alignItems: "center",
    color: "white",
    display: "flex",
    textDecoration: "none",
    width: "100%",
    "&:hover": {
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    },
  },
  categoryText: {
    marginLeft: 10
  },
  toolBar: {
    justifyContent: "center"
  },
  menuBtn: {
    color: "white"
  },
  buttonIcon: {
    color: "white"
  }
}))


const MobileAppBar = () => {
  
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)
  

  return (
    <AppBar className={classes.appBar} position="relative">
      <Toolbar className={classes.toolBar} variant="dense">
        <Button 
          aria-controls="appbar-menu" 
          aria-haspopup="true" 
          className={classes.menuBtn} 
          onClick={handleClick}
          endIcon={<Add />}
        >
          Menu
        </Button>

        <StyledMenu
          id="appbar-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          <MenuItem onClick={handleClose}>
            <Link to="mac/" color="inherit" aria-label="menu" className={classes.buttonText}>
              <ListItemIcon>
                <DesktopMac className={classes.buttonIcon} />
              </ListItemIcon>

              <Typography variant="h6" color="inherit">
                Mac
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="macbook/" color="inherit" aria-label="menu" className={classes.buttonText}>
              <ListItemIcon>
                <LaptopMac className={classes.buttonIcon} />
              </ListItemIcon>

              <Typography variant="h6" color="inherit">
               Macbook
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="ipad/" color="inherit" aria-label="menu" className={classes.buttonText}>
              <ListItemIcon>
                <TabletMac className={classes.buttonIcon} />
              </ListItemIcon>

              <Typography variant="h6" color="inherit">
                iPad
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="iphone/" color="inherit" aria-label="menu" className={classes.buttonText}>
              <ListItemIcon>
                <PhoneIphone className={classes.buttonIcon} />
              </ListItemIcon>

              <Typography variant="h6" color="inherit">
                iPhone
              </Typography>
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to="watch/" color="inherit" aria-label="menu" className={classes.buttonText}>
              <ListItemIcon>
                <Watch className={classes.buttonIcon} />
              </ListItemIcon>

              <Typography variant="h6" color="inherit">
                Watch
              </Typography>
            </Link>
          </MenuItem>
        </StyledMenu>
      </Toolbar>
    </AppBar>
  )
}

export default MobileAppBar