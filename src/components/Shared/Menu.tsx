import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles( theme => ({
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  navLink : {
    color: theme.palette.primary.main,
    fontSize: 14,
    margin: "0 15px 0 15px",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    }
  },
  helloText: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }
}))

const Menu: React.FC = () => {
  
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Box paddingTop={1} className={classes.menu}>
      <Typography color="secondary">
        <Link className={classes.navLink} title={t("Главная")} to="/">{t("Главная")}</Link>

        <Link className={classes.navLink} title={t("Контакты")} to="/contacts">
          {t("Контакты")}
        </Link>

        <Link className={classes.navLink} title={t("Карта Сайта")} to="/site-map">
          {t("Карта Сайта")}
        </Link>

        <Link className={classes.navLink} title="blog" to="/blog">{t("Блог")}</Link>

        <Link className={classes.navLink} title="whishlist" to="/whishlist">
          {t("Список желаемого")}
        </Link>

        <Link className={classes.navLink} title={t("Войти")} to="/enter">
          {t("Войти")}
        </Link>

        <span className={classes.helloText}>{t("Добро пожаловать в наш онлайн магазин")}</span>
      </Typography>
    </Box>      
  )
}

export default Menu