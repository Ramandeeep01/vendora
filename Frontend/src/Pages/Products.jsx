import React from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../store/authStore";
import Navbar from '../Components/Navbar'
import front from "../Public/front.png";

const Products = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("/product/all-products");
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError) return <p className="text-center mt-10">Error loading products</p>;

  return (
  <div className="min-h-screen bg-gray-100">

    <Navbar />

    <div className="px-10 pt-32">

      <div className="max-w-7xl mx-auto bg-white rounded-[40px] mt-[-6px] shadow-xl overflow-hidden flex items-center">

        <div className="flex-1 pl-20">

          <p className="tracking-[5px] text-gray-400 text-sm mb-4">
            PREMIUM COLLECTION
          </p>

          <h1 className="text-6xl font-bold text-gray-800 leading-tight">
            Latest <br /> Arrivals
          </h1>

          <p className="mt-6 text-gray-500 text-lg max-w-md leading-8">
            Discover premium products with modern style,
            high quality and the best prices.
          </p>

          <button
            className="
              mt-8
              bg-black
              text-white
              px-8
              py-4
              rounded-full
              hover:scale-105
              hover:bg-gray-800
              transition
              duration-300
            "
          >
            Shop Now
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">

          <img
            className="w-full h-[500px] object-cover"
            src={front}
            alt=""
          />

        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 mb-10 flex items-center justify-between">

        <h1 className="text-4xl font-bold text-gray-800">
          All Products
        </h1>

        <p className="text-gray-500">
          {products.length} Products
        </p>

      </div>

      {products.length === 0 ? (

        <p className="text-center text-2xl text-gray-500">
          No products found
        </p>

      ) : (

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {products.map((p) => (

            <div
              key={p._id}
              onClick={() => navigate(`/product/${p._id}`)}
              className="
                bg-white
                rounded-[30px]
                shadow-lg
                overflow-hidden
                cursor-pointer
                hover:-translate-y-2
                hover:shadow-2xl
                transition
                duration-300
              "
            >

              <div className="overflow-hidden">

                <img
                  src={p.image}
                  alt={p.name}
                  className="
                    w-full
                    h-[280px]
                    object-cover
                    hover:scale-110
                    transition
                    duration-500
                  "
                />

              </div>

              <div className="p-5">

                <h2 className="text-2xl font-semibold text-gray-800">
                  {p.name}
                </h2>

                <p className="text-3xl font-bold mt-3">
                  ₹{p.price}
                </p>

                <p className="mt-4 text-gray-500">
                  Seller: {p.seller?.fullName}
                </p>

                <button
                  className="
                    mt-6
                    w-full
                    bg-black
                    text-white
                    py-3
                    rounded-full
                    hover:bg-gray-800
                    transition
                    duration-300
                  "
                >
                  View Product
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  </div>
);
};

export default Products;