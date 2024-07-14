import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OwnerCard from "./OwnerCard";
import { FaBath } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useState } from "react";
import UserModal from "./UserModal";

const RoomInformation = ({ handleLogin }) => {
  const { roomId } = useParams();
  const data = useSelector((store) => store.room?.availableRooms);
  const reqRoom = data?.find((room) => room.roomId === Number(roomId));
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const loginStatus = useSelector((store) => store.user.isLoggedIn);
  const { name, userPhoneNumber, userProfileUrl, userEmail } = reqRoom.user;

  const handleGetPhoneNo = () => {
    if (loginStatus) {
      setModalIsOpen(true);
    } else {
      toast("To get owner's contact details login is required.", {
        duration: 3000,
        position: "top-right",
      });
      handleLogin();
    }
  };
  if (reqRoom === undefined) {
    return null;
  }

  const {
    rent,
    state,
    city,
    address,
    roomImageUrl,
    numberOfBalconies,
    bathRooms,
    floorNumber,
    furnishedStatus,
    description,
    roomVideoUrl,
    securityDeposit,
    roomArea,
  } = reqRoom;

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <main className="flex p-6">
        <div className="md:w-2/3 bg-white rounded-xl shadow-lg p-6 mb-6 md:mb-0 md:mr-6">
          <div className="mb-4">
            <video className="w-full rounded-lg shadow-md" controls>
              <source src={roomVideoUrl} />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-semibold text-[#333]">Room Details</h2>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Rental:</strong> ₹{rent}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Security Deposit:</strong> ₹{securityDeposit}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Location:</strong> {address}, {city}, {state}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <GiSofa className="text-[#f84464] text-xl" />
              <div>
                <h3 className="text-sm font-semibold">Furnished Status</h3>
                <p className="text-xs text-gray-600">{furnishedStatus}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MdBalcony className="text-[#f84464] text-xl" />
              <div>
                <h3 className="text-sm font-semibold">Balconies</h3>
                <p className="text-xs text-gray-600">{numberOfBalconies}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaBath className="text-[#f84464] text-xl" />
              <div>
                <h3 className="text-sm font-semibold">Bathrooms</h3>
                <p className="text-xs text-gray-600">{bathRooms}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaBuilding className="text-[#f84464] text-xl" />
              <div>
                <h3 className="text-sm font-semibold">Floor</h3>
                <p className="text-xs text-gray-600">{floorNumber}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 col-span-2">
              <div>
                <h3 className="text-sm font-semibold">Room Area</h3>
                <p className="text-xs text-gray-600">{roomArea}</p>
              </div>
            </div>
          </div>
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-semibold text-[#333]">More Information</h2>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <img className="rounded-lg w-full h-52 object-cover mt-4" src={roomImageUrl} alt="Room" />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleGetPhoneNo}
              className="border border-[#f84464] text-[#f84464] rounded-3xl px-6 py-2"
            >
              Get Phone No.
            </button>
            <button
              onClick={handleGetPhoneNo}
              className="border text-white bg-[#f84464] rounded-3xl px-6 py-2"
            >
              Contact Owner
            </button>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="sticky top-6">
            <OwnerCard handleGetPhoneNo={handleGetPhoneNo} />
            <UserModal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              user={{ name, userPhoneNumber, userProfileUrl, userEmail }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoomInformation;
