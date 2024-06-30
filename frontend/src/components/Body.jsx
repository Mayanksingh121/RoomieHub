import React from "react";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
import useGetRoomsData from "../hooks/useGetRoomsData";
import AddUser from "./AddUser";

const Body = () => {
  useGetRoomsData();
  return (
    <div className="w-full">
      <Banner />
      <AddUser/>
      <RoomContainer />
    </div>
  );
};

export default Body;
