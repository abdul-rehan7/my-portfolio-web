import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FooterBar from "../components/FooterBar";
import TechStack from "../components/TechStack";
import ProjectsCard from "../components/projectsCard";
import Education from "../components/Education";

const home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <TechStack />
      <ProjectsCard />
      <Education />
      <Footer />
      <FooterBar />
    </div>
  );
};

export default home;
