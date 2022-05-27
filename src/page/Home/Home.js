import React from "react";
import Advantage from "./Advantage";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Products from "./Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
     
      <Banner></Banner>
      <Products></Products>
      <Summary></Summary>
      <Advantage></Advantage>
      <Reviews></Reviews>
      <ChooseUs></ChooseUs>
     
    </div>
  );
};

export default Home;
