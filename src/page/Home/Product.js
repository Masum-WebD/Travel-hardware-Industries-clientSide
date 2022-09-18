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
      <figure className="shadow p-5">
        <img src={img} alt="" />
      </figure>
      <div className="card-body  text-black">
        <h2 className="text-sm text-center">{name.slice(0,15)} ...</h2>
        <p className="font-bold text-xl">Price: ${price}</p>
        <div className="card-actions justify-center">
          <button onClick={()=>handleOrder(_id)} className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
