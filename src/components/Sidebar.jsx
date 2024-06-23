import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import BookmarkRooms from "./BookmarkRooms";
import EMPTY from "../assets/empty.png";
import { useSelector } from "react-redux";

const SideBar = ({ handleNavBar }) => {
  const bookmarkRooms = useSelector((store) => store.room.bookmarkRooms);
  return (
    <motion.div
      className="z-10 fixed top-0 flex justify-end h-full w-full bg-black bg-opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        className="font-body bg-white h-full w-[25%]"
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, type: "tween" }}
      >
        <div className="h-16 border-b border-black flex items-center justify-between px-4">
          <h2 className="font-bold text-xl">Hey!</h2>
          <span onClick={handleNavBar} className="cursor-pointer">
            <FaXmark />
          </span>
        </div>
        <div className="flex flex-col gap-4 px-4 py-4 overflow-y-scroll hide-scrollbar">
          <div className="w-full font-body font-bold">
            WISHLIST ROOMS
          </div>
          <div>
            {bookmarkRooms.length > 0 ? (
              bookmarkRooms.map((markedRoom)=>{
                return <BookmarkRooms key={markedRoom.roomId} room ={markedRoom}/>
              })
            ) : (
              <div className="text-center">
                <img src={EMPTY} alt="empty" />
                <p className="text-sm">No data available</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
