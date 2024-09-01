import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { updateRoommateData } from "../api/roommate";

const RoommateDetailsModal = ({ roommate, onClose, onUpload }) => {
  const [formData, setFormData] = useState({ ...roommate });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const hasChanges = () => {
    return JSON.stringify(formData) !== JSON.stringify(roommate);
  };

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const uploadChanges = () => {
    try {
      toast
        .promise(updateRoommateData(formData, roommate.id), {
          loading: "Uploading...",
          success: "Changes updated",
          error: "Could not upload.",
        })
        .then(() => {
          onClose();
          onUpload(formData);
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to upload data.");
        });
    } catch (e) {
      throw e;
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "roomImage") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else if (name === "roomVideo") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  return (
    <div className="fixed z-30 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-11/12 h-5/6 rounded-lg overflow-auto p-6">
        <button onClick={onClose} className="text-gray-500 float-right">
          <FaXmark />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="address"
              className="block font-medium text-gray-700"
            >
              Address
            </label>
            <input
              required
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="city" className="block font-medium text-gray-700">
              City
            </label>
            <input
              required
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="state" className="block font-medium text-gray-700">
              State
            </label>
            <input
              required
              id="state"
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              required
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="rent" className="block font-medium text-gray-700">
              Rent
            </label>
            <input
              required
              id="rent"
              name="rent"
              type="number"
              value={formData.budget}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="occupation"
              className="block font-medium text-gray-700"
            >
              Occupation
            </label>
            <input
              required
              id="occupation"
              name="occupation"
              type="text"
              value={formData.occupation}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="age" className="block font-medium text-gray-700">
              Age
            </label>
            <input
              required
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="bathRooms"
              className="block font-medium text-gray-700"
            >
              Bathrooms
            </label>
            <input
              required
              id="bathRooms"
              name="bathRooms"
              type="number"
              value={formData.bathRooms}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="numberOfBalconies"
              className="block font-medium text-gray-700"
            >
              Number of Balconies
            </label>
            <input
              required
              id="numberOfBalconies"
              name="numberOfBalconies"
              type="number"
              value={formData.numberOfBalconies}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="floorNumber"
              className="block font-medium text-gray-700"
            >
              Floor
            </label>
            <input
              id="floorNumber"
              name="floor"
              type="number"
              value={formData.floorNumber}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="landmark"
              className="block font-medium text-gray-700"
            >
              Landmark
            </label>
            <input
              id="landmark"
              name="landmark"
              type="text"
              value={formData.landmark}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="availableFrom"
              className="block font-medium text-gray-700"
            >
              Available from
            </label>
            <input
              id="availableFrom"
              name="availableFrom"
              type="date"
              value={formData.availableFrom}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="preference"
              className="block font-medium text-gray-700"
            >
              Preference
            </label>
            <input
              required
              id="preference"
              name="preference"
              type="text"
              value={formData.preference}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block font-medium text-gray-700">
              Upload Photo
            </label>
            <input
              id="photo"
              name="roomImage"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              disabled={!isEditing}
            />
          </div>
          <div>
            <label htmlFor="video" className="block font-medium text-gray-700">
              Upload Video
            </label>
            <input
              id="video"
              name="roomVideo"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              disabled={!isEditing}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4 my-4">
            <button
              onClick={handleEditing}
              className="bg-blue-500 rounded-md py-1 px-3 text-white hover:bg-blue-400"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            <button className="bg-red-500 rounded-md py-1 px-3 text-white hover:bg-red-400">
              Delete
            </button>
          </div>
          <div className="flex items-center">
            {!isEditing && hasChanges() && (
              <button
                onClick={uploadChanges}
                className="bg-blue-500 hover:bg-blue-400 text-white px-3 py-1 "
              >
                Update changes
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoommateDetailsModal;
