// components/TeamSection.tsx
import React from "react";
import Image from "next/image";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaArrowRight,
} from "react-icons/fa";

interface TeamMember {
    name: string;
    role: string;
    image: string;               // path under /public
    social?: {                   // only David has socials
        facebook?: string;
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    };
}

const TEAM: TeamMember[] = [
    {
        name: "Emma Davis",
        role: "Supervisor",
        image: "/Image/user7.jpg",
    },
    {
        name: "David Carter",
        role: "Coordinator",
        image: "/Image/user6.jpg",
        social: {
            facebook: "#",
            linkedin: "#",
            twitter: "#",
            instagram: "#",
        },
    },
    {
        name: "Sarah Nguyen",
        role: "Customer Manager",
        image: "/Image/user5.jpg",
    },
    {
        name: "John Mitchell",
        role: "Manager",
        image: "/Image/user8.jpg",
    },
];

const TeamSection: React.FC = () => {
    return (
        <section className="py-12 px-6 md:px-12">
            {/* Header */}
            <div className="flex justify-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Meet Our Ultra Expert Logistics Team
                </h2>

            </div>
            {/* <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Meet Our Ultra Expert Logistics Team
                </h2>
                <a
                    href="#"
                    className="text-red-500 font-medium flex items-center space-x-1 hover:underline"
                >
                    <span>View More</span>
                    <FaArrowRight />
                </a>
            </div> */}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {TEAM.map((member, idx) => (
                    <div
                        key={idx}
                        className="group relative overflow-hidden"
                        style={{
                            clipPath:
                                "polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 5%)",
                        }}
                    >
                        {/* Image */}
                        <div className="relative w-full h-64">
                            <Image
                                src={member.image}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        {/* Social icons (only if defined) */}
                        {member.social && (
                            <div className="hidden group-hover:flex flex-col absolute top-1/2 right-4 transform -translate-y-1/2 space-y-2">
                                <a
                                    href={member.social.facebook}
                                    className="bg-red-500 text-white p-2 rounded"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href={member.social.linkedin}
                                    className="bg-red-500 text-white p-2 rounded"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href={member.social.twitter}
                                    className="bg-red-500 text-white p-2 rounded"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href={member.social.instagram}
                                    className="bg-red-500 text-white p-2 rounded"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        )}

                        {/* Name & Role */}
                        <div className="bg-white px-4 py-3">
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-gray-500">{member.role}</p>
                        </div>

                        {/* Bottom-right arrow */}
                        <div className="absolute bottom-3 right-3 text-red-500">
                            <FaArrowRight />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
