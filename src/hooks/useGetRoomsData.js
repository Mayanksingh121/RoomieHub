import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addRoomData } from "../utils/storeSlices/roomDataSlice";
import { BASE_URL } from "../constant/constant";

const useGetRoomsData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getRoomsData();
  }, []);

  const getRoomsData = async () => {
    //ise mt hataiyo dummy data hai mere liye
    // const data2 = [
    //   {
    //     roomId: 1,
    //     rent: 2000,
    //     state: "Delhi",
    //     city: "new Delhi",
    //     location: "Kotla",
    //     numberOfBalconies: 2,
    //     bathRooms: 4,
    //     floor: 10,
    //     roomArea: "100sqrft",
    //   },
    //   { roomId: 2 },
    // ];
    try {
      const response = await fetch(`${BASE_URL}/get-all-rooms`);
      const data = await response.json();
      dispatch(addRoomData(data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

export default useGetRoomsData;
