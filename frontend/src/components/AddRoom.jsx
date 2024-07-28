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
    lift: false,
    reservedParking: false,
    security: false,
    gym: false,
    maintainanceStaff: false,
    garden: false,
    wifi: false,
    userEmail: "geetika@123",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(room);
    const value = await addRoom(room);
    console.log(value);
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
      />
      Preference
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
      Number of Balconies
      <input
        type="number"
        name="numberOfBalconies"
        value={room.numberOfBalconies}
        onChange={onChangeHandler}
      />
      Bathrooms
      <input
        type="number"
        name="bathRooms"
        value={room.bathRooms}
        onChange={onChangeHandler}
      />
      Floor Number
      <input
        type="text"
        name="floorNumber"
        value={room.floorNumber}
        onChange={onChangeHandler}
      />
      Room Area
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
      Amenities
      <div>
        <div>
          Gym{" "}
          <input
            type="checkbox"
            name="gym"
            checked={room.gym}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          Garden{" "}
          <input
            type="checkbox"
            name="garden"
            checked={room.garden}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          Wifi{" "}
          <input
            type="checkbox"
            name="wifi"
            checked={room.wifi}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          Lift{" "}
          <input
            type="checkbox"
            name="lift"
            checked={room.lift}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          Maintainance Staff{" "}
          <input
            type="checkbox"
            name="maintainanceStaff"
            checked={room.maintainanceStaff}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          Parking{" "}
          <input
            type="checkbox"
            name="reservedParking"
            checked={room.reservedParking}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          Security{" "}
          <input
            type="checkbox"
            name="security"
            checked={room.security}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      Image
      <input type="file" name="roomImage" onChange={onChangeHandler} />
      Video
      <input type="file" name="roomVideo" onChange={onChangeHandler} />
      <button type="submit">Click</button>
    </form>
  );
};

export default AddRoom;
