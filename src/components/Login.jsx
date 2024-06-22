import { useState } from "react";
import { motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

const Login = ({ handleLogin }) => {
  const [alreadyUser, setAlreadyUser] = useState(true);

  const handleAlreadyUser = () => {
    setAlreadyUser(!alreadyUser);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      className="z-50 fixed h-full w-full bg-black bg-opacity-30"
    >
      <motion.div
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ delay:0.2, type: "spring", stiffness: 200 }}
        className="font-display w-1/3 h-[90%] bg-white m-auto mt-5 rounded-lg flex flex-col"
      >
        <div className="mt-10 flex justify-between w-full items-center">
          <h3 className="ml-16 px-1 font-medium">Get Started</h3>
          <div className="mr-10">
            <span
              onClick={handleLogin}
              className="cursor-pointer"
            ><FaXmark/></span>
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
      </motion.div>
    </motion.div>
  );
};

export default Login;
