import { useState, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const SideBar = ({ handleNavBar }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  return (
    <div
      className={`z-10 fixed top-0 flex justify-end h-full w-full bg-black bg-opacity-30 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white h-full w-[25%] transition-all duration-500 transform ${
          isVisible ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="h-16 border-b border-black flex items-center justify-between px-4">
          <h2 className="font-bold text-xl">Hey!</h2>
          <span onClick={handleNavBar} className="cursor-pointer"><FaXmark/></span>
        </div>
        <div className="cursor-pointer flex items-center justify-between px-4 py-4">
          <div className="font-body font-bold">List you room</div>
          <span><MdKeyboardArrowRight/></span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
