import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ExploreMain from "./components/ExploreMain";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";

function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/add" element={<AddProduct />} />
        <Route path ="delete" element={<DeleteProduct />} />
        <Route path="/explore" element={<ExploreMain />} />
      </Routes>
    </Router>
  );
}

export default App;
