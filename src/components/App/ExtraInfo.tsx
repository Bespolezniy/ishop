import React from "react";

import { 
  Typography, 
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccountBalanceWallet,
  LocalShipping,
  AttachMoney
} from '@material-ui/icons';


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
    alignItems: "center",
    border: "1px solid grey",
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    margin: "0 10px",
    marginBottom: 50,
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

  const title = "Payment Methods"
  const text = "It is equally important to choose the solution which offers a specific selection of credit cards that are most popular in the merchants target markets. We take Visa & MasterCard as they are widely used by cyber customers."

  return (
    <section className={classes.extraInfo}>
      <Box padding={3} className={classes.infoBlock}>
        <Typography className={classes.blockTitle} variant="h5">
          <AccountBalanceWallet className={classes.titleIcon} color="secondary"/>
          {title}
        </Typography>

        <Typography className={classes.blockText} variant="body1">
          {text}
        </Typography>
 
        <Box className={classes.paymentMethods}>
          <i className="fab fa-cc-paypal"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-visa"></i>
        </Box>
      </Box>

      <Box padding={3} className={classes.infoBlock}>
        <Typography className={classes.blockTitle} variant="h5">
          <LocalShipping className={classes.titleIcon} color="secondary"/>
          Shipping and Delivery
        </Typography>

        <Typography className={classes.blockText} variant="body1">
          Here you can read some details about a nifty little lifecycle of your order's journey from the time you place your 
          order to your new treasures arriving at your doorstep.
        </Typography>
      </Box>

      <Box padding={3} className={classes.infoBlock}>
        <Typography className={classes.blockTitle} variant="h5">
          <AttachMoney className={classes.titleIcon} color="secondary"/>
          100% money back guarantee
        </Typography>

        <Typography className={classes.blockText} variant="body1">
          If you are not 100% satisfied with the results from your listing, request a free reposting or a full refund within 
          30 days after your listing expires. 
        </Typography>
      </Box>
    </section>
  )
}

export default ExtraInfo