import React from 'react';
import { useNavigate } from "react-router-dom";


const SlideProduct = ({product}) => {
    const {_id,name,photo,price}=product
    const navigate =useNavigate()
    const handleOrder=(id)=>{
      navigate(`/purchase/${id}`)
    }
    
    return (
        <div className=''>
            <div className="card bordered m-1  p-10 focus:ring">
                <img src={photo} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                {/* <p className='font-bold'>${price}</p> */}
                <button onClick={()=>handleOrder(_id)} className="text-black hover:underline">Order Now</button>
            </div>
            
        </div>
    );
};

export default SlideProduct;