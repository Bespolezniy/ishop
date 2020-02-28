import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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

interface Props {
  children?: React.ReactElement
  menuItems: any[]
}

const Menu = (props: Props) => {
  
  const { t } = useTranslation()
  const classes = useStyles()
  const { menuItems } = props

  return (
    <Box paddingTop={1} className={classes.menu}>
      <Typography color="secondary">
        {menuItems.map((menuItem: any, i: number) => (
          <Link 
            key={i}
            className={classes.navLink} 
            title={t(menuItem.name)} 
            to={menuItem.path}
          >
            {t(menuItem.name)}
          </Link>
        ))}

        <span className={classes.helloText}>{t("Добро пожаловать в наш онлайн магазин")}</span>
      </Typography>
    </Box>      
  )
}

export default Menu