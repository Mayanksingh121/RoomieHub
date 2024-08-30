import { BASE_URL } from "../constant/constant";

export const toggleWatchList = async (userEmail, roomId) => {
  try {
    const formData = new FormData();
    formData.append("userEmail", userEmail);
    formData.append("roomId", roomId);
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/toggle-watchlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: formData,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getWatchList = async (userEmail) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${BASE_URL}/get-user-watchlist/${userEmail}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch watchlist: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching watchlist:", error);
    return null;
  }
};
