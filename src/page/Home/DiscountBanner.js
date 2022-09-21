import React from "react";
import banner from "../../Assest/dBanner/cms-banner.png";

const DiscountBanner = () => {
  return (
    <div>
      <div className="mx-12 mt-16">
        <div
          id=""
          className="carousel-item w-full h-[400px] object-cover bg-no-repeat opacity-80 grid grid-cols-3  items-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="col-span-2"></div>
          <div className=" text-white text-left ">
            <h1 className=" text-2xl leading-loose"> Up to 25% Discount</h1>
            <h1 className="text-3xl font-bold  ">Construction Worker
 <p>Cutting</p></h1>
            <button className=" hover:underline text-2xl leading-loose">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
