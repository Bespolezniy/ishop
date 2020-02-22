import React from "react"

import { Box } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

import BreadcrumbsBlock from "../components/Catalog/BreadCrumbs"
import Filter from "../components/Catalog/Filter"
import FavoriteCatalogBlock from "../components/Catalog/FavoriteBlock"
import CategoryBlock from "../components/Catalog/CategoryBlock"
import GoodsList from "../components/Catalog/GoodsList"

const useStyles = makeStyles((theme: Theme) => ({
  catalogContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px"
  },
  filterSection: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  },
  goodsSection: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 3
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