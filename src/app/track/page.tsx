import React from 'react'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Track from './_components/Track'
import Hero4 from '@/components/Hero4'

const page = () => {
    return (
        <div>
            <Navbar />
            <Hero4 />
            <Track />
            <FooterSection />
        </div>
    )
}

export default page