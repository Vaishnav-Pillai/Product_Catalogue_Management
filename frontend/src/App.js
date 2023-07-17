import './App.css';
import React, { useEffect, useState } from 'react';
import ProductsList from './Components/ProductsList';
import AddProduct from './Components/AddProduct';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import DeleteProduct from './Components/DeleteProduct';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  let [home, setHome] = useState(false);
  let [id,setId] = useState('64b3b8453616341991cb1cd3');

  return (
      <div>
    <Router>

        <Navbar home={home}/>
        
        <Routes>
          <Route exact path="/addProduct"  element={<AddProduct id={id} setHome={setHome}/>} />
          <Route exact path="/" element={<><ProductsList home={home} id={id}/> <LoginPage setHome={setHome} home={home} setId={setId}/></>} />
          <Route exact path="/login" element={<LoginPage setHome={setHome}/>} />
          <Route exact path="/deleteProduct" element={<DeleteProduct id={id}/>} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
    </Router>
      </div>
  );
}

export default App;
