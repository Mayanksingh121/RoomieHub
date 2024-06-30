import { addUser } from "../api/user";
import { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    userEmail: "",
    userPassword: "",
    userProfile: null,
    userPhoneNumber: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    const value = await addUser(user);
  };

  const onChangeHandler = (event) => {
    const { name, value, files } = event.target;
    if (name === "userProfile") {
      setUser((prevUser) => ({
        ...prevUser,
        userProfile: files[0],
      }));
    } else {
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  return (
    <form onSubmit={submitHandler}>
      Name
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={onChangeHandler}
      />
      Email
      <input
        type="text"
        name="userEmail"
        value={user.userEmail}
        onChange={onChangeHandler}
      />
      Password
      <input
        type="password"
        name="userPassword"
        value={user.userPassword}
        onChange={onChangeHandler}
      />
      Phone
      <input
        type="number"
        name="userPhoneNumber"
        maxLength={10}
        value={user.userPhoneNumber}
        onChange={onChangeHandler}
      />
      Profile
      <input
        type="file"
        name="userProfile"
        //  value={user.userProfile}
        onChange={onChangeHandler}
      />
      <button type="submit">Click</button>
    </form>
  );
};

export default AddUser;
