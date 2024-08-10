import React, { useState } from "react";
import { addRoommate } from "../api/roommate";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RoommateRegistry = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");
  const [room, setRoom] = useState({
    budget: "",
    landmark: "",
    securityDeposit: "",
    state: "",
    city: "",
    numberOfBalconies: "",
    roommates: null,
    bathRooms: "",
    floorNumber: "",
    age: "",
    address: "",
    roomImage: null,
    roomVideo: null,
    occupation: "",
    description: "",
    preference: "",
    availableFrom: "",
    userEmail: userEmail,
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      toast
        .promise(addRoommate(room), {
          loading: "Uploading...",
          success: "Rommate added",
          error: "Could not add rommate",
        })
        .then(() => {
          console.log("done");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to upload photo.");
        });
    } catch (error) {
      console.error("Error registering roommate:", error);
    }
  };

  const onChangeHandler = (event) => {
    const { name, value, files } = event.target;

    if (name === "roomImage" && files) {
      setRoom((prevRoom) => ({
        ...prevRoom,
        roomImage: files[0],
      }));
    } else if (name === "roomVideo" && files) {
      setRoom((prevRoom) => ({
        ...prevRoom,
        roomVideo: files[0],
      }));
    } else {
      setRoom((prevRoom) => ({ ...prevRoom, [name]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Roommate Registry
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Register yourself as a roommate by filling out the form below.
          </p>
        </div>
        <form onSubmit={submitHandler} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-2">
              <label htmlFor="budget" className="sr-only">
                Budget
              </label>
              <input
                id="budget"
                name="budget"
                type="number"
                value={room.budget}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your budget"
              />
            </div>

            <div className="py-2">
              <label htmlFor="availableFrom" className="sr-only">
                Availability Date
              </label>
              <input
                id="availableFrom"
                name="availableFrom"
                type="date"
                value={room.availableFrom}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>

            <div className="py-2">
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={room.description}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Describe the room and surroundings"
                rows="4"
              />
            </div>

            <div className="py-2">
              <label htmlFor="preference" className="sr-only">
                Preference
              </label>
              <input
                id="preference"
                name="preference"
                type="text"
                value={room.preference}
                onChange={onChangeHandler}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your preference"
              />
            </div>

            <div className="py-2">
              <label htmlFor="landmark" className="sr-only">
                Landmark
              </label>
              <input
                id="landmark"
                name="landmark"
                type="text"
                value={room.landmark}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nearest landmark"
              />
            </div>

            <div className="py-2">
              <label htmlFor="state" className="sr-only">
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                value={room.state}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter state"
              />
            </div>

            <div className="py-2">
              <label htmlFor="city" className="sr-only">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={room.city}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter city"
              />
            </div>

            <div className="py-2">
              <label htmlFor="numberOfBalconies" className="sr-only">
                Number of Balconies
              </label>
              <input
                id="numberOfBalconies"
                name="numberOfBalconies"
                type="number"
                value={room.numberOfBalconies}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Number of balconies"
              />
            </div>

            <div className="py-2">
              <label htmlFor="bathRooms" className="sr-only">
                Number of Bathrooms
              </label>
              <input
                id="bathRooms"
                name="bathRooms"
                type="number"
                value={room.bathRooms}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Number of bathrooms"
              />
            </div>

            <div className="py-2">
              <label htmlFor="floorNumber" className="sr-only">
                Floor Number
              </label>
              <input
                id="floorNumber"
                name="floorNumber"
                type="text"
                value={room.floorNumber}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Floor number"
              />
            </div>

            <div className="py-2">
              <label htmlFor="age" className="sr-only">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                value={room.age}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your age"
              />
            </div>

            <div className="py-2">
              <label htmlFor="address" className="sr-only">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={room.address}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full address"
              />
            </div>

            <div className="py-2">
              <label htmlFor="occupation" className="sr-only">
                Occupation
              </label>
              <input
                id="occupation"
                name="occupation"
                type="text"
                value={room.occupation}
                onChange={onChangeHandler}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Occupation"
              />
            </div>

            <div className="py-2">
              <label
                htmlFor="roomImage"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Room Image
              </label>
              <input
                id="roomImage"
                name="roomImage"
                type="file"
                onChange={onChangeHandler}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="py-2">
              <label
                htmlFor="roomVideo"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Room Video
              </label>
              <input
                id="roomVideo"
                name="roomVideo"
                type="file"
                onChange={onChangeHandler}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Roommate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoommateRegistry;
