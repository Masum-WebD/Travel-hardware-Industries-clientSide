import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const SpecialProducts =()=>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('fakeSlideData.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[])
    const navigate =useNavigate()
    const handleOrder=(id)=>{
      navigate(`/purchase/${id}`)
    }

    return(
        <div className="mx-12">
      <h1 className="text-3xl mt-10 font-bold text-start ">Our Products</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-6">
        {products.map((p) => <div className="card lg:max-w-lg  shadow-xl card-section">
      <figure className=" p-5">
        <img src={p.img} alt="" />
      </figure>
      <div className="card-body  text-black">
        <h2 className="text-sm text-center">{p.name.slice(0,15)} ...</h2>
        <p className="font-bold text-xl">Price: ${p.price}</p>
        <div className="card-actions justify-center">
          <button onClick={()=>handleOrder(p.id)} className="border py-3 border-primary hover:bg-primary px-5 font-bold rounded">Order Now</button>
        </div>
      </div>
    </div>)}
      </div>
    </div>
    )
}
export default SpecialProducts