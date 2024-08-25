import React from "react";
import { ABOUT_US, MISSION, VISION, CHOOSE_US } from "../constant/constant";

const About = () => {
  return (
    <section id="about-us" className="py-8 md:py-12 font-roboto">
      <div className="mx-auto px-4 md:px-12 lg:px-24">
        <h2 className="text-xl md:text-4xl text-center font-bold text-[#333333] mb-2 md:mb-8">
          About Us
        </h2>
        <p className="md:text-xl font-roboto-condensed text-gray-700 mb-8">
          {ABOUT_US}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-3 md:p-6 text-center shadow-lg border rounded-lg ">
            <h3 className="text-xl md:text-2xl font-semibold  mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm md:text-md">{VISION}</p>
          </div>
          <div className="p-3 md:p-6 text-center  shadow-lg border rounded-lg ">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm md:text-md">{MISSION}</p>
          </div>
          <div className="p-3 md:p-6 text-center border shadow-lg rounded-lg ">
            <h3 className="text-xl md:text-2xl  font-semibold mb-4">
              Why Choose Us
            </h3>
            <p className="text-gray-600 text-sm md:text-md">{CHOOSE_US}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
