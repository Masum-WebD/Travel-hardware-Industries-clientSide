import React from "react";
import banner from "../../Assest/banner/banner.png";
import banner2 from "../../Assest/banner/banner2.png";

const Banner = () => {
  return (
    <div>
      <div class="carousel w-full relative">
        <div id="item1" class="carousel-item w-full h-[450px]  bg-cover" style={{ backgroundImage: `url(${banner})` }}>
          {/* <img src={banner} class="w-full object-cover absolute" alt="" /> */}
          <div class=" text-white w-[350px] my-auto ml-10">
              <h1 className="text-white text-center text-xl"> Flat 30% Discount</h1>
              <h1 className="text-3xl font-bold py-[20px]">Dongcheng Deckite <span >Cordless</span></h1>
              <button class="btn btn-primary text-white">Shop Now</button>
              </div>
        </div>
        <div id="item2" class="carousel-item w-full h-[450px]" style={{ backgroundImage: `url(${banner2})` }}>
          {/* <img src={banner2} class="w-full" alt="" /> */}
          <div class=" text-white w-[350px] my-auto  justify-items-end ">
              <h1 className="text-white text-center text-xl"> Flat 40% Discount</h1>
              <h1 className="text-3xl font-bold py-[20px]">Cooperativa Madrid <span > Marqueteria</span></h1>
              <button class="btn btn-primary text-white">Shop Now</button>
              </div>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
      </div>
    </div>
  );
};

export default Banner;
