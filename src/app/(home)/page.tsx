// import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
// import Services from "@/components/Services";
// import React from "react";
// import { NextUIProvider } from '@nextui-org/react';
// import QuotePage from "@/components/QuotePage";
// import HeroSection from "@/components/HeroSection";
// import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";
import CompanyGrid from "@/components/CompanyGrid";
import TopBar from "@/components/Test/TopBar";
import Navbar from "@/components/Test/Navbar";
import Hero from "@/components/Test/Hero";
import Services from "@/components/Services";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import OfferSection from "@/components/Test/OfferSection";

const page = () => {
	return (
		<div>
			{/* <Navbar />
			<Hero />
			
			<HeroSection />
			<ServicesSection />
			<CompanyGrid /> */}
			<TopBar />
			<Navbar />
			<Hero />
			<Services />
			<HeroSection />
			<Testimonials />
			<OfferSection />
			<TeamSection />
			<CompanyGrid />
			<FooterSection />
		</div>
	);
};

export default page;
