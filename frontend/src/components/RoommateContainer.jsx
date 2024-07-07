import React from "react";
import RoommateCard from "./RoommateCard";
import { Link } from "react-router-dom";

const dummyRoomMates = [
  {
    id: 1,
    numberOfBalconies: 2,
    bathRooms: 1,
    floorNumber: "3",
    age: 25,
    occupation: "Software Engineer",
    preference: "Non-smoker",
    roomImageUrl: "https://example.com/image1.jpg",
    roomImagePublicId: "img1PublicId",
    roomVideoUrl: "https://example.com/video1.mp4",
    roomVideoPublicId: "vid1PublicId",
    budget: 1200.0,
    description: "Spacious room with a beautiful view.",
    landmark: "Central Park",
    state: "New York",
    city: "New York",
    address: "123 Main St",
    availableFrom: "2024-07-15",
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    },
  },
  {
    id: 2,
    numberOfBalconies: 1,
    bathRooms: 2,
    floorNumber: "5",
    age: 30,
    occupation: "Graphic Designer",
    preference: "Pet-friendly",
    roomImageUrl: "https://example.com/image2.jpg",
    roomImagePublicId: "img2PublicId",
    roomVideoUrl: "https://example.com/video2.mp4",
    roomVideoPublicId: "vid2PublicId",
    budget: 1500.0,
    description: "Modern room with all amenities.",
    landmark: "Times Square",
    state: "New York",
    city: "New York",
    address: "456 Elm St",
    availableFrom: "2024-08-01",
    user: {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
    },
  },
  {
    id: 3,
    numberOfBalconies: 0,
    bathRooms: 1,
    floorNumber: "2",
    age: 28,
    occupation: "Data Analyst",
    preference: "Vegetarian",
    roomImageUrl: "https://example.com/image3.jpg",
    roomImagePublicId: "img3PublicId",
    roomVideoUrl: "https://example.com/video3.mp4",
    roomVideoPublicId: "vid3PublicId",
    budget: 1000.0,
    description: "Cozy room near downtown.",
    landmark: "Empire State Building",
    state: "New York",
    city: "New York",
    address: "789 Pine St",
    availableFrom: "2024-07-20",
    user: {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
    },
  },
  {
    id: 4,
    numberOfBalconies: 0,
    bathRooms: 1,
    floorNumber: "2",
    age: 28,
    occupation: "Data Analyst",
    preference: "Vegetarian",
    roomImageUrl: "https://example.com/image3.jpg",
    roomImagePublicId: "img3PublicId",
    roomVideoUrl: "https://example.com/video3.mp4",
    roomVideoPublicId: "vid3PublicId",
    budget: 1000.0,
    description: "Cozy room near downtown.",
    landmark: "Empire State Building",
    state: "New York",
    city: "New York",
    address: "789 Pine St",
    availableFrom: "2024-07-20",
    user: {
      id: 4,
      name: "Alice Johnson",
      email: "alice@example.com",
    },
  },
  {
    id: 5,
    numberOfBalconies: 0,
    bathRooms: 1,
    floorNumber: "2",
    age: 28,
    occupation: "Data Analyst",
    preference: "Vegetarian",
    roomImageUrl: "https://example.com/image3.jpg",
    roomImagePublicId: "img3PublicId",
    roomVideoUrl: "https://example.com/video3.mp4",
    roomVideoPublicId: "vid3PublicId",
    budget: 1000.0,
    description: "Cozy room near downtown.",
    landmark: "Empire State Building",
    state: "New York",
    city: "New York",
    address: "789 Pine St",
    availableFrom: "2024-07-20",
    user: {
      id: 5,
      name: "Alice Johnson",
      email: "alice@example.com",
    },
  },
  {
    id: 6,
    numberOfBalconies: 0,
    bathRooms: 1,
    floorNumber: "2",
    age: 28,
    occupation: "Data Analyst",
    preference: "Vegetarian",
    roomImageUrl: "https://example.com/image3.jpg",
    roomImagePublicId: "img3PublicId",
    roomVideoUrl: "https://example.com/video3.mp4",
    roomVideoPublicId: "vid3PublicId",
    budget: 1000.0,
    description: "Cozy room near downtown.",
    landmark: "Empire State Building",
    state: "New York",
    city: "New York",
    address: "789 Pine St",
    availableFrom: "2024-07-20",
    user: {
      id: 6,
      name: "Alice Johnson",
      email: "alice@example.com",
    },
  },
];

const RoommateContainer = () => {
  return (
    <div className="px-8 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 px-2">
        Available Roommates
      </h2>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {dummyRoomMates.map((roommate) => (
            <Link to={`/roommate/${roommate.user.id}`} key={roommate.id}>
              <RoommateCard roommate={roommate} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoommateContainer;
