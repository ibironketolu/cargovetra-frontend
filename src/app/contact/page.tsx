import React from 'react'
import ContactPage from './_components/ContactPage'

import Hero from '@/components/Hero'
import FooterSection from '@/components/FooterSection'
import Navbar from '@/components/Navbar'
import Hero2 from '@/components/Hero2'

const page = () => {
    return (
        <div>
            <Navbar />
            <Hero2 />
            <ContactPage />
            <FooterSection />
        </div>
    )
}

export default page