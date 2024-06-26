import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className=" navbar relative md:bg-transparent bg-black w-[100vw]  flex items-center justify-between px-5 py-2">
      {/* LEFT NAVBAR  */}

      <nav className="brand text-black   group flex items-center text-center md:space-x-10 ">
        <Link to="/" className="text-white text-xl md:text-2xl " data-aos="zoom-in-right">
          Abdul Rehan
        </Link>
        <div className={click ? "md:flex hidden"  :  "visible "}>
          <nav className="transitions bg-[#000000ef] w-[100%] z-50 md:bg-transparent md:text-base md:flex-row md:space-x-10 md:flex md:top-0 md:space-y-0  md:relative absolute flex text-center text-2xl space-y-5  top-[2.5rem] md:left-0 left-0 md:py-0 py-5 flex-col ">
            <Link
              className="text-white hover:text-yellow-400 transitions "
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white hover:text-yellow-400 transitions "
              to="/projects"
            >
              Projects
            </Link>

            <Link
              className="text-white hover:text-yellow-400 transitions "
              to="/about"
            >
              About
            </Link>

            <Link
              className="text-white hover:text-yellow-400 transitions "
              to="/contact"
            >
              Contact
            </Link>
            <div className={click ? "md:hidden flex" : "visible"}>
              <div className="social space-x-2">
                <a
                  href="https://www.linkedin.com/in/abdul-rehan/"
                  target="_blank"
                >
                  <i className="bx transitions  bxl-linkedin text-white hover:bg-white hover:text-black cursor-pointer border-[1px] border-[#848484] p-2 rounded-full"></i>
                </a>
                <a
                  href="https://www.instagram.com/mirza_rehan76/"
                  target="_blank"
                >
                  <i className="bx transitions bxl-instagram text-white hover:bg-white hover:text-black cursor-pointer border-[1px] border-[#848484] p-2 rounded-full"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100055767942968"
                  target="_blank"
                >
                  <i className="bx transitions bxl-facebook text-white hover:bg-white hover:text-black cursor-pointer border-[1px] border-[#848484] p-2 rounded-full"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </nav>

      {/* RIGHT NAVBAR  */}

      <div onClick={handleClick} className="hamburger">
        {click ? (
          <div className="md:hidden space-y-1">
            <div className="line bg-white h-[2px] w-6 rounded-full"></div>
            <div className="line bg-white h-[2px] w-6 rounded-full"></div>
            <div className="line bg-white h-[2px] w-6 rounded-full"></div>
          </div>
        ) : (
          <i className="bx right-4 text-white text-3xl absolute top-2 bx-x"></i>
        )}
      </div>

      <div className="space-x-3  md:flex md:flex-row md:relative md:space-y-0 md:top-0 items-center hidden">
        <div className="social text-center space-x-3">
          <a href="https://www.linkedin.com/in/abdul-rehan/" target="_blank">
            {" "}
            <i className="bx transitions  bxl-linkedin text-white hover:bg-white hover:text-black cursor-pointer border-[1px] border-white p-2 rounded-full"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100055767942968"
            target="_blank"
          >
            {" "}
            <i className="bx transitions bxl-facebook text-white hover:bg-white hover:text-black cursor-pointer border-[1px] border-white p-2 rounded-full"></i>
          </a>
          <a href="https://www.instagram.com/mirza_rehan76/" target="_blank">
            <i className="bx transitions bxl-instagram text-white hover:bg-white hover:text-black cursor-pointer border-[1px] border-white p-2 rounded-full"></i>
          </a>
        </div>
        <a href="https://www.linkedin.com/in/abdul-rehan/" target="_blank">
          <button className="btn w-[30vw] md:w-[10vw]" data-aos="zoom-in-left">
            Let's Connect
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1lIhikrikjm_Kt-8LO2nw6G1g3UWgf16F/view?usp=drive_link"
          target="_blank"
        >
        </a>
      </div>
    </div>
  
  );
};

export default Navigation;








