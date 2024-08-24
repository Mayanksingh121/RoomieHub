import MAP from "../assets/Map.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Banner = () => {
  const { isLoggedIn } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleRoomListing = () => {
    if (!isLoggedIn) {
      toast("Required Login first");
      return;
    }
    navigate("/room-listing");
  };

  return (
    <div className="w-full bg-gray-50 h-60 md:h-[45rem] relative">
      <div className="absolute z-10 h-full w-full bg-gradient-to-bl from-transparent to-black/60"></div>
      <div className="flex flex-col md:flex-row relative bg-banner-image  bg-cover object-contain  h-full m-auto">
        <div className="relative z-10 w-full md:w-[50%] text-white mx-4 md:mx-16 pt-8 md:pt-72 md:pl-16">
          <h1 className="font-bold text-xl md:text-4xl font-roboto-slab">
            Find Your Perfect Space
          </h1>
          <h2 className="hidden md:block text-4xl font-semibold mt-4 font-roboto-slab">
            Connecting Roommates and Rooms Effortlessly
          </h2>

          <div className="flex flex-col md:flex-row gap-2 md:gap-7 my-6">
            <Link to="/watchList">
              <button className="bg-white text-black px-4 py-1 md:px-20 md:py-2 rounded-md md:rounded-lg font-roboto-condensed text-lg font-bold hover:text-white hover:bg-black">
                WatchList
              </button>
            </Link>
            <button
              onClick={handleRoomListing}
              className="w-[50%] md:w-full bg-white text-black px-4 py-1 md:px-20 md:py-2 rounded-md md:rounded-lg font-roboto-condensed text-lg font-bold hover:text-white hover:bg-black"
            >
              List your room
            </button>
          </div>
        </div>
        <div className="relative z-10 mt-60 ml-10">
          <img className="w-[26rem] rounded-xl" src={MAP} alt="map-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
