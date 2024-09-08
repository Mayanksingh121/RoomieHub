import { useEffect, useState } from "react";
import { FaXmark, FaPlus } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { getUser, updateUserProfile } from "../api/user";
import { RxAvatar } from "react-icons/rx";
import { GoChecklist } from "react-icons/go";
import { LiaRegistered } from "react-icons/lia";
import { AiOutlineTeam } from "react-icons/ai";
import { LiaSignOutAltSolid } from "react-icons/lia";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../utils/storeSlices/userSlice";
import { logout } from "../api/validate";
import AVATAR from "../assets/Avatar.png";

const SideBar = ({ handleNavBar }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const userDetails = localStorage.getItem("email");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(userDetails);
        setUser(data);
      } catch (e) {
        console.error(e.message);
      }
    };

    if (userDetails) {
      fetchUser();
    }
  }, [userDetails]);

  if (!user) return null;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSignOut = async () => {
    try {
      handleNavBar();

      const response = await logout();

      if (response.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        dispatch(setIsLoggedIn(false));
        navigate("/");
        toast.success("Signed out");
      } else {
        toast.error("Can't signed out at the moment");
      }
    } catch (e) {
      console.error("Error during sign out:", e);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const handleUploadPhoto = async () => {
    if (selectedFile === null) {
      alert("Please select a file first.");
      return;
    }

    try {
      await toast.promise(
        updateUserProfile(userDetails, selectedFile).then((response) => {
          return response.message;
        }),
        {
          loading: "Uploading...",
          success: (message) => message,
          error: (error) => {
            if (error.response && error.response.message) {
              return `Error: ${error.response.message}`;
            }
            return `Error: ${error.message || "Failed to upload photo."}`;
          },
        }
      );
      handleNavBar();
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Failed to upload photo.");
    }
  };

  return (
    <motion.div
      className="z-30 fixed top-0 flex justify-end h-full w-full bg-black bg-opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        className="font-body bg-gray-200 h-full rounded-s-2xl w-[22%]"
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, type: "tween" }}
      >
        <div className="flex flex-col gap-4 px-4 py-4 overflow-y-scroll hide-scrollbar">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-3">
              <div className="relative">
                <img
                  src={user.userProfileUrl || AVATAR}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full border border-orange-600"
                  loading="lazy"
                />
                <label
                  htmlFor="upload-photo"
                  className="absolute bottom-0 text-xs p-1 border-white text-white  border cursor-pointer -right-1 bg-blue-500 rounded-full"
                >
                  <FaPlus />
                </label>
                <input
                  type="file"
                  name="selectedFile"
                  id="upload-photo"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm font-semibold -mt-2">{userDetails}</p>
              </div>
            </div>
            <span onClick={handleNavBar} className="cursor-pointer">
              <FaXmark />
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <Link to="/profile">
              <div className="flex hover:bg-[#007aff] hover:text-white gap-3 items-center px-3 py-2 rounded-lg">
                <RxAvatar className="text-2xl" />
                View Profile
              </div>
            </Link>
            <Link to="/roomie-listing">
              <div className="flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-[#007aff] hover:text-white">
                <AiOutlineTeam className="text-2xl" />
                <p>Roomie Listing</p>
              </div>
            </Link>
            <Link to="/listed-rooms">
              <div className="flex  gap-3 items-center px-3 py-2  rounded-lg hover:bg-[#007aff] hover:text-white">
                <GoChecklist className="text-2xl" />
                <p>Listed rooms</p>
              </div>
            </Link>

            <Link to="/roommate-registry">
              <div className="flex  gap-3 items-center px-3 py-2 rounded-lg hover:bg-[#007aff] hover:text-white">
                <LiaRegistered className="text-2xl" />
                <p>Roomie Registry</p>
              </div>
            </Link>
            <div
              onClick={handleSignOut}
              className="flex cursor-pointer  gap-3 items-center px-3 py-2 rounded-lg hover:bg-[#007aff] hover:text-white"
            >
              <LiaSignOutAltSolid className="text-2xl" />
              <p>Sign Out</p>
            </div>

            <div className="flex w-full">
              {selectedFile && (
                <button
                  onClick={handleUploadPhoto}
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                >
                  Upload Photo
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
