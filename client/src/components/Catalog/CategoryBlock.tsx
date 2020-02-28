import React from "react"
import { Link } from "react-router-dom"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { 
  Divider,
  Typography,
  Box
} from "@material-ui/core"

import CategoryImg from "../../images/macbook-air.jpg"
import SortBlock from "./SortBlock"

const useStyles = makeStyles((theme: Theme) => ({
  categoryBlock: {
    marginTop: -3,
    paddingLeft: 20
  },
  category: {
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      flexDirection: "column"
    }
  },
  subcategoryBox: {
    flexWrap: "wrap"
  },
  subcategoryLink: {
    alignItems: "center",
    border: "1px solid transparent",
    borderRadius: "6px",
    color: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    fontSize: 20,
    marginLeft: 15,
    textDecoration: "none",
    "&:hover": {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
      transitionDuration: ".25s"
    }
  },
  divider: {
    marginBottom: 15
  },
  categoryImg: {
    marginRight: 20
  }
}))

const CategoryBlock = () => {

  const classes = useStyles()

  return (
    <section className={classes.categoryBlock}>
      <Typography align="center" variant="h3">
        Macbook
      </Typography>

      <Divider className={classes.divider}/>

      <Box 
        display="flex" 
        alignItems="center" 
        marginTop={2}
        className={classes.category}
      >
        <img className={classes.categoryImg} src={CategoryImg} width="200" alt="category"/>

        <Typography gutterBottom>
          MacBook задаёт совершенно новые стандарты мощности и портативности ноутбуков. Процессоры высокой 
          производительности, память большего объёма, передовая графика, сверхбыстрые накопители и другие впечатляющие 
          способности MacBook помогут воплотить любые творческие проекты — ещё быстрее, чем раньше. 
          И это при весе немногим более килограмма.
        </Typography>
      </Box>

      <Divider className={classes.divider}/>

      <Typography variant="h4">
        Подкатегории
      </Typography>

      <Box 
        display="flex" 
        className={classes.subcategoryBox} 
        marginTop={2} 
        marginBottom={2}
      >
        <Link to="/" className={classes.subcategoryLink}>
          <img src={CategoryImg} width="150" alt="category"/>
          Macbook Air
        </Link>

        <Link to="/" className={classes.subcategoryLink}>
          <img src={CategoryImg} width="150" alt="category"/>
          Macbook Pro 13
        </Link>

        <Link to="/" className={classes.subcategoryLink}>
          <img src={CategoryImg} width="150" alt="category"/>
          Macbook Pro 16
        </Link>
      </Box>

      <SortBlock />
    </section>
  )
}

export default CategoryBlock