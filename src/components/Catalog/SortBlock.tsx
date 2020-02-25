import React, { useState } from "react"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { 
  Divider,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    alignItems: "flex-end",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      flexDirection: "column"
    }
  },
  divider: {
    marginTop: 15
  },
  categoryImg: {
    marginRight: 20
  },
  select: {
    "&:hover": {
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    },
    [theme.breakpoints.down("xs")]: {
      margin: "10px 0"
    }
  }
}))

const SortBlock = () => {

  const classes = useStyles()
  const [sortType, setSortType] = useState("price")
  const [ammount, setAmmount] = useState("9")

  const handleChangeSort = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setSortType((event.target.value as string))
  }

  const handleChangeAmmount = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setAmmount((event.target.value as string))
  }

  return (
    <>
      <form className={classes.form}>
        <FormControl>
          <InputLabel  id="sort">
            Сортировать по
          </InputLabel>
        
          <Select
            labelId="sort"
            value={sortType}
            className={classes.select}
            onChange={handleChangeSort}
          >
            <MenuItem value="in-stock">Наличию товара</MenuItem>
            <MenuItem value="name">Названию А-Я</MenuItem>
            <MenuItem value="name-reverse">Названию Я-А</MenuItem>
            <MenuItem value="price">Цене, возрастание</MenuItem>
            <MenuItem value="price-reverse">Цене, убывание</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="ammount">
            Показать
          </InputLabel>
        
          <Select
            labelId="ammount"
            value={ammount}
            className={classes.select}
            onChange={handleChangeAmmount}
          >
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="18">18</MenuItem>
            <MenuItem value="all">Все</MenuItem>
          </Select>
        </FormControl>

        <Typography>
          Товаров 20
        </Typography>
      </form>

      <Divider className={classes.divider}/>
    </>
  )
}

export default SortBlock