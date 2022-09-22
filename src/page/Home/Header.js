import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import userProfile from "../../Assest/user.png";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Header = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const handleOpen = () => {
    // Swal.fire({
    //   title: "Are you sure for logout?",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#452473",
    //   cancelButtonColor: "#FF745C",
    //   confirmButtonText: "Yes",
    //   allowEnterKey: true,
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Logout Successful", " ", "success");

    //     localStorage.removeItem("accessToken*");
    //   }
    // });
    signOut(auth);
  };

  return (
    <div className="bg-[#f6f5f8]  fixed top-0 z-50 w-full">
      <div className="bg-[#f6f5f8]  ">
        <div className="navbar p-0 mx-auto max-w-[1196px]">
          <div className="navbar-start lg:mx-0">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink className="text-black" to="/home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-black" to="/all-products">
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-black" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-black" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  {/* <label for="my-modal-6" className="hover:text-primary hover:cursor-pointer text-neutral">
                 
                </label> */}
                  <NavLink className="text-black" to="/offer">
                    Offers
                  </NavLink>
                </li>
                <li>
                  {user && (
                    <NavLink className="text-black" to="/dashboard">
                      Dashboard
                    </NavLink>
                  )}
                </li>
                {user ? (
                  <button
                    onClick={handleOpen}
                    className="btn btn-primary btn-sm  text-[14px] font-normal capitalize rounded-sm text-white"
                  >
                    Log Out <FiLogOut className="text-xl ml-2" />
                  </button>
                ) : (
                  <Link to="/login" className=" bg-primary p-3 rounded-sm">
                    <p className="font-normal text-white inline-block">
                      Log in
                    </p>
                    <FiLogIn className="text-xl inline-block ml-2 text-white" />
                  </Link>
                )}
              </ul>
            </div>

            <NavLink className="btn btn-ghost normal-case p-0 text-xl" to="/">
              <img
                className="w-48 text-white"
                src="https://i.ibb.co/dmgVzFD/rsz-download-removebg-preview-2.png"
                alt=""
              />
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal p-0 text-neutral font-medium text-[15px]">
              <li className="mx-5 hover:text-primary">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mx-5 hover:text-primary">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="mx-5 hover:text-primary">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="mx-5 hover:text-primary">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li className="mx-5">
                <NavLink className="text-black" to="/offer">
                  Offers
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end items-center text-white font-bold">
            <NavLink to="addToCart" className="mt-[8px]">
              <label
                tabindex="0"
                className="text-neutral hover:cursor-pointer btn-circle"
              >
                <div className="indicator mr-4 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </label>
            </NavLink>

            {user ? (
              <div className="dropdown dropdown-end ml-2 hidden lg:block">
                <label
                  tabindex="0"
                  className="btn btn-ghost px-0 text-neutral m-1"
                >
                  <div className="items-center">
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={user?.photoURL ? user.photoURL : userProfile}
                          alt=""
                        />
                      </div>
                    </div>
                    <IoIosArrowDown className="text-lg font-bold ml-2" />
                  </div>
                </label>
                <ul
                  tabindex="0"
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <Link
                    className="text-black hover:underline hover:underline-offset-2 my-2 mx-5 text-left"
                    to="/dashboard/myAccount"
                  >
                    My Account
                  </Link>
                  {!admin && (
                    <>
                      <Link
                        className="text-black hover:underline hover:underline-offset-2 my-2 mx-5 text-left"
                        to="/dashboard/order"
                      >
                        My Orders
                      </Link>
                      <Link
                        className="text-black hover:underline hover:underline-offset-2 my-2 mx-5 text-left"
                        to="/dashboard/myReview"
                      >
                        My Ratings and Reviews
                      </Link>
                      <Link
                        className="text-black hover:underline hover:underline-offset-2 my-2 mx-5 text-left"
                        to="/dashboard/wishlist"
                      >
                        My Wishlist
                      </Link>
                    </>
                  )}
                  {admin && (
                    <>
                      <Link
                        className="text-black hover:underline hover:underline-offset-2 my-2 mx-5 text-left"
                        to="/dashboard"
                      >
                        Go To Dashboard
                      </Link>
                    </>
                  )}
                  <div className="flex bg-primary mx-auto py-3 rounded-sm w-[90%] px-3">
                    <button
                      onClick={handleOpen}
                      className="w-full mr-3 text-[14px] text-left capitalize text-white"
                    >
                      Log Out
                    </button>
                    <FiLogOut className="text-xl bg-red-400 ml-2" />
                  </div>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden  ml-5 lg:block bg-primary p-3 rounded-sm"
              >
                <p className="font-normal text-white inline-block">Log in</p>
                <FiLogIn className="text-xl inline-block ml-2 text-white" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
