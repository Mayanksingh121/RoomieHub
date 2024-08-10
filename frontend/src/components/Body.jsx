import React from "react";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
import useGetRoomsData from "../hooks/useGetRoomsData";
import RoommateContainer from "./RoommateContainer";
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
      <CustomerReviews />
    </div>
  );
};

export default Body;
