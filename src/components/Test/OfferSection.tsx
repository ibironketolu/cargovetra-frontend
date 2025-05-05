// components/OfferSection.tsx
import React from "react";
import {
    FaPlaneDeparture,
    FaWarehouse,
    FaTruck,
    FaShoppingCart,
} from "react-icons/fa";
import { GiCube } from "react-icons/gi";
import { FiArrowRightCircle } from "react-icons/fi";

interface Offer {
    title: string;
    desc: string;
    Icon: React.ComponentType<{ className?: string }>;
}

const OFFERS: Offer[] = [
    {
        title: "Freight Transportation",
        desc:
            "Flexible and efficient road transportation across local and international routes.",
        Icon: FaPlaneDeparture,
    },
    {
        title: "Warehousing & Distribution",
        desc:
            "Flexible and efficient road transportation across local and international routes.",
        Icon: FaWarehouse,
    },
    {
        title: "Supply Chain Management",
        desc:
            "Flexible and efficient road transportation across local and international routes.",
        Icon: GiCube,
    },
    {
        title: "E-Commerce Solutions",
        desc:
            "Flexible and efficient road transportation across local and international routes.",
        Icon: FaShoppingCart,
    },
];

const OfferSection: React.FC = () => {
    return (
        <section className="bg-teal-900 text-white py-[5rem] px-6 md:px-12">
            <div className="max-w-screen-xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <div>
                        <p className="flex items-center text-sm text-red-500 space-x-2 mb-1">
                            <span>➤➤</span>
                            <span>Our Services</span>
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold">What We Offer</h2>
                    </div>
                    <a
                        href="#"
                        className="mt-4 sm:mt-0 inline-flex items-center bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-full font-medium"
                    >
                        <span>View More</span>
                        <FiArrowRightCircle className="ml-2 w-5 h-5" />
                    </a>
                </div>

                {/* List */}
                <ul className="space-y-6">
                    {OFFERS.map(({ title, desc, Icon }, i) => (
                        <li
                            key={i}
                            className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-700 pb-6"
                        >
                            {/* Icon + Title */}
                            <div className="flex items-start md:items-center space-x-4 flex-1">
                                <div className="relative">
                                    <Icon className="w-6 h-6 text-white" />
                                    {/* little red triangle */}
                                    <div
                                        className="absolute top-1/2 right-[-6px] transform -translate-y-1/2"
                                        style={{
                                            width: 0,
                                            height: 0,
                                            borderTop: "6px solid transparent",
                                            borderBottom: "6px solid transparent",
                                            borderLeft: "8px solid #e11d48",
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold">{title}</h3>
                            </div>

                            {/* Description */}
                            <p className="mt-3 md:mt-0 md:mx-8 text-gray-300 flex-1">
                                {desc}
                            </p>

                            {/* Arrow */}
                            <div className="mt-3 md:mt-0">
                                <FiArrowRightCircle className="w-8 h-8 text-white hover:text-red-500 transition" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default OfferSection;
