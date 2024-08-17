import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/constant";

const useGetListedRommate = () => {
  const [listedRoommates, setListedRoommates] = useState();

  useEffect(() => {
    fetchListedRoommates();
  }, []);

  const fetchListedRoommates = async () => {
    try {
      const userEmail = localStorage.getItem("email");
      const response = await fetch(`${BASE_URL}/get-roommie/${userEmail}`);
      const json = await response.json();
      setListedRoommates(json);
    } catch (e) {
      console.log(e);
    }
  };

  return { listedRoommates, setListedRoommates };
};

export default useGetListedRommate;
