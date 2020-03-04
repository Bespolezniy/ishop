import React from "react"
import { Zoom } from "react-reveal"

import { makeStyles } from "@material-ui/core/styles"

import BreadcrumbsBlock from "../components/Shared/BreadCrumbs"
import SupportForm from "../components/Support/SupportForm"

const useStyles = makeStyles({
  support: {
    backgroundColor: "#fff"
  }
})

const Catalog: React.FC = () => {

  const classes = useStyles()

  return (
    <main className={classes.support}>
      <BreadcrumbsBlock />
      <Zoom>
        <SupportForm />
      </Zoom>
    </main>
  )
}

export default Catalog