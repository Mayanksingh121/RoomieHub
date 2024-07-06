import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WatchListCard = ({ room }) => {
  const { rent, roomImageUrl, address, state } = room;
  return (
    <Link to={`/room/${room.roomId}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="font-display cursor-pointer bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg shadow-lg overflow-hidden w-72 h-92"
      >
        <img
          src={roomImageUrl}
          alt="Room"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="flex flex-col justify-between py-2 px-2 bg-white rounded-b-lg h-48">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Address: {address}
            </h3>
            <p className="text-sm text-gray-600 mt-2">Location: {state}</p>
          </div>
          <div>
            <p className="text-xl text-gray-800 mt-2 font-bold">
              Rent: ₹{rent}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default WatchListCard;
