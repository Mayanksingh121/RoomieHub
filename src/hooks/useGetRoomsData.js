import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addRoomData } from "../utils/storeSlices/roomDataSlice";

const useGetRoomsData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getRoomsData();
  }, []);

  const getRoomsData = async () => {
    //url daal liyooooooooooooooooooooooooooooooooooooo :)

    const roomsData = await fetch("");
    const dataInJson = await roomsData.json();
    dispatch(addRoomData(dataInJson));
  };
};

export default useGetRoomsData;
