const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const newProduct = new Product({
      name: req.body.name,
      image: result.secure_url,
      buyLink: req.body.buyLink,
    });

    await newProduct.save();

    fs.unlink(req.file.path, function (err) {
      if (err) console.log(err);
      console.log("File deleted successfully");
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
