import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-white  ">
      <div className="mask">
        <video autoplay loop muted className="h-auto w-[100%] top-0">
          <source src="/imgs/bgVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="para space-y-1 py-1 absolute flex flex-col items-center  text-center w-[100%] top-[25%]"
        data-aos="zoom-in"
      >
        <p className=" md:text-2xl text-white text-xs">
          HI, I AM ABDUL REHAN
        </p>
        <h1 className=" md:text-7xl text-white font-semibold text-xl ">
          WEBSITE DEVELOPER.
        </h1>
        <div className="flex space-x-2">
          <Link to="/projects">
            <button className="btn text-xs md:text-base  w-[20vw] md:w-[15vw] hover:opacity transitions">
              Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn-trans text-xs md:text-base w-[20vw] md:w-[15vw]">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
