import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { 
  Box, 
  Menu, 
  IconButton, 
  MenuItem, 
  Divider 
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles( theme => ({
  menu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex"
    }
  },
  navLink : {
    color: theme.palette.primary.main,
    fontSize: 14,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    }
  },
  menuIcon: {
    marginTop: 15
  }
}))

interface Props {
  children?: React.ReactElement
  menuItems: any[]
}

const MenuMobile = (props: Props) => {
  
  const { t } = useTranslation()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { menuItems } = props

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <Box className={classes.menu}>
      <IconButton 
        aria-controls="mobile-menu" 
        aria-haspopup="true"
        className={classes.menuIcon}
        onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((menuItem: any, i: number) => [
            <MenuItem onClick={handleClose}>
              <Link 
                key={i}
                className={classes.navLink} 
                title={t(menuItem.name)} 
                to={menuItem.path}
              >
                {t(menuItem.name)}
              </Link>
            </MenuItem>,
            <Divider />
        ])}
      </Menu>
    </Box>
  )
}

export default MenuMobile