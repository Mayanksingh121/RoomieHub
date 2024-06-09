import { useState } from "react";
import { useEffect } from "react";

const Login = ({ handleLogin }) => {
  const [alreadyUser, setAlreadyUser] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleAlreadyUser = () => {
    setAlreadyUser(!alreadyUser);
  };

  return (
    <div
      className={`z-10 absolute h-full w-full bg-black bg-opacity-30 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`font-display w-1/3 h-[90%] bg-white m-auto mt-5 rounded-lg flex flex-col transition-all duration-500 transform ${
          isVisible ? "translate-y-0" : "-translate-y-20"
        }`}
      >
        <div className="mt-10 flex justify-between w-full items-center">
          <h3 className="ml-16 px-1 font-medium">Get Started</h3>
          <div className="mr-10">
            <i
              onClick={handleLogin}
              className="cursor-pointer fa-solid fa-xmark"
            ></i>
          </div>
        </div>
        <div className="flex flex-col my-10 px-4 items-center">
          {!alreadyUser && (
            <input
              id="name"
              className="border w-3/4 my-4 px-2 py-2 rounded-lg focus:outline-1"
              type="text"
              placeholder="Enter Your Name"
              autoComplete="on"
            />
          )}
          <input
            id="email"
            className="border w-3/4 my-4 px-2 py-2 rounded-lg focus:outline-1"
            type="text"
            placeholder="Enter Email"
            autoComplete="on"
          />
          <input
            id="password"
            className="border w-3/4 my-4 px-2 py-2 rounded-lg focus:outline-1"
            type="text"
            placeholder="Enter Password"
            autoComplete="off"
          />
          <button className="bg-[#f84464] my-4 w-3/4 py-2 text-lg rounded-lg">
            {alreadyUser ? "Sign in" : "Sign Up"}
          </button>
        </div>
        <p className="flex justify-center">
          {alreadyUser ? "New user ?" : "Already a User? "}
          <button onClick={handleAlreadyUser} className="px-2">
            {alreadyUser ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
