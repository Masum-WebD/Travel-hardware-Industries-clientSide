import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link,useNavigate  } from "react-router-dom";
import auth from "../../firebase.init";


const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(
        `http://localhost:5000/orders?user=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  const navigate =useNavigate()
  const handleOrder=(id)=>{
    navigate(`/payment/${id}`)
  }

  return (
    <div>
      <h1> My orders page :{orders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Product Name</th>
              <th>TK</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order,index) => (
              <tr>
                <th>{index +1}</th>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>
                 {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button  className = "btn btn-xs btn-primary">Pay</button>
                 </Link>
                 }
                 {(order.price && order.paid) &&<span className = "text-primary">Paid</span>
                 }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
