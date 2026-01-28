import React from 'react';

const HowItWorks: React.FC = () => {
    return (
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
    );
};

export default HowItWorks;
