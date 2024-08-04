import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useUser } from "../utils/Context/UserContext";
import { getUser, updateUser } from "../api/user";

const ViewProfile = () => {
  const [userData, setUserData] = useState(null);
  const { userDetails } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    userPhoneNumber: "",
  });
  console.log(userDetails);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(userDetails);
        console.log(userData);
        setUserData(data);
        setFormData({
          name: data.name,
          userEmail: data.userEmail,
          userPhoneNumber: data.userPhoneNumber,
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
      setUserData(response);
      console.log(response);
      setFormData({
        name: response.name,
        userEmail: response.userEmail,
        userPhoneNumber: response.userPhoneNumber,
      });
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Toaster />
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
