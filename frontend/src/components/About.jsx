import React from "react";
import { ABOUT_US, MISSION, VISION, CHOOSE_US } from "../constant/constant";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 font-roboto">
      <div className="mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl text-center font-bold text-[#333333] mb-8">
          About Us
        </h2>
        <p className="text-xl font-roboto-condensed text-gray-700 mb-8">
          {ABOUT_US}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 text-center bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-[#449ba2] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">{VISION}</p>
          </div>
          <div className="p-6 text-center bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-[#449ba2] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">{MISSION}</p>
          </div>
          <div className="p-6 text-center bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-[#449ba2] mb-4">
              Why Choose Us
            </h3>
            <p className="text-gray-600">{CHOOSE_US}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
