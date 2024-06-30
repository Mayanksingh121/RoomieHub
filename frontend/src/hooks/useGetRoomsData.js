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
    try {
      const response = await fetch(`${BASE_URL}/get-all-rooms`, {
        method: "Get",
      });
      const data = await response.json();
      dispatch(addRoomData(data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

export default useGetRoomsData;
