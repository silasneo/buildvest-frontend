'use client';

import { useEffect, useRef, useState } from 'react';

export default function InvestorLandingPage() {
  /* ────────────────────────────────
     STATE (collapsed)
     ──────────────────────────────── */

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [waitlistFormData, setWaitlistFormData] = useState({
    name: '',
    email: '',
  });

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuBtnRef = useRef<HTMLButtonElement>(null);

  /* ────────────────────────────────
     EFFECTS (collapsed)
     ──────────────────────────────── */

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsScrolled(currentScroll > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        mobileMenuBtnRef.current &&
        !mobileMenuBtnRef.current.contains(e.target as Node) &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  /* ────────────────────────────────
     HANDLERS (collapsed)
     ──────────────────────────────── */

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href !== '#' && href !== 'javascript:void(0)' && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* NAVIGATION */}
      <nav id="mainNav" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="../index.html" className="flex items-center space-x-3">
                <img src="https://buildvest.net/buildvest-logo.png" alt="Buildvest" className="h-10 w-auto" onError={(e) => { (e.target as HTMLImageElement).src = 'https://buildvest.net/buildvest-logo.png?q=80&w=200&auto=format&fit=crop'; (e.target as HTMLImageElement).onerror = null; }} />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-text-secondary hover:text-primary transition-colors duration-150 font-medium" onClick={(e) => handleAnchorClick(e, '#how-it-works')}>How It Works</a>
              <a href="#testimonials" className="text-text-secondary hover:text-primary transition-colors duration-150 font-medium" onClick={(e) => handleAnchorClick(e, '#testimonials')}>Testimonials</a>
              <a href="#faq" className="text-text-secondary hover:text-primary transition-colors duration-150 font-medium" onClick={(e) => handleAnchorClick(e, '#faq')}>FAQ</a>
              <a href="investment_marketplace.html" className="text-text-secondary hover:text-primary transition-colors duration-150 font-medium">Marketplace</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="authentication_hub.html" className="btn btn-primary">Join | Log in</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              ref={mobileMenuBtnRef}
              id="mobileMenuBtn" 
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors duration-150 touch-target" 
              aria-label="Toggle mobile menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div ref={mobileMenuRef} id="mobileMenu" className={`${isMobileMenuOpen ? '' : 'hidden'} md:hidden bg-white border-t border-border shadow-lg`}>
          <div className="px-4 py-6 space-y-4">
            <a href="#how-it-works" className="block text-text-secondary hover:text-primary transition-colors duration-150 font-medium py-2" onClick={(e) => handleAnchorClick(e, '#how-it-works')}>How It Works</a>
            <a href="#testimonials" className="block text-text-secondary hover:text-primary transition-colors duration-150 font-medium py-2" onClick={(e) => handleAnchorClick(e, '#testimonials')}>Testimonials</a>
            <a href="#faq" className="block text-text-secondary hover:text-primary transition-colors duration-150 font-medium py-2" onClick={(e) => handleAnchorClick(e, '#faq')}>FAQ</a>
            <a href="investment_marketplace.html" className="block text-text-secondary hover:text-primary transition-colors duration-150 font-medium py-2">Marketplace</a>
            <div className="pt-4 space-y-3">
              <a href="authentication_hub.html" className="block w-full btn btn-primary text-center">Join | Log in</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      {/* FEATURED INVESTMENTS */}
      {/* HOW IT WORKS */}
      {/* TRUST & SECURITY */}
      {/* TESTIMONIALS */}
      {/* FAQ */}
      {/* FINAL CTA */}
      {/* FOOTER */}
      {/* WAITLIST MODAL */}
    </>
  );
}
