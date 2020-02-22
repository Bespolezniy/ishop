import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import MobileFooterMenu from "./MobileFooterMenu"
import ContactsBlock from "./ContactsBlock"

const useStyles = makeStyles( theme => ({
  footer: {
    display: "none",
    backgroundColor: "black",
    color: "white",
    padding: "30px 30px",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }
}))

interface Props {
  children?: React.ReactElement
  listMenus: any[]
}

const MobileFooter = (props: Props) => {
  
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      {props.listMenus.map((menu:any, i:number) => (
          <MobileFooterMenu key={i} menu={menu} />
        ))
      }

      <ContactsBlock />
    </footer>
  )
}

export default MobileFooter