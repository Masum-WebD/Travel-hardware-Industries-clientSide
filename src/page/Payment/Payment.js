

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import payment from "../../Assest/Paymen/payment.svg";
import PaymentCard from "./PaymentCard";

const Payment = () => {
  const { id } = useParams();
  

  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);
  console.log(order);

  return (
    <div className="mt-22 h-[400px]">
      <div className="grid grid-cols-2 gap-5 my-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body mx-auto my-auto">
            <h2 className="card-title font-bold ">{order.name}</h2>
            <p className="text-xl font-bold">Total Price: ${order.price}</p>
          </div>
        </div>
        <div>
          <img className="w-50 h-[250px]" src={payment} alt="" />
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <PaymentCard price={order.price}/>
      </div>
    </div>
  );
};

export default Payment;
