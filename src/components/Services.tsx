"use client";
import React from "react";
import { FaShip, FaPlane, FaTruck } from "react-icons/fa";

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactElement;
}

const services: Service[] = [
    {
        id: 1,
        title: "Ocean Freight",
        description: "Reliable ocean shipping worldwide.",
        icon: <FaShip className="text-4xl text-red-600 mx-auto" />,
    },
    {
        id: 2,
        title: "Air Freight",
        description: "Fast and secure air freight solutions.",
        icon: <FaPlane className="text-4xl text-red-600 mx-auto" />,
    },
    {
        id: 3,
        title: "Land Transport",
        description: "Efficient trucking services for inland logistics.",
        icon: <FaTruck className="text-4xl text-red-600 mx-auto" />,
    },
];

const Services: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
                        >
                            {/* Icon */}
                            <div className="mb-4 text-red-600">{service.icon}</div>
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-800">
                                {service.title}
                            </h3>
                            {/* Description */}
                            <p className="mt-4 text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
