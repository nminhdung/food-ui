import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home.js';
import AllFoods from '../pages/AllFoods.js';
import FoodDetails from '../pages/FoodDetails.js';
import Cart from '../pages/Cart.js';
import Checkout from '../pages/Checkout.js';
import Contact from '../pages/Contact.js';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/foods" element={<AllFoods/>}/>
      <Route path="/foods/:id" element={<FoodDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default Routers;
