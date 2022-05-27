import React from "react";
import Banner from "./Banner";
import Bonus from "./Bonus";
import Products from "./Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
     
      <Banner></Banner>
      <Products></Products>
      <Summary></Summary>
      <Bonus></Bonus>
      <Reviews></Reviews>
     
    </div>
  );
};

export default Home;
