import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const totalTestimonials = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev === totalTestimonials - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const updateCarousel = (index: number) => {
        setCurrentTestimonial(index);
    };

    const handlePrevious = () => {
        updateCarousel(currentTestimonial === 0 ? totalTestimonials - 1 : currentTestimonial - 1);
    };

    const handleNext = () => {
        updateCarousel(currentTestimonial === totalTestimonials - 1 ? 0 : currentTestimonial + 1);
    };

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">What Our Investors Say</h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto">Real stories from real investors building wealth with BuildVest</p>
                </div>

                <div className="relative">
                    <div id="testimonialCarousel" className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                            {/* Testimonial 1 */}
                            <div className="w-full flex-shrink-0 px-4">
                                <div className="card p-8 max-w-4xl mx-auto">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <img src="https://img.rocket.new/generatedImages/rocket_gen_img_11476eff6-1763300910458.png" alt="Sarah Johnson, successful real estate investor testimonial" className="w-16 h-16 rounded-full object-cover flex-shrink-0" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'; (e.target as HTMLImageElement).onerror = null; }} />
                                        <div className="flex-1">
                                            <div className="flex items-center mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                ))}
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
                                        <img src="https://img.rocket.new/generatedImages/rocket_gen_img_121cfc606-1763301640036.png" alt="Michael Chen, technology professional investor testimonial" className="w-16 h-16 rounded-full object-cover flex-shrink-0" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg'; (e.target as HTMLImageElement).onerror = null; }} />
                                        <div className="flex-1">
                                            <div className="flex items-center mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                ))}
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
                                        <img src="https://img.rocket.new/generatedImages/rocket_gen_img_11476eff6-1763300910458.png" alt="Emily Rodriguez, financial advisor investor testimonial" className="w-16 h-16 rounded-full object-cover flex-shrink-0" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'; (e.target as HTMLImageElement).onerror = null; }} />
                                        <div className="flex-1">
                                            <div className="flex items-center mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                                    </svg>
                                                ))}
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
                    <button id="prevTestimonial" onClick={handlePrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-surface transition-colors duration-150 touch-target" aria-label="Previous testimonial">
                        <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button id="nextTestimonial" onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-surface transition-colors duration-150 touch-target" aria-label="Next testimonial">
                        <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                className={`carousel-indicator w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-primary' : 'bg-surface-200'}`}
                                data-index={index}
                                aria-label={`Go to testimonial ${index + 1}`}
                                onClick={() => updateCarousel(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
