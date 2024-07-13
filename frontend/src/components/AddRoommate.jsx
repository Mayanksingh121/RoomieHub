import { useState } from "react";
import { addRoommate } from "../api/roommate";

const AddRoommate = () => {
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
    userEmail:"bishtdeepak410@gmail.com",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    const value = await addRoommate(room);
  };

  // const onChangeHandler = (event) => {
  //   const { name, value, files } = event.target;
  //   if (name === "roomImage") {
  //     setRoom((prevUser) => ({
  //       ...prevUser,
  //       roomImage: files[0],
  //     }));
  //   } else {
  //     setRoom((prevUser) => ({ ...prevUser, [name]: value }));
  //   }
  // };

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
      Budget
      <input
        type="number"
        name="budget"
        value={room.budget}
        onChange={onChangeHandler}
      />
   Availability
      <input
        type="date"

        name="availableFrom"
        value={room.availableFrom}
        onChange={onChangeHandler}
      />
        Description
      <input
        type="text"
        name="description"
        value={room.description}
        onChange={onChangeHandler}
      />   Prefernce
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
      Age
      <input
        type="number"
        name="age"
        value={room.age}
        onChange={onChangeHandler}
      />
      Address
      <input
        type="text"
        name="address"
        value={room.address}
        onChange={onChangeHandler}
      />
      Occupation
      <input
        type="text"
        name="occupation"
        value={room.occupation}
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

export default AddRoommate;
