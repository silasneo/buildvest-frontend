import React from 'react';

const FeaturedInvestments: React.FC = () => {
    return (
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
    );
};

export default FeaturedInvestments;
