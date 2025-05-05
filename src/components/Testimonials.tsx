// components/Testimonials.tsx
"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Review {
    text: string;
    author: string;
    company: string;
    avatar: string;
}

const reviews: Review[] = [
    {
        text: "Always reliable and on time! Their exceptional service has streamlined our operations. Highly recommended!",
        author: "Jane Doe",
        company: "ABC Manufacturing",
        avatar: "/Image/user.jpg",
    },
    {
        text: "They handled our shipments with utmost professionalism. Fantastic support and tracking!",
        author: "John Smith",
        company: "Global Traders",
        avatar: "/Image/user1.jpg",
    },
    {
        text: "Seamless experience from start to finish. Our go-to logistics partner!",
        author: "Alice Lee",
        company: "Tech Innovators",
        avatar: "/Image/user2.jpg",
    },
    {
        text: "World-class service and unbeatable rates. Delivery always on-time.",
        author: "Bob Martin",
        company: "Fresh Foods Co.",
        avatar: "/Image/user4.png",
    },
];

const stats = [
    { value: "348K", label: "Service Provided Monthly" },
    { value: "499K", label: "Deliveries Completed" },
    { value: "150+", label: "Global Partners" },
    { value: "100%", label: "On-Time Delivery Rate" },
];

const Testimonials: React.FC = () => {
    const [idx, setIdx] = useState(0);

    const prev = () => setIdx(i => (i - 1 + reviews.length) % reviews.length);
    const next = () => setIdx(i => (i + 1) % reviews.length);
    const goTo = (i: number) => setIdx(i);

    // Auto-scroll every 5 seconds:
    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <section className="py-[6rem] bg-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
                {/* carousel viewport */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${idx * 100}%)` }}
                    >
                        {reviews.map((r, i) => (
                            <div key={i} className="min-w-full px-8">
                                {/* quote */}
                                <blockquote>
                                    <p className="text-lg sm:text-xl font-medium text-gray-800">
                                        “{r.text}”
                                    </p>
                                </blockquote>
                                {/* author */}
                                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                                    <img
                                        src={r.avatar}
                                        alt={r.author}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            — {r.author}
                                        </p>
                                        <p className="text-sm text-gray-500">{r.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full hover:bg-gray-200 z-10"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-100 rounded-full hover:bg-gray-200 z-10"
                    >
                        <FaArrowRight />
                    </button>
                </div>

                {/* thumbnails */}
                <div className="mt-6 flex justify-center space-x-3 overflow-x-auto">
                    {reviews.map((r, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`
                w-12 h-12 rounded-full overflow-hidden flex-shrink-0
                border-2 ${i === idx ? "border-brand" : "border-transparent"}
                hover:opacity-80 transition
              `}
                        >
                            <img
                                src={r.avatar}
                                alt={r.author}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* divider */}
            <div className="max-w-3xl mx-auto border-t border-gray-200 my-12" />

            {/* stats */}
            <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-y-8 text-center">
                {stats.map((s, i) => (
                    <div key={i}>
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {s.value}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
