import React from "react"

import { Box } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

import BreadcrumbsBlock from "../components/Shared/BreadCrumbs"
import Filter from "../components/Catalog/Filter"
import FavoriteCatalogBlock from "../components/Catalog/FavoriteBlock"
import CategoryBlock from "../components/Catalog/CategoryBlock"
import GoodsList from "../components/Catalog/GoodsList"

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
      <Box className={classes.catalogContent}>
        <Box className={classes.filterSection}>
          <Filter />

          <FavoriteCatalogBlock />
        </Box>

        <Box className={classes.goodsSection}>
          <CategoryBlock />
          <GoodsList />
        </Box>
      </Box>
    </main>
  )
}

export default Catalog