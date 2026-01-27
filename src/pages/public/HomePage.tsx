'use client';

import { useState, useEffect, useRef } from 'react';

export default function HomePage() {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for mobile accordions
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  
  // State for FAQ accordions
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef<number>();

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Mobile accordion toggle
  const toggleMobileAccordion = (name: string) => {
    setOpenMobileAccordion(openMobileAccordion === name ? null : name);
  };

  // FAQ toggle
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Carousel navigation
  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % 3);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + 3) % 3);
  };

  // Auto-rotate carousel
  useEffect(() => {
    autoRotateRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, []);

  // Update carousel transform
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }
  }, [currentTestimonial]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#mobileMenu') && !target.closest('#mobileMenuBtn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Sticky Navigation */}
      <nav id="mainNav" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="index.html" className="flex items-center space-x-3">
                <img src="https://buildvest.net/buildvest-logo.png" alt="BuildVest" className="h-10 w-auto" onError={(e) => { e.currentTarget.src = 'https://buildvest.net/buildvest-logo.png?q=80&w=200&auto=format&fit=crop'; }} />
              </a>
            </div>

            {/* Desktop Navigation with Mega Dropdowns */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Investments Dropdown */}
              <div className="relative group">
                <button className="nav-link-with-dropdown text-text-primary hover:text-primary transition-colors duration-150 font-semibold flex items-center space-x-1">
                  <span>Investments</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="mega-dropdown absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-sm font-bold text-text-primary mb-3">For Investors</p>
                      <ul className="space-y-2">
                        <li><a href="pages/landing_page.html" className="block px-4 py-2 rounded-lg hover:bg-primary-50 text-text-secondary hover:text-primary transition-colors">Investment Overview</a></li>
                        <li><a href="#how-it-works" className="block px-4 py-2 rounded-lg hover:bg-primary-50 text-text-secondary hover:text-primary transition-colors">How It Works</a></li>
                        <li><a href="pages/investment_marketplace.html" className="block px-4 py-2 rounded-lg hover:bg-primary-50 text-text-secondary hover:text-primary transition-colors">Browse Opportunities</a></li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-text-tertiary">Minimum $100 · Fractional ownership · Blockchain-transparent</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="nav-link-with-dropdown text-text-primary hover:text-primary transition-colors duration-150 font-semibold flex items-center space-x-1">
                  <span>Solutions</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="mega-dropdown absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-sm font-bold text-text-primary mb-3">For Asset Originators & Institutions</p>
                      <ul className="space-y-2">
                        <li><a href="pages/originator_onboarding.html" className="block px-4 py-2 rounded-lg hover:bg-secondary-50 text-text-secondary hover:text-secondary transition-colors">Tokenization Overview</a></li>
                        <li><a href="pages/real_estate_developers.html" className="block px-4 py-2 rounded-lg hover:bg-secondary-50 text-text-secondary hover:text-secondary transition-colors">For Real Estate Developers</a></li>
                        <li><a href="pages/corporate_debt_private_placements.html" className="block px-4 py-2 rounded-lg hover:bg-secondary-50 text-text-secondary hover:text-secondary transition-colors">For Corporate Equity & Debt</a></li>
                        <li><a href="pages/infrastructure_projects_landing_page.html" className="block px-4 py-2 rounded-lg hover:bg-secondary-50 text-text-secondary hover:text-secondary transition-colors">For Infrastructure Projects</a></li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-text-tertiary">Raise from $1M–$100M+ with global investors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Dropdown */}
              <div className="relative group">
                <button className="nav-link-with-dropdown text-text-primary hover:text-primary transition-colors duration-150 font-semibold flex items-center space-x-1">
                  <span>About</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="mega-dropdown absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="p-6">
                    <ul className="space-y-2">
                      <li><a href="/pages/about_build_vest.html" className="block px-4 py-2 rounded-lg hover:bg-surface text-text-secondary hover:text-text-primary transition-colors">Company</a></li>
                      <li><a href="pages/frequently_asked_questions.html" className="block px-4 py-2 rounded-lg hover:bg-surface text-text-secondary hover:text-text-primary transition-colors">FAQs</a></li>
                      <li><a href="#" className="block px-4 py-2 rounded-lg hover:bg-surface text-text-secondary hover:text-text-primary transition-colors">Blog</a></li>
                      <li><a href="pages/legal_compliance_center.html" className="block px-4 py-2 rounded-lg hover:bg-surface text-text-secondary hover:text-text-primary transition-colors">Legal & Compliance</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="pages/authentication_hub.html" className="btn btn-outline">Sign In</a>
              <div className="relative group">
                <button className="btn btn-primary flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-3">
                    <a href="pages/investment_marketplace.html" className="block px-4 py-3 rounded-lg hover:bg-primary-50 text-text-primary hover:text-primary transition-colors">
                      <div className="font-semibold">Invest Now</div>
                      <div className="text-xs text-text-secondary">Browse opportunities</div>
                    </a>
                    <a href="pages/originator_onboarding.html" className="block px-4 py-3 rounded-lg hover:bg-secondary-50 text-text-primary hover:text-secondary transition-colors">
                      <div className="font-semibold">List Your Asset</div>
                      <div className="text-xs text-text-secondary">For originators</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              id="mobileMenuBtn" 
              className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors duration-150 touch-target" 
              aria-label="Toggle mobile menu"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobileMenu" className={`${isMobileMenuOpen ? '' : 'hidden'} lg:hidden bg-white border-t border-border shadow-lg max-h-screen overflow-y-auto`}>
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Investments Accordion */}
            <div className="mobile-accordion">
              <button 
                className="mobile-accordion-btn w-full flex items-center justify-between py-2 text-text-primary font-semibold"
                onClick={() => toggleMobileAccordion('investments')}
              >
                <span>Investments</span>
                <svg className={`w-5 h-5 transition-transform duration-200 ${openMobileAccordion === 'investments' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`mobile-accordion-content ${openMobileAccordion === 'investments' ? '' : 'hidden'} pl-4 pt-2 space-y-2`}>
                <a href="pages/landing_page.html" className="block py-2 text-text-secondary hover:text-primary">Investment Overview</a>
                <a href="#how-it-works" className="block py-2 text-text-secondary hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
                <a href="pages/investment_marketplace.html" className="block py-2 text-text-secondary hover:text-primary">Browse Opportunities</a>
              </div>
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="mobile-accordion">
              <button 
                className="mobile-accordion-btn w-full flex items-center justify-between py-2 text-text-primary font-semibold"
                onClick={() => toggleMobileAccordion('solutions')}
              >
                <span>Solutions</span>
                <svg className={`w-5 h-5 transition-transform duration-200 ${openMobileAccordion === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`mobile-accordion-content ${openMobileAccordion === 'solutions' ? '' : 'hidden'} pl-4 pt-2 space-y-2`}>
                <a href="pages/originator_onboarding.html" className="block py-2 text-text-secondary hover:text-secondary">Tokenization Overview</a>
                <a href="pages/real_estate_developers.html" className="block py-2 text-text-secondary hover:text-secondary">For Real Estate Developers</a>
                <a href="pages/corporate_debt_private_placements.html" className="block py-2 text-text-secondary hover:text-secondary">For Corporate Equity & Debt</a>
                <a href="pages/infrastructure_projects.html" className="block py-2 text-text-secondary hover:text-secondary">For Infrastructure Projects</a>
              </div>
            </div>

            {/* Mobile About Accordion */}
            <div className="mobile-accordion">
              <button 
                className="mobile-accordion-btn w-full flex items-center justify-between py-2 text-text-primary font-semibold"
                onClick={() => toggleMobileAccordion('about')}
              >
                <span>About</span>
                <svg className={`w-5 h-5 transition-transform duration-200 ${openMobileAccordion === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`mobile-accordion-content ${openMobileAccordion === 'about' ? '' : 'hidden'} pl-4 pt-2 space-y-2`}>
                <a href="pages/about_build_vest.html" className="block py-2 text-text-secondary">Company</a>
                <a href="pages/frequently_asked_questions.html" className="block py-2 text-text-secondary">FAQs</a>
                <a href="#" className="block py-2 text-text-secondary">Blog</a>
                <a href="pages/legal_compliance_center.html" className="block py-2 text-text-secondary">Legal & Compliance</a>
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-3 border-t border-border">
              <a href="pages/authentication_hub.html" className="block w-full btn btn-outline text-center">Sign In</a>
              <a href="pages/investment_marketplace.html" className="block w-full btn btn-primary text-center">Invest Now</a>
              <a href="pages/originator_onboarding.html" className="block w-full btn bg-secondary text-white hover:bg-secondary-dark text-center">List Your Asset</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Full-Bleed Cinematic Background */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1610309064113-e627f69914c3" 
               alt="Modern architecture" 
               className="w-full h-full object-cover" 
               onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920'; }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:w-2/3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Democratizing Access To The Best Real-World Assets
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Invest fractionally from $100 or tokenize your assets to raise capital globally. Transparent, compliant, and powered by blockchain.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="pages/investment_marketplace.html" className="btn btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl">
                <span>Browse Investments</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </a>
              <a href="pages/originator_onboarding.html" className="btn bg-white text-text-primary hover:bg-gray-100 text-lg px-8 py-4 flex items-center justify-center space-x-2 shadow-xl">
                <span>Tokenize Your Asset</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                <span className="text-sm font-semibold">SEC & MAS Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <span className="text-sm font-semibold">Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span className="text-sm font-semibold">Instant Settlement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Path Trust Bar */}
      <section className="py-12 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* For Investors Card */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/30 hover:border-primary/50 transition-all duration-300 card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">For Investors</h3>
                  <div className="flex flex-wrap gap-4 text-white/90">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm font-semibold">12% avg. IRR</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm font-semibold">Blockchain yields</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm font-semibold">$100 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* For Originators Card */}
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm rounded-2xl p-8 border border-secondary/30 hover:border-secondary/50 transition-all duration-300 card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">For Originators</h3>
                  <div className="flex flex-wrap gap-4 text-white/90">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm font-semibold">Raise faster</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm font-semibold">Global liquidity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm font-semibold">Full compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Institutions Choose BuildVest */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Why Institutions Choose BuildVest</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">Enterprise-grade infrastructure trusted by leading originators and investors worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Regulated & Compliant */}
            <div className="card text-center p-8 card-hover">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Regulated & Compliant</h3>
              <p className="text-text-secondary">FCA/SEC-grade compliance infrastructure with full audit trails and regulatory reporting</p>
            </div>

            {/* Blockchain Settlement */}
            <div className="card text-center p-8 card-hover">
              <div className="w-20 h-20 mx-auto mb-6 bg-secondary-100 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Blockchain Settlement</h3>
              <p className="text-text-secondary">Instant USDC settlement with transparent on-chain tracking and automated distributions</p>
            </div>

            {/* Secondary Trading */}
            <div className="card text-center p-8 card-hover">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent-100 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Secondary Trading</h3>
              <p className="text-text-secondary">Built-in liquidity marketplace for fractional shares with transparent price discovery</p>
            </div>

            {/* Emerging Market Expertise */}
            <div className="card text-center p-8 card-hover">
              <div className="w-20 h-20 mx-auto mb-6 bg-warning-100 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Emerging Market Expertise</h3>
              <p className="text-text-secondary">Deep network across Africa, Asia, and LatAm with local regulatory knowledge</p>
            </div>

            {/* Transparent Fees */}
            <div className="card text-center p-8 card-hover">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Transparent Fees</h3>
              <p className="text-text-secondary">No hidden costs - simple, competitive fee structure with volume discounts</p>
            </div>

            {/* Proven Track Record */}
            <div className="card text-center p-8 card-hover">
              <div className="w-20 h-20 mx-auto mb-6 bg-secondary-100 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Proven Track Record</h3>
              <p className="text-text-secondary">$45M+ in assets tokenized, 12.5% average returns, zero security incidents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Investment Opportunities */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Live Investment Opportunities</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">Curated real-world assets with verified due diligence and transparent returns</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Investment Card 1 */}
            <div className="card card-hover group cursor-pointer" onClick={() => window.location.href='pages/asset_detail_page.html'}>
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1c1976c8f-1764642434838.png" alt="Downtown Office Complex" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.src='https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-success text-xs">Verified</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="badge bg-white/90 text-text-primary text-xs">Real Estate</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">Downtown Office Complex</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Target Return</p>
                    <p className="text-base font-bold text-secondary">14.2% APY</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Min. Investment</p>
                    <p className="text-base font-bold text-text-primary">$100</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-secondary">Funding</span>
                    <span className="font-semibold text-text-primary">68%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{width: '68%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-text-tertiary">245 investors</span>
                </div>
              </div>
            </div>

            {/* Investment Card 2 */}
            <div className="card card-hover group cursor-pointer" onClick={() => window.location.href='pages/asset_detail_page.html'}>
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img src="https://images.unsplash.com/photo-1601248864740-4170e5199963" alt="Solar Energy Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.src='https://images.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_1280.jpg'; }} />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-success text-xs">Verified</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="badge bg-white/90 text-text-primary text-xs">Infrastructure</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">Solar Energy Project</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Target Return</p>
                    <p className="text-base font-bold text-secondary">11.8% APY</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Min. Investment</p>
                    <p className="text-base font-bold text-text-primary">$100</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-secondary">Funding</span>
                    <span className="font-semibold text-text-primary">92%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-text-tertiary">412 investors</span>
                </div>
              </div>
            </div>

            {/* Investment Card 3 */}
            <div className="card card-hover group cursor-pointer" onClick={() => window.location.href='pages/asset_detail_page.html'}>
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img src="https://images.unsplash.com/photo-1613232218235-06b473107ca9" alt="Luxury Apartments" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.src='https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-success text-xs">Verified</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="badge bg-white/90 text-text-primary text-xs">Real Estate</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">Luxury Apartments</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Target Return</p>
                    <p className="text-base font-bold text-secondary">13.5% APY</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Min. Investment</p>
                    <p className="text-base font-bold text-text-primary">$100</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-secondary">Funding</span>
                    <span className="font-semibold text-text-primary">45%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-text-tertiary">189 investors</span>
                </div>
              </div>
            </div>

            {/* Investment Card 4 */}
            <div className="card card-hover group cursor-pointer" onClick={() => window.location.href='pages/asset_detail_page.html'}>
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img src="https://img.rocket.new/generatedImages/rocket_gen_img_11f9882c0-1764686105555.png" alt="Industrial Warehouse" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.src='https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-success text-xs">Verified</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="badge bg-white/90 text-text-primary text-xs">Logistics</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">Industrial Warehouse</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Target Return</p>
                    <p className="text-base font-bold text-secondary">10.5% APY</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary mb-1">Min. Investment</p>
                    <p className="text-base font-bold text-text-primary">$100</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-secondary">Funding</span>
                    <span className="font-semibold text-text-primary">78%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-text-tertiary">324 investors</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="pages/investment_marketplace.html" className="btn btn-primary text-lg px-10 py-4">
              View All Opportunities
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Tokenize Your Asset with BuildVest */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative animate-slide-up order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1a5ce3135-1764877271399.png" 
                     alt="Luxury real estate construction project representing asset tokenization opportunities" 
                     className="w-full h-auto object-cover"
                     onError={(e) => { e.currentTarget.src='https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1000'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/30 to-transparent"></div>
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 hidden md:block">
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary mb-1">$45M+</p>
                  <p className="text-sm text-text-secondary">Assets Tokenized</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-secondary-100 rounded-full mb-6">
                <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                <span className="text-sm font-semibold text-secondary">For Asset Originators</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
                Raise Capital Globally — Faster, Cheaper, Borderless
              </h2>

              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Transform your real-world assets into digital securities and access a global pool of investors. From $1M to $100M+ in funding.
              </p>

              {/* 4 Benefit Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1">Reach thousands instantly</h4>
                    <p className="text-sm text-text-secondary">Access 10,000+ global investors</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1">Fractionalize any asset</h4>
                    <p className="text-sm text-text-secondary">Real estate, funds, infrastructure</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1">Automated compliance</h4>
                    <p className="text-sm text-text-secondary">KYC/AML & regulatory reporting</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-1">Customizable terms</h4>
                    <p className="text-sm text-text-secondary">Retain control, set your own rules</p>
                  </div>
                </div>
              </div>

              <a href="pages/originator_onboarding.html" className="btn bg-secondary text-white hover:bg-secondary-dark text-lg px-10 py-4 shadow-lg inline-flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Start Onboarding
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">How BuildVest Works</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">Start investing in real-world assets in four simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Browse Assets</h3>
              <p className="text-text-secondary">Explore verified investment opportunities across real estate, infrastructure, and emerging markets</p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-secondary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Review Details</h3>
              <p className="text-text-secondary">Access comprehensive due diligence, financial projections, and originator information</p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-accent-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Invest Securely</h3>
              <p className="text-text-secondary">Start with just $100 using USDC, card, or bank transfer with bank-level security</p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-warning-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-warning text-white rounded-full flex items-center justify-center font-bold">4</div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Track Returns</h3>
              <p className="text-text-secondary">Monitor your portfolio performance and receive returns directly to your wallet</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="pages/investment_marketplace.html" className="btn btn-primary text-lg px-10 py-4">Get Started Now</a>
          </div>
        </div>
      </section>

      {/* Investor Stories */}
      <section id="testimonials" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Investor Stories</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">Real experiences from investors building wealth with BuildVest</p>
          </div>

          <div className="relative">
            <div id="testimonialCarousel" className="overflow-hidden">
              <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out">
                {/* Testimonial 1 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="card p-8 max-w-4xl mx-auto">
                    <div className="flex items-start space-x-4 mb-6">
                      <img src="https://img.rocket.new/generatedImages/rocket_gen_img_18e923eda-1763300306278.png" alt="Sarah Johnson investor" className="w-16 h-16 rounded-full object-cover flex-shrink-0" onError={(e) => { e.currentTarget.src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'; }} />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <h4 className="font-bold text-text-primary">Sarah Johnson</h4>
                        <p className="text-sm text-text-secondary">Real Estate Investor</p>
                      </div>
                    </div>
                    <p className="text-lg text-text-primary leading-relaxed italic">"BuildVest has completely transformed how I invest in real estate. The transparency and low minimum investment made it possible for me to diversify my portfolio across multiple properties. I've seen consistent returns and the platform is incredibly easy to use."</p>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="card p-8 max-w-4xl mx-auto">
                    <div className="flex items-start space-x-4 mb-6">
                      <img src="https://img.rocket.new/generatedImages/rocket_gen_img_11a2e4a58-1763295038790.png" alt="Michael Chen investor" className="w-16 h-16 rounded-full object-cover flex-shrink-0" onError={(e) => { e.currentTarget.src='https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'; }} />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <h4 className="font-bold text-text-primary">Michael Chen</h4>
                        <p className="text-sm text-text-secondary">Tech Professional</p>
                      </div>
                    </div>
                    <p className="text-lg text-text-primary leading-relaxed italic">"As someone new to real estate investing, BuildVest made the entire process straightforward and accessible. The detailed due diligence reports gave me confidence in my investment decisions. I started with just $100 and now have a growing portfolio."</p>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="card p-8 max-w-4xl mx-auto">
                    <div className="flex items-start space-x-4 mb-6">
                      <img src="https://img.rocket.new/generatedImages/rocket_gen_img_18e923eda-1763300306278.png" alt="Emily Rodriguez investor" className="w-16 h-16 rounded-full object-cover flex-shrink-0" onError={(e) => { e.currentTarget.src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'; }} />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                          <svg className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <h4 className="font-bold text-text-primary">Emily Rodriguez</h4>
                        <p className="text-sm text-text-secondary">Financial Advisor</p>
                      </div>
                    </div>
                    <p className="text-lg text-text-primary leading-relaxed italic">"I recommend BuildVest to my clients looking for alternative investment opportunities. The platform's security measures and regulatory compliance give me peace of mind. The returns have been impressive and the dashboard makes tracking everything simple."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-surface transition-colors duration-150 touch-target z-10" aria-label="Previous testimonial">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-surface transition-colors duration-150 touch-target z-10" aria-label="Next testimonial">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              <button onClick={() => goToTestimonial(0)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === 0 ? 'bg-primary' : 'bg-surface-200'}`} aria-label="Go to testimonial 1"></button>
              <button onClick={() => goToTestimonial(1)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === 1 ? 'bg-primary' : 'bg-surface-200'}`} aria-label="Go to testimonial 2"></button>
              <button onClick={() => goToTestimonial(2)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === 2 ? 'bg-primary' : 'bg-surface-200'}`} aria-label="Go to testimonial 3"></button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-text-secondary">Everything you need to know about investing with BuildVest</p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="card overflow-hidden">
              <button 
                onClick={() => toggleFAQ(0)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 0}
              >
                <span className="font-semibold text-text-primary pr-4">What is the minimum investment amount?</span>
                <svg className={`w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300 ${openFAQ === 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`${openFAQ === 0 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">The minimum investment amount on BuildVest is just $100. This low barrier to entry allows investors of all levels to access fractional ownership in real-world assets and build diversified portfolios without requiring large capital commitments.</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="card overflow-hidden">
              <button 
                onClick={() => toggleFAQ(1)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 1}
              >
                <span className="font-semibold text-text-primary pr-4">How are returns distributed to investors?</span>
                <svg className={`w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300 ${openFAQ === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`${openFAQ === 1 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">Returns are distributed directly to your BuildVest wallet on a quarterly basis. You can choose to reinvest your returns into new opportunities or withdraw them to your bank account or USDC wallet. All distributions are transparent and tracked in your dashboard.</p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="card overflow-hidden">
              <button 
                onClick={() => toggleFAQ(2)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 2}
              >
                <span className="font-semibold text-text-primary pr-4">What types of assets can I invest in?</span>
                <svg className={`w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300 ${openFAQ === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`${openFAQ === 2 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">BuildVest offers tokenized investments in commercial real estate, residential properties, infrastructure projects, renewable energy installations, and other verified real-world assets. Each opportunity undergoes rigorous due diligence before being listed on our marketplace.</p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="card overflow-hidden">
              <button 
                onClick={() => toggleFAQ(3)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 3}
              >
                <span className="font-semibold text-text-primary pr-4">Is my investment secure?</span>
                <svg className={`w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300 ${openFAQ === 3 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`${openFAQ === 3 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">Yes. BuildVest employs bank-level security with 256-bit encryption, multi-factor authentication, and cold storage for digital assets. We are fully SEC compliant and all investments are backed by legal ownership structures. Your funds are held in segregated accounts for maximum protection.</p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="card overflow-hidden">
              <button 
                onClick={() => toggleFAQ(4)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 4}
              >
                <span className="font-semibold text-text-primary pr-4">Can I sell my investment shares?</span>
                <svg className={`w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300 ${openFAQ === 4 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`${openFAQ === 4 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">Yes, BuildVest offers a secondary marketplace where you can list your investment shares for sale to other investors. Liquidity varies by asset, but this feature provides flexibility to exit positions before the investment term ends. Transaction fees apply to secondary market sales.</p>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="card overflow-hidden">
              <button 
                onClick={() => toggleFAQ(5)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 5}
              >
                <span className="font-semibold text-text-primary pr-4">What payment methods are accepted?</span>
                <svg className={`w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300 ${openFAQ === 5 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`${openFAQ === 5 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">We accept USDC (stablecoin), credit/debit cards, and bank transfers (ACH). USDC transactions are processed instantly, while card and bank transfers may take 1-3 business days to clear. All payment methods are secure and encrypted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23FFFFFF\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Start Building Wealth?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Join thousands of investors and originators transforming real-world asset markets. Start with just $100 or tokenize your first asset today.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="pages/investment_marketplace.html" className="btn bg-white text-primary hover:bg-primary-50 text-lg px-10 py-4 shadow-lg font-bold">
              Browse Investments
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            <a href="pages/originator_onboarding.html" className="btn bg-secondary text-white hover:bg-secondary-dark text-lg px-10 py-4 shadow-lg font-bold">
              Tokenize Your Asset
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="font-semibold">No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="font-semibold">Transparent Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="font-semibold">Secure Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://buildvest.net/img/BuildvestLogo_icon_white.png" alt="BuildVest footer logo" className="h-8 w-auto" onError={(e) => { e.currentTarget.src='https://buildvest.net/img/BuildvestLogo_icon_white.png?q=80&w=200&auto=format&fit=crop'; }} />
                <span className="text-xl font-bold">BuildVest</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Democratizing access to high-yield real-world assets through blockchain technology.</p>
              <div className="flex items-center gap-4">
                <div className="text-xs text-slate-500">Regulatory Certifications</div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="pages/landing_page.html" className="text-slate-400 hover:text-white transition-colors duration-150">For Investors</a></li>
                <li><a href="pages/originator_onboarding.html" className="text-slate-400 hover:text-white transition-colors duration-150">For Originators</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="pages/about_build_vest.html" className="text-slate-400 hover:text-white transition-colors duration-150">About</a></li>
                <li><a href="pages/frequently_asked_questions.html" className="text-slate-400 hover:text-white transition-colors duration-150">FAQs</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-150">Blog</a></li>
                <li><a href="pages/legal_compliance_center.html" className="text-slate-400 hover:text-white transition-colors duration-150">Legal & Compliance</a></li>
              </ul>
            </div>

            {/* Social & Support */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex items-center space-x-4 mb-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-150" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-150" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-150" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="border-t border-slate-800 pt-8 mb-8">
            <div className="text-xs text-slate-500 leading-relaxed space-y-2">
              <p><strong className="text-slate-400">Investment Disclaimer:</strong> Investing involves risks, including loss of principal. Past performance is not indicative of future results. BuildVest is not a financial advisor; consult professionals before investing. All investments are subject to regulatory approval and due diligence.</p>
              <p><strong className="text-slate-400">Regulatory Compliance:</strong> BuildVest operates under applicable securities regulations. All offerings are subject to regulatory review and approval. Please review our Legal & Compliance section for detailed information.</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">© 2026 BuildVest. All Rights Reserved.</p>
              <div className="flex items-center space-x-6 text-xs text-slate-500">
                <a href="pages/legal_compliance_center.html" className="hover:text-slate-400 transition-colors">Terms of Service</a>
                <a href="pages/legal_compliance_center.html" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
                <a href="pages/legal_compliance_center.html" className="hover:text-slate-400 transition-colors">Risk Disclosure</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
