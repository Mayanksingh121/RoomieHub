import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RoomInformation from "./components/roomdetails/RoomInformation";

const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/room/:roomId",
    element: <RoomInformation />,
  },
]);

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {showLogin && <Login handleLogin={handleShowLogin} />}
      <Header handleLogin={handleShowLogin} />
      <RouterProvider router={appRouting}/>
      <Footer />
    </>
  );
}

export default App;
