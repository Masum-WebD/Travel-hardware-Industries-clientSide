import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(
        `https://cokpit.onrender.com/orders?orderUser=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  return (
    <div>
      <h1> My orders page :{orders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>product Quantity</th>
              <th>TK</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <th>1</th>
                <td>{order.productName}</td>
                <td>{order.productOrder}</td>
                <td>{order.productPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
