import React, { useState } from "react"

import { Box } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  imgList : {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    marginRight: 20,
    paddingLeft: 0
  },
  imgListItem: {
    border: "2px solid transparent",
    padding: 1,
    width: 100,
    [theme.breakpoints.down("md")]: {
      width: 70
    },
    [theme.breakpoints.down("xs")]: {
      width: 70
    },
    "&:hover":{
      borderColor: theme.palette.secondary.main,
      borderRadius: 6,
      transitionDuration: ".25s"
    }
  },
  mainImg: {
    [theme.breakpoints.down("md")]: {
      width: 350
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10
    },
    [theme.breakpoints.down("xs")]: {
      width: 220
    }
  }
}))

interface Props {
  children?: React.ReactElement
  name: string
  imgs: string[]
}

const Gallery = (props: Props) => {

  const classes = useStyles()
  const {name, imgs} = props
  const [mainImg, setMainImg] = useState(imgs[0])

  return (
    <Box display="flex" alignItems="center" component="section">
      <ul className={classes.imgList}>

        {imgs.map((item:string, i:number) => (
          <li className={classes.imgListItem} key={i}>
            <img src={item} alt={name} width="100%" />
          </li>
        ))}
        
      </ul>

      <img className={classes.mainImg} src={mainImg} alt={name} />
    </Box>
  )
}

export default Gallery