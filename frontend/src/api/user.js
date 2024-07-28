import { BASE_URL } from "../constant/constant";
export const addUser = async (user) => {
  try {
    const formData = new FormData();
    formData.append("name", user.name);
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
    return response;
  } catch (error) {
    console.error("Error adding user:", error.message);
    // Optionally, display an error message to the user
    // You can use a state variable to manage error state and display in the UI
    // setError(error.message);

    // Optionally, re-throw the error to handle it further up the chain
    // throw error;
  }
};

export const getUser = async (userEmail) => {
  try {
    const response = await fetch(`${BASE_URL}/get-user/${userEmail}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch user details");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error fetching user details:", e.message);
    throw e;
  }
};

export const updateUser = async (userEmail, userData) => {
  const formData = new FormData();

  if (userData.name) {
    formData.append("name", userData.name);
  }
  if (userData.userEmail) {
    formData.append("userEmail", userData.userEmail);
  }
  if (userData.userPhoneNumber) {
    formData.append("userPhoneNumber", userData.userPhoneNumber);
  }

  const response = await fetch(`${BASE_URL}/update-user/${userEmail}`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response.json();
};

export const updateUserProfile = async (userEmail, userProfile) => {
  console.log(userProfile, userEmail);
  const formData = new FormData();
  formData.append("userEmail", userEmail);
  formData.append("userProfile", userProfile);

  const response = await fetch(`${BASE_URL}/update-user-profile`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to update user profile");
  }

  return response.json();
};
