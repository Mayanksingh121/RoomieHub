const BASE_URL = "http://localhost:8080";
export const addRoom = async (room) => {
  try {
    const formData = new FormData();
    formData.append("state", room.state);
    formData.append("city", room.city);
    formData.append("user", room.user);
    formData.append("bathRooms", room.bathRooms);
    formData.append("floorNumber", room.floorNumber);
    formData.append("numberOfBalconies", room.numberOfBalconies);
    formData.append("roommates", room.roommates);
    formData.append("preference", room.preference);
    formData.append("roomArea", room.roomArea);
    formData.append("furnishedStatus", room.furnishedStatus);
    formData.append("rent", room.rent);
    formData.append("landmark", room.landmark);
    formData.append("description", room.description);
    formData.append("securityDeposit", room.securityDeposit);
    formData.append("userEmail", room.userEmail);
    formData.append("address", room.address);
    formData.append("location", room.location);
    formData.append("lift", room.lift);
    formData.append("reservedParking", room.reservedParking);
    formData.append("security", room.security);
    formData.append("gym", room.gym);
    formData.append(" maintainanceStaff", room.maintainanceStaff);
    formData.append("garden", room.garden);
    formData.append("wifi", room.wifi);
    if (room.roomImage) {
      formData.append("roomImage", room.roomImage);
    }
    if (room.roomVideo) {
      formData.append("roomVideo", room.roomVideo);
    }

    const response = await fetch(`${BASE_URL}/add-room`, {
      method: "POST",
      body: formData,
    });
    // const response = await fetch(`${BASE_URL}/update-room/1`, {
    //   method: "PUT",
    //   body: formData
    // });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // console.log(error.message);
    console.log(error.statusText);
    console.log(error.status);
    // Optionally, you can rethrow the error to handle it further up the chain
    // throw error;
  }
};

export const updateRoomData = async (room, roomID) => {
  try {
    const formData = new FormData();
    formData.append("state", room.state);
    formData.append("city", room.city);
    formData.append("user", room.user);
    formData.append("bathRooms", room.bathRooms);
    formData.append("floorNumber", room.floorNumber);
    formData.append("numberOfBalconies", room.numberOfBalconies);
    formData.append("roommates", room.roommates);
    formData.append("preference", room.preference);
    formData.append("roomArea", room.roomArea);
    formData.append("furnishedStatus", room.furnishedStatus);
    formData.append("rent", room.rent);
    formData.append("landmark", room.landmark);
    formData.append("description", room.description);
    formData.append("securityDeposit", room.securityDeposit);
    formData.append("userEmail", room.userEmail);
    formData.append("address", room.address);
    formData.append("location", room.location);
    formData.append("lift", room.lift);
    formData.append("reservedParking", room.reservedParking);
    formData.append("security", room.security);
    formData.append("gym", room.gym);
    formData.append(" maintainanceStaff", room.maintainanceStaff);
    formData.append("garden", room.garden);
    formData.append("wifi", room.wifi);
    if (room.roomImage) {
      formData.append("roomImage", room.roomImage);
    }

    if (room.roomVideo) {
      formData.append("roomVideo", room.roomVideo);
    }

    const response = await fetch(`${BASE_URL}/update-room/${roomID}`, {
      method: "PUT",
      body: formData,
    });
    return response;
  } catch (e) {
    throw e;
  }
};
