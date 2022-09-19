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
      <Products></Products>
      <DiscountBanner></DiscountBanner>
      <SpecialProducts></SpecialProducts>
      <Summary></Summary>
      {/* <Advantage></Advantage> */}
      <Reviews></Reviews>
      <ChooseUs></ChooseUs>
      <Brand></Brand>
     
    </div>
  );
};

export default Home;
