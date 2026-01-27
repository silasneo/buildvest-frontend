import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src="https://buildvest.net/img/BuildvestLogo_icon_white.png" alt="BuildVest footer logo" className="h-8 w-auto" onError={(e) => { (e.target as HTMLImageElement).src = 'https://buildvest.net/img/BuildvestLogo_icon_white.png?q=80&w=200&auto=format&fit=crop'; (e.target as HTMLImageElement).onerror = null; }} />
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
                            <li><a href="landing_page.html" className="text-slate-400 hover:text-white transition-colors duration-150">For Investors</a></li>
                            <li><a href="originator_onboarding.html" className="text-slate-400 hover:text-white transition-colors duration-150">For Originators</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="about_build_vest.html" className="text-slate-400 hover:text-white transition-colors duration-150">About</a></li>
                            <li><a href="frequently_asked_questions.html" className="text-slate-400 hover:text-white transition-colors duration-150">FAQs</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-150">Blog</a></li>
                            <li><a href="legal_compliance_center.html" className="text-slate-400 hover:text-white transition-colors duration-150">Legal & Compliance</a></li>
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
    );
};

export default Footer;
