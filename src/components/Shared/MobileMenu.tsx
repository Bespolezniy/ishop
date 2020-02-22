import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { 
  Box, 
  Menu, 
  IconButton, 
  MenuItem, 
  Divider 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';

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

const MenuMobile: React.FC = () => {
  
  const { t } = useTranslation()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)

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
        <MenuItem onClick={handleClose}>
          <Link className={classes.navLink} title={t("Главная")} to="/">{t("Главная")}</Link>
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <Link className={classes.navLink} title={t("Контакты")} to="/contacts">
            {t("Контакты")}
          </Link>
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <Link className={classes.navLink} title={t("Карта Сайта")} to="/site-map">
            {t("Карта Сайта")}
          </Link>
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <Link className={classes.navLink} title="blog" to="/blog">{t("Блог")}</Link>
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <Link className={classes.navLink} title="whishlist" to="/whishlist">
            {t("Список желаемого")}
          </Link>
        </MenuItem>
        <Divider />
        
        <MenuItem onClick={handleClose}>
          <Link className={classes.navLink} title={t("Войти")} to="/enter">
            {t("Войти")}
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default MenuMobile