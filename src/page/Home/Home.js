import React from "react";
import Advantage from "./Advantage";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import DiscountBanner from "./DiscountBanner";
import DiscountMultiBanner from "./DiscountMultiBanner";
import Products from "./Products";
import Reviews from "./Reviews";
import SlideProducts from "./SlideProducts";
import Summary from "./Summary";

const Home = () => {
  return (
    <div >
     
      <Banner></Banner>
      <SlideProducts></SlideProducts>
      <DiscountMultiBanner></DiscountMultiBanner>
      <Products></Products>
      <DiscountBanner></DiscountBanner>
      <Summary></Summary>
      <Advantage></Advantage>
      <Reviews></Reviews>
      <ChooseUs></ChooseUs>
     
    </div>
  );
};

export default Home;
