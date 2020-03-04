import React, { useState } from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Button, Snackbar } from "@material-ui/core/"
import Alert from "@material-ui/lab/Alert"

const useStyles = makeStyles( theme => ({
  snackbar: {
    margin: theme.spacing(1)
  }
}))

interface Props {
  children?: React.ReactElement
  error: any
}

const Error = (props: Props) => {

  const [open, setOpen] = useState(true)
  const classes = useStyles()

  return (
    <Snackbar 
      className={classes.snackbar}
      open={open}
      autoHideDuration={4000}
    >
      <Alert 
        severity="error"
        action={
          <Button
            size="small"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        }
      >
        {props.error.message}
      </Alert>
    </Snackbar>
  )
}

export default Error