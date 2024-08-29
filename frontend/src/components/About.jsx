import { ABOUT_US, VISION, MISSION, CHOOSE_US } from "../constant/constant";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="flex flex-col w-full py-16 px-10">
      <h2 className="text-center font-roboto font-bold text-3xl mb-8">
        About us
      </h2>
      <div className="flex">
        <div className="relative w-1/2 pr-10">
          <div className="absolute h-full w-[2px] bg-black left-1/2 transform -translate-x-1/2"></div>
          <div className="flex flex-col gap-6 py-10">
            <div
              data-aos="fade-down"
              className="w-4/5 bg-gray-200 p-4 rounded-lg self-start flex flex-col gap-4"
            >
              <h2 className="text-center font-roboto-slab text-lg font-bold">
                Our Mission
              </h2>
              <p className="font-roboto">{MISSION}</p>
            </div>
            <div
              data-aos="fade-down"
              className="w-4/5 bg-gray-200 p-4 rounded-lg self-end flex flex-col gap-4"
            >
              <h2 className="font-roboto-slab text-center text-lg font-bold">
                Why Choose us
              </h2>
              <p className="font-roboto">{CHOOSE_US}</p>
            </div>
            <div
              data-aos="fade-down"
              className="w-4/5 bg-gray-200 p-4 rounded-lg self-start flex flex-col gap-4"
            >
              <h2 className="font-roboto-slab text-center text-lg font-bold">
                Our Vision
              </h2>
              <p className="font-roboto">{VISION}</p>
            </div>
          </div>
        </div>
        <div className="flex w-[40%] border border-gray-300 rounded-s-3xl ml-0 p-6 shadow-lg">
          <div></div>
          <p className="font-roboto text-gray-700 text-lg leading-relaxed">
            {ABOUT_US}
          </p>
        </div>
      </div>
    </div>
  );
}
