import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-2 rounded-lg w-92 p-6 shadow-lg border ">
      <div className="h-48 aspect-w-4 aspect-h-3">
       <img
  className="rounded-lg w-full h-full object-cover"
  src={`data:image/png;base64, ${room.roomImage}`}
  loading="lazy"
  alt="roomImage"
/>
{/* to print video */}
        {/* <video width="600" height="240" controls>
  <source src={`data:video/mp4;base64,${room.roomImage}`} type="video/mp4" /> Your browser does not support the video tag.
</video> */}

=======
    <div className="flex border flex-col gap-2 rounded-lg w-92 p-6 shadow-lg">
      <div className="h-48">
        <img
          className="rounded-lg w-full h-full object-cover"
          src={`data:image/png;base64, ${room.roomImage}`}
          alt="roomImage"
        ></img>
>>>>>>> 571b6d9d6d453c16022b654192f8bbcb159fb129
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
<<<<<<< HEAD
            <p className="text-sm -mt-1">{room.floorNumber}</p>
=======
            <p className="text-xs -mt-1">{room.floor}</p>
>>>>>>> 571b6d9d6d453c16022b654192f8bbcb159fb129
          </div>
        </div>
      </div>
      <Link to={"/room/" + room.roomId}>
        <div className="mt-2">
          <p className="text-sm">
            View details
            <span className="items-center mx-2">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RoomCard;
