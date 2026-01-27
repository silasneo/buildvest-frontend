import React, { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className="card overflow-hidden">
            <button 
                className="faq-question w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target" 
                aria-expanded={isOpen}
                onClick={onToggle}
            >
                <span className="font-semibold text-text-primary pr-4">{question}</span>
                <svg 
                    className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div className={`faq-answer ${isOpen ? '' : 'hidden'} px-6 pb-5`}>
                <p className="text-text-secondary leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the minimum investment amount?",
            answer: "The minimum investment amount on BuildVest is just $100. This low barrier to entry allows investors of all levels to access fractional ownership in real-world assets and build diversified portfolios without requiring large capital commitments."
        },
        {
            question: "How are returns distributed to investors?",
            answer: "Returns are distributed directly to your BuildVest wallet on a quarterly basis. You can choose to reinvest your returns into new opportunities or withdraw them to your bank account or USDC wallet. All distributions are transparent and tracked in your dashboard."
        },
        {
            question: "What types of assets can I invest in?",
            answer: "BuildVest offers tokenized investments in commercial real estate, residential properties, infrastructure projects, renewable energy installations, and other verified real-world assets. Each opportunity undergoes rigorous due diligence before being listed on our marketplace."
        },
        {
            question: "Is my investment secure?",
            answer: "Yes. BuildVest employs bank-level security with 256-bit encryption, multi-factor authentication, and cold storage for digital assets. We are fully SEC compliant and all investments are backed by legal ownership structures. Your funds are held in segregated accounts for maximum protection."
        },
        {
            question: "Can I sell my investment shares?",
            answer: "Yes, BuildVest offers a secondary marketplace where you can list your investment shares for sale to other investors. Liquidity varies by asset, but this feature provides flexibility to exit positions before the investment term ends. Transaction fees apply to secondary market sales."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept USDC (stablecoin), credit/debit cards, and bank transfers (ACH). USDC transactions are processed instantly, while card and bank transfers may take 1-3 business days to clear. All payment methods are secure and encrypted."
        }
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-surface">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-text-secondary">Everything you need to know about investing with BuildVest</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
