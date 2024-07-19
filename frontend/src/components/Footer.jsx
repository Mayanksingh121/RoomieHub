import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <div className="flex mt-2 items-center justify-center">
            <FaMapMarkerAlt className="mr-2" />
            <p>XYZ Avenue, New Delhi</p>
          </div>
          <div className="flex mt-2 items-center justify-center">
            <FaPhone className="mr-2" />
            <p>+91 4436781</p>
          </div>
          <div className="flex mt-2 items-center justify-center">
            <FaEnvelope className="mr-2" />
            <p>RoomieHub@gmail.com</p>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex mt-2 justify-center">
            <a href="#" className="mr-4">
              <FaFacebook className="text-2xl hover:text-blue-500 transition duration-300" />
            </a>
            <a href="#" className="mr-4">
              <FaTwitter className="text-2xl hover:text-blue-500 transition duration-300" />
            </a>
            <a href="#">
              <FaInstagram className="text-2xl hover:text-blue-500 transition duration-300" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">Services</h3>
          <ul className="mt-2">
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Rooms Availability
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Roommate Availability
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Easy Connections
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Flexible searches
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center mt-8 md:mt-0 col-span-3">
          <p className="text-gray-400 text-sm">
            &copy; 2024 RoomieHub. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
