import React from "react";
import axios from "../api/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Navbar from "../Components/Navbar";

const SellerDashboard = () => {

  const queryClient = useQueryClient();

  // ✅ FETCH PRODUCTS
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["my-products"],
    queryFn: async () => {
      const res = await axios.get("/product/my-products");
      return res.data;
    },
  });

  // ✅ DELETE PRODUCT
  const { mutate: deleteProduct } = useMutation({
    mutationFn: async (id) => {
      return await axios.delete(`/product/delete/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["my-products"],
      });
    },
  });

  // ✅ LOADING STATE
  if (isLoading) {
    return (
      <div>
        <Navbar />
        <p className="p-6">Loading...</p>
      </div>
    );
  }

  // ✅ ERROR STATE
  if (isError) {
    return (
      <div>
        <Navbar />
        <p className="p-6 text-red-500">
          Error loading products
        </p>
      </div>
    );
  }

  // ✅ STATS
  const totalProducts = products.length;

  const totalQuantity = products.reduce(
    (acc, p) => acc + Number(p.quantity || 0),
    0
  );

  return (

  <div className="min-h-screen bg-gray-100">

    <Navbar />

    <div className="max-w-7xl mx-auto px-10 pt-32">

      <div className="flex items-center justify-between mb-12">

        <div>

          <p className="tracking-[5px] text-gray-400 text-sm mb-3">
            SELLER PANEL
          </p>

          <h1 className="text-5xl font-bold text-gray-800">
            Seller Dashboard
          </h1>

        </div>

        <div className="flex gap-6">

          <div className="bg-white shadow-lg rounded-[30px] px-10 py-6">

            <p className="text-gray-500 text-lg">
              Total Products
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {totalProducts}
            </h1>

          </div>

          <div className="bg-white shadow-lg rounded-[30px] px-10 py-6">

            <p className="text-gray-500 text-lg">
              Total Stock
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {totalQuantity}
            </h1>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {products.map((p) => (

          <div
            key={p._id}
            className="
              bg-white
              rounded-[35px]
              shadow-xl
              overflow-hidden
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
                  h-[300px]
                  object-cover
                  hover:scale-110
                  transition
                  duration-500
                "
              />

            </div>

            <div className="p-6">

              <h1 className="text-3xl font-bold text-gray-800">
                {p.name}
              </h1>

              <p className="text-4xl font-bold mt-4">
                ₹{p.price}
              </p>

              <p className="mt-5 text-gray-600 leading-7">
                {p.description}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <div>

                  <p className="text-gray-500">
                    Quantity
                  </p>

                  <h3 className="text-2xl font-semibold">
                    {p.quantity}
                  </h3>

                </div>

                <button
                  onClick={() => deleteProduct(p._id)}
                  className="
                    bg-red-500
                    text-white
                    px-6
                    py-3
                    rounded-full
                    hover:bg-red-600
                    transition
                    duration-300
                  "
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

);
};

export default SellerDashboard;