import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
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
    </div>
  );
};

export default page;
