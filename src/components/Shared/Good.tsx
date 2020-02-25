import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { 
  Typography, 
  Box,
  IconButton,
  Divider,
  Badge
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { 
  Star, 
  StarBorderOutlined, 
  Toc, 
  ShoppingCart, 
  FavoriteBorder 
} from "@material-ui/icons"

import { CurrencyContext } from "../../Root";

const useStyles = makeStyles( theme => ({
  goodCard: {
    marginTop: 15,
    maxWidth: 300,
    padding: "0 15px"
  },
  list: {
    display: "flex",
    listStyle: "none",
    paddingLeft: 0
  },
  goodTitle: {
    color: theme.palette.primary.dark,
    fontSize: 22,
    fontWeight: 500,
    textDecoration: "none",
    textTransform: "capitalize",
    marginRight: 40,
    paddingRight: 20,
    "&:hover": {
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    }
  },
  reviews: {
    marginLeft: 10
  },
  finalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 20
  },
  prevPrice: {
    color: theme.palette.primary.main,
    fontSize: 15,
    marginLeft: 10,
    textDecoration: "line-through"
  },
  iconBtn: {
    "&:hover": {
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    }
  },
  divider: {
    marginTop: 15
  },
  imgLink: {
    display: "flex",
    height: 275,
    position: "relative",
    width: "100%"
  },
  secondImg: {
    position: "absolute",
    opacity: 0,
    transitionDuration: ".35s",
    "&:hover": {
      opacity: 1
    }
  }
}))

interface Props {
  children?: React.ReactElement
  good: {
    name: string
    url: string[]
    stars: number[]
    reviews: any
    price: number | null
    finalPrice: number
    discount: string | null
    extraData: string | null
  }
}

const Good = (props: Props) => {

  const classes = useStyles()
  const { t } = useTranslation()
  const { currency } = useContext(CurrencyContext)

  const {
    name,
    url,
    stars,
    reviews,
    price,
    finalPrice,
    discount,
    extraData
  } = props.good

  const getRightFormatPrice = (price:number|null):string|null => {

    if (currency === "RUB") {
      return `${(price as number) * 60}₽`
    } else if (currency === "USD") {
      return `$${price}`
    }

    return null
  }

  return (
    <Box className={classes.goodCard}>
      <Badge 
        color="secondary" 
        badgeContent={extraData ? t(extraData as string): null}
      > 
        <Link to="good/" className={classes.imgLink}>
          <img src={url[0]} width="100%" height="275" alt={name} />

          <img 
            src={url[1]} 
            width="100%" 
            height="275" 
            alt={name} 
            className={classes.secondImg} 
          />
        </Link>
      </Badge>

      <ul className={classes.list}>
        {stars.map((item:number, i:number) => {

          if (item === 1) {
            return (
              <li key={i}>
                <Star fontSize="small" color="secondary" />
              </li>
            )
          }

          return (
            <li key={i}>
              <StarBorderOutlined 
                fontSize="small" 
                color="primary" 
              />
            </li>)
        })}

        <li 
          className={classes.reviews}
        >
          {reviews.length > 0 ? `${reviews.length} Обзор(ы)`: null}
        </li>
      </ul>

      <Link 
        to={`${name}/`} 
        title={name} 
        className={classes.goodTitle}
      >
        {name}
      </Link>

      <Badge 
        color="secondary" 
        badgeContent={discount}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Typography 
          className={classes.finalPrice} 
          variant="subtitle1" 
          color="secondary"
        >
          {getRightFormatPrice(finalPrice)}

          {discount ? 
            <span className={classes.prevPrice}>
              {getRightFormatPrice(price)}
            </span> : null
          }
        </Typography>
      </Badge>
      <Divider className={classes.divider}/>

      <ul className={classes.list}>
        <li>
          <IconButton 
            title={t("В корзину")} 
            className={classes.iconBtn}
          >
            <ShoppingCart />
          </IconButton>
        </li>

        <li>
          <IconButton 
            title={t("Добавить в избранное")} 
            className={classes.iconBtn}
          >
            <FavoriteBorder />
          </IconButton>
        </li>

        <li>
          <IconButton 
            title={t("Добавить в сравнение")} 
            className={classes.iconBtn}
          >
            <Toc />
          </IconButton>
        </li>
      </ul>
    </Box>
  )
}

export default Good