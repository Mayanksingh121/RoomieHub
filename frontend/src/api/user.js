import { BASE_URL } from "../constant/constant";
export const addUser = async (user) => {
  try {
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("userEmail", user.userEmail);
    formData.append("userPassword", user.userPassword);
    formData.append("userPhoneNumber", parseInt(user.userPhoneNumber));

    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/add-user`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error();
    }
    return response;
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

export const getUser = async (userEmail) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/get-user/${userEmail}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/update-user/${userEmail}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response;
};

export const updateUserProfile = async (userEmail, userProfile) => {
  const formData = new FormData();
  formData.append("userEmail", userEmail);
  formData.append("userProfile", userProfile);
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/uploadOrUpdate`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: formData,
  });

  // console.log(response);

  if (!response.ok) {
    throw new Error("Failed to update user profile");
  }
  const data = await response.json();
  console.log(data);
  return data;
};

// export const updateUserProfile = async (userEmail, userProfile) => {
//   const formData = new FormData();
// formData.append("userEmail", userEmail);
//   formData.append("userProfile", userProfile);

//   const response = await fetch(`${BASE_URL}/uploadOrUpdate`, {
//     method: "POST",
//     body: formData,
//   });

//   // console.log(response);

//   if (!response.ok) {
//     throw new Error("Failed to update user profile");
//   }
//   const data = await response.json();
//   console.log(data);
//   return data;
// };
