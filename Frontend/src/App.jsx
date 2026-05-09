import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from "./api/axios";

import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Products from './Pages/Products'
import AddProduct from "./Pages/AddProduct";
import ProductDetails from "./Pages/ProductDetails";
import SellerDashboard from "./Pages/SellerDashboard";

import { useAuthStore } from "./store/authStore";

const App = () => {

  const { setUser } = useAuthStore();

  useEffect(() => {

    const fetchUser = async () => {
      try {
        const res = await axios.get("/user/me");
        setUser(res.data);
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();

  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<SellerDashboard />} />
      </Routes>
    </div>
  )
}

export default App;