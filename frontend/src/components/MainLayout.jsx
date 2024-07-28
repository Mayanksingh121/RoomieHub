import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

const MainLayout = ({ handleLogin }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header handleLogin={handleLogin} />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLayout;
