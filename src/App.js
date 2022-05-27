import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Blogs from './page/Home/Blogs';
import Footer from './page/Shared/Footer';
import Login from './page/Login/Login';
import Register from './page/Login/Register';
import Header from './page/Home/Header';
import MyPortfolio from './page/Home/MyPortfolio';
import NotFound from './page/Shared/NotFound';
import RequireAuth from './page/Login/RequireAuth';
import Purchase from './page/Purchase/Purchase';
import DashBoard from './page/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='MyPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
       <Route path='register' element={<Register></Register>}></Route>
       <Route path='/dashBoard' element={<RequireAuth>
        <DashBoard></DashBoard>
       </RequireAuth>}></Route>
       <Route path='/purchase/:id' element={
         <RequireAuth>
           <Purchase></Purchase>
         </RequireAuth>
       }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
