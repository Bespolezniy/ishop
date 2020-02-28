import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { 
  Menu,
  MenuProps,
  MenuItem,
  Button
} from "@material-ui/core"
import { Add } from "@material-ui/icons"
import { makeStyles, withStyles, Theme } from "@material-ui/core/styles"

const StyledMenu = withStyles({
  paper: {
    color: "white",
    backgroundColor: "black"
  },
})((props: MenuProps) => (
  <Menu
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
))

const useStyles = makeStyles((theme: Theme) => ({
  footerLink: {
    color: "white",
    fontWeight: 300,
    textDecoration: "none",
    opacity: ".7",
    "&:hover": {
      color: theme.palette.secondary.main,
      opacity: 1,
      transitionDuration: ".25s"
    }
  },
  menuBtn: {
    color: "white"
  }
}))

interface Props {
  children?: React.ReactElement
  menu: {
   name: string
   links: any[]
  }
}

const MobileFooterMenu = (props: Props) => {
  
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { t } = useTranslation()
  const { menu } = props

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <Button 
        aria-controls={`${menu.name}-menu`} 
        aria-haspopup="true" 
        className={classes.menuBtn} 
        onClick={handleClick}
        endIcon={<Add />}
      >
        {t(menu.name)}
      </Button>

      <StyledMenu
        id={`${menu.name}-menu`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        {menu.links.map((menuItem, i) => (
          <MenuItem key={i} onClick={handleClose}>
            <Link 
              title={t(menuItem.linkName)} 
              className={classes.footerLink} 
              to={`${menuItem.linkPath}/`}
            >
              {t(menuItem.linkName)}
            </Link>
          </MenuItem>
        ))}

      </StyledMenu>
    </>
  )
}

export default MobileFooterMenu