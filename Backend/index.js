require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const { connectDB } = require("./connections");
const { checkAuthenticationCookie } = require("./Middlewares/user");

const userRoute = require("./Routes/user");
const userProduct = require("./Routes/product");
const paymentRoute = require("./Routes/payment");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully ✅"))
  .catch((err) => console.log("DB Error", err));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", checkAuthenticationCookie("token"), userRoute);
app.use("/product", checkAuthenticationCookie("token"), userProduct);
app.use("/payment", paymentRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});