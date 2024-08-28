import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { useLocation, Link } from "react-router-dom";
import SideBar from "./Sidebar";

const Header = ({ handleLogin }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const userLoginStatus = useSelector((store) => store.user.isLoggedIn);
  const location = useLocation();

  const handleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  useEffect(() => {
    if (
      location.pathname === "/profile" ||
      location.pathname === "/listed-rooms" ||
      location.pathname === "/roomie-listing" ||
      location.pathname === "/roommate-registry"
    ) {
      setShowNavBar(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div
        className={`${
          location.pathname === "/" ? "absolute " : "relative"
        } z-20 font-roboto-slab flex justify-between py-6 w-full border-b`}
      >
        <div className="flex items-center gap-5 ml-4 md:ml-14">
          <h1
            className={`font-semibold text-xl ${
              location.pathname !== "/" ? "text-black" : "text-white"
            }`}
          >
            RoomieHub
          </h1>
        </div>
        {location.pathname === "/" && (
          <div className="flex text-white">
            <div className="mx-8">About us</div>
            <div className="mx-8">Available Rooms</div>
            <div className="mx-8">Roommates</div>
            <div className="mx-8">Contacts</div>
          </div>
        )}
        <div className="flex gap-4  items-center mr-10">
          {!userLoginStatus && (
            <button
              onClick={handleLogin}
              className="font-roboto bg-black bg-opacity-5 hover:bg-opacity-20 text-white text-xs px-3 rounded-sm py-1"
            >
              Sign in
            </button>
          )}
          {location.pathname !== "/profile" && (
            <div onClick={handleNavBar} className="cursor-pointer text-xl">
              <IoMenu
                className={`${
                  location.pathname !== "/" ? "text-black" : "text-white"
                } text-white"`}
              />
            </div>
          )}
        </div>
      </div>
      {showNavBar && <SideBar handleNavBar={handleNavBar} />}
    </>
  );
};

export default Header;
