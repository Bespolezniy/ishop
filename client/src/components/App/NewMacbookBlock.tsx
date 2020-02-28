import React from "react"
import { Link } from "react-router-dom"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { Bounce } from "react-reveal"
import { useTranslation } from "react-i18next"

import { 
  Typography, 
  Box,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import NewMacbook from "../../images/parallax.jpg"

const useStyles = makeStyles( theme => ({
  newMacbook: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "flex-end",
    height: 770,
    marginTop: 20,
    overflow: "hidden",
    marginBottom: 50,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: 570
    }
  },
  parallaxContent: {
    alignSelf: "center",
    color: "white",
    position: "absolute",
    left: 150,
    zIndex: 10,
    width: 500,
    [theme.breakpoints.down("sm")]: {
      left: 100,
    },
    [theme.breakpoints.down("xs")]: {
      left: 10,
      width: 300
    }
  },
  parallaxTitle: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 28
    }
  },
  parallaxSubtitle: {
    fontWeight: "bold",
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22
    }
  },
  parallaxText: {
    marginTop: 20,
    opacity: ".7",
    [theme.breakpoints.down("md")]: {
      fontSize: 16
    }
  },
  parallaxBtn: {
    marginTop: 20
  },
  parallaxBtnText: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none"
  }
}))

const NewMacbookBlock: React.FC = () => {

  const classes = useStyles()
  const { t } = useTranslation()
  
  const title = "Macbook Air"
  const subtitle = "Почти невесомый. На новой высоте."
  const text = "Новый MacBook Air весит всего 1,25 кг, а способен на многое. Процессор Intel Core i5 восьмого поколения легко справляется с разными задачами — от чтения писем и просмотра сайтов до создания презентаций в Keynote и монтажа видео в iMovie. Память до 16 ГБ позволяет работать в нескольких приложениях сразу, а SSD‑накопитель до 1 ТБ — мгновенно открывать приложения и хранить множество документов, фото и видео."

  return (
    <section className={classes.newMacbook}>
      <Box className={classes.parallaxContent}>
        <Bounce duration={1500} top>
          <Typography className={classes.parallaxTitle} variant="h2">
            {title}
          </Typography>
        </Bounce>

        <Bounce duration={1500} left>
          <Typography className={classes.parallaxSubtitle} variant="h5">
            {t(subtitle)}
          </Typography>
        </Bounce>

        <Bounce duration={1500} bottom>
          <Typography className={classes.parallaxText} variant="body2">
            {t(text)}
          </Typography>
 
          <Button 
            className={classes.parallaxBtn} 
            variant="contained" 
            color="secondary"
          >
            <Link 
              className={classes.parallaxBtnText} 
              to="/catalog/good"
            >
              {t("Купить сейчас")}
            </Link>
          </Button>
        </Bounce>
      </Box>

      <ParallaxProvider>
        <Parallax className="custom-class" y={[-25, 25]} tagOuter="figure">
          <img src={NewMacbook} alt="" width="100%" height="auto"/>
        </Parallax>
      </ParallaxProvider>
    </section>
  )
}

export default NewMacbookBlock