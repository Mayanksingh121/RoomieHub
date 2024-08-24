import ROOM_IMAGE from "../assets/OurOffering.jpg";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const OurOfferings = () => {
  return (
    <div className="px-20 py-10 flex flex-col gap-10">
      <h2 className="text-2xl font-bold">
        <span className="border-b-2 border-[#f4511e]">
          All-Inclusive Room Rates:
        </span>{" "}
        Everything You Need
      </h2>
      <div className="relative">
        <div className="">
          <img
            src={ROOM_IMAGE}
            alt="room-image"
            className="w-66 h-[24rem] rounded-tl-3xl rounded-br-3xl shadow-2xl"
          />
        </div>
        <div className="absolute bottom-0 left-72 py-5">
          <div className="flex flex-col gap-10">
            <div className="flex gap-10 justify-between">
              <div className="flex flex-col gap-2 w-52">
                <div className="w-16 h-12 flex justify-center items-center bg-white shadow-lg py-1 px-2 rounded-lg">
                  <HiOutlineCurrencyRupee className="text-3xl text-[#f4511e]" />
                </div>
                <p className="font-bold text-lg leading-tight">Cheap Rooms but Luxury Living</p>
              </div>
              <div className="flex flex-col gap-2 w-52">
                <div className="w-16 h-12 flex justify-center items-center bg-white shadow-lg py-1 px-2 rounded-lg">
                  <HiOutlineShieldCheck className="text-3xl text-[#f4511e]" />
                </div>
                <p className="font-bold text-lg leading-tight">Your safety is our priority</p>
              </div>
              <div className="flex flex-col gap-2 w-52">
                <div className="w-16 h-12 flex justify-center items-center bg-white shadow-lg py-1 px-2 rounded-lg">
                  <HiOutlineLightBulb className="text-3xl text-[#f4511e]" />
                </div>
                <p className="font-bold text-lg leading-tight">Smart Living Choices</p>
              </div>
            </div>
            <div className="flex gap-10 justify-between">
              <div className="flex flex-col gap-2 w-52">
                <div className="w-16 h-12 flex justify-center items-center bg-white shadow-lg py-1 px-2 rounded-lg">
                  <HiOutlineCurrencyRupee className="text-3xl text-[#f4511e]" />
                </div>
                <p className="font-bold text-lg leading-tight">Affordable Comfort</p>
              </div>
              <div className="flex flex-col gap-2 w-52">
                <div className="w-16 h-12 flex justify-center items-center bg-white shadow-lg py-1 px-2 rounded-lg">
                  <HiOutlineShieldCheck className="text-3xl text-[#f4511e]" />
                </div>
                <p className="font-bold text-lg leading-tight">Safety and Comfort Guaranteed</p>
              </div>
              <div className="flex flex-col gap-2 w-52">
                <div className="w-16 h-12 flex justify-center items-center bg-white shadow-lg py-1 px-2 rounded-lg">
                  <FaMoneyCheckDollar className="text-3xl text-[#f4511e]" />
                </div>
                <p className="font-bold text-lg leading-tight">Value for Money</p>
              </div>
            </div>
            <div className="flex gap-10 justify-between">
              <div className="flex flex-col gap-2 w-52">
                <div className="w-16 h-12 flex justify-center items-center bg-white shadow-lg py-1 px-2 rounded-lg">
                  <HiOutlineCurrencyRupee className="text-3xl text-[#f4511e]" />
                </div>
                <p className="font-bold text-lg leading-tight">Top Value Rooms</p>
              </div>
              <div className="flex flex-col gap-2 w-52">
                <div className="w-16 h-12 flex justify-center items-center bg-white shadow-lg py-1 px-2 rounded-lg">
                  <HiOutlineShieldCheck className="text-3xl text-[#f4511e]" />
                </div>
                <p className="font-bold text-lg leading-tight">Best Deals</p>
              </div>
              <div className="flex flex-col gap-2 w-52">
                <div className="w-16 h-12 flex justify-center items-center bg-white shadow-lg py-1 px-2 rounded-lg">
                  <HiOutlineLightBulb className="text-3xl text-[#f4511e]" />
                </div>
                <p className="font-bold text-lg leading-tight">Budget Stays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
