import React from "react"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { 
  Divider,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider
 } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    marginTop: theme.spacing(2),
  },
  filterSection: {
    padding: "10px 0"
  }
}))

const Filter = () => {

  const classes = useStyles()
  const [checked, setChecked] = React.useState(true)
  const [value, setValue] = React.useState<number[]>([20, 37])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const valueText = (value: number) => `${value}°C`

  const handleChangeSlider = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <section>
      <Typography variant="h4" gutterBottom>
        Каталог
      </Typography>
      <Divider />

      <form className={classes.form}>
        <FormGroup className={classes.filterSection}>
          <Typography variant="h5" gutterBottom>
            Категории
          </Typography>

          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} value="checkedA" />
            }
            label="Macbook Air"
          />

          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} value="checkedA" />
            }
            label="Macbook Pro 13"
          />

          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} value="checkedA" />
            }
            label="Macbook Pro 16"
          />
        </FormGroup>
        <Divider />

        <FormGroup className={classes.filterSection}>
          <Typography variant="h5" gutterBottom>
            Наличие
          </Typography>

          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} value="checkedA" />
            }
            label="На складе"
          />

          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} value="checkedA" />
            }
            label="Нет на складе"
          />
        </FormGroup>
        <Divider />

        <FormGroup className={classes.filterSection}>
          <Typography variant="h5" gutterBottom>
            Год
          </Typography>

          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} value="checkedA" />
            }
            label="2020"
          />

          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} value="checkedA" />
            }
            label="2019"
          />

          <FormControlLabel
            control={
              <Checkbox onChange={handleChange} value="checkedA" />
            }
            label="2018"
          />
        </FormGroup>
        <Divider />

        <FormGroup className={classes.filterSection}>
          <Typography id="range-slider" variant="h5" gutterBottom>
            Цена
          </Typography>

          <Slider
            value={value}
            onChange={handleChangeSlider}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valueText}
            color="secondary"
          />
        </FormGroup>
        <Divider />
      </form>
    </section>
  )
}

export default Filter