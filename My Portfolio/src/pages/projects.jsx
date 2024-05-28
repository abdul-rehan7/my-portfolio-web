import React from 'react'
import Navigation from "../components/Navigation";
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import ProjectsCard from '../components/projectsCard';
import FooterBar from "../components/FooterBar";

const projects = () => {
  return (
    <div>
            <Navigation />
            <Hero2 heading="MY PROJECTS" para="Some of my Recent Works"/>
            <ProjectsCard/>
            <Footer/>
            <FooterBar/>
    </div>
  )
}

export default projects
