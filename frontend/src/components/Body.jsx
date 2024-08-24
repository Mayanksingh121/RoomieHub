import React from "react";
import Banner from "./Banner";
import RoomContainer from "./RoomContainer";
import useGetRoomsData from "../hooks/useGetRoomsData";
import RoommateContainer from "./RoommateContainer";
import About from "./About";
import OurOfferings from "./OurOfferings";
import CustomerReviews from "./CustomerReviews";

const Body = () => {
  useGetRoomsData();
  return (
    <div className="w-full">
      <Banner />
      <OurOfferings />
      <About />
      <RoomContainer />
      <RoommateContainer />
      <CustomerReviews />
    </div>
  );
};

export default Body;
