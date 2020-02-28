import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { 
  Divider,
  Typography,
  Button
 } from "@material-ui/core"

const useStyles = makeStyles( theme => ({
  favoriteBlock: {
    margin: "15px 0",
    [theme.breakpoints.only("sm")]: {
      margin: "0 0 15px 0",
    }
  },
  divider: {
    margin: "10px 0"
  }
}))

const FavoriteCatalog = () => {

  const classes = useStyles()

  return (
    <section className={classes.favoriteBlock}>
      <Typography variant="h4" gutterBottom>
        Избранное
      </Typography>
      <Divider className={classes.divider} />

      <p>Нет товаров</p>
      <Divider className={classes.divider} />

      <Button 
        variant="contained" 
        color="secondary"
      >
        Мое избранное
      </Button>
    </section>
  )
}

export default FavoriteCatalog