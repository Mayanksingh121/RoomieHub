import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../constant/constant";
import { setWatchList } from "../utils/storeSlices/userSlice";

const useGetWatchListData = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((store) => store.user.userDetails);
  useEffect(() => {
    getWatchListData();
  }, []);

  const getWatchListData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/get-user-watchlist/${userEmail}`
      );
      const json = await response.json();
      dispatch(setWatchList(json));
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
};

export default useGetWatchListData;
