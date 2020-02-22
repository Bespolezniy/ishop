import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Bounce, Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import { 
  Typography, 
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Slide1 from "../../images/slide1.jpg";
import Slide2 from "../../images/slide2.jpg";
import Slide3 from "../../images/slide3.jpg";

const useStyles = makeStyles( theme => ({
  slider: {
    position: "relative"
  },
  slide: {
    alignItems: "center",
    color: "white",
    display: "flex",
    height: 556,
    marginTop: 1,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: 505
    },
    [theme.breakpoints.down("sm")]: {
      height: 375
    },
    [theme.breakpoints.down("xs")]: {
      height: 200
    }
  },
  slideContent: {
    margin: "0 150px",
    width: 500,
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
      width: 320
    }
  },
  slideTitle: {
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 24
    }
  },
  slideSubtitle: {
    fontWeight: "bold",
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15
    }
  },
  slideText: {
    marginTop: 20,
    opacity: ".7",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"    
    }
  },
  slideImg: {
    position: "absolute",
    top: 0,
    zIndex: -1,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 505
    },
    [theme.breakpoints.down("sm")]: {
      height: 375
    },
    [theme.breakpoints.down("xs")]: {
      height: 200
    }
  },
  slideBtn: {
    marginTop: 20
  },
  slideBtnText: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none"
  },
}))

const Slider = () => {

  const classes = useStyles()
    
  const items = [
    {
      title: "iMac",
      subtitle: "Ретина. Огромная и гармоничная.",
      text: "Мы всегда стремились изменить представление о том, каким должен быть настольный компьютер. Поэтому iMac объединяет в своём тонком корпусе самые продвинутые и одновременно простые в использовании технологии. Новый iMac идёт на очередной рекорд и расширяет границы возможного. Более быстрые процессоры и память, потрясающая графика и дисплей Retina с самым ярким и реалистичным изображением в истории Mac. iMac стал мощнее — во всех отношениях.",
      url: Slide1
    },
    {
      title: "Macbook Pro 16",
      subtitle: "Больше мощности за каждым пикселем.",
      text: "Новый MacBook Pro — наш самый мощный ноутбук, созданный для тех, кто меняет мир и раздвигает границы. Впечатляющий дисплей Retina 16 дюймов, невероятно быстрый процессор, графическая карта нового поколения, самый высокий ресурс аккумулятора для MacBook Pro, новая клавиатура Magic Keyboard и вместительный накопитель — это лучший профессиональный ноутбук для самых серьёзных профессионалов.",                                  
      url: Slide2
    },
    {
      title: "Macbook Air",
      subtitle: "Лёгкий. На годы вперед.",
      text: "Любимый всеми Mac, в который можно легко влюбиться заново. Ещё более тонкий и лёгкий, новый MacBook Air оснащён дисплеем Retina с технологией True Tone, Touch ID, клавиатурой последнего поколения и трекпадом Force Touch. Представлен в трёх цветах — серебристом, золотом и «серый космос». Это самый экологичный Mac. Сохранив его культовый дизайн, мы использовали для корпуса только переработанный алюминий. И это невероятно удобный MacBook Air — он работает весь день без подзарядки и может справиться с любыми задачами.",
      url: Slide3
    },
  ]
 
  return (
    <Carousel animation="slide" interval={3000000} className={classes.slider}>
      {items.map( item => <Slide key={item.title} item={item} />)}
    </Carousel>
  )
}

interface Props {
  children?: React.ReactElement
  item: {
    title: string
    subtitle: string
    text: string
    url: string
  }
}
 
const Slide = (props: Props) => {

  const { title, text, subtitle, url } = props.item
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.slide}>
      <img src={url} className={classes.slideImg} alt={title} width="100%" height="100%"/>
      
      <Box className={classes.slideContent}>
        <Bounce duration={1500} top>
          <Typography className={classes.slideTitle} variant="h2">
            {title}
          </Typography>
        </Bounce>

        <Bounce duration={1500} left>
          <Typography className={classes.slideSubtitle} variant="h5">
            {t(subtitle)}
          </Typography>
        </Bounce>

        <Fade bottom>
          <Typography className={classes.slideText} variant="body2">
            {t(text)}
          </Typography>
 
          <Button className={classes.slideBtn} variant="contained" color="secondary">
            <Link className={classes.slideBtnText} to="/">{t("Купить сейчас")}</Link>
          </Button>
        </Fade>
      </Box>
    </Box>
  )
}

export default Slider