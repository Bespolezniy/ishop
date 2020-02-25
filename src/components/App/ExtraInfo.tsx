import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

import { 
  Typography, 
  Box
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import {
  AccountBalanceWallet,
  LocalShipping,
  AttachMoney
} from '@material-ui/icons'


const useStyles = makeStyles( theme => ({
  extraInfo: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 30px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column"
    }
  },
  infoBlock: {
    border: "1px solid grey",
    borderRadius: 6,
    color: theme.palette.primary.main,
    margin: "0 10px",
    marginBottom: 50,
    textDecoration: "none",
    width: "33%",
    "&:hover": {
      borderColor: theme.palette.secondary.main,
      transitionDuration: ".25s"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  blockTitle: {
    marginTop: 10,
    alignItems: "center",
    display: "flex",
    fontWeight: "bold"
  },
  titleIcon: {
    marginRight: 5
  },
  blockText: {
    marginTop: 15,
    textAlign: "center"
  },
  paymentMethods: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 28,
    marginTop: 15,
    minWidth: 120
  }
}))

const ExtraInfo: React.FC = () => {

  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <section className={classes.extraInfo}>
      <Link to="/" className={classes.infoBlock}>
        <Box 
          padding={3} 
          display="flex" 
          flexDirection="column" 
          alignItems="center"
        >
          <Typography className={classes.blockTitle} variant="h5">
            <AccountBalanceWallet className={classes.titleIcon} color="secondary"/>
            {t("Способы оплаты")}
          </Typography>

          <Typography className={classes.blockText} variant="body1">
            {t("Важно выбрать не только решение которое предлагает специфичные методы оплаты но и популярное на онлайн рынке. Мы остановились на Visa & MasterCard так как они широко распространены среди покупателей")}
          </Typography>
 
          <Box className={classes.paymentMethods}>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-visa"></i>
          </Box>
        </Box>
      </Link>

      <Link to="/" className={classes.infoBlock}>
        <Box 
          padding={3} 
          display="flex" 
          flexDirection="column" 
          alignItems="center"
        >
          <Typography className={classes.blockTitle} variant="h5">
            <LocalShipping className={classes.titleIcon} color="secondary"/>
            {t("Отправление и доставка")}
          </Typography>

          <Typography className={classes.blockText} variant="body1">
            {t("Здесь вы можете узнать детали о том как ваш заказ могут доставить до вашего дома.")}
          </Typography>
        </Box>
      </Link>

      <Link to="/" className={classes.infoBlock}>
        <Box 
          padding={3} 
          display="flex" 
          flexDirection="column" 
          alignItems="center"
        >
          <Typography className={classes.blockTitle} variant="h5">
            <AttachMoney className={classes.titleIcon} color="secondary"/>
            {t("100% гарантия возврата денег")}
          </Typography>

          <Typography className={classes.blockText} variant="body1">
            {t("Если вы на 100% недовольны результатом запросите бесплатную замену посылки или полное возмещение в течение 30 дней")} 
          </Typography>
        </Box>
      </Link>
    </section>
  )
}

export default ExtraInfo