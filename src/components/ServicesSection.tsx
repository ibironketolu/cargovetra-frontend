import React from "react";

const services = [
    {
        title: "Freight Transportation",
        description:
            "Flexible and efficient road transportation across local and international routes.",
        icon: "/path-to-your-icon1.svg", // Replace with your icon path
    },
    {
        title: "Warehousing & Distribution",
        description:
            "Flexible and efficient road transportation across local and international routes.",
        icon: "/path-to-your-icon2.svg", // Replace with your icon path
    },
    {
        title: "Supply Chain Management",
        description:
            "Flexible and efficient road transportation across local and international routes.",
        icon: "/path-to-your-icon3.svg", // Replace with your icon path
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="bg-teal-900 py-12 px-6 md:px-12 text-white">
            <div className="max-w-screen-xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
                <p className="text-lg">Our Services</p>
            </div>

            <div className="space-y-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:justify-between border-b border-gray-700 pb-6"
                    >
                        <div className="flex items-center space-x-4">
                            {/* <img
                src={service.icon}
                alt={service.title}
                className="h-12 w-12 object-contain"
              /> */}
                            <div>
                                <h3 className="text-2xl font-semibold">{service.title}</h3>
                                <p className="text-lg">{service.description}</p>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="mt-4 md:mt-0 text-red-500 font-semibold flex items-center space-x-2"
                        >
                            <span>View More</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
