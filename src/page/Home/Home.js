import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Products from "./Products";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Summary></Summary>
      <Reviews></Reviews>
     
    </div>
  );
};

export default Home;
