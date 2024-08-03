import useGetRoommateData from "../hooks/useGetRoommateData";
import RoommateCard from "./RoommateCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const RoommateContainer = () => {
  const { data } = useGetRoommateData();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  if (data === null) return;

  const handleClick = (roommateId) => {
    if (isLoggedIn) {
      navigate(`/roommate/${roommateId}`);
    } else {
      toast.error("Please login to view roommate details");
    }
  };

  return (
    <div className="px-3 md:px-8 py-3 md:py-6">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-6 px-2">
        Available Roommates
      </h2>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {data.map((roommate) => (
            <div
              key={roommate.id}
              onClick={() => handleClick(roommate.id)}
              className="cursor-pointer"
            >
              <RoommateCard roommate={roommate} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoommateContainer;
