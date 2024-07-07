import React from "react";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
import useGetRoomsData from "../hooks/useGetRoomsData";
import AddRoom from "./AddRoom";
import RoommateContainer from "./RoommateContainer";

const Body = () => {
  useGetRoomsData();
  return (
    <div className="w-full">
      <Banner />
      <RoomContainer />
      <RoommateContainer/>
      <AddRoom />
    </div>
  );
};

export default Body;
