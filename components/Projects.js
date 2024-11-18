"use client";
import React from "react";
import Card from "./Card";
import { useRouter } from "next/navigation";
import "react-responsive-modal/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Projects = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col p-10 min-h-[100vh] relative bg-light">
      <p className="font-heading text-3xl mb-10">Personal Projects</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          className="bg-secondary-light"
          onClick={() => {
            router.push("/teknolink");
          }}
          title={"TeknoLink"}
          description={
            "An application designed to connect students with campus activities and industry partners, using gamification and recommendations to align with their personal goals and passions."
          }
          imgSrc="/images/teknolink-logo.png"
        />

        <Card
          className="bg-base"
          title={"Novel 3D Plant Point Cloud Segmentation Technique"}
          onClick={() => {
            router.push("/segmentation");
          }}
          description={
            "We developed a novel 3D plant point cloud segmentation tool for Maize and Tomato plants, significantly reducing the workload of creating labeled sets by 80%-90% while maintaining competitive accuracy, to accelerate research in 3D plant phenotyping."
          }
          imgSrc="/images/plant-segmentation.png"
        />
        <Card
          className="bg-secondary-light"
          imgSrc={"/images/kaiwalogo.png"}
          title={"Japanese Language Conversation Partner (Kaiwa AI)"}
          description={
            "An AI-powered Japanese language conversation partner to address the challenges I face in learning Japanese, offering customizable conversation topics, real-time feedback, statement deconstruction, vocabulary saving, and quizzes for improved recall."
          }
          onClick={() => {
            router.push("/kaiwa");
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
