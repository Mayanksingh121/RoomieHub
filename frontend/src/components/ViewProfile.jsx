import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { getUser, updateUser } from "../api/user";
import { useNavigate } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
import { BASE_URL } from "../constant/constant";
import AVATAR from "../assets/Avatar.png";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../utils/storeSlices/userSlice";

const ViewProfile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    userPhoneNumber: "",
  });

  const userDetails = localStorage.getItem("email");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(userDetails);
        setUserData(data);
        setFormData({
          name: data?.name || "",
          userEmail: data?.userEmail || "",
          userPhoneNumber: data?.userPhoneNumber || "",
        });
      } catch (e) {
        console.error(e.message);
      }
    };

    if (userDetails) {
      fetchUser();
    }
  }, [userDetails]);

  if (!userData) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteAccount = () => {
    const deleteAccount = async () => {
      try {
        const token = localStorage.getItem("token");
        const userEmail = localStorage.getItem("email");

        const response = await fetch(`${BASE_URL}/delete-user/${userEmail}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        const json = await response.json();
        if (response.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("email");
          dispatch(setIsLoggedIn(false));
          toast.success(json.message);
          navigate("/");
        } else {
          toast.error(json.message);
        }
      } catch (e) {
        toast.error("Can't delete account at the moment");
      }
    };
    deleteAccount();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updates = {};
    if (formData.name !== userData.name) updates.name = formData.name;
    if (formData.userEmail !== userData.userEmail)
      updates.userEmail = formData.userEmail;
    if (formData.userPhoneNumber !== userData.userPhoneNumber)
      updates.userPhoneNumber = formData.userPhoneNumber;

    if (Object.keys(updates).length === 0) {
      toast.error("No changes to update.");
      return;
    }

    try {
      const response = await updateUser(userData.userEmail, updates);
      if (response.ok) setIsEditing(false);
      toast.success(response.message);
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      {showDeleteModal && (
        <div className="bg-black bg-opacity-40 z-10 absolute w-full min-h-full flex items-center justify-center">
          <div className="flex flex-col gap-5 bg-white rounded-lg w-96 h-44 p-2">
            <div className="flex w-full items-center">
              <p className="flex text-blue-500 gap-2 font-roboto font-bold text-lg">
                <IoIosWarning className="text-2xl" />
                Delete Account
              </p>{" "}
            </div>
            <div className="flex flex-col gap-3 items-center">
              <p className="font-roboto-condensed text-lg">
                Are you sure you want to delete your account?
              </p>
              <div className="font-roboto flex gap-5">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="border py-2 px-4 rounded-md font-bold border-black"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="bg-red-500 py-2 px-4 border rounded-md text-white hover:bg-red-600 font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Toaster />
      <aside className="w-1/4 bg-white p-4 shadow-md">
        <nav className="flex flex-col space-y-4 font-roboto font-semibold">
          <div className="text-blue-600">Profile</div>
          <div className="cursor-pointer" onClick={handleLogout}>
            Logout
          </div>
          <div
            onClick={() => setShowDeleteModal(true)}
            className="cursor-pointer"
          >
            Delete Account
          </div>
        </nav>
      </aside>
      <main className="w-3/4 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center mb-8">
            <img
              src={userData.userProfileUrl || AVATAR}
              loading="lazy"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="userPhoneNumber"
                value={formData.userPhoneNumber}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <button
              type="button"
              onClick={handleEditToggle}
              className="w-full py-2 mb-4 bg-yellow-500 text-white rounded"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded"
            >
              Update Details
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ViewProfile;
