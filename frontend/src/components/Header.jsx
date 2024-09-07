import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import SideBar from "./Sidebar";
import toast from "react-hot-toast";
import { isAuthUser } from "../api/validate";
import { setIsLoggedIn } from "../utils/storeSlices/userSlice";
import { Link } from "react-scroll";

const Header = ({ handleLogin }) => {
  const dispatch = useDispatch();
  const [showNavBar, setShowNavBar] = useState(false);
  const userLoginStatus = useSelector((store) => store.user.isLoggedIn);
  const location = useLocation();

  const handleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    dispatch(setIsLoggedIn(false));
    toast.success("Successfully signed out");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      location.pathname === "/profile" ||
      location.pathname === "/listed-rooms" ||
      location.pathname === "/roomie-listing" ||
      location.pathname === "/roommate-registry"
    ) {
      setShowNavBar(false);
    }

    const checkIfAuthUser = async () => {
      try {
        const response = await isAuthUser();
        if (response && response.ok) {
          dispatch(setIsLoggedIn(true));
        } else {
          dispatch(setIsLoggedIn(false));
        }
      } catch (e) {
        toast.error("Please sign in again");
        dispatch(setIsLoggedIn(false));
      }
    };
    const token = localStorage.getItem("token");
    if (token) {
      checkIfAuthUser();
    }
  }, [location.pathname, userLoginStatus]);

  return (
    <>
      <div
        className={`${
          location.pathname === "/" ? "absolute" : "relative"
        } z-20 font-roboto flex justify-between items-center py-4 px-6 md:px-14 w-full bg-black bg-opacity-20 shadow-lg`}
      >
        <div className="flex items-center gap-5">
          <h1
            className={`font-bold text-2xl ${
              location.pathname !== "/" ? "text-gray-900" : "text-white"
            } transition-colors duration-300`}
          >
            RoomieHub
          </h1>
        </div>
        <div className="flex gap-6 items-center">
          {location.pathname === "/" && (
            <div className="flex text-white space-x-6">
              {["About us", "Available Rooms", "Roommates", "Contacts"].map(
                (item, index) => (
                  <Link
                    key={index}
                    to={item.toLowerCase().replace(" ", "-")}
                    smooth={true}
                    duration={500}
                    className="relative cursor-pointer text-lg font-medium hover:text-gray-400 transition-colors duration-300"
                  >
                    {item}
                    <div className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-transparent hover:bg-white transition-all duration-300 transform hover:scale-x-100 scale-x-0 origin-left"></div>
                  </Link>
                )
              )}
            </div>
          )}

          {!userLoginStatus ? (
            <button
              onClick={handleLogin}
              className="bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              Sign in
            </button>
          ) : (
            <button
              onClick={handleSignOut}
              className="bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              Sign out
            </button>
          )}

          {location.pathname !== "/profile" && (
            <div
              onClick={handleNavBar}
              className="cursor-pointer text-2xl p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
            >
              <IoMenu
                className={`${
                  location.pathname !== "/" ? "text-gray-900" : "text-white"
                } transition-colors duration-300`}
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
