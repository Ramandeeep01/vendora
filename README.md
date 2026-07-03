# Vendora
# 🛒 Vendora - Multi Vendor Marketplace

A modern **Multi Vendor E-Commerce Marketplace** built using the **MERN Stack**. Vendora allows buyers to browse and purchase products while sellers can manage their own inventory through a dedicated dashboard.

---

## 🚀 Features

### 🌐 Public Landing Page (./Screenshots/login.png)

* Modern responsive landing page
* About page
* Marketplace overview
* Accessible without login

### 👤 Authentication

* User Signup
* User Login
* JWT Authentication
* Cookie-based authentication
* Persistent login

### 🛍 Buyer Features

* Browse all products
* View detailed product information
* Razorpay payment integration
* Clean shopping interface

### 🏪 Seller Features

* Seller Dashboard
* Add new products
* Upload product images
* Manage inventory
* Delete products
* View product statistics

### 💳 Payment Gateway

* Razorpay Integration
* Secure Checkout Flow

### ☁ Image Upload

* Cloudinary Integration
* Multer Image Upload
* Automatic cloud storage

### ⚡ Performance

* React Query for API caching
* Zustand for state management
* Fast and responsive UI
* Modern React architecture

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* React Router
* Tailwind CSS
* React Query
* Axios
* Zustand

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* Multer
* Cloudinary
* Razorpay

---

# 📂 Project Structure


Vendora/

│
├── frontend/
│   ├── src/
│   ├── Components/
│   ├── Pages/
│   ├── store/
│   └── api/
│
├── backend/
│   ├── Controllers/
│   ├── Routes/
│   ├── Models/
│   ├── Middlewares/
│   ├── Services/
│   └── config/
│
└── README.md




# ⚙ Installation

## Clone Repository

bash
git clone https://github.com/Ramandeeep01/vendora.git


bash
cd YOUR_REPOSITORY




## Backend Setup

bash
cd backend
npm install


Create a `.env` file inside the backend folder.

Example:

.env
PORT=8000

MONGO_URL=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

CLIENT_URL=http://localhost:5173

CLOUD_NAME=YOUR_CLOUDINARY_NAME
API_KEY=YOUR_CLOUDINARY_API_KEY
API_SECRET=YOUR_CLOUDINARY_SECRET

RAZORPAY_KEY_ID=YOUR_RAZORPAY_KEY
RAZORPAY_KEY_SECRET=YOUR_RAZORPAY_SECRET


Run backend

bash
npm run dev




## Frontend Setup

bash
cd frontend
npm install


Create a `.env` file

.env
VITE_API_URL=http://localhost:8000


Run frontend

bash
npm run dev


---

# 🔐 Authentication

The application uses

* JWT Tokens
* HTTP Only Cookies
* Role Based Authorization

Two user roles are available:

* Buyer
* Seller

---

# 📸 Main Pages

* Landing Page
* Login
* Signup
* About
* Product Listing
* Product Details
* Seller Dashboard
* Add Product

---

# 🧑 Seller Workflow

1. Register as Seller
2. Login
3. Open Seller Dashboard
4. Add Products
5. Upload Product Images
6. Manage Inventory
7. Delete Products

---

# 🛒 Buyer Workflow

1. Register as Buyer
2. Login
3. Browse Products
4. View Product Details
5. Purchase using Razorpay

---

# 📦 API Routes

### User


POST /user/signup

POST /user/login

POST /user/logout

GET /user/me


### Products


GET /product/all-products

GET /product/my-products

POST /product/add-product

DELETE /product/delete/:id


### Payment


POST /payment/create-order


---

# ✨ Future Improvements

* Wishlist
* Shopping Cart
* Order History
* Product Search
* Product Categories
* Ratings & Reviews
* Seller Analytics
* Admin Dashboard
* Email Verification
* Password Reset
* Responsive Mobile Optimization

---

# 📚 Learning Outcomes

This project helped me learn:

* MERN Stack Development
* REST API Design
* JWT Authentication
* Role-Based Authorization
* Image Upload with Cloudinary
* Payment Gateway Integration
* React Query
* Zustand State Management
* Tailwind CSS
* MongoDB Relationships
* File Upload Handling
* Full Stack Project Structure

---

# 👨‍💻 Author

**Raman**

GitHub:
https://github.com/Ramandeeep01

---


If you like this project, don't forget to give it a ⭐ on GitHub.
