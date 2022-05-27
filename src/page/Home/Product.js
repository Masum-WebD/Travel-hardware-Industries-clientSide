import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { name, description, img, availableQuantity, minQuantity, price } =
    product;
  return (
    <div className="card lg:max-w-lg  shadow-xl card-section">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body bg-rose-700 text-white">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p>{description}</p>
        <p>Available quantity: {availableQuantity} Pice</p>
        <p>Minimum Order: {minQuantity} pice</p>
        <p className="font-bold text-xl">Price per pice: ${price}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
