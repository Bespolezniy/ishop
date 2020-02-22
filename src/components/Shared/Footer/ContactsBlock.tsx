import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { 
  Typography, 
  Box,
  Divider
} from "@material-ui/core"
import { 
  MailOutline, 
  Phone, 
  Room, 
  Instagram,
  Facebook,
  Twitter
 } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles( theme => ({
  contactsBox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: 20
  },
  footerTitle : {
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: 16
    }
  },
  footerList: {
    listStyle: "none",
    marginTop: 20,
    paddingLeft: 0
  },
  listItem: {
    marginBottom: 10
  },
  footerMediaList: {
    display: "flex",
    listStyle: "none",
    paddingLeft: 0
  },
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
  contactLink: {
    alignItems: "center",
    color: "white",
    display: "flex",
    fontWeight: 300,
    textDecoration: "none",
    opacity: ".7",
    "&:hover": {
      color: theme.palette.secondary.main,
      opacity: 1,
      transitionDuration: ".25s"
    }
  },
  contactIcon: {
    marginRight: 10
  },
  mediaIcon: {
    color: "white",
    margin: "-15px 10px 0 0",
    opacity: ".7",
    "&:hover": {
      color: theme.palette.secondary.main,
      opacity: 1,
      transitionDuration: ".25s"
    }
  },
  divider: {
    backgroundColor: "white",
    margin: "15px 0"
  }
}))

const ContactsBlock = () => {
  
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.contactsBox}>
      <Typography className={classes.footerTitle} variant="h6">
        {t("Контактная информация")}
      </Typography>
        
      <ul className={classes.footerList}>
        <li className={classes.listItem}>
          <Link className={classes.contactLink} to="/">
            <Room color="secondary" className={classes.contactIcon}/>
            Bespolezniy Company
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link className={classes.contactLink} to="/">
            <Phone color="secondary" className={classes.contactIcon}/>
            {`${t("Звоните нам")}: 800-2345-6789`}
          </Link>
        </li>

        <li className={classes.listItem}>
          <Link className={classes.contactLink} to="/">
            <MailOutline color="secondary" className={classes.contactIcon}/>
            info@demolink.org
          </Link>
        </li>
      </ul>

      <ul className={classes.footerMediaList}>
        <li>
          <Link className={classes.mediaIcon} to="/">
            <Facebook />
          </Link>
        </li>

        <li>
          <Link className={classes.mediaIcon} to="/">
            <Twitter />
          </Link>
        </li>

        <li>
          <Link className={classes.mediaIcon} to="/">
            <Instagram />
          </Link>
        </li>
      </ul>
    </Box>
  )
}

export default ContactsBlock