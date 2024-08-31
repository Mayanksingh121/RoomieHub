import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../constant/constant";
import { setWatchList } from "../utils/storeSlices/userSlice";

const useGetWatchListData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWatchListData();
  }, []);

  const getWatchListData = async () => {
    try {
      const token = localStorage.getItem("token");
      const userEmail = localStorage.getItem("email");
      const response = await fetch(
        `${BASE_URL}/get-user-watchlist/${userEmail}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      dispatch(setWatchList(json));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useGetWatchListData;
