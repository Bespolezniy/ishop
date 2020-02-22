import React, { useState } from "react"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { 
  Divider,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from "@material-ui/core"
import Pagination from "@material-ui/lab/Pagination"

import Good from "../Shared/Good"
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

const useStyles = makeStyles((theme: Theme) => ({
  goodsList: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 10px"
  }
}))

const GoodsList = () => {

  const classes = useStyles()
  const [sortType, setSortType] = useState("price")
  const [ammount, setAmmount] = useState("9")

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
    },
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
    }
  ]

  const handleChangeSort = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setSortType((event.target.value as string))
  }

  const handleChangeAmmount = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setAmmount((event.target.value as string))
  }

  return (
    <section>
      <Box className={classes.goodsList}>
        {goods.map( (item, index) => <Good key={index} good={item} />)}
      </Box>

      <Box>
        <Pagination count={3} variant="outlined" shape="rounded" />
      </Box>
    </section>
  )
}

export default GoodsList