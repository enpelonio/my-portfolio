"use client";
import ProjectHeader from "@/components/ProjectHeader";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const page = () => {
  return (
    <div className="bg-light min-h-screen">
      <ProjectHeader />
      <div className="pt-10 px-10 flex flex-col w-full">
        <h2 className="font-heading text-3xl mb-4 text-center">
          TeknoLink (2020)
        </h2>
        <div className="gap-4 self-center">
          <Carousel className="max-w-[95vw] md:max-w-[60vw]">
            <div>
              <img
                src="/images/Teknolink-Creator1.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/images/Teknolink-Creator2.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/images/Teknolink-Creator3.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/images/Teknolink-Creator4.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/images/Teknolink-Creator5.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/images/Teknolink-App1.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/images/Teknolink-App2.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/images/Teknolink-App3.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/images/Teknolink-App4.png"
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/images/Teknolink-App5.png"
                className="object-contain"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[95vw] md:w-[60vw] bg-light">
          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Problem</h2>
            <p className="font-body">
              Many students find it difficult to discover activities and
              opportunities within their campus that align with their personal
              goals and passions. Despite numerous programs and activities being
              available, the process of finding the right fit is often
              overwhelming and inefficient. This disconnect prevents students
              from fully taking advantage of opportunities for skill-building,
              networking, and personal growth.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Solution</h2>
            <p className="font-body">
              <strong>TeknoLink</strong> was developed as a platform to bridge
              this gap by connecting students with various activities, clubs,
              events, and opportunities both within the campus and from external
              partner industries. The application features:
            </p>
            <ul className="list-disc list-inside font-body">
              <li>
                <strong>Personalized recommendation system</strong> to suggest
                activities based on individual preferences, interests, and past
                participation.
              </li>
              <li>
                <strong>Gamification elements</strong> to encourage students to
                participate more actively in campus life, hone their skills, and
                receive recognition through a points or reward system.
              </li>
              <li>
                <strong>Search and filter functionality</strong> to make
                discovering relevant events more intuitive and efficient.
              </li>
            </ul>
            <p className="text-gray-700 mt-4 font-body">
              Although TeknoLink was not fully completed due to the constraints
              of the academic semester, the project laid a solid foundation for
              solving a key issue in student engagement.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Results</h2>
            <p className="font-body">
              The project gained significant recognition and validation by
              winning the university’s{" "}
              <strong>Pitch Perfect competition</strong>, showcasing its
              potential to create impact. Despite not reaching full completion,
              the prototype demonstrated how technology can simplify the process
              of discovering and participating in campus activities. This
              concept holds promise for increasing student involvement and
              satisfaction, fostering a more connected and motivated campus
              community.
            </p>
            <p className="font-body">
              If revisited, TeknoLink could further develop into a comprehensive
              platform with advanced recommendation algorithms and deeper
              integration with partner industries for student internships or
              training programs.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Contribution</h2>
            <p className="font-body">
              I was the <strong>team lead</strong> and{" "}
              <strong>lead coder</strong> for TeknoLink. My contributions
              included:
            </p>
            <ul className="list-disc list-inside font-body">
              <li>
                <strong>Coded the TeknoLink creator</strong>, the core feature
                for managing and posting events and activities.
              </li>
              <li>
                Designed the <strong>database system</strong>, which used SQL
                and a table structure that would cater the complexity of the
                application.
              </li>
              <li>
                Led the team by coordinating tasks, overseeing development, and
                ensuring that our efforts aligned with the project’s overall
                goals.
              </li>
              <li>
                Provided technical leadership, making key decisions related to
                the architecture and implementation of the app.
              </li>
            </ul>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Tech Stack</h2>
            <ul className="list-disc list-inside font-body">
              <li>
                <strong>Front-end:</strong> HTML, CSS
              </li>
              <li>
                <strong>Back-end:</strong> Python Django, SQL
              </li>
              <li>
                <strong>Mobile app:</strong> Unity3D (for the Android
                application)
              </li>
              <li>
                <strong>Other technologies:</strong> JavaScript for interactive
                elements
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
