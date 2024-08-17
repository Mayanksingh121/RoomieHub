import { useEffect, useState } from "react";
import { BASE_URL } from "../constant/constant";

const useGetListedRooms = () => {
  const [listedRooms, setListedRooms] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userEmail = localStorage.getItem("email");
      const response = await fetch(`${BASE_URL}/get-room-id/${userEmail}`);
      const json = await response.json();
      setListedRooms(json);
    } catch (e) {
      console.log(e);
    }
  };
  
  return { listedRooms, setListedRooms };
};

export default useGetListedRooms;
