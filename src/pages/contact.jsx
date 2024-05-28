import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import FooterBar from "../components/FooterBar";

const contact = () => {
  return <div>
          <Navigation />
          <Hero2 heading="CONTACT US." para="This is the contact para"/>
          <Footer/>
          <FooterBar/>
  </div>;
};

export default contact;
