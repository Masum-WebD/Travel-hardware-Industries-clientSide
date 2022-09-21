import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile mt-20">
      <input id="dashboard-sideBar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-3xl text-rose-700"> DashBoard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sideBar" className="drawer-overlay"></label>

        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/review ">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/makeAdmin ">Make Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
