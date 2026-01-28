import React from 'react';

interface FinalCTAProps {
    onOpenWaitlist: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenWaitlist }) => {
    return (
        <section className="py-20 bg-gradient-to-br from-primary to-primary-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23FFFFFF\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Start Building Wealth?</h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">Join thousands of investors accessing real-world assets with just $100. Start your investment journey today.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="investment_marketplace.html" className="btn bg-white text-primary hover:bg-primary-50 text-lg px-8 py-4 shadow-lg">
                        Browse Investments
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                    <button onClick={onOpenWaitlist} className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                        Join Waitlist
                    </button>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white">
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="font-medium">No Hidden Fees</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="font-medium">Transparent Returns</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="font-medium">Secure Platform</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
