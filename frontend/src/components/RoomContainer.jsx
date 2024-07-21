import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import RoomCard from "./RoomCard";
import { MdOutlineSort, MdOutlineSearch } from "react-icons/md";
import { useState, useEffect } from "react";

const RoomContainer = () => {
  const roomInfo = useSelector((store) => store.room.availableRooms);
  const [userSearch, setUserSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const noOfShimmers = 20;

  useEffect(() => {
    setSearchResult(roomInfo);
    setLoading(false);
  }, [roomInfo]);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setUserSearch(searchValue);
    setSearchResult(
      roomInfo.filter((room) => {
        return room.state.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  };

  return (
    <div className="px-10 py-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-montserrat font-semibold text-xl mb-6">
          Top rooms available
        </h2>
        <div className="flex gap-4">
          <div className="flex items-center rounded-full border overflow-hidden border-gray-300">
            <span className="text-[#959595] px-1 border-r h-full border-gray-300 flex items-center">
              <MdOutlineSearch />
            </span>
            <input
              onChange={handleSearch}
              value={userSearch}
              className="px-2 py-1 font-roboto focus:outline-none"
              placeholder="Search for state"
            />
          </div>
          <button className="flex items-center gap-1 border px-2 font-roboto border-gray-300 text-gray-500">
            <MdOutlineSort />
            <p>Sort</p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {loading ? (
          Array.from({ length: noOfShimmers }, (_, index) => (
            <Shimmer key={index} />
          ))
        ) : searchResult.length > 0 ? (
          searchResult.map((room) => <RoomCard room={room} key={room.roomId} />)
        ) : (
          <div className="col-span-4  flex items-center justify-center font-roboto text-2xl text-gray-500 md:h-52">
            <span className="text-[#959595] px-1 text-3xl h-full flex items-center">
              <MdOutlineSearch />
            </span>{" "}
            No search results found.
            <span className="text-[#959595] px-1 text-3xl h-full flex items-center">
              <MdOutlineSearch />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomContainer;
