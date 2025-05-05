import React from "react";

const FooterSection: React.FC = () => {
    return (
        <footer className="bg-teal-900 text-white py-12 px-6 md:px-12">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
                {/* Left Section: Corporate and Canada Office */}
                <div className="flex flex-col space-y-4 md:w-1/3">
                    <div>
                        <h3 className="font-semibold text-lg">CargoVetra Logistics </h3>
                        <p>2042 M Nason Rd unit 701, Katy, TX 77449, United States </p>
                        <p>+19012649748 </p>

                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">CargoVetra Logistics </h3>
                        <p>2042 M Nason Rd unit 701, Katy, TX 77449, United States </p>
                        <p>+19012649748 </p>

                    </div>
                </div>

                {/* Middle Section: Useful Links */}
                <div className="flex flex-col space-y-4 md:w-1/3 mt-8 md:mt-0">
                    <h3 className="font-semibold text-lg">Useful Link</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>

                    </ul>
                </div>

                {/* Right Section: Newsletter */}
                <div className="flex flex-col space-y-4 md:w-1/3 mt-8 md:mt-0">
                    <h3 className="font-semibold text-lg">Newsletter</h3>
                    <p className="text-gray-300">Delivering Excellence in Global Logistics.</p>
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="w-full md:flex-1 px-4 py-2 rounded-lg md:rounded-l-lg focus:outline-none"
                        />
                        <button className="w-full md:w-auto bg-red-500 text-white font-medium py-2 px-6 rounded-lg md:rounded-r-lg">
                            Subscribe
                        </button>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-300 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-400 mt-12">
                <p>&#169; 2024 CargoVetra Logistics. All Rights Reserved.</p>
                <p className="flex justify-center space-x-2 mt-4">
                    <span>CargoVetra</span>
                    <span>Delivering Excellence in Global Logistics.</span>
                </p>
            </div>
        </footer>
    );
};

export default FooterSection;
