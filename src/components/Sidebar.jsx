import { useState, useEffect } from "react";

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
        <div className="h-16 border-b-2 flex items-center justify-between px-4">
          <h2 className="font-bold text-xl">Hey!</h2>
          <i onClick={handleNavBar} className="cursor-pointer fa-solid fa-x "></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
