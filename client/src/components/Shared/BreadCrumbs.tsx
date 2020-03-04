import React from "react"
import { Link as RouterLink, useRouteMatch } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { 
  Link,
  Breadcrumbs
 } from "@material-ui/core"
 import { Home, ContactSupport } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) => ({
  breadcrumbs: {
    margin: "10px 10px 10px 30px"
  },
  link: {
    alignItems: "center",
    borderRadius: "6px",
    display: "flex",
    padding: 10,
    "&:hover": {
      backgroundColor: "black",
      color: theme.palette.secondary.main,
      textDecoration: "none",
      transitionDuration: ".25s"
    }
  }
}))

const RouterBreadcrumbs = () => {

  const classes = useStyles()
  const homeMatches = useRouteMatch("/")
  const supportMatches = useRouteMatch("/support")
  const { t } = useTranslation()

  return (
    <Breadcrumbs 
      className={classes.breadcrumbs} 
      aria-label="breadcrumb"
    >
      {homeMatches && (
        <Link 
          className={classes.link} 
          component={RouterLink} to="/"
          title={t("Главная")}
        >
          <Home />
          {t("Главная")}
        </Link>
      )}

      {supportMatches && (
        <Link 
          className={classes.link} 
          component={RouterLink} 
          to="/support"
          title={t("Служба поддержки")}
        >
          <ContactSupport />
          {t("Служба поддержки")}
        </Link>
      )}         
    </Breadcrumbs> 
  )
}

export default RouterBreadcrumbs
