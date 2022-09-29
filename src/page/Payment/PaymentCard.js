import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const PaymentCard = ({price}) => {
    const stripePromise = loadStripe(
        "pk_test_51LXxS0A5hc9xpUZ0CEbGeEedP2aIPPZpBzZdbG06uyyBR9ahciDm6QGz74sI3znpXTft85sRDrLtoPK7Y0HhdMTI000YHEQavk"
      );
    return (
        <div className="card-body">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
        </div>
    );
};

export default PaymentCard;