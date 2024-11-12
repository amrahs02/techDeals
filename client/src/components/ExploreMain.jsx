import React from "react";
// import laptopImage from '../assets/laptop.jpg'; // Correct image
// import earbudsImage from '../assets/earbuds.jpg'; // Correct image
import ExplorePage from "./ExplorePage";

const Explore = () => {
  return (
    <>
      <div className="text-3xl texce font-bold m-5  ">
        Explore Deals
        <div className="rounded-2xl w-full grid grid-cols-2 grid-rows-2">
          <ExplorePage />
          <ExplorePage />
          <ExplorePage />
          <ExplorePage />
          <ExplorePage />
          <ExplorePage />
        </div>
      </div>
    </>
  );
};

export default Explore;
