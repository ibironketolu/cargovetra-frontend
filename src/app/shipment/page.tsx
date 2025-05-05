import React from 'react'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Hero2 from '@/components/Hero2'
import Shipment from './_components/Shipment'
import Hero3 from '@/components/Hero3'

const page = () => {
    return (
        <div>
            <Navbar />
            <Hero3 />
            <Shipment />
            <FooterSection />
        </div>
    )
}

export default page