const cloudinary = require("cloudinary").v2;

console.log("CLOUDINARY CONFIG:");
console.log("CLOUD_NAME:", process.env.CLOUD_NAME);
console.log("API_KEY:", process.env.API_KEY);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;  