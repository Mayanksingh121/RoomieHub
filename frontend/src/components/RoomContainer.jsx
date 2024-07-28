import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import RoomCard from "./RoomCard";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect } from "react";

const RoomContainer = () => {
  const roomInfo = useSelector((store) => store.room.availableRooms);
  const [userSearch, setUserSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortAndFilter, setSortAndFilter] = useState("default");
  const [rentRange, setRentRange] = useState(50000);
  const noOfShimmers = 20;

  useEffect(() => {
    let results = [...roomInfo];

    if (sortAndFilter !== "default") {
      if (sortAndFilter === "low-to-high" || sortAndFilter === "high-to-low") {
        results.sort((a, b) =>
          sortAndFilter === "low-to-high" ? a.rent - b.rent : b.rent - a.rent
        );
      } else {
        results = results.filter(
          (room) => room.furnishedStatus === sortAndFilter
        );
      }
    }

    results = results.filter(
      (room) => room.rent >= 0 && room.rent <= rentRange
    );

    results = results.filter(
      (room) =>
        room.state.toLowerCase().includes(userSearch.toLowerCase()) ||
        room.city.toLowerCase().includes(userSearch.toLowerCase())
    );

    setSearchResult(results);
    setLoading(false);
  }, [roomInfo, sortAndFilter, userSearch, rentRange]);

  const handleSearch = (e) => {
    setUserSearch(e.target.value);
  };

  const handleSortAndFilter = (e) => {
    setSortAndFilter(e.target.value);
  };

  const handleRentRangeChange = (e) => {
    setRentRange(e.target.value);
  };

  return (
    <div className="px-10 py-10">
      <div className="flex flex-col mb-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-montserrat font-semibold text-xl flex-grow">
            Top rooms available
          </h2>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="50000"
                step="5000"
                value={rentRange}
                onChange={handleRentRangeChange}
                className="w-48"
              />
              <span>{`Max: ₹${rentRange}`}</span>
            </div>
            <div className="flex items-center rounded-full border overflow-hidden border-gray-300 flex-grow">
              <span className="text-[#959595] px-1 border-r h-full border-gray-300 flex items-center">
                <MdOutlineSearch />
              </span>
              <input
                onChange={handleSearch}
                value={userSearch}
                className="px-2 py-1 font-roboto focus:outline-none flex-grow"
                placeholder="Search for state or city"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-roboto-slab">Sort & Filter:</span>
          <select
            onChange={handleSortAndFilter}
            className="shadow-sm focus:outline-none border px-2 py-1"
          >
            <option value="default">Select</option>
            <option value="low-to-high">Rent (low to high)</option>
            <option value="high-to-low">Rent (high to low)</option>
            <option value="FULLYFURNISHED">Furnished: Fully Furnished</option>
            <option value="SEMIFURNISHED">Furnished: Semi Furnished</option>
            <option value="UNFURNISHED">Furnished: Unfurnished</option>
          </select>
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
          <div className="col-span-4 flex items-center justify-center font-roboto text-2xl text-gray-500 md:h-52">
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
