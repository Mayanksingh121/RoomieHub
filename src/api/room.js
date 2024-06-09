export const BASE_URL = "http://localhost:8080";
export const addRoom = async (room) => {
  try {
    const formData = new FormData();
    formData.append("state", room.state);
    formData.append("city", room.city);
    formData.append("user", room.user);
    formData.append("rent", room.rent);
    formData.append("location", room.location);
    if (room.roomImage) {
      formData.append("roomImage", room.roomImage);
    }

    // const response = await fetch(`${BASE_URL}/add-room`, {
    //   method: "POST",
    //   body: formData,
    //   // 'Content-Type': 'multipart/form-data' should not be set, browser will set the correct boundaries for you
    // });

    const response = await fetch(`${BASE_URL}/add-room`, formData);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
