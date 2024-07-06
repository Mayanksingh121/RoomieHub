import DOG from "../assets/dog.svg";
import BANNER from "../assets/banner.svg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="w-full h-80 mt-5">
      <div className="flex relative w-[95%] bg-[#f84464] h-[100%] m-auto rounded-xl">
        <div className="w-[60%] text-white  mx-16 h-full pt-20 pl-16">
          <h1 className="font-bold text-3xl font-display">
            Find Your Perfect Space
          </h1>
          <h2 className="text-xl font-semibold mt-4 font-display">
            Connecting Roommates and Rooms Effortlessly
          </h2>
          <div className="flex gap-7 my-6">
            <Link to="/watchList">
              <button className="bg-white text-black px-20 py-2 rounded-lg font-body text-lg font-semibold hover:text-white hover:bg-black">
                WatchList
              </button>
            </Link>
            <button className="bg-white text-black px-20 py-2 rounded-lg font-body text-lg font-semibold hover:text-white hover:bg-black">
              Find roomate
            </button>
          </div>
          <div>
            <img
              className="absolute bottom-0 h-16 left-36"
              src={DOG}
              alt="dog"
            />
          </div>
        </div>
        <div className="w-[40%] relative h-full pt-20">
          <img className="h-56 bottom-0 absolute" src={BANNER} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
