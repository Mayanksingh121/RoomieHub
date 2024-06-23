import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addBookmarkRooms } from "../utils/storeSlices/roomDataSlice";
import { FaLocationDot } from "react-icons/fa6";

const RoomCard = ({ room }) => {
  const dispatch = useDispatch();

  const handleBookmark = () => {
    dispatch(addBookmarkRooms(room));
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg w-92 shadow-lg border">
      <div className="h-48  aspect-w-4 aspect-h-3">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={`data:image/png;base64, ${room.roomImage}`}
          loading="lazy"
          alt="roomImage"
        />
      </div>
      <div className="flex flex-col justify-between px-3 font-body">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col mb-2">
              <h2 className="">Rental</h2>
              <p className="text-xs -mt-1">₹{room.rent}</p>
            </div>
            <span
              onClick={handleBookmark}
              className="mr-2 cursor-pointer text-xl"
            >
              <FaRegHeart />
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="pb-1">
              <span className="text-red-500">
                <FaLocationDot />
              </span>
            </div>
            <p className="text-sm -mt-1">
              {room.location}, {room.city}, {room.state}
            </p>
          </div>
        </div>
        <div className="border-b border-gray-300"></div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col">
            <h2>Balconies</h2>
            <p className="text-xs -mt-1">{room.numberOfBalconies}</p>
          </div>
          <div className="flex flex-col">
            <h2>Floor</h2>
            <p className="text-xs -mt-1">{room.floorNumber}</p>
          </div>
        </div>
      </div>
      <Link to={"/room/" + room.roomId}>
        <div className="px-3 pb-2 ">
          <p className="text-sm flex items-center">
            View details
            <span className="text-2xl mx-1">
              <MdArrowRightAlt />
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;
