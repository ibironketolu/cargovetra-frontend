"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaLocationCrosshairs, FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdPerson, IoMdTime } from "react-icons/io";
import { PiAddressBookBold } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
    trackingId: Yup.string().required("Tracking ID is required"),
});

const TrackingPage = () => {
    const [trackingData, setTrackingData] = useState<any[]>([]);
    const [data, setData] = useState<any>({})
    const [loading, setLoading] = useState(false);

    const handleTrackingSearch = async (trackingId: string) => {

        setLoading(true);

        try {
            const response = await fetch(`https://api.cargovetra.com/api/shipments/tracking/status/${trackingId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // Add Authorization here if the API requires it
                },
            });
            const data = await response.json();
            console.log("GET response:", data);
            setTrackingData(data?.data?.trackings || []);
            setData(data?.data || {})
        } catch (error) {
            console.error("Error fetching tracking data:", error);
        } finally {
            setLoading(false);
        }
    };

    function getDeliveryDuration(dateShipped: string, expectedDeliveryDate: string): string {
        const shipped = new Date(dateShipped);
        const delivered = new Date(expectedDeliveryDate);

        const diffInMs = delivered.getTime() - shipped.getTime();
        const diffInHours = diffInMs / (1000 * 60 * 60);

        if (diffInHours <= 24) {
            return "24 hours";
        }

        const diffInDays = Math.ceil(diffInHours / 24);
        return `${diffInDays} day${diffInDays > 1 ? "s" : ""}`;
    }

    const handlePrintShipment = async () => {
        if (!data?.id) return toast.error("No shipment ID available.");

        try {
            const res = await fetch(`https://api.cargovetra.com/api/shipments/invoice/${data.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) throw new Error("Failed to fetch invoice.");

            const blob = await res.blob();

            // Assuming the response is a PDF or printable document
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.click();

        } catch (error) {
            console.error("Print error:", error);
            toast.error("Failed to fetch invoice.");
        }
    };


    return (
        <div className="bg-white p-4 sm:p-8">
            {/* Search bar */}
            <Formik
                initialValues={{ trackingId: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleTrackingSearch(values.trackingId)}
            >
                {() => (
                    <Form className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <div className="w-full sm:w-80">
                            <Field
                                name="trackingId"
                                placeholder="Enter your ID..."
                                className="w-full border border-red-500 px-4 py-2 rounded focus:outline-none"
                            />
                            <ErrorMessage name="trackingId" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-all"
                            disabled={loading}
                        >
                            {loading ? "Tracking..." : "Track Order"}
                        </button>
                    </Form>
                )}
            </Formik>

            {/* Static Shipment Info - optional: render only if trackingData is available */}
            {/* <div className="flex flex-col md:flex-row items-start gap-8">
                {trackingData.length > 0 && (
                    <div className="flex items-center gap-4 w-full md:w-1/3">
                        <Image
                            src={data?.images?.[0]?.replace(/\\/g, "") || "/placeholder.jpg"}
                            alt="Shipment Image"
                            width={80}
                            height={80}
                            className="rounded-full object-cover"
                        />
                        <div>
                            <h2 className="font-semibold text-lg">
                                {data?.details?.description || "No Description"}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {data?.details?.service_type || "N/A"}
                            </p>
                            <p className="text-sm text-gray-500">
                                Quantity: {data?.details?.quantity || "N/A"}
                            </p>
                            
                        </div>
                    </div>
                )}

                
                <div className="border-l-2 border-red-200 pl-4 relative w-full md:w-2/3">
                    {trackingData.length > 0 ? (
                        trackingData.map((step, index) => (
                            <div key={index} className="mb-8 relative">
                                <div className="w-4 h-4 bg-red-600 rounded-full absolute -left-[9px] top-1" />
                                <h3 className="pl-5 font-semibold capitalize">{step.status.replace("_", " ")}</h3>
                                <p className="text-sm text-gray-500">{step.date}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No tracking info yet.</p>
                    )}
                </div>
            </div> */}

            {trackingData.length > 0 && (
                <div className="p-4 md:p-8  container mx-auto">
                    <div className="mb-6 flex flex-col md:flex-row md:justify-between items-start md:items-center">
                        <div className={`text-sm capitalize  ${data?.details?.status === "in_transit" ? " text-yellow-700" : data?.details?.status === "on_hold" ? " text-red-700" : data?.details?.status === "delivered" ? " text-green-700" : " text-gray-600"} font-semibold`}>{data?.details?.status.replace("_", " ")}</div>
                        <div className="text-gray-800 text-sm">
                            Shipment Tracking: <span className="text-teal-900 font-medium">{data?.tracking_id}</span>
                        </div>
                        <button onClick={handlePrintShipment} className="mt-2 md:mt-0 px-4 py-2 bg-teal-900 text-white text-sm rounded">Print Shipment</button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            {/* Sender Info */}
                            <div className="bg-white rounded shadow p-4">
                                <h2 className="bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-t">Sender</h2>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                    <div><FaLocationCrosshairs />Name: <span className="font-medium">{data?.sender?.name}</span></div>
                                    <div><FaLocationDot />Origin City: <span className="font-medium">{data?.sender?.city}</span></div>
                                    <div><MdOutlineDateRange />Date of Shipment: <span className="font-medium">{data?.details?.date_shipped}</span></div>
                                    <div><IoMdTime />Shipping Time: <span className="font-medium">{getDeliveryDuration(data?.details?.date_shipped, data?.details?.expected_delivery_date)}</span></div>
                                    <div><IoMdPerson />Contact Name: <span className="font-medium">{data?.sender?.contact_name}</span></div>
                                    <div><PiAddressBookBold />Contact Address: <span className="font-medium">{data?.sender?.address}</span></div>
                                    <div>Shipping Quantity: <span className="font-medium">{data?.details?.quantity}</span></div>
                                    <div>Total Weight: <span className="font-medium">{data?.details?.weight}</span></div>
                                    <div className="sm:col-span-2">Description: <span className="font-medium">{data?.details?.description}</span></div>
                                </div>
                            </div>

                            {/* Recipient Info */}
                            <div className="bg-white rounded shadow p-4">
                                <h2 className="bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-t">Recipient</h2>
                                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                    <div><FaLocationCrosshairs />Delivery City: <span className="font-medium">{data?.receiver?.city}</span></div>
                                    <div><FaLocationDot />Destination Postal Code: <span className="font-medium">{data?.receiver?.postal_code}</span></div>
                                    <div><IoMdTime />Shipping Time: <span className="font-medium">{getDeliveryDuration(data?.details?.date_shipped, data?.details?.expected_delivery_date)}</span></div>
                                    <div><CiTimer />Estimated Delivery Date: <span className="font-medium">{data?.details?.expected_delivery_date}</span></div>
                                    <div><IoMdPerson />Contact Name: <span className="font-medium">{data?.receiver?.contact_name}</span></div>
                                    <div><PiAddressBookBold />Contact Address: <span className="font-medium">{data?.receiver?.address}</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Shipping History */}
                        <div className="bg-white rounded shadow p-4">
                            <h2 className="text-gray-800 font-semibold text-sm mb-4">Shipping History</h2>
                            <div className="space-y-6 text-sm">
                                {data?.trackings?.map((ele: any) => (
                                    <div key={ele?.id} className="border-l-2 border-green-500 pl-4 relative">
                                        <div className="absolute -left-[6.4px] top-0 w-3 h-3 rounded-full bg-green-500"></div>
                                        <p className="text-gray-600 font-medium">{ele?.date}
                                            {/* <span className="text-xs ml-2">01:47:03 am</span> */}
                                        </p>
                                        <p className={`text-sm text-green-600 ${ele?.status === "in_transit" ? " text-yellow-700" : ele?.status === "on_hold" ? " text-red-700" : ele?.status === "delivered" ? " text-green-700" : " text-gray-600"} capitalize font-semibold`}>{ele?.status.replace("_", " ")}</p>
                                        <p className="text-gray-500">{ele?.remark}</p>
                                    </div>
                                ))}
                                {/* <div className="border-l-2 border-green-500 pl-4 relative">
                                    <div className="absolute -left-[6.4px] top-0 w-3 h-3 rounded-full bg-green-500"></div>
                                    <p className="text-gray-600 font-medium">2024/11/18 <span className="text-xs ml-2">01:47:03 am</span></p>
                                    <p className="text-gray-700">Available</p>
                                    <p className="text-gray-500">+ Shipment created</p>
                                </div>
                                <div className="border-l-2 border-green-500 pl-4 relative">
                                    <div className="absolute -left-[6.4px] top-0 w-3 h-3 rounded-full bg-green-500"></div>
                                    <p className="text-gray-600 font-medium">2024/11/18 <span className="text-xs ml-2">01:51:29 am</span></p>
                                    <p className="text-red-600 font-semibold">On-Hold</p>
                                    <p className="text-gray-700">China, China</p>
                                    <p className="text-gray-500">* On hold for Outstanding Balance</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default TrackingPage;
