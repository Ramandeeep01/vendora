import React from "react";
import axios from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../Components/Navbar";

const ProductDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(`/product/${id}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    try {

      const { data } = await axios.post("/payment/create-order", {
        amount: product.price,
      });

      const options = {
        key: "rzp_test_SmPQU8EaNIzufK",

        amount: data.amount,
        currency: data.currency,
        order_id: data.id,

        name: "Vendoraa",
        description: product.name,

        image: product.image,

        handler: async function (response) {

          alert("Payment Successful ✅");

          console.log(response);

        },

        prefill: {
          name: "Customer",
          email: "customer@example.com",
        },

        theme: {
          color: "#000000",
        },
      };

      const razor = new window.Razorpay(options);

      razor.open();

    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    }
  };

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <p className="pt-40 text-center text-2xl">
          Loading...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <Navbar />
        <p className="pt-40 text-center text-2xl">
          Product not found
        </p>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-10 pt-32">

        <div className="bg-white rounded-[40px] shadow-xl mt-[-18px] p-10 flex items-center gap-16">

          <div className="flex-1 flex justify-center">

            <img
              src={product.image}
              alt={product.name}
              className="
                w-[450px]
                h-[450px]
                object-cover
                rounded-tl-[70px]
                rounded-br-[70px]
                shadow-2xl
                hover:scale-105
                transition
                duration-500
              "
            />

          </div>

          <div className="flex-1">

            <p className="text-sm tracking-[4px] text-gray-400 uppercase mb-3">
              Premium Collection
            </p>

            <h1 className="text-5xl font-bold text-gray-800">
              {product.name}
            </h1>

            <p className="text-4xl font-semibold mt-6 text-black">
              ₹{product.price}
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              {product.description}
            </p>

            <div className="mt-8 space-y-2">

              <p className="text-lg">
                <span className="font-semibold">Quantity:</span>{" "}
                {product.quantity}
              </p>

              <p className="text-lg">
                <span className="font-semibold">Seller:</span>{" "}
                {product.seller?.fullName}
              </p>

            </div>

            <div className="flex gap-5 mt-10">

              <button
                onClick={handlePayment}
                className="
                  bg-black
                  text-white
                  px-10
                  py-4
                  rounded-full
                  text-lg
                  hover:scale-105
                  hover:bg-gray-800
                  transition
                  duration-300
                "
              >
                Buy Now
              </button>

              <button
                onClick={() => navigate(-1)}
                className="
                  border-2
                  border-black
                  px-8
                  py-4
                  rounded-full
                  hover:bg-black
                  hover:text-white
                  transition
                  duration-300
                "
              >
                Back
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;