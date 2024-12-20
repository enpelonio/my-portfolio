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
          Japanese Language Conversation Partner (2023)
        </h2>
        <div className="gap-4 self-center">
          <Carousel className="max-w-[95vw] md:max-w-[60vw]">
            <div>
              <img src="/images/kaiwa1.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa2.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa3.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa4.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa5.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa6.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa7.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa8.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa9.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa10.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/kaiwa11.png" className="object-contain" />
            </div>
            <div>
              <video controls>
                <source src="/videos/kaiwa-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[95vw] md:w-[60vw] bg-light">
          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Problem</h2>
            <p className="font-body">
              Learning Japanese, especially for non-native speakers, can be
              challenging due to the need for consistent practice with native
              speakers, understanding sentence structures, memorizing vocabulary
              and kanji, and getting real-time feedback. As a language learner,
              finding a conversation partner who can provide personalized,
              instant guidance and address these challenges is difficult,
              leading to slower progress.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Solution</h2>
            <p className="font-body">
              To solve these problems, I am developing an AI-powered Japanese
              language conversation partner that simulates real-world practice
              with native-level support. Key features include:
            </p>
            <ul className="list-disc list-inside font-body">
              <li>
                <strong>Customizable Conversation Topics: </strong> Users can
                engage in a wide variety of preset topics or create custom ones
                to suit their learning goals.
              </li>
              <li>
                <strong>Real-Time Feedback from a Sensei: </strong> The AI
                provides instant comments on each response, offering
                corrections, guidance, and answering questions about the ongoing
                conversation.
              </li>
              <li>
                <strong>Japanese Statement Deconstruction: </strong> The AI
                breaks down sentences into root words and kanji, helping
                learners understand the structure and meaning of the
                conversation.
              </li>
              <li>
                <strong>Vocabulary and Kanji Saving: </strong> Learners can save
                new words and kanji during conversations for later review.
              </li>
              <li>
                <strong>Quizzes for Recall Improvement: </strong> The app
                includes quizzes on saved vocabulary and kanji to reinforce
                learning and enhance long-term retention.
              </li>
            </ul>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Contribution</h2>
            <p className="font-body">
              This project aims to make learning Japanese more accessible and
              efficient, especially for self-learners like me who need
              consistent practice but lack access to native speakers. By
              leveraging AI, it bridges the gap between traditional study tools
              and real-time conversational practice, making language learning
              more interactive and tailored to individual needs.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Tech Stack</h2>
            <ul className="list-disc list-inside font-body">
              <li>
                <strong>Backend: </strong> Python, Flask
              </li>
              <li>
                <strong>Frontend: </strong> Next.js, TailwindCSS
              </li>
              <li>
                <strong>Database: </strong> MongoDB
              </li>
              <li>
                <strong>Deployment: </strong> Cloud VM (Virtual Machine)
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
