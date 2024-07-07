import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { addToWatchList, deleteFromWatchList } from "../api/watchList";
import useGetWatchListData from "../hooks/useGetWatchListData";

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
          toast("Room deleted from wishlist", {
            duration: 3000,
            position: "top-center",
          });
        } else {
          toast("Failed to delete room from wishlist. Try again later.", {
            duration: 3000,
            position: "top-center",
          });
        }
      } catch (error) {
        toast("An error occurred. Please try again.", {
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
    <div className="flex flex-col gap-2 rounded-lg w-92 shadow-lg border">
      <div className="h-48 aspect-w-4 aspect-h-3">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={room.roomImageUrl}
          loading="lazy"
          alt="Room"
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
              className="mr-2 cursor-pointer text-xl transition-colors duration-300"
            >
              {isBookmarked ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-500 hover:text-red-500" />
              )}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="pb-1">
              <span className="text-red-500">
                <FaLocationDot />
              </span>
            </div>
            <p className="text-sm -mt-1">
              {room.address}, {room.city}, {room.state}, {room.landmark}
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
      <Link to={`/room/${room.roomId}`}>
        <div className="px-3 pb-2">
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
