import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("/user/login", form);

    const user = res.data.user;

    setUser(user);

    if (user.role === "seller") {
      navigate("/dashboard");
    } else {
      navigate("/products");
    }

  } catch (error) {
    console.log("❌ LOGIN ERROR:");
    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log("Message:", error.message);
  }
  };

  return (
  <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-6">

    <div className="w-[1000px] h-[600px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex">

      <div className="w-1/2 bg-black text-white relative flex flex-col justify-center px-16">

        <h1 className="text-5xl font-bold leading-tight">
          Welcome
          <br />
          Back.
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Login to continue shopping with
          <span className="font-semibold text-white"> Vendora</span>
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="mt-10 w-[180px] border border-white py-3 rounded-full text-lg hover:bg-white hover:text-black duration-300"
        >
          Create Account
        </button>

        <div className="absolute bottom-10 left-16 text-sm text-gray-400">
          Premium Shopping Experience
        </div>

      </div>

      <div className="w-1/2 flex flex-col justify-center px-16">

        <h2 className="text-4xl font-bold mb-2">
          Login
        </h2>

        <p className="text-gray-500 mb-10">
          Enter your credentials to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full border border-gray-300 bg-gray-100 px-5 py-4 rounded-2xl outline-none focus:border-black"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border border-gray-300 bg-gray-100 px-5 py-4 rounded-2xl outline-none focus:border-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl text-lg font-semibold hover:scale-[1.02] duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  </div>
);
};

export default Login;