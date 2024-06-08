import React, { Component } from "react";

class Hero2 extends Component {
  render() {
    return (
      <div>
        <div className="hero bg-white  ">
          <div className="mask">
            <img
              className="h-[50vh] md:h-[100vh] md:w-[100vw]"
              src="/imgs/hero-bg.png"
              alt=""
            />
          </div>
          <div className="para px-1  space-y-1 py-1 absolute flex flex-col items-center  text-center w-[100%] md:top-[30%] top-[25%]">
            <h1 className=" md:text-6xl text-white font-semibold text-2xl ">
              {this.props.heading}
            </h1>
            <p className=" md:text-2xl text-white text-sm">{this.props.para}</p>
            <div className="social text-center space-x-3">
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
