"use client";
import React from "react";

const CompanyGrid = () => {
    const companies = [
        "HasExpress",
        "XpoExpress",
        "FedExpress",
        "DaaExpress",
        "TheExpress",
        "UpsExpress",
        "HubExpress",
        "ForestExpress",
    ];

    return (
        <div className="py-12 lg:py-20 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center border border-gray-200 p-6 text-center font-semibold text-black-100 
              transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-50 hover:shadow-md rounded-md"
                    >
                        {company}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyGrid;
