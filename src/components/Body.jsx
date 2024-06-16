import React from "react";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
import useGetRoomsData from "../hooks/useGetRoomsData";


const Body = () => {
  useGetRoomsData();
  return (
    <div className="w-full">
      <Banner />
      <RoomContainer />
    </div>
  );
};

export default Body;
