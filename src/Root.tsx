import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import withRoot from "./withRoot";
import Header from "./components/Shared/Header";
import AppBarHeader from "./components/Shared/AppBar";
import App from "./pages/App";
import Footer from "./components/Shared/Footer/Footer";
import Catalog from "./pages/Catalog"

type currency = {
  currency: string,
  setCurrency: React.Dispatch<React.SetStateAction<string>>
}

export const CurrencyContext = React.createContext<currency>({
  currency: "RUB",
  setCurrency: () => {}
})

const Root: React.FC = () => {

  const [currency, setCurrency] = useState("RUB")

  return (
    <CurrencyContext.Provider 
      value={{
        currency, setCurrency
      }}
    >
      <Router>
        <Header />
        <AppBarHeader />
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </CurrencyContext.Provider>
  )
}

export default withRoot(Root)