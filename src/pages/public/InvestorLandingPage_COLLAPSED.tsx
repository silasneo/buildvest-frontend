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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-60"></div>
        <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23017EFE\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')", opacity: 0.4}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-6">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-primary">Trusted by 10,000+ Investors</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Invest in Real-World Assets Starting at <span className="text-primary">$100</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Access fractional ownership in tokenized real estate, infrastructure, and emerging market opportunities. Transparent, secure, and built for the modern investor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="investment_marketplace.html" className="btn btn-primary text-lg px-8 py-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  Browse Investments
                </a>
                <button onClick={openWaitlistModal} className="btn btn-outline text-lg px-8 py-4">
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* Hero Image/Visual */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11" 
                  alt="Modern investment platform dashboard showing real-world asset portfolio" 
                  className="w-full rounded-2xl shadow-2xl" 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; (e.target as HTMLImageElement).onerror = null; }}
                />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float z-20">
                <p className="text-sm text-text-secondary mb-1">Total Invested</p>
                <p className="text-2xl font-bold text-primary">$24.5M</p>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float-delayed z-20">
                <p className="text-sm text-text-secondary mb-1">Avg. Returns</p>
                <p className="text-2xl font-bold text-secondary">12.8% APY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
