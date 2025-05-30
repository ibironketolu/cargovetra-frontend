"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFilePicker } from "use-file-picker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

type ShipmentFormValues = {
    sender_name: string;
    sender_contact_name: string;
    sender_address: string;
    sender_postal_code: string;
    sender_city: string;
    sender_other_info: string;
    sender_email: string;
    sender_phone: string;

    receiver_name: string;
    receiver_contact_name: string;
    receiver_address: string;
    receiver_postal_code: string;
    receiver_city: string;
    receiver_other_info: string;
    receiver_email: string;
    receiver_phone: string;

    service_type: string;

    weight: string;
    date_shipped: string;
    expected_delivery_date: string;
    description: string;
    quantity: string;
    unit_value: string;
};


const Shipment = () => {

    const [image, setImage] = useState(false);

    const [imagePicker, { filesContent, plainFiles, clear }] = useFilePicker({
        readAs: "DataURL",
        accept: ["image/*", "pdf"],
        multiple: false,
        limitFilesConfig: { max: 1 },
        maxFileSize: 1,
    });

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

                weight: "", // previously ""
                date_shipped: "", // string is fine, will be parsed to date
                expected_delivery_date: "", // string is fine
                description: "",
                quantity: "",
                unit_value: "", // previously ""
            }}
            validationSchema={trackingSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                //     try {

                //         const formData = new FormData();

                // // Append each key-value pair to formData
                // Object.entries(values).forEach(([key, value]) => {
                //     formData.append(key, value as any);
                // });

                // // Append image and tags to formData
                // if (filesContent.length > 0) {
                //     formData.append("images", plainFiles[0]);
                // }


                //         const response = await fetch("https://api.cargovetra.com/api/shipments", {
                //             method: "POST",
                //             headers: {
                //                 "Content-Type": "application/json",
                //             },
                //             body: JSON.stringify(formData),
                //         });

                //         if (!response.ok) {
                //             const errorData = await response.json();
                //             throw new Error(errorData.message || "Failed to create shipment.");
                //         }

                //         const result = await response.json();
                //         toast.success(`Shipment created successfully!`)
                //         console.log("Response:", result);
                //         resetForm();
                //     } catch (error) {
                //         console.error("Submission error:", error);
                //         alert("An error occurred while creating the shipment.");
                //     } finally {
                //         setSubmitting(false);
                //     }
                try {
                    const formData = new FormData();

                    // Append each key-value pair to formData
                    Object.entries(values).forEach(([key, value]) => {
                        formData.append(key, value as any);
                    });

                    // Append image file if present
                    if (plainFiles.length > 0) {
                        formData.append("images", plainFiles[0]);
                    }

                    const response = await fetch("https://api.cargovetra.com/api/shipments", {
                        method: "POST",
                        body: formData, // send FormData directly
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message || "Failed to create shipment.");
                    }

                    const result = await response.json();
                    toast.success(`Shipment created successfully!`);
                    clear()
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
                            {/* <div>
                                <Field type="date" name="date_shipped" className="input" />
                                <ErrorMessage name="date_shipped" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <Field type="date" name="expected_delivery_date" className="input" />
                                <ErrorMessage name="expected_delivery_date" component="div" className="text-red-500 text-sm" />
                            </div> */}
                            <Field name="date_shipped">
                                {({ field, form }: any) => (
                                    <DatePicker
                                        className="input"
                                        selected={field.value ? new Date(field.value) : null}
                                        onChange={(date) => form.setFieldValue(field.name, date)}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Date Shipped"
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="date_shipped" component="div" className="text-red-500 text-sm" />

                            <Field name="expected_delivery_date">
                                {({ field, form }: any) => (
                                    <DatePicker
                                        className="input"
                                        selected={field.value ? new Date(field.value) : null}
                                        onChange={(date) => form.setFieldValue(field.name, date)}
                                        dateFormat="yyyy-MM-dd"
                                        placeholderText="Expected Delivery"
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="expected_delivery_date" component="div" className="text-red-500 text-sm" />
                        </div>
                    </div>


                    <div className='mt-5'>
                        <label htmlFor='' className='text-sm font-medium '>
                            Upload Image
                        </label>
                        <div onClick={() => imagePicker()} className='w-full py-4 cursor-pointer rounded-lg shadow border border-gray-300 text-gray-500'>
                            <div className='text-center'>
                                {filesContent.length ? (
                                    <>
                                        {filesContent.map((file, index) => (
                                            <div
                                                className=' mb-10 flex justify-center'
                                                key={index}
                                            >
                                                <img
                                                    style={{
                                                        width: "150px",
                                                        height: "150px",
                                                    }}
                                                    className='max-w-sm '
                                                    alt={file.name}
                                                    src={file.content}
                                                ></img>
                                                <br />
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {image ? (
                                            <div className='flex justify-center'>
                                                <img
                                                    className='max-w-[150px] rounded-lg inline'
                                                    src={
                                                        ``
                                                    }
                                                // src={
                                                // 	selectedEpisodeInfo.rss_details.picture_url
                                                // }
                                                ></img>
                                            </div>
                                        ) : (
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth={1.5}
                                                stroke='currentColor'
                                                className='w-32 inline'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                                                />
                                            </svg>
                                        )}
                                    </>
                                )}
                                <div className='text-xs text-black-100 mt-14 px-6'>
                                    We recommend uploading an artwork of at least 1400x1400
                                    pixels and maximum 1MB. We support jpg, png, gif and
                                    tiff formats.
                                </div>
                                <div className='mt-4'>
                                    <button
                                        type='button'

                                        className='bg-white rounded-full py-2 px-4 text-sm font-semibold text-black-100'
                                    >
                                        Upload image
                                    </button>
                                </div>
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
