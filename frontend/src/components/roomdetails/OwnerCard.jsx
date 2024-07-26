import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const OwnerCard = ({ handleGetPhoneNo }) => {
  const [showPhoneNo, setShowPhoneNo] = useState(false);
  const { roomId } = useParams();
  const data = useSelector((store) => store.room?.availableRooms);
  const userLoginStatus = useSelector((store) => store.user.isLoggedIn);
  const reqRoom = data?.find((room) => room.roomId === Number(roomId));

  if (reqRoom === undefined) {
    return null;
  }
  const { name, userPhoneNumber, userProfileUrl } = reqRoom.user;

  const handleButtonClick = () => {
    if (userLoginStatus) {
      setShowPhoneNo((prevValue) => !prevValue);
    } else {
      handleGetPhoneNo();
    }
  };

  return (
    <div className="w-full bg-white text-gray-800 border border-gray-300 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 rounded-full border-4 border-gray-300"
            src={userProfileUrl}
            alt="Owner"
            loading="lazy"
          />
          <div className="mr-2">
            <h2 className="text-xl font-montserrat font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">{`+91-${showPhoneNo ? userPhoneNumber : "XXXXXXXXXX"}`}</p>
          </div>
        </div>
        <button
          onClick={handleButtonClick}
          className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-full shadow-md hover:bg-gray-900 transition"
        >
          <FaPhoneAlt />
          {showPhoneNo ? "Hide Phone Number" : "Get Phone Number"}
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;
