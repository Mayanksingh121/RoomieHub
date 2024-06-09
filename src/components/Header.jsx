import { useState } from "react";
import SideBar from "./Sidebar";

const Header = ({ handleLogin }) => {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <>
      <div className="font-display flex justify-between py-4 w-full shadow-sm">
        <div className="flex w-[80%] items-center gap-5 ml-14">
          <h1 className="font-semibold text-xl text-[#f84464]">RoomieHub</h1>
          <div className="flex w-2/3 items-center gap-2 border border-gray-200 rounded-lg">
            <i className="text-[#959595] px-1 fa-solid fa-magnifying-glass"></i>
            <input
              id="search"
              className="text-sm w-full px-3 py-1 rounded-e-lg focus:outline-1 focus:outline-[#e0e0e0]"
              type="text"
              placeholder="Search for Movies, Events, Plays, Sports and Activites"
              autoComplete="on"
            />
          </div>
        </div>
        <div className="flex items-center mr-10">
          <button
            onClick={handleLogin}
            className="bg-[#f84464] text-white text-xs px-3 rounded-sm py-1"
          >
            Sign in
          </button>
          <i
            onClick={handleNavBar}
            className="cursor-pointer text-xl fa-solid fa-bars ml-10"
          ></i>
        </div>
      </div>
      {showNavBar && <SideBar handleNavBar={handleNavBar}/>}
    </>
  );
};

export default Header;