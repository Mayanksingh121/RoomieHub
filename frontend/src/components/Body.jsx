import React from "react";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
import useGetRoomsData from "../hooks/useGetRoomsData";
import AddRoom from "./AddRoom";
import RoommateContainer from "./RoommateContainer";
import AddRoommate from "./AddRoommate";
import About from "./About";
import CustomerReviews from "./CustomerReview";

const Body = () => {
  useGetRoomsData();
  return (
    <div className="w-full">
      <Banner />
      <About />
      <RoomContainer />
      <RoommateContainer />
      <CustomerReviews/>
      <AddRoom />
      <AddRoommate />
    </div>
  );
};

export default Body;
