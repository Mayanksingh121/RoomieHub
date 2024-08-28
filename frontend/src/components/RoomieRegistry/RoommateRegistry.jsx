import React, { useState } from "react";
import { addRoommate } from "../../api/roommate";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import FileUpload from "./FileUpload";
import FormSection from "./FormSection";
import FormContainer from "./FormContainer";

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
          success: "Roommate added",
          error: "Could not add roommate",
        })
        .then(() => {
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
    <FormContainer
      title="Roommate Registry"
      description="Register yourself as a roommate by filling out the form below."
    >
      <form onSubmit={submitHandler} className="mt-8 mb-12 space-y-6">
        <FormSection>
          <InputField
            id="budget"
            name="budget"
            type="number"
            value={room.budget}
            onChange={onChangeHandler}
            required
            placeholder="Enter your budget"
          />
          <InputField
            id="age"
            name="age"
            type="number"
            value={room.age}
            onChange={onChangeHandler}
            required
            placeholder="Enter age"
          />
          <InputField
            id="availableFrom"
            name="availableFrom"
            type="date"
            value={room.availableFrom}
            onChange={onChangeHandler}
            required
            placeholder="Availability Date"
          />
        </FormSection>

        <FormSection>
          <InputField
            id="address"
            name="address"
            type="text"
            value={room.address}
            onChange={onChangeHandler}
            required
            placeholder="Enter address"
          />
          <InputField
            id="landmark"
            name="landmark"
            type="text"
            value={room.landmark}
            onChange={onChangeHandler}
            required
            placeholder="Nearest landmark"
          />
          <InputField
            id="city"
            name="city"
            type="text"
            value={room.city}
            onChange={onChangeHandler}
            required
            placeholder="Enter city"
          />
        </FormSection>

        <FormSection>
          <InputField
            id="state"
            name="state"
            type="text"
            value={room.state}
            onChange={onChangeHandler}
            required
            placeholder="Enter State"
          />
          <InputField
            id="occupation"
            name="occupation"
            type="text"
            value={room.occupation}
            onChange={onChangeHandler}
            required
            placeholder="Nearest occupation"
          />
          <InputField
            id="preference"
            name="preference"
            type="text"
            maxLength={10}
            value={room.preference}
            onChange={onChangeHandler}
            required
            placeholder="Preference"
          />
        </FormSection>

        <FormSection>
          <InputField
            id="floorNumber"
            name="floorNumber"
            type="number"
            value={room.floorNumber}
            onChange={onChangeHandler}
            required
            placeholder="Floor Number"
          />
          <InputField
            id="numberOfBalconies"
            name="numberOfBalconies"
            type="number"
            value={room.numberOfBalconies}
            onChange={onChangeHandler}
            required
            placeholder="Number of Balconies"
          />
          <InputField
            id="bathRooms"
            name="bathRooms"
            type="number"
            value={room.bathRooms}
            onChange={onChangeHandler}
            required
            placeholder="Number of Bathrooms"
          />
        </FormSection>

        <FormSection>
          <TextAreaField
            id="description"
            name="description"
            value={room.description}
            onChange={onChangeHandler}
            required
            placeholder="Description"
            rows={4}
          />
        </FormSection>

        <FormSection>
          <FileUpload
            id="roomImage"
            name="roomImage"
            label="Upload Room Image"
            accept="image/*"
            onChange={onChangeHandler}
            color="blue"
            supportedFormats="jpg, png, jpeg"
          />
          <FileUpload
            id="roomVideo"
            name="roomVideo"
            label="Upload Room Video"
            accept="video/*"
            onChange={onChangeHandler}
            color="orange"
            supportedFormats="mp4"
          />
        </FormSection>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="font-roboto px-4 py-2 bg-blue-600 text-white font-semibold w-1/2 rounded-lg shadow-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default RoommateRegistry;
