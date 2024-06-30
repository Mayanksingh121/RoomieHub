import { useState } from "react";
import { addRoom } from "../api/room";

const AddRoom = () => {
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
    userEmail: "bishtdeepak410@gmail.com",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(room);
    const value = await addRoom(room);
    console.log(value);
  };

  const onChangeHandler = (event) => {
    const { name, value, files } = event.target;

    // Handle roomImage upload (if it's a file input)
    if (name === "roomImage" && event.target.files) {
      setRoom((prevRoom) => ({
        ...prevRoom,
        roomImage: files[0], // Assuming single file upload
      }));
    } else if (name === "roomVideo" && event.target.files) {
      // Handle roomVideo upload
      setRoom((prevRoom) => ({
        ...prevRoom,
        roomVideo: files[0], // Assuming single file upload
      }));
    } else {
      // Handle other form fields
      setRoom((prevRoom) => ({ ...prevRoom, [name]: value }));
    }
  };

  return (
    <form onSubmit={submitHandler}>
      Rent
      <input
        type="number"
        name="rent"
        value={room.rent}
        onChange={onChangeHandler}
      />
      Security Deposit
      <input
        type="number"
        name="securityDeposit"
        value={room.securityDeposit}
        onChange={onChangeHandler}
      />
      Description
      <input
        type="text"
        name="description"
        value={room.description}
        onChange={onChangeHandler}
      />{" "}
      Prefernce
      <input
        type="text"
        name="preference"
        value={room.preference}
        onChange={onChangeHandler}
      />
      Landmark
      <input
        type="text"
        name="landmark"
        value={room.landmark}
        onChange={onChangeHandler}
      />
      State
      <input
        type="text"
        name="state"
        value={room.state}
        onChange={onChangeHandler}
      />
      numberOfBalconies
      <input
        type="number"
        name="numberOfBalconies"
        value={room.numberOfBalconies}
        onChange={onChangeHandler}
      />
      bathRooms
      <input
        type="number"
        name="bathRooms"
        value={room.bathRooms}
        onChange={onChangeHandler}
      />
      floorNumber
      <input
        type="text"
        name="floorNumber"
        value={room.floorNumber}
        onChange={onChangeHandler}
      />
      RoomArea
      <input
        type="text"
        name="roomArea"
        value={room.roomArea}
        onChange={onChangeHandler}
      />
      Address
      <input
        type="text"
        name="address"
        value={room.address}
        onChange={onChangeHandler}
      />
      Furnished Status
      <input
        type="text"
        name="furnishedStatus"
        value={room.furnishedStatus}
        onChange={onChangeHandler}
      />
      City
      <input
        type="text"
        name="city"
        value={room.city}
        onChange={onChangeHandler}
      />
      Image
      <input type="file" name="roomImage" onChange={onChangeHandler} />
      Video
      <input type="file" name="roomVideo" onChange={onChangeHandler} />
      <button type="submit">Click</button>
    </form>
  );
};

export default AddRoom;
