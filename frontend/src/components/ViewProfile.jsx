import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useUser } from "../utils/Context/UserContext";
import { getUser } from "../api/user";

const ViewProfile = () => {
  const [userData, setUserData] = useState(null);
  const { userDetails } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(userDetails);
        setUserData(data);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(userData).some((value) => value.trim() === "")) {
      toast.error("All fields must be filled out.");
      return;
    }
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Toaster />{" "}
      <aside className="w-1/4 bg-white p-4 shadow-md">
        <nav className="flex flex-col space-y-4">
          <div className="text-blue-600">Profile</div>
          <div>Logout</div>
        </nav>
      </aside>
      <main className="w-3/4 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center mb-8">
            <img
              src={userData.userProfileUrl}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Update Photo
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={userData.userEmail}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={userData.userPhoneNumber}
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
            {isEditing && (
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white rounded"
              >
                Update Details
              </button>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default ViewProfile;
