"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const WorkExperience = () => {
  return (
    <div className="flex flex-col p-10 min-h-[100vh] relative bg-white">
      <div className="mt-14">
        <p className="font-heading text-3xl mb-3">Work Experience</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-3 overflow-hidden">
          <Carousel className="max-h-[80vh]">
            <div>
              <img
                src="/images/alliance_logo.png"
                className="object-contain max-h-[50vh]"
              ></img>
            </div>
            <div>
              <img
                src="/images/alliance_building.png"
                className="object-contain max-h-[50vh]"
              ></img>
            </div>
            <div>
              <img
                src="/images/alliance_pos.jpg"
                className="object-contain max-h-[50vh]"
              ></img>
            </div>
            <div>
              <img
                src="/images/alliance_hris.jpg"
                className="object-contain max-h-[50vh]"
              ></img>
            </div>
            <div>
              <img
                src="/images/SAP-Logo.png"
                className="object-contain max-h-[50vh]"
              ></img>
            </div>
            <div>
              <img
                src="/images/alliance_pic.jpg"
                className="object-contain max-h-[50vh]"
              ></img>
            </div>
          </Carousel>
        </div>
        <div className="overflow-y-scroll max-h-[70vh] p-3">
          <p className="text-center font-heading text-2xl mb-5">
            Alliance Software Incorporated (2022-2024)
          </p>
          <p className="font-body">Position: Associate Technical Specialist</p>
          <p className="font-body mb-5">
            Location: 14th Floor, BuildComm Center, Sumilon Road, Cebu City,
            6000 Cebu
          </p>
          <p className="font-body font-bold mb-5">Key Responsibilities</p>
          <ul className="list-disc list-inside font-body mb-5">
            <li>
              Contributed to three major projects as developer, support
              engineer, lead developer, and team lead, delivering scalable
              solutions to high-profile clients such as{" "}
              <strong>Tsuneishi</strong> and <strong>Unilab</strong>.
            </li>
            <li>
              Designed and implemented client-specific customizations for the
              <strong> Alliance HRIS </strong> product line, achieving one of
              the fastest project acceptances in company history.
            </li>
            <li>
              Enhanced application security for{" "}
              <strong>Alliance POS and WebPOS</strong> product lines, delivering
              a major enhancement under tight deadlines with minimal bugs.
            </li>
            <li>
              Provided production support for <strong>Alliance POS</strong>,
              performing bug fixes and implementing{" "}
              <strong>database optimization techniques</strong>, ensuring
              seamless operation for key local clients.
            </li>
            <li>
              Led a team of five developers on the{" "}
              <strong>Alliance WebPOS</strong> project, improving repository
              management processes and reducing bugs caused by repository
              mishandling.
            </li>
            <li>
              Mentored new hires, expediting their onboarding and skill
              development.
            </li>
            <li>
              Delivered quality enhancements and resolved production issues for
              a major finance-related application as{" "}
              <strong>lead developer</strong> and{" "}
              <strong>lead support engineer</strong>, ensuring stability and
              meeting client expectations.
            </li>
          </ul>
          <p className="font-body font-bold mb-5">Key Achievements</p>
          <ul className="list-disc list-inside font-body mb-5">
            <li>
              Promoted <strong>three times</strong> within two years for
              exceptional contributions, including leading critical projects and
              delivering high-quality solutions.
            </li>
            <li>
              Achieved <strong>N3-level</strong> Nihongo proficiency within two
              years demonstrating fast learning capabilities while managing
              critical applicaitons.
            </li>
            <li>
              Quickly mastered new frameworks and project requirements, reducing
              issue resolution time and ensuring{" "}
              <strong>reliable enhancement deployments </strong>
              for mission-critical applications.
            </li>
            <li>
              Played a pivotal role in the successful delivery of a high-impact
              finance-related application, resolving production issues within
              <strong> tight deadlines </strong> while enhancing system
              reliability.
            </li>
          </ul>
          <p className="font-body font-bold mb-5">Technologies Used</p>
          <p className="font-body italic">
            HTML, CSS, JavaScript, TypeScript, ReactJS, AngularJS, PHP, C#.NET,
            Laravel, T-SQL, MySQL, SAP
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
