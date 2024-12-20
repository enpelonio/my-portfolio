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
          Novel 3D Plant Point Cloud Segmentation Technique (2022)
        </h2>
        <div className="gap-4 self-center">
          <Carousel className="max-w-[95vw] md:max-w-[60vw]">
            <div>
              <img src="/images/segmentation1.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/segmentation2.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/segmentation3.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/segmentation4.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/segmentation5.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/segmentation6.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/segmentation7.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/segmentation8.png" className="object-contain" />
            </div>
            <div>
              <img src="/images/segmentation9.png" className="object-contain" />
            </div>
            <div>
              <img
                src="/images/segmentation10.png"
                className="object-contain"
              />
            </div>
            <div>
              <video controls>
                <source src="/videos/segmentation-demo.mp4" type="video/mp4" />
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
              With the global population rapidly increasing, ensuring food
              security by optimizing crop production has become more important
              than ever. Phenotyping, the selection of crops based on desirable
              traits, is crucial for this process. However, existing supervised
              segmentation methods for 3D plant phenotyping require extensive
              labeled datasets, which demand significant time and effort to
              create. This bottleneck delays the discovery and propagation of
              ideal crops, impacting research efforts aimed at increasing food
              security.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Solution</h2>
            <p className="font-body">
              Our solution introduces a novel 3D plant point cloud segmentation
              tool specifically for Maize and Tomato plants. By using unlabeled
              data for pre-training, the tool significantly reduces the need for
              manually labeled datasets. This approach streamlines the
              segmentation process and enhances the efficiency of plant trait
              analysis, making it easier and faster for researchers to advance
              phenotyping research.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Results</h2>
            <p className="font-body">
              By adopting this approach, the segmentation tool achieved a
              workload reduction of 80%-90% in creating labeled sets, while
              maintaining competitive accuracy when compared to existing
              methods. This solution accelerates the phenotyping process,
              helping to address food security challenges by enabling faster
              crop analysis.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Contribution</h2>
            <p className="font-body">
              I was the <strong>team lead</strong> and I personally trained the
              models used in the experiments and developed the segmentation tool
              based on these models, contributing directly to the project’s
              success.
            </p>
          </section>

          <section className="w-full mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-heading">Tech Stack</h2>
            <ul className="list-disc list-inside font-body">
              <li>
                <strong>Python:</strong> Used for the core implementation of the
                segmentation algorithms.
              </li>
              <li>
                <strong>PyQT:</strong> Employed for developing the user
                interface.
              </li>
              <li>
                <strong>TensorFlow:</strong> Utilized for training the machine
                learning models that drive the segmentation process.
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
