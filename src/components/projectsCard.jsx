import React from "react";
import { Link } from "react-router-dom";

const projectsCard = () => {
  return (
    <div className="Projects text-white text-center p-7 space-y-5">
      <h1 className="text-2xl font-semibold">PROJECTS</h1>
      <div className="container  flex flex-col md:flex-row md:space-y-0 items-center justify-center space-y-5 md:space-x-5 ">
        {/* CARD  */}

        <div className="card space-y-2 md:w-[25%] w-[90vw] h-auto bg-[#1b1b1b] p-2 rounded-sm">
          <div className="items space-y-2 ">
            <img src="/imgs/projs/1.png" alt="" />
            <h1 className="font-semibold">Archiods</h1>
            <p className="text-sm font-normal text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi
              fuga provident. Magni, aperiam! Minima. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Velit, omnis!
            </p>
          </div>
          <div className="buttons flex justify-evenly">
            <a
              className="btn  w-[40%]"
              href="https://www.google.com/search?q=React&rlz"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn-trans  w-[40%]"
              href="https://www.google.com/search?q=GitHub&rlz"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="card space-y-2 md:w-[25%] w-[90vw] h-auto bg-[#1b1b1b] p-2 rounded-sm">
          <div className="items space-y-2 ">
            <img src="/imgs/projs/1.png" alt="" />
            <h1 className="font-semibold">Archiods</h1>
            <p className="text-sm font-normal text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi
              fuga provident. Magni, aperiam! Minima. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Velit, omnis!
            </p>
          </div>
          <div className="buttons flex justify-evenly">
            <a
              className="btn  w-[40%]"
              href="https://www.google.com/search?q=React&rlz"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn-trans  w-[40%]"
              href="https://www.google.com/search?q=GitHub&rlz"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="card space-y-2 md:w-[25%] w-[90vw] h-auto bg-[#1b1b1b] p-2 rounded-sm">
          <div className="items space-y-2 ">
            <img src="/imgs/projs/1.png" alt="" />
            <h1 className="font-semibold">Archiods</h1>
            <p className="text-sm font-normal text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi
              fuga provident. Magni, aperiam! Minima. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Velit, omnis!
            </p>
          </div>
          <div className="buttons flex justify-evenly">
            <a
              className="btn  w-[40%]"
              href="https://www.google.com/search?q=React&rlz"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn-trans w-[40%]"
              href="https://www.google.com/search?q=GitHub&rlz"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projectsCard;
