import React from "react";
// import laptopImage from '../assets/laptop.jpg'; // Correct image
// import earbudsImage from '../assets/earbuds.jpg'; // Correct image

const Explore = () => {
  const laptops = [{ name: "Best Value for Money Laptop" }];
  const earbuds = [{ name: "Best Value Earbuds" }];

  return (
    <div className="rounded-2xl m-10">
      <h1 className="text-3xl font-bold mb-6">Explore Deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {laptops.map((laptop, index) => (
          <div
            key={index}
            className="bg-purple-400 h-48 rounded-2xl overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">{laptop.name}</h2>
            </div>
          </div>
        ))}
        {earbuds.map((earbud, index) => (
          <div key={index} className="bg-green-400 rounded-2xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">{earbud.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
