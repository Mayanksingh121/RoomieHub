import { useState, Suspense, lazy } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load components
const Body = lazy(() => import("./components/Body"));
const RoomInformation = lazy(() =>
  import("./components/roomdetails/RoomInformation")
);
const WatchList = lazy(() => import("./components/WatchList"));
const RoommateDetails = lazy(() => import("./components/RoommateDetails"));

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  const appRouting = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/room/:roomId",
      element: <RoomInformation handleLogin={handleShowLogin} />,
    },
    {
      path: "/watchlist",
      element: <WatchList />,
    },
    {
      path: "/roommate/:roommateID",
      element: <RoommateDetails />,
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      {showLogin && <Login handleLogin={handleShowLogin} />}
      <Header handleLogin={handleShowLogin} />
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={appRouting} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
