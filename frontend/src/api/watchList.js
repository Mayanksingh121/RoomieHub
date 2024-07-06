import { BASE_URL } from "../constant/constant";

export const addToWatchList = async (userEmail, roomId) => {
  try {
    const formData = new FormData();
    formData.append("userEmail", userEmail);
    formData.append("roomId", roomId);
    const response = await fetch(`${BASE_URL}/add-to-watchlist`, {
      method: "POST",
      body: formData,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
