import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="mx-16 border-b-2  border-[#f4511e]"></div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto px-20 flex items-center mb-4 sm:mb-0">
            <h1 className="text-3xl font-bold">Logo</h1>
          </div>
          <div className="flex flex-col py-10 px-10">
          <div className="w-full sm:w-auto flex flex-col gap-2 sm:text-left ">
            <p className="flex  items-center text-gray-700">
              <span className="text-[#f4511e] mr-2">
                <FaLocationDot />
              </span>
              xyz avenue, lodhi road, New Delhi 110003
            </p>
            <p className="flex items-center text-gray-700">
              <span className="text-[#f4511e] mr-2">
                <FaPhone />
              </span>
              (+91) 456-7890
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-6">
            <div className="w-full sm:w-auto flex items-center">
              <span className="text-gray-500 mr-4">Social Media</span>
              <div className="flex space-x-4">
                <Link className="text-[#f4511e]">
                  <FaFacebook />
                </Link>
                <Link className="text-[#f4511e]">
                  <FaTwitter />
                </Link>
                <Link className="text-[#f4511e]">
                  <FaLinkedin />
                </Link>
                <Link className="text-[#f4511e]">
                  <FaYoutube />
                </Link>
                <Link className="text-[#f4511e]">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 px-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <nav className="flex flex-wrap justify-center sm:justify-start space-x-4 mb-4 sm:mb-0">
            <a href="#" className="hover:text-gray-800">
              ABOUT US
            </a>
            <a href="#" className="hover:text-gray-800">
              CONTACT US
            </a>
            <a href="#" className="hover:text-gray-800">
              HELP
            </a>
            <a href="#" className="hover:text-gray-800">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-gray-800">
              DISCLAIMER
            </a>
          </nav>
          <div className="text-center sm:text-left">
            <p>Copyright © 2020 RoomieHub. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
