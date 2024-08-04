import { useState, Suspense, lazy } from "react";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import LoadingSpinner from "./components/LoadingSpinner";
import { UserProvider } from "./utils/Context/UserContext";

const Body = lazy(() => import("./components/Body"));
const ViewProfile = lazy(() => import("./components/ViewProfile"));
const RoomInformation = lazy(() =>
  import("./components/roomdetails/RoomInformation")
);
const WatchList = lazy(() => import("./components/WatchList"));
const RoommateDetails = lazy(() => import("./components/RoommateDetails"));
const RoomListing = lazy(() => import("./components/RoomListing/RoomListing"));

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  const appRouting = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout handleLogin={handleShowLogin} />,
      children: [
        { path: "/", element: <Body /> },
        {
          path: "/room/:roomId",
          element: <RoomInformation handleLogin={handleShowLogin} />,
        },
        { path: "/watchlist", element: <WatchList /> },
        { path: "/roommate/:roommateID", element: <RoommateDetails /> },
        { path: "/profile", element: <ViewProfile /> },
        { path: "/room-listing", element: <RoomListing /> },
      ],
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <UserProvider>
        {showLogin && <Login handleLogin={handleShowLogin} />}
        <Suspense fallback={<LoadingSpinner />}>
          <RouterProvider router={appRouting} />
        </Suspense>
      </UserProvider>
    </div>
  );
}

export default App;
