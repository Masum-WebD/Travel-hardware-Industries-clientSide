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
import Brand from "./Brand";
import SpecialProducts from "./SpecialProducts";

const Home = () => {
  return (
    <div >
     
      <Banner></Banner>
      <SlideProducts></SlideProducts>
      <DiscountMultiBanner></DiscountMultiBanner>
      {/* // Special Product. */}
      <SpecialProducts></SpecialProducts> 
     
      <DiscountBanner></DiscountBanner>
      {/* // all Product show. */}
      <Products></Products> 
      {/* <Advantage></Advantage> */}
      <Summary></Summary>
      <Reviews></Reviews>
      <ChooseUs></ChooseUs>
      <Brand></Brand>
     
    </div>
  );
};

export default Home;
