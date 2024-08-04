import { useState } from "react";
import { addRoom } from "../../api/room";
import FormField from "./FormField";
import CheckboxGroup from "./CheckboxGroup";
import FileInput from "./FileInput";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../utils/Context/UserContext";

const RoomListing = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { userDetails } = useUser();
  const [room, setRoom] = useState({
    rent: "",
    landmark: "",
    securityDeposit: "",
    state: "",
    city: "",
    numberOfBalconies: "",
    roommates: null,
    bathRooms: "",
    floorNumber: "",
    roomArea: "",
    address: "",
    roomImage: null,
    roomVideo: null,
    furnishedStatus: "",
    description: "",
    preference: "",
    lift: false,
    reservedParking: false,
    security: false,
    gym: false,
    maintainanceStaff: false,
    garden: false,
    wifi: false,
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    const roomInfo = {
      ...room,
      userEmail: "geetika@gmail.com",
    };
    toast
      .promise(addRoom(roomInfo), {
        loading: "Uploading...",
        success: "Room added successfully",
        error: "Could not upload. Try again later",
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to add room data");
      });
  };

  const onChangeHandler = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === "file") {
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
      }
    } else if (type === "checkbox") {
      setRoom((prevRoom) => ({
        ...prevRoom,
        [name]: checked,
      }));
    } else {
      setRoom((prevRoom) => ({ ...prevRoom, [name]: value }));
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Room</h1>
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded-lg p-8"
      >
        {step === 1 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Rent"
                name="rent"
                type="number"
                value={room.rent}
                onChange={onChangeHandler}
              />
              <FormField
                label="Security Deposit"
                name="securityDeposit"
                type="number"
                value={room.securityDeposit}
                onChange={onChangeHandler}
              />
              <FormField
                label="Description"
                name="description"
                type="text"
                value={room.description}
                onChange={onChangeHandler}
              />
              <FormField
                label="Preference"
                name="preference"
                type="text"
                value={room.preference}
                onChange={onChangeHandler}
              />
              <FormField
                label="Landmark"
                name="landmark"
                type="text"
                value={room.landmark}
                onChange={onChangeHandler}
              />
              <FormField
                label="State"
                name="state"
                type="text"
                value={room.state}
                onChange={onChangeHandler}
              />
              <FormField
                label="City"
                name="city"
                type="text"
                value={room.city}
                onChange={onChangeHandler}
              />
              <FormField
                label="Number of Balconies"
                name="numberOfBalconies"
                type="number"
                value={room.numberOfBalconies}
                onChange={onChangeHandler}
              />
              <FormField
                label="Bathrooms"
                name="bathRooms"
                type="number"
                value={room.bathRooms}
                onChange={onChangeHandler}
              />
              <FormField
                label="Floor Number"
                name="floorNumber"
                type="text"
                value={room.floorNumber}
                onChange={onChangeHandler}
              />
              <FormField
                label="Room Area"
                name="roomArea"
                type="text"
                value={room.roomArea}
                onChange={onChangeHandler}
              />
              <FormField
                label="Address"
                name="address"
                type="text"
                value={room.address}
                onChange={onChangeHandler}
              />
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Furnished Status
                </label>
                <select
                  name="furnishedStatus"
                  value={room.furnishedStatus}
                  onChange={onChangeHandler}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="">Select</option>
                  <option value="FULLYFURNISHED">Fully Furnished</option>
                  <option value="SEMIFURNISHED">Semi Furnished</option>
                  <option value="UNFURNISHED">Unfurnished</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Amenities</h2>
            <CheckboxGroup
              amenities={[
                "gym",
                "garden",
                "wifi",
                "lift",
                "maintainanceStaff",
                "reservedParking",
                "security",
              ]}
              room={room}
              onChange={onChangeHandler}
            />
            <div className="mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="ml-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="mt-6">
              <FileInput
                label="Image"
                name="roomImage"
                onChange={onChangeHandler}
              />
            </div>
            <div className="mt-6">
              <FileInput
                label="Video"
                name="roomVideo"
                onChange={onChangeHandler}
              />
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="ml-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RoomListing;
