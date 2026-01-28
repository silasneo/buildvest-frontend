import React from 'react';

const TrustSecurity: React.FC = () => {
    return (
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
    );
};

export default TrustSecurity;
