import React from "react";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
import useGetRoomsData from "../hooks/useGetRoomsData";
import AddRoom from "./AddRoom";
import RoommateContainer from "./RoommateContainer";
import AddRoommate from "./AddRoommate";

const Body = () => {
  useGetRoomsData();
  return (
    <div className="w-full">
      <Banner />
      <RoomContainer />
      <RoommateContainer/>
      <AddRoom />
      <AddRoommate/>
    </div>
  );
};

export default Body;
