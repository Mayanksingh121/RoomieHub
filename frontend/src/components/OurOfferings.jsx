import ROOM_IMAGE from "../assets/OurOffering.jpg";
import HAPPY from "../assets/Happiness.jpg";
import SAVING from "../assets/Saving.jpg";
import ROOMMATE from "../assets/Partner.jpg";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { MdFmdGood } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurOfferings = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="px-20 pt-10 pb-20 flex flex-col gap-10">
      <h2 className="text-2xl font-bold">
        <span className="border-b-2 border-[#f4511e] font-montserrat">
          All-Inclusive Room Rates:
        </span>{" "}
        Everything You Need
      </h2>
      <div className="px-5 flex w-full">
        <div className="flex flex-col gap-4  w-[50%]">
          <div className="flex relative">
            <div
              data-aos="fade-down"
              className="relative shadow-xl rounded-2xl"
            >
              <div className="bg-black font-roboto rounded-2xl absolute bottom-0 h-full w-full bg-opacity-20 text-white font-bold py-3 text-center">
                A cozy, home-like atmosphere
              </div>
              <img
                src={ROOM_IMAGE}
                alt="room-image"
                className="h-64 rounded-2xl"
              />
            </div>
            <div
              data-aos="fade-left"
              className="absolute bottom-0 left-56 shadow-lg rounded-2xl"
            >
              <div className="font-roboto bg-black rounded-2xl absolute bottom-0 h-full w-full bg-opacity-20 text-white font-bold py-3 text-center">
                Find you own happiness
              </div>
              <img src={HAPPY} alt="room-image" className="h-52 rounded-2xl" />
            </div>
          </div>
          <div className="flex relative">
            <div
              data-aos="fade-right"
              className="relative shadow-xl rounded-2xl"
            >
              <div className="font-roboto bg-black rounded-2xl absolute h-full w-full bg-opacity-20 text-white font-bold py-3 text-center">
                Save more, live better.
              </div>
              <img
                src={SAVING}
                alt="room-image"
                className="h-60 rounded-2xl  shadow-2xl"
              />
            </div>
            <div
              data-aos="fade-up"
              className="absolute top-0 left-44 shadow-lg rounded-2xl"
            >
              <div className="font-roboto bg-black rounded-2xl absolute h-full w-full bg-opacity-20 text-white font-bold py-3 text-center">
                Choose your own roommate
              </div>
              <img
                src={ROOMMATE}
                alt="room-image"
                className="h-[18rem] rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="text-xl py-10">
            Whatever you need, we've got it. Finding your next home is easy,
            comfortable, and stress-free with us. Enjoy our happiness guarantee
            and selective roommate matching, all with the flexibility you crave.
          </p>
          <div className="flex flex-col gap-10 py-4 font-montserrat">
            <div className="flex gap-8">
              <div className="w-40 flex gap-2 flex-col">
                <div className="text-[#f4511e] text-4xl p-2 shadow-lg w-12 rounded-lg">
                  <HiOutlineCurrencyRupee />
                </div>

                <p className="font-bold text-lg">Pay Less, Get Luxury Rooms</p>
              </div>
              <div className="w-40 flex gap-2 flex-col">
                <div className="text-[#f4511e] text-4xl p-2 shadow-lg w-12 rounded-lg">
                  <HiOutlineShieldCheck />
                </div>

                <p className="font-bold text-lg">Get Safe and Secure Space</p>
              </div>
              <div className="w-40 flex gap-2 flex-col">
                <div className="text-[#f4511e] text-4xl p-2 shadow-lg w-12 rounded-lg">
                  <HiOutlineLightBulb />
                </div>
                <p className="font-bold text-lg">
                  Brilliant rooms, smart choices
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-40 flex gap-2 flex-col">
                <div className="text-[#f4511e] text-4xl p-2 shadow-lg w-12 rounded-lg">
                  <FaHandshake />
                </div>
                <p className="font-bold text-lg">
                  Connecting lives, sharing spaces
                </p>
              </div>
              <div className="w-40 flex gap-2 flex-col">
                <div className="text-[#f4511e] text-4xl p-2 shadow-lg w-12 rounded-lg">
                  <FaGlobeAsia />
                </div>
                <p className="font-bold text-lg">Worldwide options</p>
              </div>
              <div className="w-40 flex gap-2 flex-col">
                <div className="text-[#f4511e] text-4xl p-2 shadow-lg w-12 rounded-lg">
                  <MdFmdGood />
                </div>
                <p className="font-bold text-lg">Find your perfect spot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
