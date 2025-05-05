"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname(); // 👈 Get current path

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="lg:text-2xl text-xl font-bold text-red-600">CargoVetra</Link>

                {/* Mobile menu toggle */}
                <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 lg:items-center">
                    <Link
                        href="/"
                        className={`text-lg cursor-pointer ${pathname === "/" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-lg cursor-pointer ${pathname === "/contact" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/shipment"
                        className={`text-lg cursor-pointer ${pathname === "/shipment" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Shipment
                    </Link>

                </div>
                <Link href="/track" className="bg-transparent hidden lg:flex hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded">
                    Track Your Order
                </Link>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden flex flex-col space-y-4 mt-4">
                    <Link
                        href="/"
                        className={`text-lg ${pathname === "/" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-lg ${pathname === "/contact" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/shipment"
                        className={`text-lg ${pathname === "/shipment" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Shipment
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
