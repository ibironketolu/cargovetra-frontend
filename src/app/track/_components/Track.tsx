"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
            <div className="flex flex-col md:flex-row items-start gap-8">
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
                            {/* <p className="text-xl font-bold text-black mt-1">
                                ${parseFloat(trackingData[0]?.unit_value || "0") * (trackingData[0]?.quantity || 1)}
                            </p> */}
                        </div>
                    </div>
                )}

                {/* Timeline from API */}
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
            </div>
        </div>
    );
};

export default TrackingPage;
