import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { 
  Typography, 
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  InputAdornment,
  Box
} from "@material-ui/core";
import { Search, Apple, ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { CurrencyContext } from "../../Root";

const useStyles = makeStyles( theme => ({
  nav: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  selectLabel: {
    visibility: "hidden"
  },
  select: {
    margin: "0 15px",
    "&:hover": {
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    }
  },
  title : {
    alignItems: "center",
    color: theme.palette.primary.main,
    display: "flex",
    fontSize: 46,
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecoration: "none",
    [theme.breakpoints.only("xs")]: {
      marginTop: 10,
    }
  },
  titleLetter: {
    color: theme.palette.secondary.main,
    textTransform: "none"
  },
  appleIcon: {
    fontSize: 46,
    marginBottom: 5
  },
  searchInput: {
    marginLeft: 15,
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: 150
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%"
    }
  },
  link: {
    fontSize: 18,
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    }
  },
  cartLink: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginRight: 15,
    textDecoration: "none",
    width: 250,
    [theme.breakpoints.down("sm")]: {
      width: 150
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: 10,
      width: "100%"
    }
  },
  cartIcon: {
    fontSize: 26,
    marginRight: 5
  },
  cartGoods: {
    color: theme.palette.secondary.main,
    fontSize: 14
  },
  box: {
    width: "100%"
  }
}))

const Header: React.SFC<{}> = () => {
  
  const { t, i18n } = useTranslation();
  const classes = useStyles()
  const [language, setLanguage] = useState("ru")
  const [goods, setGoods] = useState(0)
  const [search, setSearch] = useState("")
  const {currency, setCurrency} = useContext(CurrencyContext)

  const handleChangeLang = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setLanguage(event.target.value as string)
    i18n.changeLanguage(language)
  }

  const handleChangeCurrency = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setCurrency(event.target.value as string)
  }

  const handleChangeSearch = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setSearch(event.target.value as string)
  }

  return (
    <header>
      <nav className={classes.nav}>
        <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.box}>
          <Menu />
          <MobileMenu />
        
          <Box >
            <FormControl>
              <InputLabel className={classes.selectLabel} id="language">
                {t("Язык")}
              </InputLabel>
              <Select
                labelId="language"
                value={language}
                className={classes.select}
                onChange={handleChangeLang}
              >
                <MenuItem value="ru">Русский</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel className={classes.selectLabel} id="currency">
                {t("Валюта")}
              </InputLabel>
              <Select
                labelId="currency"
                value={currency}
                className={classes.select}
                onChange={handleChangeCurrency}
              >
                <MenuItem value="RUB">RUB</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
              </Select>
            </FormControl>
              
          </Box>
        </Box>
      </nav>
      
      <Box className={classes.nav}>
        <form className={classes.searchInput}>
          <TextField 
            id="search" 
            label={t("Поиск")} 
            type="search"
            placeholder={t("Название продукта")}
            variant="outlined"
            value={search}
            onChange={handleChangeSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              )
            }}
            fullWidth
          />
        </form>
            
        <Link to="/" title="ishop" color="primary" className={classes.title}>
          <Apple className={classes.appleIcon} />
          <span className={classes.titleLetter}>i</span>Shop
        </Link>

        <Link title={t("Просмотр корзины")} className={classes.cartLink} to="/cart">
          <ShoppingCart color="secondary" className={classes.cartIcon} />
          <Typography color="primary" variant="button" className={classes.link}>
            {t("Корзина")}
            <span className={classes.cartGoods}> ({goods > 0 ? goods : t("Пусто")})</span> 
          </Typography>
        </Link>
      </Box>
    </header>
  )
}

export default Header