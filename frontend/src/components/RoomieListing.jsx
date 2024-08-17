import { useState } from "react";
import RoommateDetailsModal from "./RoommateDetailsModal";
import useGetListedRommate from "../hooks/useGetListedRoommate";

const RoomieListing = () => {
  const { listedRoommates, setListedRoommates } = useGetListedRommate();
  const [selectedRoommate, setSelectedRoommate] = useState(null);

  const handleCardClick = (roommate) => {
    setSelectedRoommate(roommate);
  };

  if(!listedRoommates){
    return null;
  }

  const handleSaveChanges = (updatedRoommate) => {
    setListedRoommates((prevRoommates) =>
      prevRoommates.map((roommate) =>
        roommate.id === updatedRoommate.id ? updatedRoommate : roommate
      )
    );
  };

  const handleCloseModal = () => {
    setSelectedRoommate(null);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {listedRoommates.length > 0 ? (
        listedRoommates.map((roommate) => (
          <div
            key={roommate.id}
            className="w-72 bg-white rounded shadow-lg p-4 cursor-pointer"
            onClick={() => handleCardClick(roommate)}
          >
            <img
              src={roommate.roomImageUrl}
              alt="Room"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{roommate.city}</h2>
            <p className="text-gray-500">{roommate.address}</p>
            <p className="text-gray-500">{`Rent: ₹${roommate.budget}`}</p>
            <p className="text-gray-500">{`Bathrooms: ${roommate.bathRooms}`}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
      {selectedRoommate && (
        <RoommateDetailsModal
          roommate={selectedRoommate}
          onClose={handleCloseModal}
          onUpload={handleSaveChanges}
        />
      )}
    </div>
  );
};

export default RoomieListing;
