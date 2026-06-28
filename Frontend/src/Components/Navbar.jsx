import React from 'react'
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await axios.post("/user/logout");
    logout();
    navigate("/");
  };

  return (
    <div className="flex fixed top-0 left-0 right-0 bg-white p-4 z-10">

      <h1 className='text-3xl font-bold ml-[20px]'>VENDORA</h1>
      <h2 className='text-xl ml-[280px] cursor-pointer'
        onClick={() => user.role === "seller" ? navigate("/dashboard") : navigate("/products")}
      >Home</h2>
      <h3 onClick={() => navigate("/about")} className='text-xl ml-[40px] cursor-pointer'>About</h3>
      <h3 className='text-xl ml-[40px] cursor-pointer'>Contact</h3>

      {
        user?.role === "seller" ? (

          <h3
            onClick={() => navigate("/add-product")}
            className='ml-[40px] text-xl cursor-pointer'
          >
            + Add
          </h3>

        ) : (

          <h3
            className='ml-[40px] text-xl cursor-pointer'
          >
            Wishlist
          </h3>

        )
      }

      {user && (
        <div className="flex">

          <button
            onClick={handleLogout}
            className="ml-[370px] border border-black pl-[12px] pr-[12px] mt-[-10px] hover:bg-black hover:text-white transition duration-300"
          >
            Logout
          </button>

        </div>
      )}

    </div>
  )
}

export default Navbar