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
            <Hero2 heading="MY PROJECTS" para="A showcase of my diverse range of projects highlighting my skills "/>
            <ProjectsCard/>
            <Footer/>
            <FooterBar/>
    </div>
  )
}

export default projects
