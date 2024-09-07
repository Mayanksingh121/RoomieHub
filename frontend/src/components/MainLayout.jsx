import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";
import { FaChevronUp } from "react-icons/fa";

const MainLayout = ({ handleLogin }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {

    const handleVisibleButton = ()=>{
      if(window.scrollY>200){
        setShowScrollButton(true);
      }else{
        setShowScrollButton(false);
      }
    }

    window.addEventListener("scroll", handleVisibleButton);

    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  },[showScrollButton]);

  return (
    <div className="relative flex flex-col min-h-screen">
      <Header handleLogin={handleLogin} />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
      <Footer />
      {showScrollButton && (
        <div
          onClick={handleScrollUp}
          className="fixed z-40 bg-gradient-to-r from-purple-600 to-blue-500 text-white bottom-5 right-10 cursor-pointer hover:from-purple-700 hover:to-blue-600 p-4 text-3xl rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <FaChevronUp />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
