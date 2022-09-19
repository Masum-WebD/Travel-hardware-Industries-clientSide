import React from 'react';
import { useNavigate } from "react-router-dom";


const SlideProduct = ({product}) => {
    const {_id,name,img,price}=product
    const navigate =useNavigate()
    const handleOrder=(id)=>{
      navigate(`/purchase/${id}`)
    }
    
    return (
        <div className=''>
            <div className="card bordered m-1  p-10 hover:p-5  ">
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p className='font-bold'>${price}</p>
                <button onClick={()=>handleOrder(_id)} className="text-black hover:underline">Order Now</button>
            </div>
            
        </div>
    );
};

export default SlideProduct;