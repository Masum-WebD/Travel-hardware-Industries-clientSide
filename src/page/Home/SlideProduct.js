import React from 'react';
import { useNavigate } from "react-router-dom";


const SlideProduct = ({product}) => {
    const {_id,name,photo,price}=product
    const navigate =useNavigate()
    const handleOrder=(id)=>{
      navigate(`/purchase/${id}`)
    }
    
    return (
        <div className='card rounded shadow-lg '>
            <div className=" p-10">
                <img src={photo} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p className='font-bold'>${price}</p>
                <button onClick={()=>handleOrder(_id)} className="border py-3 border-primary hover:bg-primary px-5 font-bold rounded">Order Now</button>
            </div>
            
        </div>
    );
};

export default SlideProduct;