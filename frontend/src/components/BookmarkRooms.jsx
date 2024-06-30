import { Link } from "react-router-dom";

const BookmarkRooms = ({ room }) => {
  return (
    <div className="relative w-full h-40 rounded-lg mt-5 mb-10">
      <div>
        <img
          className="h-40 w-full object-cover rounded-lg"
          src={TIGER}
          alt=""
        />
      </div>
      <div className="absolute z-20 bottom-1 flex justify-center w-full mt-2">
        <Link to={"/room/" + room.roomId}>
          <button className="bg-black bg-opacity-60 text-white px-2 mr-4 py-1 border-[#18181b] border rounded-md">
            View Details
          </button>
        </Link>
        <button className="bg-black bg-opacity-60 text-white ml-4 px-2 py-1 border-[#18181b] border rounded-md">
          Remove
        </button>
      </div>
    </div>
  );
};

export default BookmarkRooms;
