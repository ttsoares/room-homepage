import React from "react";

const Footer = () => {
  return (
    <div className="h-fit md:h-[33%] w-full flex flex-col md:flex-row">
      <div className="w-full md:w-[30%] h-56 md:h-96 bg-img_dark bg-cover bg-no-repeat bg-center"></div>
      <div className="w-full md:w-[40%] p-8 md:p-24">
        <h2 className="tracking-[.5rem] mb-4 font-bold text-base md:text-xl">
          ABOUT OUR FUNITURE
        </h2>
        <p className="text-lg text-gray-500">
          Our multifuncional collection bleds design and function to suit your
          individual taste. Make each room unique or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need from traditional to comtemporany styles or anything in
          between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="w-full md:w-[30%] h-56 md:h-96 bg-img_light bg-cover bg-no-repeat bg-center"></div>
    </div>
  );
};

export default Footer;
