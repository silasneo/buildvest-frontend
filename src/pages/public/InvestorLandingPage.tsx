import React, { useState } from 'react';
import NavBar from './InvestorLandingPage/NavBar';
import Hero from './InvestorLandingPage/Hero';
import FeaturedInvestments from './InvestorLandingPage/FeaturedInvestments';
import HowItWorks from './InvestorLandingPage/HowItWorks';
import TrustSecurity from './InvestorLandingPage/TrustSecurity';
import Testimonials from './InvestorLandingPage/Testimonials';
import FAQ from './InvestorLandingPage/FAQ';
import FinalCTA from './InvestorLandingPage/FinalCTA';
import Footer from './InvestorLandingPage/Footer';
import WaitlistModal from './InvestorLandingPage/WaitlistModal';

const InvestorLandingPage: React.FC = () => {
    const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

    const openWaitlistModal = () => {
        setIsWaitlistModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeWaitlistModal = () => {
        setIsWaitlistModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="bg-background">
            <NavBar onOpenWaitlist={openWaitlistModal} />
            <Hero onOpenWaitlist={openWaitlistModal} />
            <FeaturedInvestments />
            <HowItWorks />
            <TrustSecurity />
            <Testimonials />
            <FAQ />
            <FinalCTA onOpenWaitlist={openWaitlistModal} />
            <Footer />
            <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
        </div>
    );
};

export default InvestorLandingPage;
