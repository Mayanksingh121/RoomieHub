import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OwnerCard from "./OwnerCard";
import { FaBath, FaBuilding } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useState } from "react";
import UserModal from "./UserModal";
import { BASE_URL } from "../../constant/constant";
import { useUser } from "../../utils/Context/UserContext";

const RoomInformation = ({ handleLogin }) => {
  const { userDetails } = useUser();
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

  const handleContactOwner = async () => {
    try {
      if (loginStatus) {
        const formData = new FormData();
        formData.append("userEmail", userDetails);
        const response = await fetch(`${BASE_URL}/send-message`, {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          toast("Message sent Successfully");
        }
      } else {
        toast("To get owner's contact details login is required.", {
          duration: 3000,
          position: "top-right",
        });
        handleLogin();
      }
    } catch (e) {
      console.log(e);
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
    garden,
    gym,
    reservedParking,
    security,
    wifi,
  } = reqRoom;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <video className="w-full h-96 object-cover rounded-t-xl" controls>
            <source src={roomVideoUrl} preload="metadata" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row md:justify-between mb-8">
            <h1 className="text-4xl font-bold font-roboto-condensed text-gray-800 mb-4 md:mb-0">
              Room Details
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={handleGetPhoneNo}
                className="border border-blue-500 text-blue-500 rounded-full px-6 py-2 transition-colors hover:bg-blue-100"
              >
                Get Phone No.
              </button>
              <button
                onClick={handleContactOwner}
                className="bg-blue-500 text-white rounded-full px-6 py-2 transition-colors hover:bg-blue-600"
              >
                Contact Owner
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 font-roboto">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Room Info
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                <strong className="font-roboto-slab">Rental:</strong> ₹{rent}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <strong className="font-roboto-slab">Security Deposit:</strong>{" "}
                ₹{securityDeposit}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                <strong className="font-roboto-slab">Location:</strong>{" "}
                {address}, {city}, {state}
              </p>
              <div className="grid grid-cols-2 gap-4 font-roboto-condensed">
                <div className="flex items-center space-x-2">
                  <GiSofa className="text-red-500 text-2xl" />
                  <div>
                    <h3 className="text-md font-semibold">Furnished Status</h3>
                    <p className="text-sm text-gray-600">{furnishedStatus}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MdBalcony className="text-red-500 text-2xl" />
                  <div>
                    <h3 className="text-md font-semibold">Balconies</h3>
                    <p className="text-sm text-gray-600">{numberOfBalconies}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBath className="text-red-500 text-2xl" />
                  <div>
                    <h3 className="text-md font-semibold">Bathrooms</h3>
                    <p className="text-sm text-gray-600">{bathRooms}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBuilding className="text-red-500 text-2xl" />
                  <div>
                    <h3 className="text-md font-semibold">Floor</h3>
                    <p className="text-sm text-gray-600">{floorNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 col-span-2">
                  <div>
                    <h3 className="text-md font-semibold">Room Area</h3>
                    <p className="text-sm text-gray-600">{roomArea}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 font-roboto">
                More Information
              </h2>
              <p className="text-lg text-gray-600 mb-4 font-roboto-slab">
                {description}
              </p>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 font-roboto">
                  Amenities
                </h2>
                <ul className="list-disc font-roboto-slab pl-5 text-gray-700">
                  <li className={garden ? "text-green-600" : "text-gray-500"}>
                    🌳 Garden: {garden ? "Available" : "Not Available"}
                  </li>
                  <li className={gym ? "text-green-600" : "text-gray-500"}>
                    🏋️ Gym: {gym ? "Available" : "Not Available"}
                  </li>
                  <li
                    className={
                      reservedParking ? "text-green-600" : "text-gray-500"
                    }
                  >
                    🅿️ Reserved Parking:{" "}
                    {reservedParking ? "Available" : "Not Available"}
                  </li>
                  <li className={security ? "text-green-600" : "text-gray-500"}>
                    🛡️ Security: {security ? "Available" : "Not Available"}
                  </li>
                  <li className={wifi ? "text-green-600" : "text-gray-500"}>
                    📶 WiFi: {wifi ? "Available" : "Not Available"}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <img
                className="w-full h-80 object-cover rounded-xl"
                src={roomImageUrl}
                alt="Room"
              />
            </div>
            <div className="absolute top-0 right-0 rounded-xl">
              <OwnerCard handleGetPhoneNo={handleGetPhoneNo} />
            </div>
          </div>
        </div>
      </div>

      <UserModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        user={{ name, userPhoneNumber, userProfileUrl, userEmail }}
      />
    </div>
  );
};

export default RoomInformation;
