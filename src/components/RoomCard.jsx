import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

const RoomCard = ({ room }) => {

  //src={`data:image/png;base64, ${room.roomImage}`}
  return (
    <div className="flex border flex-col gap-2 rounded-lg w-92 p-6 shadow-lg">
      <div className="h-48">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={room.roomImage}
          alt="roomImage"
        ></img>
      </div>
      <div className="flex flex-col justify-between font-body">
        <div>
          <div className="flex flex-col mb-2">
            <h2 className="">Rental</h2>
            <p className="text-xs -mt-1">₹{room.rent}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="pb-1">
              <i className="text-red-500 fa-solid fa-location-dot"></i>
            </div>
            <p className="text-sm -mt-1">
              {room.location}, {room.city}, {room.state}
            </p>
          </div>
        </div>

        <div className="border-b border-gray-300"></div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col">
            <h2 className="">Balconies</h2>
            <p className="text-xs -mt-1">{room.numberOfBalconies}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="">Floor</h2>
            <p className="text-xs -mt-1">{room.floor}</p>
          </div>
        </div>
      </div>
      <Link to={"/room/" + room.roomId}>
        <div className="mt-2">
          <p className="text-sm flex items-center">
            View details
            <span className="text-2xl mx-1">
              <MdArrowRightAlt/>
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;
