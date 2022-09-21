import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import payment from "../../../Assest/Paymen/payment.svg";
import CheckoutForm from "../CheckoutForm"

const Payment = () => {
  const { id } = useParams();
  const stripePromise = loadStripe(
    "pk_test_51LXxS0A5hc9xpUZ0CEbGeEedP2aIPPZpBzZdbG06uyyBR9ahciDm6QGz74sI3znpXTft85sRDrLtoPK7Y0HhdMTI000YHEQavk"
  );

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
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body mx-auto my-auto">
            <h2 class="card-title font-bold ">{order.name}</h2>
            <p className="text-xl font-bold">
              Total Price: ${order.price}
            </p>
          </div>
        </div>
        <div>
          <img className="w-50 h-[250px]" src={payment} alt="" />
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
