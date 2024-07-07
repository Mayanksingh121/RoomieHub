import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useGetWatchListData from "../hooks/useGetWatchListData";
import WatchListCard from "./WatchListCard";
import EMPTY from "../assets/empty.png";
import { Link } from "react-router-dom";

const WatchList = () => {
  useGetWatchListData();
  const watchlist = useSelector((store) => store.user.watchList);

  if (watchlist.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center w-full flex-grow bg-cover bg-center p-10"
        style={{
          backgroundImage: `url('https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000')`,
        }}
      >
        <div className="bg-white bg-opacity-95 p-10 rounded-lg shadow-lg text-center">
          <h2 className="font-display text-3xl font-bold text-gray-800 mb-5">
            Your Watchlist is Empty
          </h2>
          <div className="w-64 mx-auto mb-5">
            <img src={EMPTY} alt="empty" className="w-full h-full object-contain" />
          </div>
          <p className="font-display text-gray-600 mb-10">
            Start exploring and add items to your watchlist to keep track of your favorite rooms.
          </p>
          <Link to="/">
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
            >
              Explore Rooms
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-wrap flex-grow gap-6 p-5 w-full"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.3,
            duration: 0.5,
          },
        },
      }}
    >
      {watchlist.map((room) => (
        <WatchListCard key={room.roomId} room={room} />
      ))}
    </motion.div>
  );
};

export default WatchList;
