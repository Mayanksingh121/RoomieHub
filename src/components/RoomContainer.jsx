
import Shimmer from "./Shimmer";
import RoomCard from "./RoomCard";
import { useSelector } from "react-redux";
// import Peacock from "../assets/peacock.jpg";
// import Peacock2 from "../assets/peacock2.jpg";
// import Tiger from "../assets/tiger.jpg";
// import Tiger2 from "../assets/tiger2.jpg";
// import Dog from "../assets/dog.jpg";

const RoomContainer = () => {
  const roomInfo = useSelector((store) => store.room.availableRooms);
  console.log(roomInfo);
  const noOfShimmers = 20;

  //! ise mt hataiyo
  // const roomInfo = [
  //   {
  //     roomId: 1,
  //     roomImage: Dog,
  //     rent: 1000,
  //     city: "New Delhi",
  //     state: "Delhi",
  //     location: "Kotla",
  //     numberOfBalconies: 1,
  //     floor: 1,
  //   },
  //   {
  //     roomId: 2,
  //     roomImage: Peacock,
  //     rent: 5000,
  //     city: "New Delhi",
  //     state: "Delhi",
  //     location: "Kotla",
  //     numberOfBalconies: 1,
  //     floor: 1,
  //   },
  //   {
  //     roomId: 3,
  //     roomImage: Peacock2,
  //     rent: 2000,
  //     city: "New Delhi",
  //     state: "Delhi",
  //     location: "Kotla",
  //     numberOfBalconies: 1,
  //     floor: 1,
  //   },
  //   {
  //     roomId: 4,
  //     roomImage: Tiger,
  //     rent: 1000,
  //     city: "New Delhi",
  //     state: "Delhi",
  //     location: "Kotla",
  //     numberOfBalconies: 1,
  //     floor: 1,
  //   },
  //   {
  //     roomId: 5,
  //     roomImage: Tiger2,
  //     rent: 1000,
  //     city: "New Delhi",
  //     state: "Delhi",
  //     location: "Kotla",
  //     numberOfBalconies: 1,
  //     floor: 1,
  //   },
  // ];
  return (
    <div className="px-10 py-10">
      <h2 className="font-body font-semibold text-xl mb-6">
        Top rooms available
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {roomInfo.length > 0
          ? roomInfo.map((room) => {
              return <RoomCard room={room} key={room.roomId} />;
            })
          : Array.from({ length: noOfShimmers }, (_, index) => index).map(
              (index) => {
                return <Shimmer key={index} />;
              }
            )}
      </div>
    </div>
  );
};

export default RoomContainer;
