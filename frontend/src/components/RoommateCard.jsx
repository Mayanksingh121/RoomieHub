import React from "react";

const RoommateCard = ({ roommate }) => {
  return (
    <div className="cursor-pointer w-60 rounded-lg m-3 shadow-md bg-[#ffffff]">
      <img
        className="w-full h-32 object-cover rounded-t-lg"
        src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
        alt="roommate image"
      />
      <div className="px-4 py-2">
        <div className="font-display font-bold text-lg mb-1">{roommate.user.name}</div>
        <p className="text-gray-800 text-sm font-body">
          {roommate.age} years old
        </p>
        <p className="text-gray-700 text-sm">
          {roommate.occupation}
        </p>
        <p className="font-body text-gray-700 text-sm">
          {roommate.city} • {roommate.state}
        </p>
        <p className="text-gray-700 text-sm">
          Available From: {roommate.availableFrom}
        </p>
      </div>
      <div className="px-4 pt-2 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
          {roommate.preference}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">
          Floor: {roommate.floorNumber}
        </span>
      </div>
    </div>
  );
};

export default RoommateCard;
