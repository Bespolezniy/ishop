import React, { useContext } from "react"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { 
  Button,
  Chip,
  Paper,
  Box,
  Typography,
  Badge
} from "@material-ui/core"
import { 
  NewReleases,
  CheckBox,
  MonetizationOn,
  Star,
  StarBorderOutlined,
  ShoppingCart,
  FavoriteBorder,
  Toc
} from '@material-ui/icons'

import { CurrencyContext } from "../../Root"
import ipad from "../../images/ipad2.png"
import ipad2 from "../../images/ipad.jpg"

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    display: "flex",
    listStyle: "none",
    paddingLeft: 0
  },
  btnWishlist: {
    backgroundColor: theme.palette.error.main,
    color: "#fff",
    margin: "0 15px",
    "&:hover": {
      backgroundColor: theme.palette.error.dark
    },
    [theme.breakpoints.down("xs")]: {
      margin: "15px 0",
    }
  },
  finalPrice: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 5
  },
  prevPrice: {
    color: theme.palette.primary.main,
    fontSize: 20,
    marginLeft: 10,
    textDecoration: "line-through"
  },
  chip: {
    margin: 10
  },
  delivery: {
    maxWidth: 400,
    padding: 15
  },
  discount: {
    fontSize: 16,
    margin: 20
  },
  optionsBox: {
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      flexDirection: "column"
    }
  }
}))

const GoodOptions = () => {

  const classes = useStyles()
  const { currency } = useContext(CurrencyContext)

  const getRightFormatPrice = (price:number|null):string|null => {

    if (currency === "RUB") {
      return `${(price as number) * 60}₽`
    } else if (currency === "USD") {
      return `$${price}`
    }

    return null
  }

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
    <Box 
      display="flex" 
      flexDirection="column" 
      flexGrow={1} 
      alignItems="center"
      justifyContent="center"
      component="section"
    >
      <Typography variant="h2">
        {good.name}
      </Typography>

      <Box 
        display="flex" 
        alignItems="center"
        justifyContent="space-between"
      >
        {good.extraData && (
          <Chip 
            avatar={<NewReleases />} 
            label={good.extraData}
            className={classes.chip}
          />
        )}

        {good.discount && (
          <Chip
            avatar={<MonetizationOn />} 
            label={`Скидка ${good.discount}`}
            className={classes.chip}
          />
        )}

        {good.inStock && (
          <Chip
            avatar={<CheckBox />} 
            label={"В наличии"}
            className={classes.chip}
          />
        )}
      </Box>
          
      <Box display="flex" alignItems="center">
        <Typography gutterBottom>
          Рейтинг:
        </Typography>

        <ul className={classes.list}>
          {good.stars.map((item:number, index:number) => {

            if (item === 1) {
              return (
                <li key={index}>
                  <Star fontSize="small" color="secondary" />
                </li>
              )
            }

            return (
              <li>
                <StarBorderOutlined 
                  fontSize="small" 
                  key={index} 
                  color="primary" />
              </li>
            )
          })}
        </ul>
      </Box>

      <Paper>
        <Typography className={classes.delivery}>
          {`Бесплатная доставка ${good.name} на следующий рабочий день 
            по Москве и Санкт‑Петербургу 
            (при наличии товара и заказе до 15:00).`}
        </Typography>
      </Paper>

      <Badge 
        color="secondary" 
        badgeContent={good.discount}
        className={classes.discount}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Typography className={classes.finalPrice} variant="subtitle1" color="secondary">
          <span>Цена: </span>
          {getRightFormatPrice(good.finalPrice)}
          {good.discount ? <span className={classes.prevPrice}>{getRightFormatPrice(good.price)}</span> : null}
        </Typography>
      </Badge>
          
      <Box className={classes.optionsBox} display="flex" padding={2}>
        <Button 
          variant="contained"
          color="secondary"
          startIcon={<ShoppingCart />}
        >
          Buy
        </Button>

        <Button
          variant="contained"
          startIcon={<FavoriteBorder />}
          className={classes.btnWishlist}
        >
          In wishlist
        </Button>

        <Button
          variant="contained"
          startIcon={<Toc />}
          color="default"
        >
          Compare
        </Button>
      </Box>
    </Box>
  )
}

export default GoodOptions