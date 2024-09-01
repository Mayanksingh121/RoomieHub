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
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/get-room-id/${userEmail}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setListedRooms(json);
    } catch (e) {
      console.log(e);
    }
  };

  return { listedRooms, setListedRooms };
};

export default useGetListedRooms;
