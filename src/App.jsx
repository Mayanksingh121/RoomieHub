import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
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
      <Body />
    </>
  );
}

export default App;
