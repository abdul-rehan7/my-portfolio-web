import React from "react";

const Education = () => {
  return (
    <div className="text-black flex flex-col items-center md:flex-row md:justify-evenly  md:py-7 py-10   space-y-20 bg-[#dedede] md:space-y-36 ">
      <div className="first bg-[#b3b3b3] rounded-md p-6 md:w-[35vw] w-[90vw] md:h-auto" data-aos="fade-right">
        <h1 className=" md:text-5xl text-4xl font-medium mt-[-3rem] ">Education</h1>
        <div className=" py-4   font-normal space-y-3  mt-[5%]">
          <h1 className="text-lg py-3 ">PROFESSIONAL COURSES</h1>
          <hr />
          <h1 className="md:text-base text-sm  pt-4">
            Certified Cloud Applied Generative AI Engineer, Karachi, Pakistan
          </h1>
          <h1 className="md:text-base text-sm ">Front End Developer</h1>
          <h1 className="md:text-base text-sm ">React JS Developer</h1>
          <h1 className="md:text-base text-sm ">Tailwind CSS </h1>
          <h1 className="md:text-base text-sm pb-4 ">Generative AI Engineer</h1>
          <hr />
          <h1 className="md:text-base text-sm pt-4 ">
            Aptech Learning Center, Karachi, Pakistan <br /> Aug - 2022
          </h1>
          <h1 className="md:text-base text-sm ">
            Front End Website Development <br /> Aug 2022 - PRESENT
          </h1>
        </div>
      </div>
      <div className="Second bg-[#b3b3b3] rounded-md p-6 md:w-[35vw] w-[90vw] md:h-auto" data-aos="fade-left">
        <h1 className=" md:text-5xl text-4xl font-medium mt-[-3rem]  ">Experience</h1>
        <div className="text  md:py-4 py-2 font-normal space-y-3  mt-[5%]">
          <h1 className="text-lg md:py-4 py-2  ">SENIOR STUDENT</h1>
          <h1 className="text-sm space-y-2  pb-4">
            <p>Governor Sindh Initiative for GenAI, Web3, and Metaverse</p>
            <p>2024 - PRESENT</p>
          </h1>
          <hr />
          <h1 className="text-lg md:py-4 py-2   ">YOUTUBE AND VIDEOGRAPHY MANAGER</h1>
          <h1 className="text-sm space-y-2 pb-4 ">
            <p> Erudite Coaching Centre · Part-time</p>
            <p>2024 - PRESENT</p>
          </h1>
          <hr />
          <h1 className="text-lg  md:py-4 py-2  ">CUSTOMER SERVICE REPRESENTATIVE</h1>
          <h1 className="text-sm space-y-2 ">
            <p>FORWARD · Part-time</p>
            <p>2024 - PRESENT</p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Education;
