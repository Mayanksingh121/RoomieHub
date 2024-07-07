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

export const getWatchList = async (userEmail) => {
  try {
    const response = await fetch(`${BASE_URL}/get-user-watchlist/${userEmail}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromWatchList = async (userEmail, roomId) => {
  try {
    const formData = new FormData();
    formData.append("userEmail", userEmail);
    formData.append("roomId", roomId);
    const response = await fetch(`${BASE_URL}/delete-watchlist-item`, {
      method: "DELETE",
      body: formData,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
