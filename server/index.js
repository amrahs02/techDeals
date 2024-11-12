const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./utils/errorHandler");

dotenv.config(); // Load env vars from .env file into process.env object
connectDB(); // Connect to MongoDB

const app = express(); // Create Express app instance and assign it to app variable for easy reference


app.use(cors()); // Enable CORS for all requests to the server
app.use(express.json()); // Enable parsing JSON request bodies

app.use("/api/v1", productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
