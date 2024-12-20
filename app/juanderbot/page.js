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
          Juander Bot (2024)
        </h2>
        <div className="gap-4 self-center">
          <Carousel className="max-w-[95vw] md:max-w-[60vw]">
            <div>
              <img src="/images/juanderbot-1.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/juanderbot-2.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/juanderbot-3.png" className="object-contain" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[95vw] md:w-[60vw] bg-light">
            <div className="flex flex-1 justify-center">
                <a 
                className="text-center font-heading text-2xl underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://gov-rag-ui.vercel.app/">
                    https://gov-rag-ui.vercel.app/
                </a>
            </div>
            
          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Problem</h2>
            <p className="font-body">
              Navigating government processes in the Philippines can be challenging due to the complexity of requirements, unclear documentation, and inconsistent information across different sources. This creates inefficiencies for individuals seeking accurate answers to their queries, often leading to frustration and wasted time.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Solution</h2>
            <p className="font-body">
              Juander Bot is an AI-powered chatbot designed to streamline access to information about government processes. It uses Retrieval Augmented Technology to deliver accurate, context-aware responses. By leveraging advanced search and multi-vector retrieval, Juander Bot ensures users receive up-to-date and precise guidance for their specific inquiries, reducing time spent and improving user experience.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Tech Stack</h2>
            <ul className="list-disc list-inside font-body">
              <li>
                <strong>Frontend: </strong> Next.js + TailwindCSS: Provides a seamless and responsive user interface for interaction.
              </li>
              <li>
                <strong>Gemini API: </strong> Powers the AI capabilities and retrieval-augmented responses.
              </li>
              <li>
                <strong>Pinecone: </strong> Handles vector similarity search for the summary of documents for efficient information retrieval.
              </li>
              <li>
                <strong>MongoDB: </strong> Stores user conversations and session data securely and scalably.
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
