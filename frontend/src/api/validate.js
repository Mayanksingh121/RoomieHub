import toast from "react-hot-toast";
import { BASE_URL } from "../constant/constant";

export const checkValidData = (email, password) => {
  const isEmailValid =
    /^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Email Id is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid, It mush have 10 characters, Atleast one special character, One number and One uppercase letter";
  }

  return null;
};

// export const createUserWithEmailAndPassword = async (
//   name,
//   email,
//   password,
//   phoneNo
// ) => {
//   try {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("phoneno", phoneNo);
//     formData.append("email", email);
//     formData.append("password", password);
//     const response = await fetch("", {
//       method: "POST",
//       body: formData,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const formData = new FormData();
    formData.append("userEmail", email);
    formData.append("userPassword", password);
    const response = await fetch(`${BASE_URL}/api/auth/validate`, {
      method: "POST",
      body: formData,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const isAuthUser = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`${BASE_URL}/api/auth/validate-token`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (e) {
    toast.error(e.message || "Something went wrong. Please try again.");
    return null;
  }
};

export const sendOTP = async (userEmail) => {
  try {
    const formData = new FormData();
    formData.append("userEmail", userEmail);
    const response = await fetch(`${BASE_URL}/send-otp`, {
      method: "POST",
      body: formData,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getOTP = async () => {
  try {
    const response = await fetch(`${BASE_URL}/get-otp`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const signInStatus = async () => {
  try {
    const response = await fetch("");
  } catch (error) {
    console.log(error);
  }
};


export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/logout`);
    const data=response.json();
    return data;
  } catch (error) {

  }
}