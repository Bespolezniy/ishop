import React from "react";
import Carousel from "../components/App/Carousel";
import Banners from "../components/App/Banners";
import NewProducts from "../components/App/NewProducts";
import ParallaxSection from "../components/App/Parallax";
import ExtraInfo from "../components/App/ExtraInfo";

const App: React.FC = () => {
  return (
    <main>
      <Carousel />
      <Banners />
      <NewProducts />
      <ParallaxSection />
      <ExtraInfo />
    </main>
  )
}

export default App
