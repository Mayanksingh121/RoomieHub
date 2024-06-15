import React from "react";

const RoomCard = ({ room }) => {
  return (
    <div className="rounded-lg w-92 h-64">
      <div>
        <img
          className="h-[50%]"
          src={`data:image/png;base64, ${room.roomImage}`}
          alt="roomImage"
        ></img>
{/* video showing code */}
     <video width="600" height="240" controls>
  <source src={`data:video/mp4;base64,${room.roomImage}`}  /> Your browser does not support the video tag.
</video>
       {/* ---------------------------------------------------------------------------------------- */}
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
