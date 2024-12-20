"use client";
import React from "react";
import ProjectHeader from "@/components/ProjectHeader";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const page = () => {
  return (
    <div className="bg-white min-h-screen">
      <ProjectHeader />
      <div className="pt-10 px-10 flex flex-col w-full">
        <h2 className="font-heading text-3xl mb-4 text-center">
          Barili Hatud Express (2024)
        </h2>
        <div className="gap-4 self-center">
          <Carousel className="max-w-[95vw] md:max-w-[60vw]">
            <div>
              <video controls>
                <source src="/videos/hatudexpress-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[95vw] md:w-[60vw] bg-light">
            <div className="flex flex-1 justify-center">
                <a 
                className="text-center font-heading text-2xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://bit.ly/barilihatudexpress">
                    https://bit.ly/barilihatudexpress
                </a>
            </div>
            
          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Problem</h2>
            <p className="font-body">
              Residents of Barili, Cebu face challenges accessing essential services like food delivery, grocery shopping, and ride requests, especially busy families, elderly residents, and individuals living far from the marketplace. Limited local options for such services create inconveniences and time constraints, reducing access to essential goods and transportation, particularly for those with mobility or connectivity challenges.
              Furthermore, motorcycle drivers have limited access to passengers because the passengers they can take is only limited to their own barangay residents. They have a lot of idle time and competition with the only service they can provide being the ride service.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Solution</h2>
            <p className="font-body">
              Barili Hatud Express offers a comprehensive service combining food delivery, grocery ordering, ride requests, and package delivery requests tailored to the local needs of Barili residents. The service provides quick and reliable deliveries, promotes local products, and ensures accessibility even with free data via Messenger. By catering to specific demographic needs, like busy families and the elderly, the service streamlines daily logistics, reduces travel time, and brings essential services to their doorstep.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Tech Stack</h2>
            <ul className="list-disc list-inside font-body">
              <li>
                <strong>Backend: </strong> Node.js for handling business logic, API integration, and real-time updates.
              </li>
              <li>
                <strong>Database: </strong> MongoDB for managing orders, user data, service catalogs, and driver availability.
              </li>
              <li>
                <strong>Frontend/Interface: </strong> Facebook Messenger platform for user interaction, leveraging its built-in familiarity and free data accessibility for customers.
              </li>
              <li>
                <strong>Hosting/Infrastructure: </strong> AWS EC2 instance for hosting the Node.js webhook application, ensuring scalability and reliability.
              </li>
              <li>
                <strong>API Integrations: </strong> Facebook Messenger API for seamless chatbot functionality, user queries, and order management.
              </li>
            </ul>
          </section>

          <footer className="w-full mx-auto my-8 p-6 bg-secondary-light text-center rounded-lg">
            <p className="font-body text-black">
              &copy; 2024 Ervin Niño Pelonio. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default page;
