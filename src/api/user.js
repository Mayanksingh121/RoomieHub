import { BASE_URL } from "../constant/constant";
export const addUser = async (user) => {
  try {
    const formData = new FormData();
    formData.append("userName", user.userName);
    formData.append("userEmail", user.userEmail);
    formData.append("userPassword", user.userPassword);
    if (user.userProfile) {
      formData.append("userProfile", user.userProfile);
    }

    // const response = await fetch(`${BASE_URL}/add-user`, {
    //   method: "POST",
    //   body: formData,
    // });
      const response = await fetch(`${BASE_URL}/add-user`, formData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
