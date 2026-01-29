'use client';

import { useState } from 'react';

export default function HelpSupportPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Mock handlers
  const handleStartChat = () => {
    alert('Live chat would open here. For now, please email support@buildvest.com');
  };

  const handlePasswordReset = () => {
    alert('Password reset flow would start here');
  };

  const handleKYCHelp = () => {
    alert('KYC help documentation would open here');
  };

  const handleInvestmentInquiry = () => {
    alert('Investment inquiry form would open here');
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="flex items-center justify-between h-20 px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleMobileSidebar}
              className="lg:hidden p-2 hover:bg-surface rounded-lg transition-colors duration-150 touch-target"
              aria-label="Toggle sidebar menu"
            >
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <a href="investor_dashboard.html" className="flex items-center space-x-3">
              <img src="https://buildvest.net/buildvest-logo.png" alt="BuildVest" className="h-10 w-auto" />
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-surface rounded-xl hover:bg-surface-100 transition-colors duration-150 touch-target"
              aria-label="Search investments"
            >
              <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span className="text-sm text-text-secondary">Search</span>
            </button>

            {/* Notifications */}
            <a href="all_notifications_page.html" className="relative p-2 hover:bg-surface rounded-lg transition-colors duration-150 touch-target" aria-label="View notifications">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </a>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-3 p-2 hover:bg-surface rounded-lg transition-colors duration-150 touch-target"
                aria-label="User profile menu"
              >
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_14889e74f-1763294788752.png"
                  alt="User profile"
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100';
                  }}
                />
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-text-primary">John Anderson</p>
                  <p className="text-xs text-text-secondary">Verified Investor</p>
                </div>
                <svg className="hidden md:block w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-border overflow-hidden animate-slide-down">
                  <div className="p-4 border-b border-border">
                    <p className="text-sm font-medium text-text-primary">John Anderson</p>
                    <p className="text-xs text-text-secondary">john.anderson@email.com</p>
                  </div>
                  <div className="py-2">
                    <a href="investor_settings_page.html" className="flex items-center space-x-3 px-4 py-2 hover:bg-surface transition-colors duration-150">
                      <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      <span className="text-sm text-text-primary">My Profile</span>
                    </a>
                    <a href="wallet_management.html" className="flex items-center space-x-3 px-4 py-2 hover:bg-surface transition-colors duration-150">
                      <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                      </svg>
                      <span className="text-sm text-text-primary">Wallet</span>
                    </a>
                  </div>
                  <div className="border-t border-border py-2">
                    <a href="landing_page.html" className="flex items-center space-x-3 px-4 py-2 hover:bg-surface transition-colors duration-150">
                      <svg className="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                      <span className="text-sm text-error">Sign Out</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Layout Container */}
      <div className="flex pt-20">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block fixed left-0 top-20 bottom-0 w-64 bg-white border-r border-border overflow-y-auto">
          <nav className="p-4 space-y-2">
            <a href="investor_dashboard.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Dashboard
            </a>
            <a href="investment_marketplace.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Marketplace
            </a>
            <a href="investor_portfolio.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Portfolio
            </a>
            <a href="secondary_market.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
              Secondary Market
            </a>
            <a href="wallet_management.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
              Wallet
            </a>
            <a href="investor_settings_page.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Settings
            </a>
            <a href="help_support_page.html" className="nav-link nav-link-active flex items-center px-4 py-3 rounded-lg bg-primary-50 text-primary">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              Help & Support
            </a>
          </nav>
        </aside>

        {/* Mobile Sidebar */}
        {isMobileSidebarOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleMobileSidebar}
            ></div>

            {/* Sidebar */}
            <aside className="fixed left-0 top-20 bottom-0 w-64 bg-white border-r border-border overflow-y-auto z-50 lg:hidden">
              <nav className="p-4 space-y-2">
                <a href="investor_dashboard.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Dashboard
                </a>
                <a href="investment_marketplace.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  Marketplace
                </a>
                <a href="investor_portfolio.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  Portfolio
                </a>
                <a href="secondary_market.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                  </svg>
                  Secondary Market
                </a>
                <a href="wallet_management.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                  Wallet
                </a>
                <a href="investor_settings_page.html" className="nav-link flex items-center px-4 py-3 rounded-lg text-text-secondary hover:bg-surface hover:text-primary transition-colors duration-150">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Settings
                </a>
                <a href="help_support_page.html" className="nav-link nav-link-active flex items-center px-4 py-3 rounded-lg bg-primary-50 text-primary">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  Help & Support
                </a>
              </nav>
            </aside>
          </>
        )}

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-64 p-4 lg:p-8 pb-24 lg:pb-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">Help & Support</h1>
            <p className="text-text-secondary">Get assistance with your investments and account</p>
          </div>

          {/* Reassurance Banner */}
          <div className="card p-6 mb-8 bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">We're Here to Help</h3>
                <p className="text-text-secondary">Our support team is available to help with onboarding, investments, and technical issues. We're committed to ensuring your investment experience is smooth and secure.</p>
              </div>
            </div>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Password Reset */}
            <button
              onClick={handlePasswordReset}
              className="card card-hover p-6 text-left group transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                  </svg>
                </div>
                <span className="badge badge-secondary">Quick</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">Password Reset</h3>
              <p className="text-sm text-text-secondary mb-4">Reset your password or update security settings</p>
              <span className="text-sm text-accent font-medium group-hover:underline">Reset Now →</span>
            </button>

            {/* KYC Questions */}
            <button
              onClick={handleKYCHelp}
              className="card card-hover p-6 text-left group transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <span className="badge badge-warning">Common</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-secondary transition-colors duration-300">KYC Questions</h3>
              <p className="text-sm text-text-secondary mb-4">Help with verification and compliance requirements</p>
              <span className="text-sm text-secondary font-medium group-hover:underline">Learn More →</span>
            </button>

            {/* Investment Inquiries */}
            <button
              onClick={handleInvestmentInquiry}
              className="card card-hover p-6 text-left group transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="badge badge-primary">Popular</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">Investment Inquiries</h3>
              <p className="text-sm text-text-secondary mb-4">Questions about assets, returns, or portfolio management</p>
              <span className="text-sm text-primary font-medium group-hover:underline">Get Help →</span>
            </button>
          </div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Email Support */}
              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Email Support</h3>
                    <p className="text-sm text-text-secondary mb-3">Get detailed assistance via email</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-primary">support@buildvest.com</p>
                        <p className="text-xs text-text-tertiary mt-1">Response time: 4-6 hours</p>
                      </div>
                      <a href="mailto:support@buildvest.com" className="btn btn-outline btn-sm">Send Email</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Support */}
              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Phone Support</h3>
                    <p className="text-sm text-text-secondary mb-3">Speak with our support team directly</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-primary">+1 (800) 555-0123</p>
                        <p className="text-xs text-text-tertiary mt-1">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                      </div>
                      <a href="tel:+18005550123" className="btn btn-outline btn-sm">Call Now</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discord Community */}
              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Discord Community</h3>
                    <p className="text-sm text-text-secondary mb-3">Connect with other investors and get community support</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-primary">5,000+ Members</p>
                        <p className="text-xs text-text-tertiary mt-1">Active 24/7 community</p>
                      </div>
                      <a href="https://discord.gg/buildvest" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Join Discord</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* FAQs */}
              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">FAQs</h3>
                    <p className="text-sm text-text-secondary mb-3">Find answers to common questions</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-primary">200+ Articles</p>
                        <p className="text-xs text-text-tertiary mt-1">Instant answers to common issues</p>
                      </div>
                      <a href="frequently_asked_questions.html" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Browse FAQs</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation */}
              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">Notion Documentation</h3>
                    <p className="text-sm text-text-secondary mb-3">Comprehensive guides and tutorials</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-primary">Complete Knowledge Base</p>
                        <p className="text-xs text-text-tertiary mt-1">Step-by-step guides and how-tos</p>
                      </div>
                      <a href="https://notion.so/buildvest-docs" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">View Docs</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="card p-6 bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-text-primary">Live Chat</h3>
                      <span className="badge badge-success animate-pulse">Online</span>
                    </div>
                    <p className="text-sm text-text-secondary mb-4">Get instant help from our support team</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-text-primary">Average Response: 2 minutes</p>
                        <p className="text-xs text-text-tertiary mt-1">Available now: Mon-Fri 9 AM - 6 PM EST</p>
                      </div>
                      <button onClick={handleStartChat} className="btn btn-primary btn-sm">Start Chat</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 card p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Secure Support</p>
                  <p className="text-xs text-text-secondary">256-bit encrypted communications</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Fast Response</p>
                  <p className="text-xs text-text-secondary">Average 2-minute chat response</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Expert Team</p>
                  <p className="text-xs text-text-secondary">Certified investment specialists</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border lg:hidden z-40">
        <div className="grid grid-cols-5 h-16">
          <a href="investor_dashboard.html" className="flex flex-col items-center justify-center space-y-1 text-text-secondary hover:text-primary transition-colors duration-150">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span className="text-xs font-medium">Home</span>
          </a>
          <a href="investment_marketplace.html" className="flex flex-col items-center justify-center space-y-1 text-text-secondary hover:text-primary transition-colors duration-150">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span className="text-xs font-medium">Explore</span>
          </a>
          <a href="investment_amount_entry.html" className="flex flex-col items-center justify-center -mt-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </div>
            <span className="text-xs font-medium text-text-secondary mt-1">Invest</span>
          </a>
          <a href="wallet_management.html" className="flex flex-col items-center justify-center space-y-1 text-text-secondary hover:text-primary transition-colors duration-150">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
            <span className="text-xs font-medium">Wallet</span>
          </a>
          <a href="help_support_page.html" className="flex flex-col items-center justify-center space-y-1 text-primary">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
            </svg>
            <span className="text-xs font-medium">Support</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
