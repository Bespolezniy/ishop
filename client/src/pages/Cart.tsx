import React from "react"

import { Box, Button } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

import BreadcrumbsBlock from "../components/Shared/BreadCrumbs"
import StepperBlock from "../components/Cart/StepperBlock"
import CartItems from "../components/Cart/CartItems"

const useStyles = makeStyles((theme: Theme) => ({
  catalogContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column"
    }
  },
  filterSection: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      flexGrow: 3,
      justifyContent: "space-between",
      order: 2,
      padding: "0 80px",
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: 0
    }
  },
  goodsSection: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 3,
    [theme.breakpoints.down("sm")]: {
      order: 1
    }
  }
}))

const Catalog: React.FC = () => {

  const classes = useStyles()

  return (
    <main>
      <BreadcrumbsBlock />

      <Box>
        <StepperBlock />
        <CartItems />
      </Box>

      <Button>
        Продолжить покупки
      </Button>

      <Button>
        Оформить заказ
      </Button>
    </main>
  )
}

export default Catalog