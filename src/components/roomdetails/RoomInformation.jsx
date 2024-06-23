import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Dog from "../../assets/dog.jpg";
import OwnerCard from "./OwnerCard";
import { FaBath } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { MdBalcony } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { toast } from "react-hot-toast";

const RoomInformation = ({ handleLogin }) => {
  const { roomId } = useParams();
  const data = useSelector((store) => store.room?.availableRooms);
  const reqRoom = data?.find((room) => room.roomId === Number(roomId));

  const loginStatus = useSelector((store) => store.user.isLoggedIn);

  const handleGetPhoneNo = () => {
    if (loginStatus) {
    } else {
      toast("To get owner's contact details login is required.", {
        duration: 3000,
        position: "top-right",
      });
      handleLogin();
    }
  };

  if (reqRoom === undefined) {
    return null;
  }

  const {
    rent,
    state,
    city,
    location,
    numberOfBalconies,
    bathRooms,
    floor,
    roomArea,
  } = reqRoom;

  return (
    <div className="flex h-full bg-[#f5f5f5]">
      <div className="bg-[#ffffff] rounded-xl w-[70%] mt-5 mb-20 border border-[#e1e1e1] shadow-md ml-6 px-4">
        <div className="flex my-5 w-full">
          <video className="w-full rounded-lg" controls>
            {/* <source src={`data:video/mp4;base64,${reqRoom.roomImage}`} /> */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex justify-between w-full font-body my-4 border-b-2">
          <div className="mx-5 w-1/2 border-r-2 mb-4">
            <h3 className="text-sm">
              Rental: <span className="font-medium">₹{rent}</span>
            </h3>
            <h3 className="text-sm mb-5">
              Security Deposit: <span className="font-medium">₹10000</span>
            </h3>
            <h3 className="flex flex-col">
              Flat available for rent in{" "}
              <span className="font-semibold">
                {location}, {city}, {state}
              </span>
            </h3>
          </div>
          <div className="flex justify-between mr-5 w-1/2">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <span className=" text-[#f84464] pt-2 text-lg ">
                  <GiSofa />
                </span>
                <h3 className="flex flex-col text-sm mb-6 font-bold">
                  Furnished Status
                  <span className="font-medium text-xs">Fully furnished</span>
                </h3>
              </div>

              <div className="flex gap-2">
                <span className=" text-[#f84464] pt-2 text-lg ">
                  <MdBalcony />
                </span>
                <h3 className="flex flex-col text-sm font-bold">
                  Balconies
                  <span className="font-medium">{numberOfBalconies}</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <span className=" text-[#f84464] pt-2 text-lg ">
                  <FaBath />
                </span>
                <h3 className="flex flex-col text-sm mb-6 font-bold">
                  Bathrooms
                  <span className="font-medium text-xs">{bathRooms}</span>
                </h3>
              </div>
              <div className="flex gap-2">
                <span className=" text-[#f84464] pt-2 text-lg ">
                  <FaBuilding />
                </span>
                <h3 className="flex flex-col text-sm font-bold">
                  Floor
                  <span className="font-medium text-xs">{floor}</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <h3 className="flex flex-col text-sm font-bold">
                Room area
                <span className="font-medium text-xs">{roomArea}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="border-b-2">
          <div className=" font-body mx-5">
            <p className="text-center text-lg font-semibold">
              More Information
            </p>
            <div className="flex gap-2 mt-4 mb-6">
              <div className="font-body w-1/2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem ipsum blanditiis doloremque adipisci nam voluptas
                  assumenda illum quia placeat possimus culpa, voluptatem atque
                  voluptate recusandae consequatur nobis a natus quisquam! Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
                  exercitationem facilis recusandae maiores animi culpa,
                  deserunt ab iusto ipsam veritatis incidunt! Culpa iusto
                  possimus veritatis officia perspiciatis! Sapiente, facere
                  officiis.
                </p>
              </div>
              <div className="w-1/2 h-56">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  // src={`data:image/png;base64, ${reqRoom.roomImage}`}
                  src={Dog}
                  alt="roomImage"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5 my-5">
          <p className="font-body text-lg mx-4 mb-4">Contact Details</p>
          <button onClick={handleGetPhoneNo} className="border border-[#f84464] text-[#f84464] rounded-3xl px-6 py-2 mr-4">
            Get Phone No.
          </button>
          <button onClick={handleGetPhoneNo} className="border  text-white bg-[#f84464] rounded-3xl px-6 py-2">
            Contact Owner
          </button>
        </div>
      </div>
      <div className="w-[25%] font-body mt-5">
        <OwnerCard handleGetPhoneNo={handleGetPhoneNo} />
      </div>
    </div>
  );
};

export default RoomInformation;
