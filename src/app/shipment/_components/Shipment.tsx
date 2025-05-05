"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const trackingSchema = Yup.object({
    sender_name: Yup.string().required("Required"),
    sender_contact_name: Yup.string().required("Required"),
    sender_address: Yup.string().required("Required"),
    sender_postal_code: Yup.string().required("Required"),
    sender_city: Yup.string().required("Required"),
    sender_other_info: Yup.string(),
    sender_email: Yup.string().email("Invalid email").required("Required"),
    sender_phone: Yup.string().required("Required"),

    receiver_name: Yup.string().required("Required"),
    receiver_contact_name: Yup.string().required("Required"),
    receiver_address: Yup.string().required("Required"),
    receiver_postal_code: Yup.string().required("Required"),
    receiver_city: Yup.string().required("Required"),
    receiver_other_info: Yup.string(),
    receiver_email: Yup.string().email("Invalid email").required("Required"),
    receiver_phone: Yup.string().required("Required"),

    service_type: Yup.string().required("Required"),
    weight: Yup.number().typeError("Weight must be a number").required("Required"),
    date_shipped: Yup.date().typeError("Date shipped must be a valid date").required("Required"),
    expected_delivery_date: Yup.date().typeError("Expected delivery date must be a valid date").required("Required"),
    description: Yup.string().required("Required"),
    quantity: Yup.number().typeError("Quantity must be a number").required("Required"),
    unit_value: Yup.number().typeError("Unit value must be a number").required("Required"),
});

const Shipment = () => {
    return (
        <Formik
            initialValues={{
                sender_name: "",
                sender_contact_name: "",
                sender_address: "",
                sender_postal_code: "",
                sender_city: "",
                sender_other_info: "",
                sender_email: "",
                sender_phone: "",

                receiver_name: "",
                receiver_contact_name: "",
                receiver_address: "",
                receiver_postal_code: "",
                receiver_city: "",
                receiver_other_info: "",
                receiver_email: "",
                receiver_phone: "",

                service_type: "",

                weight: 0, // previously ""
                date_shipped: "", // string is fine, will be parsed to date
                expected_delivery_date: "", // string is fine
                description: "",
                quantity: 1,
                unit_value: 0, // previously ""
            }}
            validationSchema={trackingSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                    const response = await fetch("https://api.cargovetra.com/api/shipments", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(values),
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message || "Failed to create shipment.");
                    }

                    const result = await response.json();
                    toast.success(`Shipment created successfully!`)
                    console.log("Response:", result);
                    resetForm();
                } catch (error) {
                    console.error("Submission error:", error);
                    alert("An error occurred while creating the shipment.");
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form className="p-6 max-w-4xl mx-auto space-y-6">
                    <h1 className="text-xl font-bold">Create a Shipment</h1>

                    {/* Sender */}
                    <div>
                        <h2 className="font-semibold text-lg mb-2">Sender Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                ["sender_name", "Name"],
                                ["sender_contact_name", "Contact Name"],
                                ["sender_address", "Address"],
                                ["sender_postal_code", "Postal Code"],
                                ["sender_city", "City"],
                                ["sender_other_info", "Other Info"],
                                ["sender_email", "Email"],
                                ["sender_phone", "Phone"],
                            ].map(([name, placeholder]) => (
                                <div key={name}>
                                    <Field name={name} placeholder={placeholder} className="input" />
                                    <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Receiver */}
                    <div>
                        <h2 className="font-semibold text-lg mb-2">Receiver Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                ["receiver_name", "Name"],
                                ["receiver_contact_name", "Contact Name"],
                                ["receiver_address", "Address"],
                                ["receiver_postal_code", "Postal Code"],
                                ["receiver_city", "City"],
                                ["receiver_other_info", "Other Info"],
                                ["receiver_email", "Email"],
                                ["receiver_phone", "Phone"],
                            ].map(([name, placeholder]) => (
                                <div key={name}>
                                    <Field name={name} placeholder={placeholder} className="input" />
                                    <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shipment Details */}
                    <div>
                        <h2 className="font-semibold text-lg mb-2">Shipment Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                ["service_type", "Service Type"],
                                ["weight", "Weight (kg)"],
                                ["description", "Description of Goods"],
                                ["quantity", "Quantity"],
                                ["unit_value", "Unit Value"],
                            ].map(([name, placeholder]) => (
                                <div key={name}>
                                    <Field name={name} placeholder={placeholder} className="input" />
                                    <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
                                </div>
                            ))}
                            <div>
                                <Field type="date" name="date_shipped" className="input" />
                                <ErrorMessage name="date_shipped" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <Field type="date" name="expected_delivery_date" className="input" />
                                <ErrorMessage name="expected_delivery_date" component="div" className="text-red-500 text-sm" />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="w-full md:w-auto bg-blue-600 text-white font-medium py-2 px-6 rounded-lg">
                        {isSubmitting ? `Creating` : `Create`}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Shipment;
