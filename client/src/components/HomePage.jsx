import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Products from "./Products";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";

function HomePage() {
  return (
    <motion.div
      className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        {/* Main Header Section */}
        <motion.div
          className="p-10 md:p-20 bg-white rounded-3xl shadow-2xl max-w-3xl mx-auto"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Welcome to Tech-Deals
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
            The best place to find unbeatable offers on the latest tech gadgets
            and devices.
          </p>
          {/* Call to Action Button */}
          <motion.a
            href="/explore"
            className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white py-3 px-10 rounded-full text-lg md:text-xl lg:text-2xl font-semibold shadow-md hover:shadow-lg hover:from-green-500 hover:to-green-700 transition-all"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          >
            Explore Deals
          </motion.a>
        </motion.div>

        
        {/* Product Showcase */}
        <Suspense fallback={<div>Loading...</div>}>
          <Products />
        </Suspense>
      </div>
    </motion.div>
  );
}

export default HomePage;
