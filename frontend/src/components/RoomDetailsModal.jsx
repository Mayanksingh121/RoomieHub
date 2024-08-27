import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { deleteRoom, updateRoomData } from "../api/room";

const RoomDetailsModal = ({ room, onClose, onUpload, onDelete }) => {
  const [formData, setFormData] = useState({ ...room });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const hasChanges = () => {
    return JSON.stringify(formData) !== JSON.stringify(room);
  };

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const uploadChanges = () => {
    try {
      toast
        .promise(updateRoomData(formData, room.roomId), {
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

  const handleDelete = ()=>{
    try {
      toast
        .promise(deleteRoom(room.roomId), {
          loading: "Deleting...",
          success: "Changes updated",
          error: "Could not delete.",
        })
        .then(() => {
          onClose();
          onUpload(room.roomId);
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to delete data.");
        });
    } catch (e) {
      throw e;
    }
  }

  
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
              value={formData.rent}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="securityDeposit"
              className="block font-medium text-gray-700"
            >
              Security Deposit
            </label>
            <input
              required
              id="securityDeposit"
              name="securityDeposit"
              type="number"
              value={formData.securityDeposit}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="roomArea"
              className="block font-medium text-gray-700"
            >
              Room Area (sq. ft.)
            </label>
            <input
              required
              id="roomArea"
              name="roomArea"
              type="number"
              value={formData.roomArea}
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
              htmlFor="furnishedStatus"
              className="block font-medium text-gray-700"
            >
              Furnished Status
            </label>
            <select
              required
              id="furnishedStatus"
              name="furnishedStatus"
              value={formData.furnishedStatus}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="FULLYFURNISHED">Fully Furnished</option>
              <option value="SEMIFURNISHED">Semi Furnished</option>
              <option value="UNFURNISHED">Unfurnished</option>
            </select>
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
            <label htmlFor="garden" className="block font-medium text-gray-700">
              Garden
            </label>
            <input
              id="garden"
              name="garden"
              type="checkbox"
              checked={formData.garden}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="gym" className="block font-medium text-gray-700">
              Gym
            </label>
            <input
              id="gym"
              name="gym"
              type="checkbox"
              checked={formData.gym}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="lift" className="block font-medium text-gray-700">
              Lift
            </label>
            <input
              id="lift"
              name="lift"
              type="checkbox"
              checked={formData.lift}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="reservedParking"
              className="block font-medium text-gray-700"
            >
              Reserved Parking
            </label>
            <input
              id="reservedParking"
              name="reservedParking"
              type="checkbox"
              checked={formData.reservedParking}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="wifi" className="block font-medium text-gray-700">
              WiFi
            </label>
            <input
              id="wifi"
              name="wifi"
              type="checkbox"
              checked={formData.wifi}
              onChange={handleChange}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="security"
              className="block font-medium text-gray-700"
            >
              Security
            </label>
            <input
              id="security"
              name="security"
              type="checkbox"
              checked={formData.security}
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
            <button onClick={handleDelete} className="bg-red-500 rounded-md py-1 px-3 text-white hover:bg-red-400">
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

export default RoomDetailsModal;
