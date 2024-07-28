import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdBathtub } from "react-icons/md";
import { MdBalcony } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FaLandmark } from "react-icons/fa";

const RoommateDetails = ({ user }) => {
  const [roommateData, setRoommateData] = useState(null);
  const { roommateID } = useParams();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/get-roommate/${roommateID}`);
        const result = await response.json();
        setRoommateData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [roommateID]);

  console.log(roommateData);
  if (roommateData === null) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Slider {...settings}>
        <div className="h-52 aspect-w-4 aspect-h-3">
          <img
            className="w-full h-full object-cover"
            src={roommateData.roomImageUrl}
            loading="lazy"
            alt="room"
          />
        </div>
        <div className="h-48 aspect-w-4 aspect-h-3">
          <video controls className="w-full h-full object-cover" preload="metadata">
            <source src={roommateData.roomVideoUrl}></source>
          </video>
        </div>
      </Slider>

      <div className="flex font-display text-xs gap-4 mt-6 mb-3 px-3">
        <p className="rounded-sm bg-[#f84464] py-1 px-3 text-white">
          {roommateData.city}
        </p>
        <p className="rounded-sm bg-[#f84464] py-1 px-3 text-white">
          {roommateData.state}
        </p>
      </div>
      <div className="px-3 border-b pb-6">
        <p className="font-bold font-display">{roommateData.address}</p>
        <p className="text-sm">Phone no: {roommateData.user.userPhoneNumber}</p>
      </div>
      <div className="py-4 border-b font-display px-4">
        <div className="flex justify-between my-2">
          <p className="flex gap-2 items-center">
            <MdBathtub />
            {roommateData.bathRooms}{" "}
            {roommateData.bathRoom > 1 ? "Bathrooms" : "Bathroom"}
          </p>
          <p className="flex gap-2 items-center">
            <MdBalcony />
            {roommateData.numberOfBalconies}{" "}
            {roommateData.numberOfBalconies > 1 ? "Balconies" : "Balcony"}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="flex gap-2 items-center">
            <FaBuilding />
            {roommateData.floorNumber} Floor
          </p>
        </div>
      </div>
      <div className="px-3 py-6 border-b">
        <h2 className="font-bold ">Description</h2>
        <div className="flex py-3 gap-4">
          <img
            className="h-16 w-16 rounded-full"
            src={roommateData.user.userProfileUrl}
            alt="user"
          />
          <div className="font-body">
            <h3 className="font-bold">
              {roommateData.user.name} ({roommateData.user.userEmail})
            </h3>
            <p className="text-sm -mt-1">{roommateData.occupation}</p>
            <p className="text-sm">{roommateData.age} year old</p>
          </div>
        </div>
        <p>{roommateData.description}</p>
      </div>
      <div className="px-3 font-body border-b py-4">
        <div className="flex justify-between my-2">
          <div className="flex gap-2 items-center">
            <span className="text-xl">
              {" "}
              <HiCurrencyRupee />
            </span>

            <p className="flex flex-col">
              <span className="-mb-1 text-sm text-gray-500">Rent</span>
              <span className="font-bold">₹{roommateData.budget}/month</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-xl">
              {" "}
              <SlCalender />
            </span>

            <p className="flex flex-col">
              <span className="-mb-1 text-sm text-gray-500">Availability</span>
              <span className="font-bold">{roommateData.availableFrom}</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <span className="text-xl">
              <FaLandmark />
            </span>

            <p className="flex flex-col">
              <span className="-mb-1 text-sm text-gray-500">Landmark</span>
              <span className="font-bold">{roommateData.landmark}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoommateDetails;
