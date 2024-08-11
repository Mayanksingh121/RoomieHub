import { useState } from "react";
import useGetListedRooms from "../hooks/useGetListedRooms";
import RoomDetailsModal from "./RoomDetailsModal";

const ListedRooms = () => {
  const { listedRooms, setListedRooms } = useGetListedRooms();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleCardClick = (room) => {
    setSelectedRoom(room);
  };

  const handleSaveChanges = (updatedRoom) => {
    setListedRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.roomId === updatedRoom.roomId ? updatedRoom : room
      )
    );
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {listedRooms.length > 0 ? (
        listedRooms.map((room) => (
          <div
            key={room.roomId}
            className="w-72 bg-white rounded shadow-lg p-4 cursor-pointer"
            onClick={() => handleCardClick(room)}
          >
            <img
              src={room.roomImageUrl}
              alt="Room"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{room.city}</h2>
            <p className="text-gray-500">{room.address}</p>
            <p className="text-gray-500">{`Rent: ₹${room.rent}`}</p>
            <p className="text-gray-500">{`Bedrooms: ${room.bathRooms}`}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
      {selectedRoom && (
        <RoomDetailsModal
          room={selectedRoom}
          onClose={handleCloseModal}
          onUpload={handleSaveChanges}
        />
      )}
    </div>
  );
};

export default ListedRooms;
