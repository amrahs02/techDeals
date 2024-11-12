import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md flex items-center justify-between flex-wrap">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Tech Deals"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-white text-2xl font-semibold">
          Tech Deals
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-grow md:flex md:items-center md:justify-center space-x-4 mt-4 md:mt-0">
        <Link
          to="/"
          className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Home
        </Link>
        <Link
        //   to="/add"
          className="text-white bg-green-600 px-4 py-2 rounded-full hover:bg-green-700 transition"
        >
          Add Product
        </Link>
        <Link
        //   to="/delete"
          className="text-white bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition"
        >
          Delete Product
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
