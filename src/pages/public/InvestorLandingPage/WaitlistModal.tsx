import React, { useState, FormEvent } from 'react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setIsSubmitting(true);
        const submitBtn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<svg class="animate-spin h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            setIsSubmitting(false);
            onClose();
            
            alert("Thank you for joining our waitlist! We'll notify you when new investment opportunities become available.");
            
            setFormData({ name: '', email: '', interest: '' });
        }, 1500);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.id.replace('waitlist', '').toLowerCase()]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <div id="waitlistModal" className="fixed inset-0 z-50">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="modal-content relative z-50 animate-scale-in">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-text-primary">Join the Waitlist</h3>
                            <button onClick={onClose} className="p-2 hover:bg-surface rounded-lg transition-colors duration-150 touch-target" aria-label="Close modal">
                                <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <p className="text-text-secondary mb-6">Be among the first to access exclusive investment opportunities. We'll notify you when new assets are available.</p>

                        <form id="waitlistForm" className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="waitlistName" className="block text-sm font-medium text-text-primary mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    id="waitlistName" 
                                    className="input" 
                                    placeholder="John Doe" 
                                    required 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="waitlistEmail" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    id="waitlistEmail" 
                                    className="input" 
                                    placeholder="john@example.com" 
                                    required 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="investmentInterest" className="block text-sm font-medium text-text-primary mb-2">Investment Interest</label>
                                <select 
                                    id="investmentInterest" 
                                    className="input"
                                    value={formData.interest}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select your interest</option>
                                    <option value="real-estate">Real Estate</option>
                                    <option value="infrastructure">Infrastructure</option>
                                    <option value="renewable-energy">Renewable Energy</option>
                                    <option value="all">All Asset Types</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full btn btn-primary" disabled={isSubmitting}>
                                Join Waitlist
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitlistModal;
