import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Hero3 = () => {
    return (
        <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(/Image/hero4.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 p-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center">
                    Create Shipment
                </h1>

            </div>
        </section>
    );
}

export default Hero3;
