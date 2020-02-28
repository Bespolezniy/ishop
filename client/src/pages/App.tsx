import React from "react";
import Carousel from "../components/App/Carousel";
import Banners from "../components/App/Banners";
import NewProducts from "../components/App/NewProducts";
import NewMacbookBlock from "../components/App/NewMacbookBlock";
import ExtraInfo from "../components/App/ExtraInfo";

const App: React.FC = () => {
  return (
    <main>
      <Carousel />
      <Banners />
      <NewProducts />
      <NewMacbookBlock />
      <ExtraInfo />
    </main>
  )
}

export default App
