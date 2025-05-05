'use client'
import React, { useEffect, useRef } from 'react'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Hero3 from '@/components/Hero3'
import Shipment from './_components/Shipment'

const Page = () => {
    const shipmentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        shipmentRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <div>
            <Navbar />
            <Hero3 />
            <div ref={shipmentRef}>
                <Shipment />
            </div>
            <FooterSection />
        </div>
    )
}

export default Page
