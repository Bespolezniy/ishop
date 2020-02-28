import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { 
  Typography, 
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Banner1 from "../../images/banner1.jpg";
import Banner2 from "../../images/banner2.jpg";
import Banner3 from "../../images/banner3.jpg";

const useStyles = makeStyles( theme => ({
  banners: {
    display: "flex",
    height: 186,
    marginTop: 1,
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      width: "100%"
    },
  },
  banner: {
    alignItems: "center",
    color: "white",
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-around",
    position: "relative",
    marginLeft: 1,
    width: "33%",
    [theme.breakpoints.down("sm")]: {
      height: 350,
      flexDirection: "column",
      justifyContent: "center",
      margin: "0 0 1px 0",
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  bannerText: {
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    },
  },
  bannerTextHide: {
    textAlign: "center"
  },
  bannerImg: {
    position: "absolute",
    top: 0,
    zIndex: -1
  },
  bannerBtnText: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
  },
  hide: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block"
    },
  },
  bannerTitle: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 20
    }
  }
}))

const Banners: React.FC = () => {

  const classes = useStyles()

  const banners: any[] = [
    {
      title: "Ноутбуки",
      url: Banner1
    },
    {
      title: "Планешты",
      url: Banner2
    },
    {
      title: "Аксессуары",
      url: Banner3
    }
  ]

  return (
    <section className={classes.banners}>
      {banners.map( banner => <Banner key={banner.title} banner={banner}/>)}

    </section>
  )
}

interface Props {
  children?: React.ReactElement
  banner: {
    title: string
    url: string
  }
}

const Banner = (props: Props) => {

  const { title, url } = props.banner
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const { t } = useTranslation()

  const handleMouseMove = () => setShow(true)

  const handleMouseOut = () => setShow(false)
  

  return (
    <Box className={classes.banner} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <img src={url} className={classes.bannerImg} alt={title} width="100%" height="100%"/>
    
      <Box display="flex" flexDirection="column" className={show ? classes.bannerText : classes.bannerTextHide}>
        <Typography>
          {t("Новые поступления")}
        </Typography>

        <Typography className={classes.bannerTitle} variant="h4">
          {t(title)}
        </Typography>
      </Box>
      
      <Button variant="contained" color="secondary" className={show ? "" : classes.hide}>
        <Link className={classes.bannerBtnText} to={`${title}/`}>{t("Купить сейчас")}</Link>
      </Button>
    </Box>
  )
}

export default Banners