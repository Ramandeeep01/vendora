import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ShoppingBag, Store, Zap, Shield, Truck, Users } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold">VENDORA</h1>
          <div className="flex gap-6">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 text-lg font-semibold hover:text-gray-600 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-3 bg-black text-white rounded-full text-lg font-semibold hover:scale-105 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

     
      <section className="pt-40 pb-20 px-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <p className="tracking-[5px] text-gray-400 text-sm mb-6 uppercase">
                Welcome to Premium Commerce
              </p>

              <h1 className="text-7xl font-bold text-gray-900 leading-tight mb-8">
                Shop Smart.
                <br />
                Sell Better.
              </h1>

              <p className="text-xl text-gray-600 leading-8 mb-10 max-w-xl">
                Vendora is the modern marketplace where buyers discover premium
                products and sellers build thriving businesses with powerful
                tools and seamless integration.
              </p>

              <div className="flex gap-6">
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-black text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:bg-gray-800 transition duration-300 flex items-center gap-2"
                >
                  Get Started <ChevronRight size={20} />
                </button>

                <button
                  onClick={() => {
                    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border-2 border-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition duration-300"
                >
                  Learn More
                </button>
              </div>

             
              <div className="flex gap-12 mt-16">
                <div>
                  <h3 className="text-4xl font-bold">10K+</h3>
                  <p className="text-gray-600 mt-2">Active Products</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">2K+</h3>
                  <p className="text-gray-600 mt-2">Verified Sellers</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold">50K+</h3>
                  <p className="text-gray-600 mt-2">Happy Customers</p>
                </div>
              </div>
            </div>

           
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent rounded-[50px]"></div>
              <div className="bg-gradient-to-br from-black to-gray-800 rounded-[50px] h-[600px] flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <ShoppingBag size={120} className="text-white mx-auto mb-6" />
                  <p className="text-white text-2xl font-bold">Premium Shopping Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="tracking-[5px] text-gray-400 text-sm mb-4 uppercase">
              Choose Your Path
            </p>
            <h2 className="text-5xl font-bold text-gray-900">
              Whether You Buy or Sell
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="bg-white rounded-[40px] shadow-xl p-12 hover:-translate-y-4 transition duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-[25px] flex items-center justify-center mb-8">
                <ShoppingBag size={40} className="text-white" />
              </div>

              <h3 className="text-4xl font-bold text-gray-900 mb-6">For Buyers</h3>

              <p className="text-gray-600 text-lg leading-8 mb-8">
                Discover premium products from verified sellers. Enjoy seamless
                shopping with secure payments and fast delivery.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">Browse 10K+ premium products</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">Secure payment with Razorpay</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">Verified seller profiles</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">Modern, intuitive interface</span>
                </li>
              </ul>

              <button
                onClick={() => navigate("/signup")}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300"
              >
                Start Shopping
              </button>
            </div>

          
            <div className="bg-white rounded-[40px] shadow-xl p-12 hover:-translate-y-4 transition duration-300 border-2 border-black">
              <div className="bg-gradient-to-br from-black to-gray-800 w-20 h-20 rounded-[25px] flex items-center justify-center mb-8">
                <Store size={40} className="text-white" />
              </div>

              <h3 className="text-4xl font-bold text-gray-900 mb-6">For Sellers</h3>

              <p className="text-gray-600 text-lg leading-8 mb-8">
                Manage your products effortlessly with our powerful seller
                dashboard. Reach thousands of buyers and grow your business.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">Dedicated seller dashboard</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">Easy product upload & management</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">Inventory tracking & control</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">Reach thousands of customers</span>
                </li>
              </ul>

              <button
                onClick={() => navigate("/signup")}
                className="w-full bg-black text-white py-4 rounded-full text-lg font-semibold hover:scale-105 hover:bg-gray-800 transition duration-300"
              >
                Start Selling
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <section id="features" className="py-20 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="tracking-[5px] text-gray-400 text-sm mb-4 uppercase">
              Why Choose Vendora
            </p>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Premium Features for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern technology and designed for seamless commerce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* FEATURE 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[35px] p-10 border border-gray-200 hover:border-black transition">
              <div className="bg-black w-16 h-16 rounded-[20px] flex items-center justify-center mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-7">
                Experience blazing-fast performance with optimized architecture
                and seamless user experience across all devices.
              </p>
            </div>

         
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[35px] p-10 border border-gray-200 hover:border-black transition">
              <div className="bg-black w-16 h-16 rounded-[20px] flex items-center justify-center mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure & Safe</h3>
              <p className="text-gray-600 leading-7">
                Your data is protected with industry-standard encryption and
                secure payment processing through Razorpay.
              </p>
            </div>

           
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[35px] p-10 border border-gray-200 hover:border-black transition">
              <div className="bg-black w-16 h-16 rounded-[20px] flex items-center justify-center mb-6">
                <Truck size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reliable Service</h3>
              <p className="text-gray-600 leading-7">
                Count on our 24/7 platform availability and dedicated support
                for all your marketplace needs.
              </p>
            </div>

          
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[35px] p-10 border border-gray-200 hover:border-black transition">
              <div className="bg-black w-16 h-16 rounded-[20px] flex items-center justify-center mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
              <p className="text-gray-600 leading-7">
                Join thousands of verified sellers and happy customers in our
                thriving marketplace community.
              </p>
            </div>

           
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[35px] p-10 border border-gray-200 hover:border-black transition">
              <div className="bg-black w-16 h-16 rounded-[20px] flex items-center justify-center mb-6">
                <ShoppingBag size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy Management</h3>
              <p className="text-gray-600 leading-7">
                Intuitive dashboard and tools make managing your products and
                inventory effortless and productive.
              </p>
            </div>

           
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[35px] p-10 border border-gray-200 hover:border-black transition">
              <div className="bg-black w-16 h-16 rounded-[20px] flex items-center justify-center mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Always Growing</h3>
              <p className="text-gray-600 leading-7">
                We continuously add new features and improvements based on user
                feedback and market needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="tracking-[5px] text-gray-400 text-sm mb-4 uppercase">
              Simple Process
            </p>
            <h2 className="text-5xl font-bold text-gray-900">
              Get Started in 4 Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-[30px] p-10 text-center shadow-lg">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
              <p className="text-gray-600">
                Create your account in seconds and choose your role as buyer
                or seller.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-10 text-center shadow-lg">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Explore</h3>
              <p className="text-gray-600">
                Browse thousands of premium products or set up your seller
                dashboard.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-10 text-center shadow-lg">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Transact</h3>
              <p className="text-gray-600">
                Make purchases with secure payments or start selling your
                products.
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-10 text-center shadow-lg">
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">4</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Succeed</h3>
              <p className="text-gray-600">
                Enjoy seamless experience with support and continuous
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="tracking-[5px] text-gray-400 text-sm mb-4 uppercase">
              Real Stories
            </p>
            <h2 className="text-5xl font-bold text-gray-900">
              What Our Community Says
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
          
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[35px] p-10 border border-gray-200">
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-8 mb-6">
                "Vendora has transformed how I shop online. The interface is
                clean, and I found amazing products from trusted sellers. Highly
                recommended!"
              </p>
              <div>
                <h4 className="font-bold text-lg">Sarah Johnson</h4>
                <p className="text-gray-600">Verified Buyer</p>
              </div>
            </div>

        
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[35px] p-10 border border-gray-200">
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-8 mb-6">
                "As a seller, Vendora has been a game changer. The dashboard is
                intuitive, and I've reached more customers than ever before.
                Great platform!"
              </p>
              <div>
                <h4 className="font-bold text-lg">Marcus Chen</h4>
                <p className="text-gray-600">Verified Seller</p>
              </div>
            </div>

          
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[35px] p-10 border border-gray-200">
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-8 mb-6">
                "The security features and smooth payment process give me peace
                of mind. Vendora is my go-to marketplace for quality products
                and reliability."
              </p>
              <div>
                <h4 className="font-bold text-lg">Emma Rodriguez</h4>
                <p className="text-gray-600">Premium Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-10 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="tracking-[5px] text-gray-400 text-sm mb-6 uppercase">
            Ready to Begin
          </p>

          <h2 className="text-6xl font-bold text-white leading-tight mb-8">
            Join Vendora Today
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-8 mb-12">
            Whether you're looking for premium products or ready to start your
            selling journey, Vendora has everything you need to succeed.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <button
              onClick={() => navigate("/signup")}
              className="bg-white text-black px-12 py-5 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 flex items-center gap-2"
            >
              Get Started Now <ChevronRight size={20} />
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border-2 border-white text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Already a Member?
            </button>
          </div>
        </div>
      </section>

     
      <footer className="bg-black text-white px-10 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">VENDORA</h3>
            <p className="text-gray-400 leading-8">
              Premium marketplace connecting buyers and sellers with seamless
              experience.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">For Buyers</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                Browse Products
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Secure Payments
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Verified Sellers
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">For Sellers</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                Seller Dashboard
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Product Management
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Inventory Tracking
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">
              © 2024 Vendora. All rights reserved.
            </p>
            <div className="flex gap-8">
              <span className="text-gray-400 hover:text-white cursor-pointer transition">
                Twitter
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer transition">
                Facebook
              </span>
              <span className="text-gray-400 hover:text-white cursor-pointer transition">
                Instagram
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
