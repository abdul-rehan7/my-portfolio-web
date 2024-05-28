import React from "react";

const ContactForm = () => {
  return (
    <div className="text-left flex justify-center py-5 bg-[#202020]">
      <form
        action=""
        className="flex text-white flex-col  p-5 space-y-2 md:space-y-5 md:w-[50vw] w-[100vw]"
      >
        <div className="item" data-aos="zoom-in-up">
          <label>Your Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name "
            className="bg-black  px-2 py-2 w-[100%] rounded-sm"
          />
        </div>
        <div className="item" data-aos="zoom-in-up">
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter Your Email "
            className="bg-black
  px-2 py-2 w-[100%] rounded-sm"
          />
        </div>
        <div className="item" data-aos="zoom-in-up">
          <label>Subject:</label>
          <input
            type="text"
            placeholder="Enter Subject "
            className="bg-black
  px-2 py-2 w-[100%] rounded-sm"
          />
        </div>
        <div className="item" data-aos="zoom-in-up">
          <label>Message:</label>
          <textarea
            rows="6"
            placeholder="Your Message Here "
            className="bg-black  px-2 py-2 w-[100%] rounded-sm"
          ></textarea>
        </div>
        <button className=" btn-light hover:bg-[#535353]">SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactForm;
