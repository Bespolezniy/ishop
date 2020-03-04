import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import withRoot from "./withRoot";
import Header from "./components/Shared/Header/Header"
import AppBarHeader from "./components/Shared/Header/AppBar"
import App from "./pages/App";
import Footer from "./components/Shared/Footer/Footer";
import Catalog from "./pages/Catalog"
import GoodDetail from "./pages/GoodDetail"
import Cart from "./pages/Cart"
import Support from "./pages/Support"

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
          <Route path="/support" component={Support} />
          <Route path="/catalog/good" component={GoodDetail} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={App} />
        </Switch>

        <Footer />
      </Router>
    </CurrencyContext.Provider>
  )
}

export default withRoot(Root)