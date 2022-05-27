import React from "react";

const ChooseUs = () => {
  return (
    <div className='mx-12 mt-10'>
      <h1 className="text-xl mt-10 text-rose-400">
        Why would you take our product?
      </h1>
      <h1 className="text-3xl font-bold text-rose-700">Our service</h1>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
        <div class="card lg:max-w-lg bg-base-100 hover:bg-rose-300 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-2xl font-bold">24/7  Online Support</h2>
            <p>We provide online support 24 hours a day, 7 days a week so you don't have to worry about buying ponies.</p>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 hover:bg-rose-300 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-2xl font-bold">Guarantee</h2>
            <p>You can safely take the product from us. There is no fear of money and if the product is bad then there is any defect then we did not return and provide new product</p>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 hover:bg-rose-300 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-2xl font-bold">Offer</h2>
            <p>If you take regular products from us then we offer different types of benefits. For example, we sometimes reduce the cost of delivery if we bear the delivery cost ourselves.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
