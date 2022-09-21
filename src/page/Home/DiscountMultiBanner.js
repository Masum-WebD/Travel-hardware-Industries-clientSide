import React from "react";
import banner1 from "../../Assest/dBanner/sub-banner-1.jpeg";
import banner2 from "../../Assest/dBanner/sub-banner-2.jpg";
import banner3 from "../../Assest/dBanner/sub-banner-3.jpg";

const DiscountMultiBanner = () => {
  return (
    <div className="mx-12 mt-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
      <div className="">
        <div
          id=""
          class="carousel-item w-full h-[200px] bg-no-repeat"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          {/* <img src={banner2} class="w-full" alt="" /> */}
          <div class=" text-black my-auto ml-5 text-left w-2/5 ">
            <h1 className="text-black  text-xl">
              {" "}
              Flat 20% Discount
            </h1>
            <h1 className="text-xl font-bold  ">Orbital Sander Tools</h1>
            <button class=" text-black hover:underline">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="">
        <div
          id=""
          class="carousel-item w-full h-[200px] bg-no-repeat"
          style={{ backgroundImage: `url(${banner2})` }}
        >
          {/* <img src={banner2} class="w-full" alt="" /> */}
          <div class=" text-black my-auto ml-5 text-left w-2/5 ">
            <h1 className="text-black  text-xl">
              {" "}
              Flat 30% Discount
            </h1>
            <h1 className="text-xl font-bold  ">Ingco Angle
Grinder</h1>
            <button class=" text-black hover:underline">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="">
        <div
          id=""
          class="carousel-item w-full h-[200px] bg-no-repeat"
          style={{ backgroundImage: `url(${banner3})` }}
        >
          {/* <img src={banner2} class="w-full" alt="" /> */}
          <div class=" text-black my-auto ml-5 text-left w-2/5 ">
            <h1 className="text-black  text-xl">
              {" "}
              Flat 10% Discount
            </h1>
            <h1 className="text-xl font-bold  ">Ingco Water
Pump</h1>
            <button class=" text-black hover:underline">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountMultiBanner;
