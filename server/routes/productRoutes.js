const express = require("express");
const router = express.Router();
const { getProducts, createProduct, deleteProduct } = require("../controllers/productController");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
dotenv.config();

const cloudinary = require("cloudinary").v2;


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const random = uuidv4();
    cb(null, random + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define routes
router.get("/products", getProducts);
router.post("/products", upload.single("myfile"), createProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
