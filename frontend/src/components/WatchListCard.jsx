import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WatchListCard = ({ room }) => {
  const { rent, roomImageUrl, address, state } = room;
  return (
    <Link to={`/room/${room.roomId}`}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="font-roboto cursor-pointer bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden w-72 h-92 transition-transform transform hover:shadow-xl"
      >
        <img
          src={roomImageUrl}
          alt="Room"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{address}</h3>
          <p className="text-sm text-gray-600">{state}</p>
          <p className="font-roboto-condensed text-xl text-gray-800 font-bold mt-2">
            ₹{rent}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default WatchListCard;
