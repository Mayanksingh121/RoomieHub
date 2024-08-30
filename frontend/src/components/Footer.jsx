import toast from "react-hot-toast";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaMapPin, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const handleSubmit = () => {
  toast.success("Thank you for subscribing");
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-10">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white font-roboto-slab">
            Subscribe to our newsletter
          </h4>
          <p className="text-sm font-roboto">
            Get the latest updates and news from our company.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button variant="contained">Send</Button>
          </div>
        </div>
        <div className="space-y-4 px-12">
          <h4 className="text-lg font-semibold text-white font-roboto-slab">Connect with us</h4>
          <div className="flex gap-4">
            <Link to="#" aria-label="Facebook">
              <FaFacebook className="w-6 h-6 text-blue-600" />
            </Link>
            <Link to="#" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 text-blue-400" />
            </Link>
            <Link to="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 text-pink-600" />
            </Link>
            <Link to="#" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6 text-blue-700" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white font-roboto-slab">Contact Us</h4>
          <div className="space-y-2 text-sm font-roboto">
            <p>
              <FaMapPin className="w-4 h-4 mr-2 inline-block align-middle text-gray-400" />
              XYZ Avenue, New Delhi, India
            </p>
            <p>
              <FaPhone className="w-4 h-4 mr-2 inline-block align-middle text-gray-400" />
              (91) 456-7890
            </p>
            <p>
              <FaEnvelope className="w-4 h-4 mr-2 inline-block align-middle text-gray-400" />
              info@gmail.com
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white font-roboto-slab">About RoomieHub</h4>
          <p className="text-sm font-roboto">
            RoomieHub is your go-to platform for finding the perfect room or
            roommate. Whether you're looking for a cozy space or a compatible
            roommate, we offer a range of options to suit your needs. Our
            mission is to make room finding simple and effective for everyone.
          </p>
          <Link to="#" className="text-sm underline text-blue-400">
            Learn more
          </Link>
        </div>
      </div>
    </footer>
  );
}
