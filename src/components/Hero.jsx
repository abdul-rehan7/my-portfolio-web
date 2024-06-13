import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero ">
      <div className="mask">
        <img src="/imgs/hero-bg.png" className="h-[100vh] md:block hidden md:h-auto w-[150%] top-0"></img>
        <img src="/imgs/hero-bg2.png" className="h-[100vh] md:hidden block z-[-10] md:h-auto w-[150%] top-0"></img>
       
      </div>
      <div
        className="para space-y-0 md:space-y-2 py-1 absolute flex px-5 md:px-16 flex-col items-left  text-left w-[100%] top-[25%]"
        data-aos="slide-right"
      >
        <p className=" md:text-3xl md:mt-[5rem] mt-[7rem]  text-white text-xs">HI, I AM ABDUL REHAN</p>
        <h1 className=" md:text-5xl  text-white font-semibold text-xl ">
          WEBSITE DEVELOPER.
        </h1>
        <div className="flex space-x-2">
          <Link to="/projects">
          <button className="btn w-[30vw] md:w-[10vw]" data-aos="zoom-in-left">
            Projects
          </button>
          </Link>
          <Link to="https://drive.google.com/file/d/1qjk1_giBmRwyZlobfGAIPrk0W7x_Cw_5/view?usp=sharing" target="_blank">
          <button className="btn-trans w-[30vw] md:w-[10vw]" data-aos="zoom-in-left">
            Resume
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
