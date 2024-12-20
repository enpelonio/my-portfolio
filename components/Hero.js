import React from "react";

const Hero = () => {
  return (
    <div className="m-0 p-0 justify-center min-h-screen bg-base flex flex-col bg-hero-pattern md:bg-hero-right md:bg-105 bg-bottom relative">
      <div className="flex justify-center md:justify-start items-center p-10">
        {/* Adjust width to 100% on smaller devices */}
        <div className="w-full md:w-[70%] flex flex-col">
          {/* Change font size based on screen size */}
          <div className="w-full font-heading min-[320px]:text-[40px] text-[45px] lg:text-[100px] md:text-[70px]">
            Hello, I'm Ervin. A full stack developer.
          </div>
          <div className="w-full font-body min-[320px]:text-[20px] sm:text-[25px] lg:text-[30px]">
            With a passion for doing good in the world one line of code at a
            time.
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1732091971">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
