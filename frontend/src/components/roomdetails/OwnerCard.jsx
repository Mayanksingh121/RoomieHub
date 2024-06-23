import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OwnerCard = () => {
  // ----------------------------------------------------------------
  const { roomId } = useParams();

  const data = useSelector((store) => store.room?.availableRooms);
  const reqRoom = data?.find((room) => room.roomId === Number(roomId));
  console.log(data);
  console.log(reqRoom);
  if (reqRoom === undefined) {
    return null;
  }
  const { name, userPhoneNumber } = reqRoom.user;

  // ----------------------------------------------------------------
  return (
    <motion.div
      className="w-full bg-[#ffffff] text-[#303030] mx-3 border border-[#e1e1e1]  rounded-xl shadow-md"
      initial={{ x: 350, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
    >
      <div className="flex mt-6 mb-3 justify-between ml-6 mr-14">
        <h2 className="font-semibold text-xl">Contact Owner</h2>
        <div className="-mt-1 w-10 h-10">
          <img
            className="rounded-full w-10 h-10 object-cover"
            src={Tiger}
            alt="userImage"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mx-6">
        <h2 className="text-lg font-semibold">Deepak Neha Singh</h2>
        <p className="text-xs text-[#585858]">+91-XXXXXXXXXX</p>
      </div>
      <div className="flex justify-center mx-auto my-4">
        <button
          onClick={handleGetPhoneNo}
          className="bg-[#f84464] text-white px-20 rounded-3xl py-3"
        >
          Get Phone No.
        </button>
      </div>
    </motion.div>
  );
};

export default OwnerCard;
