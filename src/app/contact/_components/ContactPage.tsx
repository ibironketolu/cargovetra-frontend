"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonVariant from '@/components/ButtonVariant';


const ContactPage: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: async (values) => {
            setIsSubmitting(true);
            // Placeholder for form submission logic (e.g., API call)
            console.log(values);
            setTimeout(() => setIsSubmitting(false), 2000); // Simulating an async process
        },
    });

    return (
        <div className="container mx-auto px-6 py-10">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-semibold text-black">Contact Us</h1>
                <p className="text-lg text-gray-500 mt-2">
                    Feel free to reach out. We&apos;re here to help you.
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            rows={5}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        {formik.touched.message && formik.errors.message && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <ButtonVariant
                            variant="primary"
                            onClick={() => console.log('Button clicked!')}
                            disabled={isSubmitting} // Disabled if the form is submitting
                        >
                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                        </ButtonVariant>
                    </div>
                </form>
            </div>

            {/* Optional: Address and Map */}
            <div className="mt-10 text-center">
                <h3 className="text-xl font-semibold text-black">Our Location</h3>
                <p className="text-lg text-gray-500">1234 Some Street, City, Country</p>
                <div className="mt-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110756.37168907456!2d-95.90913664617044!3d29.831478181957007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864127e951dfa36b%3A0x7223df85771008b!2sKaty%2C%20TX%2077449%2C%20USA!5e0!3m2!1sen!2sjp!4v1745592203136!5m2!1sen!2sjp"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map - Katy, TX"
                    ></iframe>
                </div>


            </div>
        </div>
    );
};

export default ContactPage;
