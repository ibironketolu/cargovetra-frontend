"use client"
import React, { useState } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { BsStars } from 'react-icons/bs';

const QuotePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        volume: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url(/images/truck.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="absolute inset-0 flex justify-center items-center text-white z-10">
                <div className="w-full md:w-1/2 px-6 py-8 bg-green-800 bg-opacity-75 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-center mb-6">Request For a Free Quote</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg border-2 border-gray-300"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />

                            {/* Phone Input */}
                            <input
                                type="text"
                                placeholder="Your Phone Number"
                                className="w-full p-3 rounded-lg border-2 border-gray-300"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                            />

                            {/* Services Select */}
                            <Select
                                aria-label="Select Service"
                                classNames={{
                                    label: 'text-white',
                                    trigger: 'w-full p-3 rounded-lg border-2 border-gray-300',
                                }}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            >
                                <SelectItem value="orderPlacement">Order Placement</SelectItem>
                                <SelectItem value="inventoryManagement">Inventory Management</SelectItem>
                                <SelectItem value="transportation">Transportation</SelectItem>
                                <SelectItem value="customerSatisfaction">Customer Satisfaction</SelectItem>
                            </Select>

                            {/* Volume Select */}
                            <Select
                                aria-label="Select Volume"
                                classNames={{
                                    label: 'text-white',
                                    trigger: 'w-full p-3 rounded-lg border-2 border-gray-300',
                                }}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            >
                                <SelectItem value="small">Small</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="large">Large</SelectItem>
                            </Select>

                            {/* Message Input */}
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-3 rounded-lg border-2 border-gray-300"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuotePage;
