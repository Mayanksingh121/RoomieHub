import { useState, useEffect } from "react";
import useGetListedRooms from "../hooks/useGetListedRooms";
import RoomDetailsModal from "./RoomDetailsModal";

const ListedRooms = () => {
  const { listedRooms, setListedRooms } = useGetListedRooms();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [sortBy, setSortBy] = useState("price");
  const [filterLocation, setFilterLocation] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(listedRooms);

  useEffect(() => {
    let rooms = [...listedRooms];

    rooms.sort((a, b) => {
      if (sortBy === "price") {
        return a.rent - b.rent;
      } else if (sortBy === "size") {
        return parseInt(a.roomArea) - parseInt(b.roomArea);
      } else {
        return 0;
      }
    });

    if (filterLocation) {
      rooms = rooms.filter(
        (room) => room.city.toLowerCase() === filterLocation.toLowerCase()
      );
    }

    setFilteredRooms(rooms);
  }, [sortBy, filterLocation, listedRooms]);

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

  const handleDeleteRoom = (roomID) => {
    setListedRooms((prevRooms) =>
      prevRooms.filter((room) => room.roomId !== roomID)
    );
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Your Room Listings</h1>
        <div className="flex items-center gap-4">
          <label htmlFor="sort-by">Sort by:</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-40"
          >
            <option value="price">Price</option>
            <option value="size">Size</option>
          </select>
          <label htmlFor="filter-location">Filter by location:</label>
          <input
            id="filter-location"
            type="text"
            placeholder="Filter by location"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="w-40"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div
              key={room.roomId}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleCardClick(room)}
            >
              <img
                src={room.roomImageUrl || "/placeholder.svg"}
                alt={room.title || "Room"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{room.city}</h3>
                <p className="text-gray-600 mb-4">{room.address}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold">₹{room.rent}/month</div>
                    <div className="text-gray-600">{room.size}</div>
                  </div>
                  <div className="text-gray-600">{room.city}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No rooms available</p>
        )}
      </div>
      {selectedRoom && (
        <RoomDetailsModal
          room={selectedRoom}
          onClose={handleCloseModal}
          onUpload={handleSaveChanges}
          onDelete={handleDeleteRoom}
        />
      )}
    </div>
  );
};

export default ListedRooms;
