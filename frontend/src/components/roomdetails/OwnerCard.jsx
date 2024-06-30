import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";

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
    <div className="w-full bg-[#ffffff] text-[#303030] mx-3 border border-[#e1e1e1]  rounded-xl shadow-md">
      <div className="flex mt-6 mb-3 justify-between ml-6 mr-14">
        <h2 className="font-semibold text-xl">Contact Owner</h2>
        <div className="-mt-1 w-10 h-10">
          <img
            className="rounded-full w-10 h-10 object-cover"
            src={userProfileUrl}
            alt="userImage"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mx-6">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-xs text-[#585858]">{`+91-${
          showPhoneNo ? userPhoneNumber : "XXXXXXXXXX"
        }`}</p>
      </div>
      <div className="flex justify-center mx-auto my-4">
        <button
          onClick={handleButtonClick}
          className="bg-[#f84464] text-white w-[70%] rounded-3xl py-3"
        >
          {showPhoneNo ? "Hide Phone number" : "Get Phone No"}
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;
