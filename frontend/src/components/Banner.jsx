import DOG from "../assets/dog.svg";
import BANNER from "../assets/banner.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full bg-gray-50 h-60 md:h-80 pt-5">
      <div className="flex flex-col md:flex-row relative w-[95%] bg-gradient-to-br from-[#449ba2] to-[#256b70] h-[100%] m-auto rounded-xl">
        <div className="w-full md:w-[60%] text-white mx-4 md:mx-16 h-full pt-8 md:pt-20 md:pl-16">
          <h1 className="font-bold text-xl md:text-3xl font-roboto-slab">
            Find Your Perfect Space
          </h1>
          <h2 className="hidden md:block text-lg font-semibold mt-4 font-roboto-slab">
            Connecting Roommates and Rooms Effortlessly
          </h2>
          <div className="flex flex-col md:flex-row gap-2 md:gap-7 my-6">
            <Link to="/watchList">
              <button className="bg-white text-black px-4 py-1 md:px-20 md:py-2 rounded-md md:rounded-lg font-roboto-condensed text-lg font-bold hover:text-white hover:bg-black">
                WatchList
              </button>
            </Link>
            <button className="w-[50%] bg-white text-black px-4 py-1 md:px-20 md:py-2 rounded-md md:rounded-lg font-roboto-condensed text-lg font-bold hover:text-white hover:bg-black">
              List your room
            </button>
          </div>
          <div>
            <img
              className="absolute -bottom-1 md:-bottom-2 h-10 md:h-16 md:left-36"
              src={DOG}
              alt="dog"
            />
          </div>
        </div>
        <div className="w-full md:w-[40%] relative h-full pt-10 md:pt-20">
          <img className="h-24 md:h-56 absolute bottom-0 left-1/2 transform translate-x-1/2 md:translate-x-0 md:left-0 md:-bottom-2" src={BANNER} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
