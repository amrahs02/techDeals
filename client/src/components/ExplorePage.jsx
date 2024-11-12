import React from "react";

const ExplorePage = () => {
  const laptops = [{ name: "Best Laptop" }];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 m-5 md:grid-cols-1 ">
        {laptops.map((laptop, index) => (
          <div
            key={index}
            className="bg-purple-400 bg-opacity-40 h-48 rounded-2xl overflow-hidden"
          >
            <div className="">
              <h2 className="text-xl mt-4 font-bold text-center ">{laptop.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
