import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-white  ">
      <div className="mask">
        <img
          className="h-[50vh] md:h-[100vh] md:w-[100vw]"
          src="/imgs/hero-bg.png"
          alt=""
        />
      </div>
      <div className="para space-y-1 py-1 absolute flex flex-col items-center  text-center w-[100%] top-[35%]"   data-aos="zoom-in">
        <p className=" md:text-2xl text-white text-base">
          HI, I AM ABDUL REHAN
        </p>
        <h1 className=" md:text-7xl text-white font-semibold text-2xl ">
          WEBSITE DEVELOPER.
        </h1>
        <div className="flex space-x-2">
          <Link to="/projects">
            <button className="btn  w-[30vw] md:w-[15vw] hover:opacity transitions">
              Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn-trans w-[30vw] md:w-[15vw]">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
