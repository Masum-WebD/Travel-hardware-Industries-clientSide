import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Blogs from './page/Home/Blogs';

function App() {
  return (
    <div className="App">
     <Home></Home>
      <Routes>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
