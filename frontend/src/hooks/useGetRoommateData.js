import { useState, useEffect } from "react";
import { BASE_URL } from "../constant/constant";

const useGetRoommateData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/get-all-roommates`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { data };
};

export default useGetRoommateData;
