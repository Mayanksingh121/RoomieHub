import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import RoomCard from "./RoomCard";
import { MdOutlineSort } from "react-icons/md";

const RoomContainer = () => {
  const roomInfo = useSelector((store) => store.room.availableRooms);
  const noOfShimmers = 20;

  return (
    <div className="px-10 py-10">
      <div className="flex justify-between">
        <h2 className="font-montserrat font-semibold text-xl mb-6">
          Top rooms available
        </h2>
        <div className="">
          <button className="flex items-center gap-1 border px-2 font-roboto-condensed">
            <MdOutlineSort/>
            <p>Sort</p>
          </button>
        </div>
      </div>

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
