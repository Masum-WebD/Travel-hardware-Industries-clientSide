import React from "react";
import banner from "../../Assest/banner/banner1.png";
import banner2 from "../../Assest/banner/banner3.png";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-2/4">
        <div id="item1" className="carousel-item w-full">
          <img src={banner2} className="w-full" alt="" />
        </div>
      </div>
      <div className="w-full h-24 bg-rose-700">
        <p className="text-white text-2xl font-bold  p-6 ">
          An electrician and plumbers needs a lot of materials to complete his
          work. We make a lot of products here and we sell them.
        </p>
      </div>
    </div>
  );
};

export default Banner;
