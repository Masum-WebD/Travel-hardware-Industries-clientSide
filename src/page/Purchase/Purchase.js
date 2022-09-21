import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const orderRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://cokpit.onrender.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  // const handleMinus = (e) => {
  //   e.preventDefault();
  //   let minus = orderRef.current.value;
  //   const countValue = `${product.availableQuantity}`;
  //   if (minus > countValue) {
  //     minus = countValue - 1;
  //   }
  // };
  const handleOrder = (e) => {
    // const orderCount = orderRef.current.value;
    const orders = {
      name: product.name,
      price:product.price,
      // productOrder: orderCount,
      user: user.email,
    };
    fetch("https://cokpit.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Your order is confirm");
        navigate("/dashBoard");
      });
  };
  return (
    <div className="mt-15">
      <div class="card card-side bg-base-100 shadow-xl w-[400px] m-auto mt-20">
        <figure>
          <img src={product.img} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{product.name}</h2>
          <p className=" text-xl font-bold"> Price: ${product.price}</p>
          <div class="card-actions justify-end">
            <button onClick={handleOrder} class="btn btn-primary">Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
