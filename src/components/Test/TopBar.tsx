import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";

const TopBar: React.FC = () => (
    <div className="bg-white text-xs text-gray-600 hidden md:flex flex-col sm:flex-row sm:justify-between px-4 py-1 border-b">
        <div className="text-center sm:text-left">612-7 Roanoke Rd, Toronto, ON M3A 1E3, Canada</div>
        <div className="lg:flex hidden flex-wrap justify-center sm:justify-end items-center space-x-2 mt-1 sm:mt-0">
            {/* hide socials on really small */}
            <div className="hidden sm:flex space-x-2">
                <FaFacebookF /><FaTwitter /><FaLinkedinIn /><FaInstagram /><FaPinterestP />
            </div>
            <div>info@cargovetra.com</div>
        </div>
    </div>
);

export default TopBar;
