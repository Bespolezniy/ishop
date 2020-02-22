import React, { useState } from "react";
import ItemsCarousel from 'react-items-carousel';
import { useTranslation } from "react-i18next";

import { 
  Typography, 
  Box,
  IconButton,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBack, ArrowForward } from '@material-ui/icons';


import macbook from "../../images/macbook.jpg";
import ipad from "../../images/ipad2.png";
import ipad2 from "../../images/ipad.jpg";
import macbook2 from "../../images/macbook3.jpg";
import watch3 from "../../images/watch3.jpg";
import watch2 from "../../images/watch2.jpg";
import watch from "../../images/watch.jpg";
import iphone from "../../images/iphone.jpg";
import iphone2 from "../../images/iphone2.jpg";
import imac from "../../images/imac2.jpg";
import Good from "../Shared/Good";

const useStyles = makeStyles({
  section: {
    padding: "0 30px"
  },
  banner: {
    alignItems: "center",
    color: "white",
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-around",
    position: "relative",
    marginLeft: 1,
    width: "33%"
  },
  sectionTitle: {
    fontWeight: 500,
    marginBottom: 15,
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
    textDecoration: "none"
  },
  hide: {
    display: "none"
  },
  iconBtn: {
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      color: "#03a9f4",
      transitionDuration: ".25s"
    }
  }
})

const NewProducts: React.FC = () => {

  const classes = useStyles()
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [size, setWindowSize] = useState(window.screen.availWidth)
  const { t } = useTranslation()

  const goods = [
    {
      name: "Apple Watch Series 5",
      url: [watch, watch2, watch3],
      stars: [1, 1, 1, 1, 1],
      reviews: [],
      finalPrice: 399.00,
      price: null,
      discount: null,
      extraData: "Новинка"
    },
    {
      name: "Macbook Pro 16",
      url: [macbook, macbook2],
      stars: [1, 1, 1, 1, 0],
      reviews: [],
      finalPrice: 2399.00,
      price: null,
      discount: null,
      extraData: "Новинка"
    },
    {
      name: "iPad Pro 12.9",
      url: [ipad, ipad2],
      stars: [1, 1, 1, 1, 1],
      reviews: [{}, {}, {}],
      finalPrice: 999.00,
      price: 1175.23,
      discount: "-15%",
      extraData: null
    },
    {
      name: "iPhone 11 Pro",
      url: [iphone, iphone2],
      stars: [1, 1, 1, 0, 0],
      reviews: [{}, {}, {}, {}, {}, {}],
      finalPrice: 449.00,
      price: 498.78,
      discount: "-10%",
      extraData: "Новинка"
    },
    {
      name: "Apple iMac 21",
      url: [imac, macbook2],
      stars: [1, 1, 1, 1, 0],
      reviews: [{}, {}],
      finalPrice: 1499.00,
      price: null,
      discount: null,
      extraData: null
    },
    {
      name: "iPad Pro 12.9",
      url: [ipad, ipad2],
      stars: [1, 1, 1, 1, 1],
      reviews: [{}, {}, {}],
      finalPrice: 999.00,
      price: 1175.23,
      discount: "-15%",
      extraData: null
    },
    {
      name: "Apple Watch Series 5",
      url: [watch, watch2, watch3],
      stars: [1, 1, 1, 1, 0],
      finalPrice: 250.00,
      reviews: [{}],
      price: 300,
      discount: "-20",
      extraData: "Новинка"
    },
    {
      name: "Apple Watch Series 5",
      url: [watch, watch2, watch3],
      stars: [1, 1, 1, 1, 0],
      reviews: [{}],
      finalPrice: 250.00,
      price: 300,
      discount: "-20",
      extraData: "Новинка"
    }
  ]

  window.onresize = () => setWindowSize(window.screen.availWidth)

  const numberOfGoods = ():number => {
    if (size > 1800) {
      return 6
    } else if (size > 1200) {
      return 5
    } else if (size > 900) {
      return 4
    } else if (size > 750) {
      return 3
    } else if (size > 470) {
      return 2
    }
    return 1
  }

  return (
    <section className={classes.section}>
      <Typography variant="h4" className={classes.sectionTitle}>
        {t("Популярные товары")}
      </Typography>
      <Divider />

      <Box marginTop={3}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={numberOfGoods()}
          slidesToScroll={2}
          leftChevron={
            <IconButton className={classes.iconBtn}>
              <ArrowBack />
            </IconButton>
          }
          rightChevron={
            <IconButton className={classes.iconBtn}>
              <ArrowForward />
            </IconButton>
          }
          infiniteLoop={true}
        >
          {goods.map( (item, index) => <Good key={index} good={item} />)}
        </ItemsCarousel>
      </Box>
    </section>
  )
}

export default NewProducts