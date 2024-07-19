import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { addToWatchList, deleteFromWatchList } from "../api/watchList";
import useGetWatchListData from "../hooks/useGetWatchListData";
import { motion } from "framer-motion";

const RoomCard = ({ room }) => {
  useGetWatchListData();
  const { isLoggedIn, userDetails, watchList } = useSelector(
    (store) => store.user
  );
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const isRoomInWatchList = watchList?.some(
      (watchListItem) => watchListItem.roomId === room.roomId
    );
    setIsBookmarked(isRoomInWatchList);
  }, [watchList]);

  const handleBookmark = async () => {
    if (!isLoggedIn) {
      toast("To add wishlist room login is required.", {
        duration: 3000,
        position: "top-center",
      });
      return;
    }

    if (isBookmarked) {
      try {
        const response = await deleteFromWatchList(userDetails, room.roomId);
        if (response.ok) {
          setIsBookmarked(false);
          toast.success("Room deleted from wishlist", {
            duration: 3000,
            position: "top-center",
          });
        } else {
          toast.error("Failed to delete room from wishlist. Try again later.", {
            duration: 3000,
            position: "top-center",
          });
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.", {
          duration: 3000,
          position: "top-center",
        });
        console.error("Error deleting from wishlist:", error);
      }
    } else {
      try {
        const response = await addToWatchList(userDetails, room.roomId);
        if (response.ok) {
          setIsBookmarked(true);
          toast("Room added to wishlist!", {
            duration: 3000,
            position: "top-center",
          });
        } else {
          toast("Failed to add room to wishlist. Try again later.", {
            duration: 3000,
            position: "top-center",
          });
        }
      } catch (error) {
        toast("An error occurred. Please try again.", {
          duration: 3000,
          position: "top-center",
        });
        console.error("Error adding to wishlist:", error);
      }
    }
  };

  return (
    <div className="font-roboto relative rounded-sm w-92 shadow-lg border overflow-hidden">
      <div className="h-48 aspect-w-4 aspect-h-3 relative">
        <img
          className="w-full h-full object-cover"
          src={room.roomImageUrl}
          loading="lazy"
          alt="Room"
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 text-white"
          initial={{ x: 200 }}
          whileHover={{ x: 0 }}
          transition={{ delay: 0.2, type: "tween", stiffness: 200 }}
        >
          <p className="text-xs">
            {room.city}, {room.state}
          </p>
        </motion.div>
      </div>
      <div className="px-3 py-2 font-body">
        <div className="flex text-xs gap-2 ">
          <p className="rounded-sm bg-[#449ba2] py-1 px-3 text-white">
            Balconies {room.numberOfBalconies}
          </p>
          <p className="rounded-sm bg-[#449ba2] py-1 px-3 text-white">
            Floor {room.floorNumber}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm">
            {room.address}, {room.landmark}
          </p>
        </div>
        <div className="flex flex-col justify-between mt-2 font-roboto-condensed">
          <p className="text-xs">Rent</p>
          <h2 className="text-lg font-bold -mt-2">₹{room.rent}/month</h2>
        </div>
      </div>
      <div className="px-3 py-2 flex justify-between">
        <button
          onClick={handleBookmark}
          className="flex items-center gap-2 text-sm text-[#449ba2] hover:text-red-500 transition-colors duration-300"
        >
          {isBookmarked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-500" />
          )}
          Save
        </button>
        <Link to={`/room/${room.roomId}`} className="text-sm text-[#449ba2] hover:text-gray-500 transition-colors duration-300">
          Visit
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
