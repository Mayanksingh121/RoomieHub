import { useState } from "react";
import SideBar from "./Sidebar";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";

const Header = ({ handleLogin }) => {
  const [showNavBar, setShowNavBar] = useState(false);

  const userLoginStatus = useSelector((store) => store.user.isLoggedIn);

  const handleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <>
      <div className="font-roboto-slab  flex justify-between py-4 w-full shadow-sm">
        <div className="flex w-[80%] items-center gap-5 ml-4 md:ml-14">
          <h1 className="font-semibold text-xl text-[#449ba2]">RoomieHub</h1>
          <div className="flex w-2/3 items-center gap-2 border border-gray-200 rounded-lg">
            <span className="text-[#959595] px-1">
              <MdOutlineSearch />
            </span>
            <input
              id="search"
              className="text-sm w-full px-3 py-1 rounded-e-lg focus:outline-1 focus:outline-[#e0e0e0]"
              type="text"
              placeholder="Search for State"
              autoComplete="on"
            />
          </div>
        </div>
        <div className="flex items-center mr-10">
          {!userLoginStatus && (
            <button
              onClick={handleLogin}
              className="font-roboto hover:bg-[#317378] bg-[#449ba2] text-white text-xs px-3 rounded-sm py-1"
            >
              Sign in
            </button>
          )}
          <div onClick={handleNavBar} className="cursor-pointer text-xl ml-10">
            <IoMenu />
          </div>
        </div>
      </div>
      {showNavBar && <SideBar handleNavBar={handleNavBar} />}
    </>
  );
};

export default Header;
