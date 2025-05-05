import React from "react";
import { Poppins, Changa } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
	subsets: ["latin-ext"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	style: ["normal"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`bg-white ${poppins.className}`}>
				<NextUIProvider>
					<ToastContainer position='top-right' hideProgressBar />
					{children}
				</NextUIProvider>
			</body>
		</html>
	);
}
