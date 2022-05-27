import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const {_id, name, description, img, availableQuantity, minQuantity, price } =
    product;

    const navigate =useNavigate()
    const handleOrder=(id)=>{
      navigate(`/purchase/${id}`)
    }

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
          <button onClick={()=>handleOrder(_id)} className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
