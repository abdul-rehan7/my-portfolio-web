import React from "react";

const TechStack = () => {
  return (
    <div className="bg-gray-100  text-gray-500  items-center h-auto text-center  md:py-5 py-2 space-y-4">
      <h1 className="md:text-4xl text-xl text-black font-semibold py-2">TECHNOLOGY STACK</h1>
      <div className="flex stacklist justify-evenly items-center">
        <i className="bx cursor-pointer hover:text-gray-700 bxl-html5 md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx cursor-pointer hover:text-gray-700 bxl-css3 md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx cursor-pointer hover:text-gray-700 bxl-tailwind-css md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx cursor-pointer hover:text-gray-700 bxl-javascript md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx cursor-pointer hover:text-gray-700 bxl-typescript md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx cursor-pointer hover:text-gray-700 bxl-nodejs md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx cursor-pointer hover:text-gray-700 bxl-react md:text-8xl text-4xl" data-aos="fade-up" ></i>
      </div>
    </div>
  );
};

export default TechStack;
