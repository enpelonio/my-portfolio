"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Education = () => {
  return (
    <div className="flex flex-col p-10 min-h-[100vh] relative bg-base">
      <div className="custom-shape-divider-top-1731926415">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="mt-14">
        <p className="font-heading text-3xl mb-3">Education</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-3 overflow-hidden">
          <Carousel className="max-h-[80vh]">
            <div>
              <img
                src="/images/gradpic1.jpg"
                className="object-contain max-h-[50vh]"
              ></img>
            </div>
            <div>
              <img
                src="/images/gradpic2.jpg"
                className="object-contain max-h-[50vh]"
              ></img>
            </div>
            <div>
              <img
                src="/images/topcit.jpg"
                className="object-contain max-h-[50vh]"
              ></img>
            </div>
          </Carousel>
        </div>

        <div className="max-h-[70vh] p-3">
          <p className="text-center font-heading text-2xl mb-5">
            Cebu Institute of Technology - University (2018-2022)
          </p>
          <p className="font-body mb-5">
            Course: Bachelor of Science in Computer Science
          </p>
          <p className="font-body font-bold mb-5">Awards and Recognitions</p>
          <ul className="list-disc list-inside font-body mb-5">
            <li>Magna Cum Laude</li>
            <li>PhilNITS Gold Medal Awardee</li>
            <li>TOPCIT Exam Topnotcher</li>
            <li>2020 Pitch Perfect Champion</li>
            <li>Google Developer Club Core Team Member</li>
          </ul>
        </div>
        <div className="custom-shape-divider-bottom-1731927230">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Education;
