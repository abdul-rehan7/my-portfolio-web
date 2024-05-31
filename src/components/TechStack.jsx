import React from "react";

const TechStack = () => {
  return (
    <div className="bg-[#0f0f0f]  items-center h-auto text-center  md:py-5 py-2 space-y-4">
      <h1 className="md:text-4xl text-xl text-[#4d4d4d] font-semibold py-2">TECHNOLOGY STACK</h1>
      <div className="flex stacklist justify-evenly items-center">
        <i className="bx hover:text-[#bababa] bxl-html5 md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx hover:text-[#bababa] bxl-css3 md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx hover:text-[#bababa] bxl-tailwind-css md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx hover:text-[#bababa] bxl-javascript md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx hover:text-[#bababa] bxl-typescript md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx hover:text-[#bababa] bxl-nodejs md:text-8xl text-4xl" data-aos="fade-up" ></i>
        <i className="bx hover:text-[#bababa] bxl-react md:text-8xl text-4xl" data-aos="fade-up" ></i>
      </div>
    </div>
  );
};

export default TechStack;
