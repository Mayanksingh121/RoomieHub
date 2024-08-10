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
    if (location.pathname === "/profile") {
      setShowNavBar(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="font-roboto-slab flex justify-between py-4 w-full shadow-sm">
        <div className="flex w-[70%] items-center gap-5 ml-4 md:ml-14">
          <h1 className="font-semibold text-xl text-[#449ba2]">RoomieHub</h1>
        </div>
        <div className="flex w-[20%] justify-between items-center mr-10">
          <div>
            <Link to="/roommate-registry">
              <p className="font-roboto cursor-pointer hover:bg-[#317378] bg-[#449ba2] text-white text-xs px-3 py-1">
                Roomie Registry
              </p>
            </Link>
          </div>
          {!userLoginStatus && (
            <button
              onClick={handleLogin}
              className="font-roboto hover:bg-[#317378] bg-[#449ba2] text-white text-xs px-3 rounded-sm py-1"
            >
              Sign in
            </button>
          )}
          {location.pathname !== "/profile" && (
            <div
              onClick={handleNavBar}
              className="cursor-pointer text-xl ml-10"
            >
              <IoMenu />
            </div>
          )}
        </div>
      </div>
      {showNavBar && <SideBar handleNavBar={handleNavBar} />}
    </>
  );
};

export default Header;
