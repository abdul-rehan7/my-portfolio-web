import React, { Component } from "react";

class Hero2 extends Component {
  render() {
    return (
      <div>
        <div className="hero bg-white  ">
          <div className="mask">
          <img src="/imgs/hero-bg.png" className="h-[100vh] md:block hidden md:h-auto w-[150%] top-0"></img>
          <img src="/imgs/hero-bg2.png" className="h-[100vh] md:hidden block z-[-10] md:h-auto w-[150%] top-0"></img>
          </div>
          <div className="para md:px-16 px-7  space-y-1 py-1 absolute flex flex-col items-left  text-left w-[100%] md:top-[40%] top-[50%]">
            <h1 className=" md:text-5xl text-white font-semibold text-xl ">
              {this.props.heading}
            </h1>
            <p className=" md:text-base text-white text-xs">{this.props.para}</p>
            <div className="social text-left space-x-3">
          <a href="https://www.linkedin.com/in/abdul-rehan/" target="_blank">
            {" "}
            <i className="bx md:text-3xl transitions  bxl-linkedin text-white hover:bg-white hover:text-black cursor-pointer border-[1px] border-white p-2 rounded-full"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100055767942968"
            target="_blank"
          >
            {" "}
            <i className="bx md:text-3xl transitions bxl-facebook text-white hover:bg-white hover:text-black cursor-pointer border-[1px] border-white p-2 rounded-full"></i>
          </a>
          <a href="https://www.instagram.com/mirza_rehan76/" target="_blank">
            <i className="bx md:text-3xl transitions bxl-instagram text-white hover:bg-white hover:text-black cursor-pointer border-[1px] border-white p-2 rounded-full"></i>
          </a>
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero2;
