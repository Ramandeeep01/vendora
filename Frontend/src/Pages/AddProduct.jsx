import React from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../store/authStore";
import Navbar from "../Components/Navbar";

const AddProduct = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const [success, setSuccess] = React.useState(false);

  const [form, setForm] = React.useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    image: null,
  });

  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  // 🔥 useMutation
  const { mutate, isLoading } = useMutation({
    mutationFn: async (formData) => {
      return await axios.post("/product/add-product", formData);
    },
    
    onSuccess: () => {
      setSuccess(true);
      navigate("/dashboard");

      // 🔥 refetch products automatically
      queryClient.invalidateQueries(["products"]);
      queryClient.invalidateQueries(["my-products"]);

      // reset form
      setForm({
        name: "",
        price: "",
        description: "",
        quantity: "",
        image: null,
      });
    },

    onError: (error) => {
      alert(error.response?.data?.message || error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("price", form.price);
    data.append("description", form.description);
    data.append("image", form.image);
    data.append("quantity", form.quantity);

    // 🔥 trigger mutation
    mutate(data);
  };

  return (

  <div className="min-h-screen bg-gray-100">

    <Navbar />

    <div className="max-w-6xl mx-auto px-10 pt-32">

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="tracking-[5px] text-gray-400 text-sm mb-3">
            SELLER PANEL
          </p>

          <h1 className="text-5xl font-bold text-gray-800">
            Add Product
          </h1>

        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="
            border-2
            border-black
            px-8
            py-3
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

      {success && (

        <div className="
          mb-8
          bg-green-100
          text-green-700
          px-6
          py-4
          rounded-2xl
          shadow
        ">
          Product added successfully ✅
        </div>

      )}

      <div className="
        bg-white
        rounded-[40px]
        shadow-2xl
        p-12
      ">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >

          <div className="space-y-8">

            <div>

              <label className="block mb-3 text-lg font-semibold">
                Product Name
              </label>

              <input
                name="name"
                placeholder="Enter product name"
                value={form.name}
                onChange={handleChange}
                required
                className="
                  w-full
                  border-2
                  border-gray-200
                  p-4
                  rounded-2xl
                  outline-none
                  focus:border-black
                  transition
                "
              />

            </div>

            <div>

              <label className="block mb-3 text-lg font-semibold">
                Price
              </label>

              <input
                name="price"
                placeholder="Enter product price"
                value={form.price}
                onChange={handleChange}
                required
                className="
                  w-full
                  border-2
                  border-gray-200
                  p-4
                  rounded-2xl
                  outline-none
                  focus:border-black
                  transition
                "
              />

            </div>

            <div>

              <label className="block mb-3 text-lg font-semibold">
                Quantity
              </label>

              <input
                name="quantity"
                placeholder="Enter quantity"
                value={form.quantity}
                onChange={handleChange}
                className="
                  w-full
                  border-2
                  border-gray-200
                  p-4
                  rounded-2xl
                  outline-none
                  focus:border-black
                  transition
                "
              />

            </div>

            <div>

              <label className="block mb-3 text-lg font-semibold">
                Description
              </label>

              <textarea
                name="description"
                placeholder="Write product description..."
                value={form.description}
                onChange={handleChange}
                required
                rows={6}
                className="
                  w-full
                  border-2
                  border-gray-200
                  p-4
                  rounded-2xl
                  outline-none
                  focus:border-black
                  transition
                  resize-none
                "
              />

            </div>

          </div>

          <div className="flex flex-col items-center justify-center">

            <label className="
              w-full
              h-[400px]
              border-2
              border-dashed
              border-gray-300
              rounded-[40px]
              flex
              items-center
              justify-center
              cursor-pointer
              overflow-hidden
              hover:border-black
              transition
            ">

              {form.image ? (

                <img
                  src={URL.createObjectURL(form.image)}
                  alt="preview"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              ) : (

                <div className="text-center">

                  <h1 className="text-6xl mb-4">
                    +
                  </h1>

                  <p className="text-gray-500 text-lg">
                    Upload Product Image
                  </p>

                </div>

              )}

              <input
                type="file"
                onChange={handleFileChange}
                required
                className="hidden"
              />

            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="
                mt-10
                bg-black
                text-white
                px-12
                py-4
                rounded-full
                text-lg
                hover:scale-105
                hover:bg-gray-800
                transition
                duration-300
              "
            >
              {isLoading ? "Adding..." : "Add Product"}
            </button>

          </div>

        </form>

      </div>

    </div>

  </div>

);
};

export default AddProduct;