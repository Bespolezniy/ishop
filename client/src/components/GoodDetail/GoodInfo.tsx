import React, { useState } from "react"

import { makeStyles } from "@material-ui/core/styles"
import { 
  Tab,
  Tabs,
  Paper,
  Box
} from "@material-ui/core"
import { 
  RateReview,
  Description,
  ListAlt,
  Comment
} from '@material-ui/icons'

import GoodDescription from "./GoodDescription"
import GoodSpecification from "./GoodSpecification"

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

const TabPanel = (props: TabPanelProps) => {

  const { 
    children, 
    value, 
    index, 
    ...other 
  } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Box>
  )
}

const a11yProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  }
}


const CenteredTabs = () => {

  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box marginTop={2}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          centered
        >
          <Tab 
            label="Описание" 
            icon={<Description />} 
            {...a11yProps(0)} 
          />

          <Tab 
            label="Характеристики" 
            icon={<ListAlt />} 
            {...a11yProps(1)} 
          />

          <Tab 
            label="Обзоры" 
            icon={<RateReview />} 
            {...a11yProps(2)}
          />

          <Tab 
            label="Комметарии" 
            icon={<Comment />} 
            {...a11yProps(3)}
          />
        </Tabs>
      </Paper>

      <Box>
        <TabPanel value={value} index={0}>
          <GoodDescription />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <GoodSpecification />
        </TabPanel>

        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>

        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </Box>
    </Box>
  )
}

export default CenteredTabs