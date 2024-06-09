import React from "react";

const RoomCard = ({ room }) => {
  return (
    <div className="rounded-lg w-92 h-64">
      <div>
        <img
          className="h-[50%]"
          src={`data:image/png:base64, ${room.roomImage}`}
          alt="roomImage"
        ></img>
      </div>
      <div>
        {room.rent}
        {room.state}
        {room.city}
        {room.location}
      </div>
    </div>
  );
};

export default RoomCard;
