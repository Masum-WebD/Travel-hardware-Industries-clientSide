import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Purchase = () => {
    const emailRef = useRef()
  const { id } = useParams();
  const navigate =useNavigate()
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleMinus=e => {
    e.preventDefault();
    let minus = emailRef.current.value;
    const countValue=`${product.availableQuantity}`
    if(minus > countValue ){
        minus =countValue - 1
    }
  }
  const handleOrder=() => {
        navigate('/dashBoard')
  }
  return (
    <div className="">
        <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
      <div class="hero  ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={product.img}
            class="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
        </div>
      </div>
      <div className="mt-20">
            <h1 class="text-2xl font-bold">{product.name}</h1>
            <p >
             {product.description}
            </p> 
            <h2 className='font-bold text-xl'>Price: ${product.price}</h2> 
            <h2 className='font-bold text-xl'>Available Quantity: {product.availableQuantity} Pice</h2> 
            <h2 className='font-bold text-xl'>Available Quantity: {product.minQuantity} Pice</h2> 
          </div>
          <div className='flex gap-4'>
          <button onClick={handleMinus} className='ms-6'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
             
          <input  ref={emailRef} name='count' min="0" className='form-control w-12 h-10 my-32 bg-[#F6F5FA]' type="number" value={product.minQuantity} />
          <button><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
          </div>
          
          
    </div>
    <button onClick={handleOrder} class="btn btn-primary">Confirm order</button>
    </div>
  );
};

export default Purchase;
