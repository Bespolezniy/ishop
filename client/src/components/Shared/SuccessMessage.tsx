import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import { Snackbar, Button } from "@material-ui/core/"
import Alert from "@material-ui/lab/Alert"

interface Props {
  children?: React.ReactElement
  text: string
}

const SuccessMessage = (props: Props) => {

  const [open, setOpen] = useState<boolean>(true)
  const { t } = useTranslation()

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={4000}
    >
      <Alert
        action={
          <Button  
            size="small"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        }
        severity="success"
      >
        {t(props.text)}
      </Alert>
    </Snackbar>
  )
}

export default SuccessMessage