'use client';

import { useState } from 'react';

export default function OriginatorOnboardingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [calculatorValues, setCalculatorValues] = useState({
    assetType: '',
    assetValue: '',
    fundingTarget: 50
  });
  const [showCalculatorResults, setShowCalculatorResults] = useState(false);
  const [calculatorResults, setCalculatorResults] = useState({
    fundingAmount: 0,
    fundingTimeline: '',
    platformFee: 0,
    netFunding: 0
  });
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const updateFundingLabel = (value: number) => {
    setCalculatorValues({ ...calculatorValues, fundingTarget: value });
  };

  const calculateFunding = () => {
    const assetValue = parseFloat(calculatorValues.assetValue) || 0;
    const fundingTarget = calculatorValues.fundingTarget / 100;

    if (calculatorValues.assetType && assetValue > 0) {
      const fundingAmount = assetValue * fundingTarget;
      const platformFee = fundingAmount * 0.025;
      const netFunding = fundingAmount - platformFee;
      
      let timeline = 14;
      if (fundingAmount < 1000000) timeline = 7;
      else if (fundingAmount < 3000000) timeline = 10;
      
      setCalculatorResults({
        fundingAmount,
        fundingTimeline: `${timeline} days`,
        platformFee,
        netFunding
      });
      
      setShowCalculatorResults(true);
    }
  };

  const openCalculator = () => {
    setIsCalculatorModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCalculator = () => {
    setIsCalculatorModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToListAsset = () => {
    const section = document.getElementById('list-asset');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <style>{`
        .originator-nav {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .originator-nav .nav-link {
            color: #e5e5e5;
            transition: color 0.3s ease;
        }
        
        .originator-nav .nav-link:hover {
            color: #017EFE;
        }
        
        .originator-nav .mobile-menu-btn svg {
            color: #e5e5e5;
        }
        
        .originator-nav .mobile-menu-btn:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        
        .originator-nav .mobile-menu {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .originator-nav .mobile-menu a {
            color: #ffffff;
        }
        
        .originator-nav .mobile-menu a:hover {
            color: #017EFE;
        }
        
        .originator-nav .mobile-menu .border-t {
            border-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        .originator-nav .btn-outline {
            border-color: rgba(255, 255, 255, 0.3);
            color: #ffffff;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
        }
        
        .originator-nav .btn-outline:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.5);
        }
        
        .originator-nav .btn-primary {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            border: none;
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .originator-nav .btn-primary:hover {
            background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
            transform: translateY(-1px);
        }
      `}</style>

      <nav id="mainNav" className="originator-nav fixed top-0 left-0 right-0 z-50 shadow-xl transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="../index.html" className="flex items-center space-x-3">
                <img src="https://buildvest.net/buildvest-logo.png" alt="BuildVest" className="h-10 w-auto" onError={(e) => { e.currentTarget.src = 'https://buildvest.net/buildvest-logo.png?q=80&w=200&auto=format&fit=crop'; }} />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#process" className="nav-link font-medium">How It Works For Originators</a>
              <a href="#benefits" className="nav-link font-medium">Benefits</a>
              <a href="#faq" className="nav-link font-medium">FAQ</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="authentication_hub.html" className="btn btn-outline">Sign In</a>
              <button onClick={scrollToListAsset} className="btn btn-primary">List Your Asset</button>
            </div>

            <button id="mobileMenuBtn" onClick={toggleMobileMenu} className="mobile-menu-btn md:hidden p-2 rounded-lg transition-colors duration-150 touch-target" aria-label="Toggle mobile menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div id="mobileMenu" className={`mobile-menu md:hidden shadow-lg ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <div className="px-4 py-6 space-y-4">
            <a href="#process" className="block font-medium py-2">How It Works For Originators</a>
            <a href="#benefits" className="block font-medium py-2">Benefits</a>
            <a href="#faq" className="block font-medium py-2">FAQ</a>
            <div className="pt-4 space-y-3 border-t">
              <a href="authentication_hub.html" className="block w-full btn btn-outline text-center">Sign In</a>
              <button onClick={scrollToListAsset} className="w-full btn btn-primary">List Your Asset</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-accent-50 opacity-60"></div>
        <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2315B79E\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')", opacity: 0.4}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-secondary-50 rounded-full mb-6">
                <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-semibold text-secondary">$45M+ Funded for Asset Owners</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                Unlock Capital from Your <span className="text-secondary">Real-World Assets</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join BuildVest as an originator and tokenize your real estate, infrastructure, or commercial assets. Access global investors, maintain ownership, and get funded faster with blockchain technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={scrollToListAsset} className="btn btn-primary text-lg px-8 py-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Start Listing Your Asset
                </button>
                <button onClick={openCalculator} className="btn btn-outline text-lg px-8 py-4">
                  Calculate Returns
                </button>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm font-medium text-text-secondary">SEC Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="text-sm font-medium text-text-secondary">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm font-medium text-text-secondary">Fast Funding</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://img.rocket.new/generatedImages/rocket_gen_img_11efb8956-1764655545926.png" alt="Real estate asset owner listing property on BuildVest platform" className="w-full h-auto object-cover" onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1000'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 animate-fade-in hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary">250+</p>
                    <p className="text-sm text-text-secondary">Assets Funded</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-fade-in hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary">7-14 Days</p>
                    <p className="text-sm text-text-secondary">Avg. Funding Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">Why List on BuildVest?</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">Transform your assets into investment opportunities and access global capital markets</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Global Investor Access</h3>
              <p className="text-text-secondary">Reach 10,000+ accredited investors worldwide actively seeking real-world asset opportunities</p>
            </div>

            <div className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Fast Funding</h3>
              <p className="text-text-secondary">Get funded 70% faster than traditional methods with blockchain-powered efficiency</p>
            </div>

            <div className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Maintain Control</h3>
              <p className="text-text-secondary">Retain operational control while accessing fractional funding without giving up ownership</p>
            </div>

            <div className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-warning-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Lower Costs</h3>
              <p className="text-text-secondary">Save 40-60% on traditional financing costs with our streamlined tokenization platform</p>
            </div>

            <div className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Full Support</h3>
              <p className="text-text-secondary">Dedicated originator success team guides you through documentation, compliance, and launch</p>
            </div>

            <div className="card p-8 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Transparent Analytics</h3>
              <p className="text-text-secondary">Real-time dashboard tracking funding progress, investor interest, and performance metrics</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">List Your Asset in 3 Steps</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">From submission to funding in as little as 7-14 days</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-surface-200">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" style={{width: '100%'}}></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg z-20">1</div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Submit Your Asset</h3>
                <p className="text-text-secondary mb-4">Complete our simple submission form with asset details, documents, and financial information</p>
                <ul className="text-sm text-text-secondary space-y-2 text-left max-w-xs mx-auto">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Upload property documents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Set funding terms & timeline</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Provide financial projections</span>
                  </li>
                </ul>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-secondary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg z-20">2</div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Due Diligence Review</h3>
                <p className="text-text-secondary mb-4">Our team conducts thorough verification, legal compliance checks, and asset valuation</p>
                <ul className="text-sm text-text-secondary space-y-2 text-left max-w-xs mx-auto">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Legal & title verification</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Financial analysis & valuation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Risk assessment & compliance</span>
                  </li>
                </ul>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-accent-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg z-20">3</div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Go Live & Get Funded</h3>
                <p className="text-text-secondary mb-4">Your asset goes live on our marketplace and starts receiving investments from global investors</p>
                <ul className="text-sm text-text-secondary space-y-2 text-left max-w-xs mx-auto">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Listed on investor marketplace</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Track funding in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Receive funds to your wallet</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button onClick={scrollToListAsset} className="btn btn-primary text-lg px-8">Start Listing Process</button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Estimate Your Funding</h2>
            <p className="text-lg text-text-secondary">Calculate potential funding amount and timeline based on your asset</p>
          </div>

          <div className="card p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="assetType" className="block text-sm font-medium text-text-primary mb-2">Asset Type</label>
                <select 
                  id="assetType" 
                  className="input" 
                  value={calculatorValues.assetType}
                  onChange={(e) => {
                    setCalculatorValues({ ...calculatorValues, assetType: e.target.value });
                    calculateFunding();
                  }}
                >
                  <option value="">Select asset type</option>
                  <option value="commercial-real-estate">Commercial Real Estate</option>
                  <option value="residential-real-estate">Residential Real Estate</option>
                  <option value="infrastructure">Infrastructure Project</option>
                  <option value="renewable-energy">Renewable Energy</option>
                  <option value="other">Other Asset</option>
                </select>
              </div>

              <div>
                <label htmlFor="assetValue" className="block text-sm font-medium text-text-primary mb-2">Asset Value (USD)</label>
                <input 
                  type="number" 
                  id="assetValue" 
                  className="input" 
                  placeholder="1000000" 
                  min="100000" 
                  step="50000"
                  value={calculatorValues.assetValue}
                  onChange={(e) => {
                    setCalculatorValues({ ...calculatorValues, assetValue: e.target.value });
                    calculateFunding();
                  }}
                />
              </div>

              <div>
                <label htmlFor="fundingTarget" className="block text-sm font-medium text-text-primary mb-2">Target Funding Percentage</label>
                <input 
                  type="range" 
                  id="fundingTarget" 
                  className="w-full" 
                  min="10" 
                  max="100" 
                  value={calculatorValues.fundingTarget} 
                  step="5"
                  onChange={(e) => {
                    updateFundingLabel(parseInt(e.target.value));
                    calculateFunding();
                  }}
                />
                <div className="flex justify-between text-sm text-text-secondary mt-2">
                  <span>10%</span>
                  <span id="fundingLabel" className="font-semibold text-primary">{calculatorValues.fundingTarget}%</span>
                  <span>100%</span>
                </div>
              </div>

              <div id="calculatorResults" className={`${showCalculatorResults ? '' : 'hidden'} mt-8 p-6 bg-surface rounded-lg`}>
                <h3 className="text-lg font-bold text-text-primary mb-4">Estimated Results</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Funding Amount</p>
                    <p id="fundingAmount" className="text-2xl font-bold text-primary">${calculatorResults.fundingAmount.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Estimated Timeline</p>
                    <p id="fundingTimeline" className="text-2xl font-bold text-secondary">{calculatorResults.fundingTimeline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Platform Fee</p>
                    <p id="platformFee" className="text-2xl font-bold text-text-primary">${calculatorResults.platformFee.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-text-secondary mb-2">Net Funding (After Fees)</p>
                  <p id="netFunding" className="text-3xl font-bold text-accent">${calculatorResults.netFunding.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button onClick={scrollToListAsset} className="btn btn-primary">Start Your Application</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">Who We Serve</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">Discover how BuildVest serves different industries and asset classes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src="https://img.rocket.new/generatedImages/rocket_gen_img_154174c18-1764899820057.png" alt="Real estate development projects" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="badge bg-white text-text-primary mb-2">Real Estate</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">Real Estate Developers</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Tokenize residential, commercial, and mixed-use developments. Access global investors for your next project with faster funding timelines and fractional ownership models.
                </p>
                <a href="real_estate_developers.html" className="btn btn-primary w-full group/btn">
                  <span>Explore Solutions</span>
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src="https://img.rocket.new/generatedImages/rocket_gen_img_129f28472-1764661556113.png" alt="Corporate finance and debt instruments" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="badge bg-white text-text-primary mb-2">Corporate Finance</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">Corporate Debt & Private Placements</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Issue digital corporate debt instruments and private placements. Streamline capital raising with automated compliance and smart contract distribution.
                </p>
                <a href="corporate_debt_private_placements.html" className="btn btn-primary w-full group/btn">
                  <span>Explore Solutions</span>
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src="https://img.rocket.new/generatedImages/rocket_gen_img_15de38498-1764683444592.png" alt="Infrastructure and renewable energy projects" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="badge bg-white text-text-primary mb-2">Infrastructure</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">Infrastructure Projects</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Fund transportation, energy, water, and renewable infrastructure projects. Connect with impact investors seeking sustainable, long-term investments.
                </p>
                <a href="infrastructure_projects_landing_page.html" className="btn btn-primary w-full group/btn">
                  <span>Explore Solutions</span>
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">Originator FAQ</h2>
            <p className="text-lg text-text-secondary">Common questions from asset owners</p>
          </div>

          <div className="space-y-4">
            <div className="card overflow-hidden">
              <button 
                className="faq-question w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 0}
                onClick={() => toggleFAQ(0)}
              >
                <span className="font-semibold text-text-primary pr-4">What types of assets can I list on BuildVest?</span>
                <svg className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{transform: openFAQ === 0 ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`faq-answer ${openFAQ === 0 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">We accept commercial real estate, residential properties, infrastructure projects, renewable energy installations, and other verified income-generating assets. Minimum asset value is typically $500,000. Each asset undergoes thorough due diligence before listing approval.</p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <button 
                className="faq-question w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 1}
                onClick={() => toggleFAQ(1)}
              >
                <span className="font-semibold text-text-primary pr-4">What are the fees for originators?</span>
                <svg className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{transform: openFAQ === 1 ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`faq-answer ${openFAQ === 1 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">BuildVest charges a 2-3% platform fee on successfully funded amounts (significantly lower than traditional financing). There are no upfront costs or listing fees. You only pay when your asset is successfully funded. Additional services like enhanced marketing or expedited due diligence are available at competitive rates.</p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <button 
                className="faq-question w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 2}
                onClick={() => toggleFAQ(2)}
              >
                <span className="font-semibold text-text-primary pr-4">How long does the listing approval process take?</span>
                <svg className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{transform: openFAQ === 2 ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`faq-answer ${openFAQ === 2 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">Standard approval takes 5-7 business days for complete submissions with all required documentation. Expedited review (2-3 days) is available for qualified assets. Timeline depends on documentation completeness, asset complexity, and legal verification requirements. Our team works closely with you throughout the process.</p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <button 
                className="faq-question w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 3}
                onClick={() => toggleFAQ(3)}
              >
                <span className="font-semibold text-text-primary pr-4">Do I maintain control of my asset?</span>
                <svg className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{transform: openFAQ === 3 ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`faq-answer ${openFAQ === 3 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">Yes, absolutely. You retain full operational control and management authority over your asset. Investors receive fractional economic rights (revenue share, appreciation) but do not gain operational control. You continue managing the asset as before while accessing capital through tokenization.</p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <button 
                className="faq-question w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 4}
                onClick={() => toggleFAQ(4)}
              >
                <span className="font-semibold text-text-primary pr-4">What documentation is required?</span>
                <svg className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{transform: openFAQ === 4 ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`faq-answer ${openFAQ === 4 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">Required documents typically include: property title/deed, recent appraisal or valuation, financial statements (3 years), operating agreements, tenant leases (if applicable), environmental reports, insurance policies, and business plan/projections. Our team provides a complete checklist and helps you prepare all necessary documentation.</p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <button 
                className="faq-question w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={openFAQ === 5}
                onClick={() => toggleFAQ(5)}
              >
                <span className="font-semibold text-text-primary pr-4">How are investor returns handled?</span>
                <svg className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{transform: openFAQ === 5 ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`faq-answer ${openFAQ === 5 ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">You define return terms during listing setup (revenue share percentage, distribution schedule, etc.). BuildVest automates distribution through smart contracts based on your terms. Investors receive their proportional share of agreed returns (rental income, appreciation, etc.) directly to their wallets on the scheduled distribution dates. You maintain full control over return structure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="list-asset" className="py-20 bg-gradient-to-br from-secondary to-secondary-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23FFFFFF\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to List Your Asset?</h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">Join 250+ asset owners who have successfully raised capital on BuildVest. Start your funding journey today.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="javascript:void(0)" onClick={() => alert('Redirecting to originator application form...')} className="btn bg-white text-secondary hover:bg-secondary-50 text-lg px-8 py-4 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              List Your Asset Now
            </a>
            <a href="javascript:void(0)" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4">
              Schedule a Consultation
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">No Upfront Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">Fast 7-14 Day Funding</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium">Maintain Full Control</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://buildvest.net/img/BuildvestLogo_icon_white.png" alt="BuildVest footer logo" className="h-8 w-auto" onError={(e) => { e.currentTarget.src = 'https://buildvest.net/img/BuildvestLogo_icon_white.png?q=80&w=200&auto=format&fit=crop'; }} />
                <span className="text-xl font-bold">BuildVest</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Democratizing access to high-yield real-world assets through blockchain technology.</p>
              <div className="flex items-center gap-4">
                <div className="text-xs text-slate-500">Regulatory Certifications</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="landing_page.html" className="text-slate-400 hover:text-white transition-colors duration-150">For Investors</a></li>
                <li><a href="originator_onboarding.html" className="text-slate-400 hover:text-white transition-colors duration-150">For Originators</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="about_build_vest.html" className="text-slate-400 hover:text-white transition-colors duration-150">About</a></li>
                <li><a href="frequently_asked_questions.html" className="text-slate-400 hover:text-white transition-colors duration-150">FAQs</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-150">Blog</a></li>
                <li><a href="legal_compliance_center.html" className="text-slate-400 hover:text-white transition-colors duration-150">Legal & Compliance</a></li>
              </ul>
            </div>

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

          <div className="border-t border-slate-800 pt-8 mb-8">
            <div className="text-xs text-slate-500 leading-relaxed space-y-2">
              <p><strong className="text-slate-400">Investment Disclaimer:</strong> Investing involves risks, including loss of principal. Past performance is not indicative of future results. BuildVest is not a financial advisor; consult professionals before investing. All investments are subject to regulatory approval and due diligence.</p>
              <p><strong className="text-slate-400">Regulatory Compliance:</strong> BuildVest operates under applicable securities regulations. All offerings are subject to regulatory review and approval. Please review our Legal & Compliance section for detailed information.</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">© 2026 BuildVest. All Rights Reserved.</p>
              <div className="flex items-center space-x-6 text-xs text-slate-500">
                <a href="legal_compliance_center.html" className="hover:text-slate-400 transition-colors">Terms of Service</a>
                <a href="legal_compliance_center.html" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
                <a href="legal_compliance_center.html" className="hover:text-slate-400 transition-colors">Risk Disclosure</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div id="calculatorModal" className={`fixed inset-0 z-50 ${isCalculatorModalOpen ? '' : 'hidden'}`}>
        <div className="modal-overlay" onClick={closeCalculator}></div>
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="modal-content relative z-50 animate-scale-in max-w-2xl w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-text-primary">Funding Calculator</h3>
                <button onClick={closeCalculator} className="p-2 hover:bg-surface rounded-lg transition-colors duration-150 touch-target" aria-label="Close modal">
                  <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <p className="text-text-secondary mb-6">Calculate your estimated funding amount and timeline</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Asset Type</label>
                  <select className="input">
                    <option>Commercial Real Estate</option>
                    <option>Residential Real Estate</option>
                    <option>Infrastructure Project</option>
                    <option>Renewable Energy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Asset Value</label>
                  <input type="number" className="input" placeholder="$1,000,000" />
                </div>
                <button className="w-full btn btn-primary">Calculate Funding</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
