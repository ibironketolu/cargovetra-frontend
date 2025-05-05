import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Hero2 = () => {
    return (
        <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/Image/hero3.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 p-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center">
                    Trusted and Efficient Supply Chain Logistics
                </h1>
                <p className="text-lg md:text-2xl mt-4 text-center">We ensure the smooth flow of goods across the globe</p>

            </div>
        </section>
    );
}

export default Hero2;
