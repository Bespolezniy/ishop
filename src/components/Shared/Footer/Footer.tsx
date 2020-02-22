import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { 
  Typography, 
  Box,
  Divider
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import MobileFooter from "./MobileFooter"
import ContactsBlock from "./ContactsBlock"

const useStyles = makeStyles( theme => ({
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: "30px 30px",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  footerContent: {
    alignItems: "baseline",
    display: "flex",
    justifyContent: "space-between"
  },
  box: {
    display: "flex",
    flexGrow: 3,
    justifyContent: "space-between"
  },
  footerContacts: {
    display: "flex",
    flexGrow: 2,
    justifyContent: "center"
  },
  footerTitle : {
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: 16
    },
  },
  footerList: {
    listStyle: "none",
    marginTop: 20,
    paddingLeft: 0
  },
  listItem: {
    marginBottom: 10
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
  divider: {
    backgroundColor: "white",
    margin: "15px 0"
  }
}))

const Footer: React.FC = () => {
  
  const classes = useStyles()
  const { t } = useTranslation()

  const menu = [
    {
      name: "Информация",
      links: [
        {
          linkName: "Скидки",
          linkPath: "discounts"
        },
        {
          linkName: "Новые товары",
          linkPath: "new-products"
        },
        {
          linkName: "Популярные товары",
          linkPath: "popular-products"
        },
        {
          linkName: "Cвяжитесь с нами",
          linkPath: "contact-us"
        },
        {
          linkName: "О нас",
          linkPath: "about-us"
        },
        {
          linkName: "Карта Сайта",
          linkPath: "map-site"
        }
      ]
    },
    {
      name: "Категории",
      links: [
        {
          linkName: "Mac",
          linkPath: "mac"
        },
        {
          linkName: "Macbook",
          linkPath: "macbook"
        },
        {
          linkName: "iPad",
          linkPath: "ipad"
        },
        {
          linkName: "iPhone",
          linkPath: "iphone"
        },
        {
          linkName: "Watch",
          linkPath: "watch"
        }
      ]
    },
    {
      name: "Моя учетная запись",
      links: [
        {
          linkName: "Мои заказы",
          linkPath: "my-orders"
        },
        {
          linkName: "Мои возраты",
          linkPath: "my-returns"
        },
        {
          linkName: "Мои платежные квитанции",
          linkPath: "my-payments"
        },
        {
          linkName: "Мои адресcа",
          linkPath: "my-addresses"
        },
        {
          linkName: "Моя личная информация",
          linkPath: "my-personal-information"
        }
      ]
    }
  ]

  return (
    <>
      <MobileFooter listMenus={menu} />
      <footer className={classes.footer}>
        <Box className={classes.footerContent}>
          <Box className={classes.box}>
            {menu.map((item:any, i:number) => (
              <Box key={i}>
                <Typography className={classes.footerTitle} variant="h6">
                  {t(item.name)}
                </Typography>

                <ul className={classes.footerList}>
                  {item.links.map((link:any, i:number) => (
                    <li key={i} className={classes.listItem}>
                      <Link className={classes.footerLink} to={link.linkPath}>
                        {t(link.linkName)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            ))}
          </Box>

          <Box className={classes.footerContacts}>
            <ContactsBlock />
          </Box>
        </Box>
        <Divider className={classes.divider} />
        <a 
          href="https://github.com/Bespolezniy" 
          className={classes.footerLink} 
          title={t("Разработчик")}
        >
          © 2020 Bespolezniy™
        </a>
      </footer>
    </>
  )
}

export default Footer