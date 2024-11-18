import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStacks from "@/components/TechStacks";
import WorkExperience from "@/components/WorkExperience";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="techstacks">
        <TechStacks />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
    </div>
  );
};

export default page;
