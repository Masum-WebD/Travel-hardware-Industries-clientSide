import React from "react";
import './Product.css'

const Product = ({ product }) => {
  const { name, description, img, availableQuantity, minQuantity, price } =
    product;
  return (
    <div class="card lg:max-w-lg  shadow-xl card-section">
      <figure>
       <img src={img} alt="" />
      </figure>
      <div class="card-body bg-rose-700 text-white">
        <h2 class="text-2xl font-bold text-center">{name}</h2>
        <p>{description}</p>
        <p>Available quantity: {availableQuantity} Pice</p>
        <p>Minimum Order: {minQuantity} pice</p>
        <p class='font-bold text-xl'>Price per pice: ${price}</p>
        <div class="card-actions justify-center">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
