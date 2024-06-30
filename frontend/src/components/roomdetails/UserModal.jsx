import React from "react";
import Modal from "react-modal";
import "./userModal.css";

const UserModal = ({ isOpen, onRequestClose, user }) => {
  const { name, userPhoneNumber, userProfileUrl, userEmail } = user;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Information"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="flex flex-col items-center p-4">
        <img
          src={userProfileUrl}
          alt="User Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-lg mb-1"><span className="font-bold">Email: </span>{userEmail}</p>
        <p className="text-lg">Phone: {userPhoneNumber}</p>
        <button
          onClick={onRequestClose}
          className="mt-4 border border-[#f84464] text-[#f84464] rounded-3xl px-6 py-2"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default UserModal;
