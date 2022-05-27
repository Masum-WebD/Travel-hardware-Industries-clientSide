import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Blogs from './page/Home/Blogs';
import Footer from './page/Shared/Footer';
import Login from './page/Login/Login';
import Register from './page/Login/Register';
import Header from './page/Home/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
