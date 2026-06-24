import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-10 pt-32 pb-20">

        {/* HERO SECTION */}
        <div className="bg-white rounded-[40px] shadow-xl p-16">

          <p className="tracking-[5px] text-gray-400 text-sm mb-4">
            PREMIUM MARKETPLACE
          </p>

          <h1 className="text-6xl font-bold text-gray-800 leading-tight">
            About Vendora
          </h1>

          <p className="mt-8 text-gray-500 text-lg leading-8 max-w-4xl">
            Vendora is a modern multi-vendor marketplace designed to connect
            buyers and sellers through a seamless and professional shopping
            experience. Sellers can manage products through a dedicated
            dashboard while buyers can discover and explore products through a
            clean and intuitive interface.
          </p>

        </div>

        {/* MISSION + VISION */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-white rounded-[35px] shadow-lg p-10">

            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              Our mission is to empower entrepreneurs, small businesses,
              and independent sellers by providing a platform where they
              can showcase products and reach customers with ease.
              We strive to make online commerce accessible, modern,
              and efficient for everyone.
            </p>

          </div>

          <div className="bg-white rounded-[35px] shadow-lg p-10">

            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              We envision a marketplace where buyers discover quality
              products effortlessly and sellers grow their businesses
              through powerful management tools and a premium user
              experience.
            </p>

          </div>

        </div>

        {/* HOW IT WORKS */}
        <div className="mt-20">

          <p className="tracking-[5px] text-gray-400 text-sm mb-3">
            HOW IT WORKS
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mb-10">
            Marketplace Workflow
          </h1>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-[30px] shadow-lg p-8">
              <h1 className="text-5xl font-bold mb-4">01</h1>
              <h3 className="text-2xl font-semibold mb-4">
                Register
              </h3>
              <p className="text-gray-500 leading-7">
                Create an account and choose whether you want to join
                as a Buyer or Seller.
              </p>
            </div>

            <div className="bg-white rounded-[30px] shadow-lg p-8">
              <h1 className="text-5xl font-bold mb-4">02</h1>
              <h3 className="text-2xl font-semibold mb-4">
                Select Role
              </h3>
              <p className="text-gray-500 leading-7">
                Buyers access products while sellers receive a
                dedicated management dashboard.
              </p>
            </div>

            <div className="bg-white rounded-[30px] shadow-lg p-8">
              <h1 className="text-5xl font-bold mb-4">03</h1>
              <h3 className="text-2xl font-semibold mb-4">
                Manage Products
              </h3>
              <p className="text-gray-500 leading-7">
                Sellers can upload images, add inventory, and manage
                their product listings.
              </p>
            </div>

            <div className="bg-white rounded-[30px] shadow-lg p-8">
              <h1 className="text-5xl font-bold mb-4">04</h1>
              <h3 className="text-2xl font-semibold mb-4">
                Explore & Buy
              </h3>
              <p className="text-gray-500 leading-7">
                Buyers browse products and discover premium items
                through a modern shopping experience.
              </p>
            </div>

          </div>

        </div>

        {/* BUYER FEATURES */}
        <div className="mt-24">

          <h1 className="text-5xl font-bold text-gray-800 mb-10">
            Buyer Features
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Product Discovery
              </h3>
              <p className="text-gray-500">
                Explore products through a clean and intuitive interface.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Product Details
              </h3>
              <p className="text-gray-500">
                View descriptions, pricing, and seller information.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Easy Navigation
              </h3>
              <p className="text-gray-500">
                Quickly browse and explore products with ease.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Modern Experience
              </h3>
              <p className="text-gray-500">
                Premium UI designed for smooth user interaction.
              </p>
            </div>

          </div>

        </div>

        {/* SELLER FEATURES */}
        <div className="mt-24">

          <h1 className="text-5xl font-bold text-gray-800 mb-10">
            Seller Features
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Dashboard Access
              </h3>
              <p className="text-gray-500">
                Dedicated seller dashboard with complete control.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Add Products
              </h3>
              <p className="text-gray-500">
                Upload product information and images instantly.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Inventory Control
              </h3>
              <p className="text-gray-500">
                Manage quantities and stock efficiently.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Product Management
              </h3>
              <p className="text-gray-500">
                Delete and organize listings with ease.
              </p>
            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="mt-24">

          <div className="bg-white rounded-[40px] shadow-xl p-14">

            <h1 className="text-5xl font-bold text-center mb-14">
              Platform Highlights
            </h1>

            <div className="grid md:grid-cols-4 gap-10 text-center">

              <div>
                <h1 className="text-6xl font-bold">2</h1>
                <p className="mt-3 text-gray-500">User Roles</p>
              </div>

              <div>
                <h1 className="text-6xl font-bold">100%</h1>
                <p className="mt-3 text-gray-500">Role Based Access</p>
              </div>

              <div>
                <h1 className="text-6xl font-bold">∞</h1>
                <p className="mt-3 text-gray-500">Scalable Products</p>
              </div>

              <div>
                <h1 className="text-6xl font-bold">24/7</h1>
                <p className="mt-3 text-gray-500">Marketplace Access</p>
              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-24 bg-black text-white rounded-[40px] p-16 text-center">

          <p className="tracking-[5px] text-gray-400 mb-4">
            JOIN VENDORA
          </p>

          <h1 className="text-5xl font-bold mb-8">
            Buy Smarter. Sell Better.
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8">
            Whether you're a customer searching for quality products
            or a seller looking to grow your business, Vendora
            provides a premium marketplace experience for everyone.
          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
            Explore Vendora
          </button>

        </div>

      </div>

    </div>
  );
};

export default About;