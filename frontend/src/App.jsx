import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import WatchList from "./components/WatchList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RoomInformation from "./components/roomdetails/RoomInformation";
import RoommateDetails from "./components/RoommateDetails";

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
      path: "/roommate/:roomId",
      element: <RoommateDetails/>
    }
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      {showLogin && <Login handleLogin={handleShowLogin} />}
      <Header handleLogin={handleShowLogin} />
      <RouterProvider router={appRouting} />
      <Footer />
    </div>
  );
}

export default App;
