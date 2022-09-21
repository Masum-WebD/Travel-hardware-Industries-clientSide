import "./App.css";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./page/Home/Home";
import ContactUs from "./page/Home/ContactUs";
import Footer from "./page/Shared/Footer";
import Login from "./page/Login/Login";
import Register from "./page/Login/Register";
import Header from "./page/Home/Header";
import AboutUs from "./page/Home/AboutUs";
import NotFound from "./page/Shared/NotFound";
import RequireAuth from "./page/Login/RequireAuth";
import Purchase from "./page/Purchase/Purchase";
import DashBoard from "./page/DashBoard/DashBoard";
import MyOrders from "./page/DashBoard/MyOrders";
import AddReview from "./page/DashBoard/AddReview";
import { ToastContainer } from "react-toastify";
import MakeAdmin from "./page/DashBoard/MakeAdmin";
import Users from "./page/DashBoard/Users";
import Offer from "./page/Home/Offer";
import Payment from "./page/Payment/Payment/Payment";


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="about" element={<AboutUs></AboutUs>}></Route>
        <Route path="/offer" element={<Offer></Offer>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
       
        
        
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
