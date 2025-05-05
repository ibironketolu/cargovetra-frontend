import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const HeroSection: React.FC = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-100">
            {/* Left Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Drive Your Business Forward with Cargovetra
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old.
                </p>
                <ul className="space-y-2 text-lg text-gray-600">
                    <li className="flex items-center gap-2"><BsPatchCheckFill className="text-red-600" /> Freight Forwarding</li>
                    <li className="flex items-center gap-2"><BsPatchCheckFill className="text-red-600" /> Warehousing & Delivery</li>
                    <li className="flex items-center gap-2"><BsPatchCheckFill className="text-red-600" /> Customs Clearance</li>
                    <li className="flex items-center gap-2"><BsPatchCheckFill className="text-red-600" /> Freight Forwarding</li>
                </ul>
                <a
                    href="/track"
                    className="inline-block mt-6 bg-red-500 text-white text-lg font-semibold py-2 px-6 rounded-lg transition duration-300 hover:bg-red-600"
                >
                    Track order
                </a>
            </div>

            {/* Right Section with Image */}
            <div className="w-full md:w-1/2 relative mt-8 md:mt-0 flex justify-center">
                <img
                    src="/Image/hero2.png" // Replace with your image path
                    alt="Truck"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 right-4 bg-teal-500 text-white py-2 px-4 rounded-full text-lg font-semibold">
                    18+ Years Experience
                </div>


            </div>
        </section>
    );
};

export default HeroSection;
