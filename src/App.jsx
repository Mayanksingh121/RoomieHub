import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };
  return (
    <>
      {showLogin && <Login handleLogin={handleShowLogin} />}
      <Header handleLogin={handleShowLogin} />
    </>
  );
}

export default App;
