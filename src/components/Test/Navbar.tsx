"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import CallButton from "../CallButton";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const path = usePathname();
    const items = ["Home", "Pages", "Services", "Blog", "Contact"];

    return (
        <div className="bg-white shadow-sm px-4">
            <div className=" flex items-center justify-between py-2">
                <Link href="/" className="text-2xl font-bold text-brand">Cargovetra</Link>

                <button className="lg:hidden flex items-center gap-1" onClick={() => setOpen(o => !o)}>
                    <Link href="/track" className="bg-transparent hover:bg-red-600 font-semibold md:text-base text-xs hover:text-white py-2 px-4 flex items-center">
                        <span className="text-red-600">+</span>
                        Track Your Order
                    </Link>
                    {open ? <IoIosClose size={28} /> : <IoIosMenu size={28} />}
                </button>


                <div className="hidden lg:flex space-x-6 lg:items-center">
                    <Link
                        href="/"
                        className={`text-lg cursor-pointer ${path === "/" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-lg cursor-pointer ${path === "/contact" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/shipment"
                        className={`text-lg cursor-pointer ${path === "/shipment" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Shipment
                    </Link>

                </div>
                <div className="hidden lg:flex items-center gap-1">
                    <Link href="/track" className="bg-transparent  font-semibold text-base hover:text-black-100/50 py-2 px-4 flex items-center">
                        <span className="text-red-600">+</span>
                        Track Your Order
                    </Link>
                    <CallButton phone="+1-416-8241228" />
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden flex flex-col space-y-4 mt-4">
                    <Link
                        href="/"
                        className={`text-lg ${path === "/" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-lg pb-3 ${path === "/contact" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/shipment"
                        className={`text-lg pb-3 ${path === "/shipment" ? "text-red-600 font-semibold" : "text-gray-800"}`}
                    >
                        Shipment
                    </Link>
                </div>
            )}
        </div>
    );
};
export default Navbar;
