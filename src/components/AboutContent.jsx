import React from "react";

const AboutContent = () => {
  return (
    <div className="about-cont h-[100vh] flex-col md:space-x-7 md:items-center  md:flex-row space-y-5 bg-gray-100  flex p-7 md:w-[100%]" >
      <div className="sec1  text-black flex flex-col items-left space-y-3" data-aos="zoom-in-right">
        <h1 className="text-3xl md:text-5xl font-bold">Who Am I?</h1>
        <p className="text-left font-semibold md:w-[60vw] text-[12px] md:text-xl">
          Front-End Web Developer | HTML5 | CSS3 | TypeScript | React.js
        </p>
        <p className="md:w-[50vw] text-[12px]">
          I offer my expertise to assist you in website development and frontend
          design to custom web applications and bug fixes, I can help bring your
          ideas to life. My skills include Html, CSS, JavaScript, React.js, and
          Tailwind
        </p>
        <a href="https://www.linkedin.com/in/abdul-rehan/" target="_blank"><div className="btn md:w-[10vw] w-[35vw]">Contact</div></a>
      </div>
      <div className="flex p-1 justify-end md:w-[35vw]"data-aos="flip-right">
        <img
          src="/imgs/profile.png"
          className=" md:w-[85%] rounded-full "
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutContent;
