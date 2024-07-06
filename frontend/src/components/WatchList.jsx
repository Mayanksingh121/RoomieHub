import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useGetWatchListData from "../hooks/useGetWatchListData";
import WatchListCard from "./WatchListCard";

const WatchList = () => {
  useGetWatchListData();
  const watchlist = useSelector((store) => store.user.watchList);
  if (watchlist.length===0) {
    return <div className="text-bold flex flex-grow"></div>;
  }

  return (
    <motion.div
      className="flex flex-wrap flex-grow  gap-5 p-5 w-full"
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
