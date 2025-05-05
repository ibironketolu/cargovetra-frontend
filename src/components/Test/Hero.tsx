"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import truckImg from "@/public/hero-truck.jpg"; // place your hero image in /public
import Link from "next/link";

const services = [
    "Ocean Freight",
    "Air Freight",
    "Land Transport",
];

const thumbnails = [
    "/Image/hero.jpg",
    "/Image/hero3.jpg",
    "/Image/hero4.jpg",
]; // add three thumbnail images

const Hero: React.FC = () => {

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);


    // auto-rotate every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % thumbnails.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // on index change, trigger a fade-in
    useEffect(() => {
        // start invisible
        setVisible(false);
        // after a tick, show (fades in)
        const t = setTimeout(() => setVisible(true), 50);
        return () => clearTimeout(t);
    }, [index]);


    const png = thumbnails[index];

    return (
        <section className="relative">
            <div
                // className="h-screen bg-cover bg-center"
                className={`
                    h-screen bg-cover bg-center
                    transition-opacity duration-1000 ease-in-out
                    ${visible ? "opacity-100" : "opacity-0"}
                  `}
                style={{ backgroundImage: `url(${png})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col justify-center px-4 lg:px-0 lg:pl-24 text-white max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                    {png === "/Image/hero.jpg" ? (
                        <>
                            Trusted and<br />
                            Efficient Supply<br />
                            Chain Logistics
                        </>
                    ) : png === "/Image/hero3.jpg" ? (
                        <>
                            Efficient Supply<br />
                            Chain Logistics
                        </>
                    ) : (
                        <>
                            Efficient And<br />
                            Reliable Logistics<br />
                            Solutions
                        </>
                    )}
                </h1>

                <Link href={`/track`} className="mt-16 bg-red-600 w-fit px-6 py-2 rounded-full inline-block text-white hover:bg-red-700 transition">
                    Track order
                </Link >

                <ul className="mt-12 flex space-x-8 text-xs font-medium uppercase">
                    {services.map((s, i) => (
                        <li key={i}>
                            <span className="font-bold">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span> {s}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="absolute bottom-8 right-8 flex space-x-4">
                {thumbnails.map((src, i) => (
                    <div
                        key={i}

                    >
                        <Image src={src} width={64} height={64} className="w-16 h-16 rounded-full overflow-hidden border-2 border-white cursor-pointer" alt={`thumb-${i}`} onClick={() => setIndex(i)} />
                    </div>
                ))}
            </div>
        </section>
    );
}


export default Hero;
