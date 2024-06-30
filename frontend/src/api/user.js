import { BASE_URL } from "../constant/constant";
export const addUser = async (user) => {
  try {
    const formData = new FormData();
    formData.append("name", user.name);
    // formData.append("rooms", user.rooms); // Assuming not needed here
    formData.append("userEmail", user.userEmail);
    formData.append("userPassword", user.userPassword);
    formData.append("userPhoneNumber", parseInt(user.userPhoneNumber));
    if (user.userProfile) {
      formData.append("userProfile", user.userProfile);
    }

    const response = await fetch(`${BASE_URL}/add-user`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      // Handle non-2xx HTTP status codes from the server
      const errorData = await response.json();
      throw new Error();
      //Network response was not ok: ${response.statusText} - ${errorData.message || 'Unknown error'}
    }

    const data = await response.json();
    console.log(data);
    console.log(typeof data.userPhoneNumber);
    return data;
  } catch (error) {
    console.error("Error adding user:", error.message);
    // Optionally, display an error message to the user
    // You can use a state variable to manage error state and display in the UI
    // setError(error.message);

    // Optionally, re-throw the error to handle it further up the chain
    // throw error;
  }
};
