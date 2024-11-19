import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col p-10 min-h-[100vh] relative bg-white">
      <div className="mt-14">
        <p className="font-heading text-3xl mb-3">About Me</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1 flex justify-center">
          <img
            src="/images/profile_pic.jpeg"
            alt="Profile Photo"
            className="w-40 h-40 rounded-full object-cover object-[200%_61%] border-2 border-primary"
          />
        </div>
        <div className="md:col-span-3">
          <p className="mt-5 font-body">
            Hi, I’m <strong>Ervin Niño Pelonio</strong>, a versatile and
            detail-oriented Full-Stack Developer with a passion for crafting
            high-quality, scalable web applications and innovative AI solutions.
            My career journey began as an Associate Technical Specialist at
            Alliance Software Incorporated, where I honed my skills in various
            technologies, led projects, and mentored new hires. This experience,
            coupled with my Magna Cum Laude distinction in Computer Science,
            reflects my dedication to excellence and continuous learning.
          </p>
          <p className="mt-5 font-body">
            Beyond my professional roles, I enjoy tackling real-world problems
            through technology. It is also my way of learning new technology and
            frameworks. I enjoy building web applications, and real-world
            applications of AI especially with Large Language Models. My dream
            is to use my skills to build applications that people would use and
            make their lives easier.
          </p>
          <p className="font-heading text-2xl mt-10">
            What I Offer as a Freelancer:
          </p>
          <ul className="list-disc mt-5">
            <li className="ml-10 font-body">
              <strong>Full-Stack Web Development</strong>: Using frameworks like
              Next.js, React, .NET MVC, and Python Django to create seamless
              user experiences.
            </li>
            <li className="ml-10 font-body">
              <strong>AI-Powered Solutions</strong>: Building applications with
              machine learning and natural language processing capabilities
              using Python, OpenAI API, Gemini and Vector Databases.
            </li>
            <li className="ml-10 font-body">
              <strong>Database Design and Optimization</strong>: Leveraging
              relational and NoSQL databases like MySQL, MongoDB, and T-SQL for
              efficient data handling.
            </li>
            <li className="ml-10 font-body">
              <strong>Technical Consulting</strong>: Offering guidance on
              project architecture, tech stacks, and development strategies..
            </li>
          </ul>
          <p className="font-heading text-2xl mt-10">
            What I Offer as an Employee:
          </p>
          <ul className="list-disc mt-5">
            <li className="ml-10 font-body">
              <strong>Technical Expertise</strong>: Proficient in technologies
              like C#.NET, Python (Flask/Django), PHP Laravel, React, Next.js,
              and TailwindCSS. Skilled in database management with MySQL, T-SQL,
              and MongoDB, ensuring seamless backend and data operations.
            </li>
            <li className="ml-10 font-body">
              <strong>Leadership and Collaboration</strong>: Experienced in
              leading small teams, mentoring junior developers, and fostering
              collaboration across diverse stakeholders to achieve project
              success.
            </li>
            <li className="ml-10 font-body">
              <strong>Proactive Learning and Growth</strong>: Always eager to
              learn emerging technologies and methodologies to stay ahead in a
              rapidly evolving industry.
            </li>
          </ul>
          <p className="font-heading text-2xl mt-10">Why Work With Me:</p>
          <p className="font-body mt-5">
            Whether as an employee or a freelancer, I bring:
          </p>
          <ul className="list-disc mt-5">
            <li className="ml-10 font-body">
              <strong>Adaptability and Efficiency</strong>: Quick to understand
              new domains and technologies, ensuring smooth integration into any
              team or project.
            </li>
            <li className="ml-10 font-body">
              <strong>Strong Communication Skills</strong>: Fluent in both
              technical and layman’s terms, with experience bridging the gap
              between developers and end-users.
            </li>
            <li className="ml-10 font-body">
              <strong>Passion for Impactful Work</strong>: My personal projects
              highlight my commitment to building solutions that make a
              difference.
            </li>
          </ul>
          <p className="mt-5 font-body">
            Outside of work, I’m a language enthusiast diving deep into Japanese
            culture and love brainstorming ideas that combine technology and
            human connection. If you’re looking for a developer who balances
            technical expertise with creativity and heart, let’s collaborate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
