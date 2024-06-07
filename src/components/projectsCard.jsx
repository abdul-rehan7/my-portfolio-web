import React from "react";

const projectsCard = () => {
  return (
    <div className="Projects bg-gray-100 text-black text-center p-7 space-y-5">
      <h1 className="text-2xl font-semibold">PROJECTS</h1>
      <div className="container flex flex-col md:flex-row md:space-y-0 items-center justify-center space-y-5 md:space-x-5 ">
        {/* CARD  */}

        <div
          className="card space-y-2 md:w-[25%] w-[90vw] h-auto bg-gray-300 p-2 rounded-sm"
          data-aos="zoom-in"
        >
          <div className="items space-y-2 ">
            <img src="/imgs/projs/1.png" alt="" />
            <h1 className="font-semibold">Microsoft Clone</h1>
            <p className="text-sm font-normal text-left h-[22vh] md:h-[18vh] ">
              I built a Microsoft clone that mimics the core functionalities of
              Office applications, enabling document creation, editing, and
              cloud storage integration.
            </p>
          </div>
          <div className="buttons flex justify-evenly">
            <a
              className="btn  w-[40%]"
              href="https://mr76-microsoft-clone.vercel.app/"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn-trans  w-[40%]"
              href="https://github.com/abdul-rehan7/Tailwind-CSS/tree/main/microsoft_clone"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div
          className="card space-y-2 md:w-[25%] w-[90vw] h-auto bg-gray-300 p-2 rounded-sm"
          data-aos="zoom-in"
        >
          <div className="items space-y-2 ">
            <img src="/imgs/projs/2.png" alt="" />
            <h1 className="font-semibold">Netflix Clone</h1>
            <p className="text-sm font-normal text-left h-[22vh] md:h-[18vh] ">
              I created a Netflix clone that replicates the streaming service's
              interface, allowing users to browse, search, and watch videos
              seamlessly.
            </p>
          </div>
          <div className="buttons flex justify-evenly">
            <a
              className="btn  w-[40%]"
              href="https://ar-netflix.vercel.app/"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn-trans  w-[40%]"
              href="https://github.com/abdul-rehan7/Web-dev-projects/tree/main/Netflix%20Clone"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div
          className="card space-y-2 md:w-[25%] w-[90vw] h-auto bg-gray-300 p-2 rounded-sm"
          data-aos="zoom-in"
        >
          <div className="items space-y-2 ">
            <img src="/imgs/projs/3.png" alt="" />
            <h1 className="font-semibold">React Project</h1>
            <p className="text-sm font-normal text-left h-[22vh] md:h-[18vh] ">
              Created my first React project, replicating the Nike's clean and
              dynamic interface, showcasing products, and providing an intuitive
              shopping experience.
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
