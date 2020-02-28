import React from "react"

import { 
  Box,
  Divider
} from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

import BreadcrumbsBlock from "../components/Shared/BreadCrumbs"
import Gallery from "../components/GoodDetail/Gallery"
import ipad from "../images/ipad2.png"
import ipad2 from "../images/ipad.jpg"
import GoodInfo from "../components/GoodDetail/GoodInfo"
import GoodOptions from "../components/GoodDetail/GoodOptions"
import NewProducts from "../components/App/NewProducts"

const useStyles = makeStyles((theme: Theme) => ({
  goodContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 40px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column"
    }
  }
}))


const GoodDetail: React.FC = () => {

  const classes = useStyles()

  const good = {
    name: "iPad Pro 12",
    url: [
      ipad,
      ipad2,
      ipad,
      ipad2
    ],
    stars: [1, 1, 1, 1, 1],
    reviews: [],
    finalPrice: 399.00,
    price: 1000,
    discount: null,
    extraData: "Новинка",
    inStock: true
  }

  return (
    <main>
      <BreadcrumbsBlock />

      <Box className={classes.goodContent}>
        <Gallery name={good.name} imgs={good.url} />
        <GoodOptions />
      </Box>
      <Divider />

      <GoodInfo />
      <NewProducts />
    </main>
  )
}

export default GoodDetail