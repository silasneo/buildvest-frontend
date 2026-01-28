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
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">Featured Investment Opportunities</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">Explore curated real-world assets with verified due diligence and transparent returns</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Investment Card 1 */}
            <div className="card card-hover group cursor-pointer" onClick={() => window.location.href='asset_detail_page.html'}>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img src="https://images.unsplash.com/photo-1659384899570-49a0ad1f545a" alt="Modern commercial office building in downtown business district" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800'; (e.target as HTMLImageElement).onerror = null; }} />
                <div className="absolute top-4 left-4">
                  <span className="badge badge-success">Verified</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="badge bg-white text-text-primary">Real Estate</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">Downtown Office Complex</h3>
                <p className="text-text-secondary mb-4 line-clamp-2">Prime commercial property in growing business district with long-term tenants</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Target Return</p>
                    <p className="text-lg font-bold text-secondary">14.2% APY</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Min. Investment</p>
                    <p className="text-lg font-bold text-text-primary">$100</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-secondary">Funding Progress</span>
                    <span className="font-semibold text-text-primary">68%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{width: '68%'}}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1d72e8d2f-1763293273692.png" alt="Professional real estate developer profile photo" className="w-8 h-8 rounded-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'; (e.target as HTMLImageElement).onerror = null; }} />
                    <span className="text-sm font-medium text-text-secondary">Urban Developments</span>
                  </div>
                  <span className="text-sm text-text-tertiary">245 investors</span>
                </div>
              </div>
            </div>

            {/* Investment Card 2 */}
            <div className="card card-hover group cursor-pointer" onClick={() => window.location.href='asset_detail_page.html'}>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img src="https://img.rocket.new/generatedImages/rocket_gen_img_10f82e5b0-1764101895376.png" alt="Solar panel farm renewable energy infrastructure project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_1280.jpg'; (e.target as HTMLImageElement).onerror = null; }} />
                <div className="absolute top-4 left-4">
                  <span className="badge badge-success">Verified</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="badge bg-white text-text-primary">Infrastructure</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">Solar Energy Project</h3>
                <p className="text-text-secondary mb-4 line-clamp-2">Large-scale renewable energy installation with government-backed contracts</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Target Return</p>
                    <p className="text-lg font-bold text-secondary">11.8% APY</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Min. Investment</p>
                    <p className="text-lg font-bold text-text-primary">$100</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-secondary">Funding Progress</span>
                    <span className="font-semibold text-text-primary">92%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{width: '92%'}}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1b96807b8-1763296753718.png" alt="Green energy company representative profile photo" className="w-8 h-8 rounded-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'; (e.target as HTMLImageElement).onerror = null; }} />
                    <span className="text-sm font-medium text-text-secondary">GreenTech Energy</span>
                  </div>
                  <span className="text-sm text-text-tertiary">412 investors</span>
                </div>
              </div>
            </div>

            {/* Investment Card 3 */}
            <div className="card card-hover group cursor-pointer" onClick={() => window.location.href='asset_detail_page.html'}>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img src="https://images.unsplash.com/photo-1724919692221-ab499b1cbe78" alt="Luxury residential apartment complex with modern architecture" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'; (e.target as HTMLImageElement).onerror = null; }} />
                <div className="absolute top-4 left-4">
                  <span className="badge badge-success">Verified</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="badge bg-white text-text-primary">Real Estate</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">Luxury Apartments</h3>
                <p className="text-text-secondary mb-4 line-clamp-2">Premium residential development in high-demand metropolitan area</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Target Return</p>
                    <p className="text-lg font-bold text-secondary">13.5% APY</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Min. Investment</p>
                    <p className="text-lg font-bold text-text-primary">$100</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-text-secondary">Funding Progress</span>
                    <span className="font-semibold text-text-primary">45%</span>
                  </div>
                  <div className="w-full bg-surface-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{width: '45%'}}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1f683e81c-1763296551731.png" alt="Real estate investment firm founder profile photo" className="w-8 h-8 rounded-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'; (e.target as HTMLImageElement).onerror = null; }} />
                    <span className="text-sm font-medium text-text-secondary">Metro Properties</span>
                  </div>
                  <span className="text-sm text-text-tertiary">189 investors</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="investment_marketplace.html" className="btn btn-primary text-lg px-8">
              View All Opportunities
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">How BuildVest Works</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">Start investing in real-world assets in four simple steps</p>
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
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
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
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
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
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
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
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-warning text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Track Returns</h3>
              <p className="text-text-secondary">Monitor your portfolio performance and receive returns directly to your wallet</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="investment_marketplace.html" className="btn btn-primary text-lg px-8">Get Started Now</a>
          </div>
        </div>
      </section>

      {/* TRUST & SECURITY */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">Built on Trust & Security</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">Your investments are protected by industry-leading security measures</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">SEC Compliant</h3>
              <p className="text-sm text-text-secondary">Fully registered and compliant with securities regulations</p>
            </div>

            <div className="card text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Bank-Level Security</h3>
              <p className="text-sm text-text-secondary">256-bit encryption and multi-factor authentication</p>
            </div>

            <div className="card text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-100 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Verified Assets</h3>
              <p className="text-sm text-text-secondary">Rigorous due diligence on every investment opportunity</p>
            </div>

            <div className="card text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-warning-100 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Trusted Community</h3>
              <p className="text-sm text-text-secondary">Join 10,000+ investors building wealth together</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* FAQ */}
      {/* FINAL CTA */}
      {/* FOOTER */}
      {/* WAITLIST MODAL */}
    </>
  );
}
