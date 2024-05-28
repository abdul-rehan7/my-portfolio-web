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
          <div className="para px-1  space-y-1 py-1 absolute flex flex-col items-center  text-center w-[100%] top-[40%]"   data-aos="slide-up">
            <h1 className=" md:text-6xl text-white font-semibold text-2xl ">
              {this.props.heading}
            </h1>
            <p className=" md:text-2xl text-white text-sm">{this.props.para}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero2;
