const BASE_URL = "http://localhost:8080";
export const addRoommate = async (room) => {
  try {
    const formData = new FormData();
    formData.append("state", room.state);
    formData.append("city", room.city);
    formData.append("user", room.user);
    formData.append("bathRooms", room.bathRooms);
    formData.append("floorNumber", room.floorNumber);
    formData.append("numberOfBalconies", room.numberOfBalconies);
    // formData.append("roommates", room.roommates);
    formData.append("preference", room.preference);
    formData.append("age", room.age);
    formData.append("occupation", room.occupation);
    formData.append("budget", room.budget);
    formData.append("landmark", room.landmark);
    formData.append("description", room.description);
    formData.append("availableFrom", room.availableFrom);
    formData.append("userEmail", room.userEmail);
    formData.append("address", room.address);
    formData.append("location", room.location);
    if (room.roomImage) {
      formData.append("roomImage", room.roomImage);
    }
    if (room.roomVideo) {
      formData.append("roomVideo", room.roomVideo);
    }

    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/add-roommate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

export const updateRoommateData = async (roommate, roommateID) => {
  try {
    const formData = new FormData();
    formData.append("state", roommate.state);
    formData.append("city", roommate.city);
    formData.append("user", roommate.user);
    formData.append("bathRooms", roommate.bathRooms);
    formData.append("floorNumber", roommate.floorNumber);
    formData.append("numberOfBalconies", roommate.numberOfBalconies);
    formData.append("preference", roommate.preference);
    formData.append("age", roommate.age);
    formData.append("occupation", roommate.occupation);
    formData.append("budget", roommate.budget);
    formData.append("landmark", roommate.landmark);
    formData.append("description", roommate.description);
    formData.append("availableFrom", roommate.availableFrom);
    formData.append("userEmail", roommate.userEmail);
    formData.append("address", roommate.address);
    if (roommate.roomImage) {
      formData.append("roomImage", roommate.roomImage);
    }
    if (roommate.roomVideo) {
      formData.append("roomVideo", roommate.roomVideo);
    }

    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/update-roommate/${roommateID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "PUT",
      body: formData,
    });
    return response;
  } catch (e) {
    throw e;
  }
};
