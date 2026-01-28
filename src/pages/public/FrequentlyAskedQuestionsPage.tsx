'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string | JSX.Element;
}

export default function FrequentlyAskedQuestionsPage() {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // FAQ Data
  const faqItems: FAQItem[] = [
    // Popular Questions
    {
      id: 1,
      category: 'investing',
      question: 'What is the minimum investment amount?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">The minimum investment amount on BuildVest is just $100. This low barrier to entry allows investors of all levels to access fractional ownership in real-world assets and build diversified portfolios without requiring large capital commitments.</p>
          <p className="text-text-secondary leading-relaxed">You can invest any amount above the minimum in increments of $10. There is no maximum investment limit, though individual opportunities may have their own funding caps.</p>
        </>
      ),
    },
    {
      id: 2,
      category: 'investing',
      question: 'How are returns distributed to investors?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Returns are distributed directly to your BuildVest wallet on a quarterly basis. You can choose to reinvest your returns into new opportunities or withdraw them to your bank account or USDC wallet. All distributions are transparent and tracked in your dashboard.</p>
          <p className="text-text-secondary leading-relaxed">Distribution dates vary by asset and are clearly specified in each investment opportunity's details. You will receive email notifications before each distribution.</p>
        </>
      ),
    },
    {
      id: 3,
      category: 'security',
      question: 'Is my investment secure?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Yes. BuildVest employs bank-level security with 256-bit encryption, multi-factor authentication, and cold storage for digital assets. We are fully SEC compliant and all investments are backed by legal ownership structures.</p>
          <p className="text-text-secondary leading-relaxed mb-4">Your funds are held in segregated accounts for maximum protection. We undergo regular third-party security audits and maintain comprehensive insurance coverage for platform operations.</p>
          <p className="text-text-secondary leading-relaxed">However, please note that all investments carry inherent risks, and past performance does not guarantee future results. Please review our risk disclosure documents carefully.</p>
        </>
      ),
    },
    // Investing Category
    {
      id: 4,
      category: 'investing',
      question: 'What types of assets can I invest in?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">BuildVest offers tokenized investments in:</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li><strong>Commercial Real Estate</strong> - Office buildings, retail centers, and mixed-use developments</li>
            <li><strong>Residential Properties</strong> - Multi-family apartments and luxury residential complexes</li>
            <li><strong>Infrastructure Projects</strong> - Transportation, utilities, and public infrastructure</li>
            <li><strong>Renewable Energy</strong> - Solar, wind, and other sustainable energy installations</li>
            <li><strong>Emerging Market Assets</strong> - Carefully selected opportunities in growing economies</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">Each opportunity undergoes rigorous due diligence before being listed on our marketplace. You can filter by asset type, location, expected returns, and investment term to find opportunities that match your goals.</p>
        </>
      ),
    },
    {
      id: 5,
      category: 'investing',
      question: 'Can I sell my investment shares?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Yes, BuildVest offers a secondary marketplace where you can list your investment shares for sale to other investors. This feature provides flexibility to exit positions before the investment term ends.</p>
          <p className="text-text-secondary leading-relaxed mb-4">Liquidity varies by asset and market demand. Transaction fees apply to secondary market sales (typically 2-3% of sale value). You can set your own asking price or accept the current market price for faster transactions.</p>
          <p className="text-text-secondary leading-relaxed">Note that some investments may have lock-up periods during which secondary sales are restricted. These restrictions are clearly disclosed in the investment terms.</p>
        </>
      ),
    },
    {
      id: 6,
      category: 'investing',
      question: 'What are the typical investment terms?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Investment terms vary by asset type but typically range from 2-7 years. Each opportunity clearly displays:</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li>Investment term length</li>
            <li>Target annual percentage yield (APY)</li>
            <li>Distribution frequency (monthly, quarterly, or annually)</li>
            <li>Lock-up period (if any)</li>
            <li>Early exit options and fees</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">You can view complete investment terms in the detailed prospectus available for each opportunity before committing funds.</p>
        </>
      ),
    },
    {
      id: 7,
      category: 'investing',
      question: 'How do I track my investment performance?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Your investor dashboard provides comprehensive performance tracking including:</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li>Real-time portfolio value</li>
            <li>Individual investment performance</li>
            <li>Distribution history and upcoming payments</li>
            <li>Asset valuation updates</li>
            <li>Historical returns and charts</li>
            <li>Tax documents and statements</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">You'll also receive quarterly performance reports and important updates about your investments via email.</p>
        </>
      ),
    },
    // Security Category
    {
      id: 8,
      category: 'security',
      question: 'How does BuildVest protect my personal information?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">We employ industry-leading security measures including 256-bit SSL encryption for all data transmission, secure data centers with 24/7 monitoring, and strict access controls. Your personal information is never shared with third parties without your explicit consent.</p>
          <p className="text-text-secondary leading-relaxed">All sensitive data is encrypted both in transit and at rest. We comply with GDPR, CCPA, and other data protection regulations to ensure your privacy rights are respected.</p>
        </>
      ),
    },
    {
      id: 9,
      category: 'security',
      question: 'What security features protect my account?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Your account is protected by multiple security layers:</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li>Multi-factor authentication (MFA) required for all transactions</li>
            <li>Email and SMS verification for withdrawals</li>
            <li>Device recognition and suspicious activity alerts</li>
            <li>Session timeouts and automatic logouts</li>
            <li>Biometric authentication options (face/fingerprint)</li>
            <li>IP address monitoring and geolocation tracking</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">You can view all active sessions and recent account activity in your security settings.</p>
        </>
      ),
    },
    {
      id: 10,
      category: 'security',
      question: 'Are my funds insured?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Yes. Cash held in your BuildVest wallet is FDIC insured up to $250,000 through our partner banks. Investment assets are protected by comprehensive insurance policies covering platform operations and custodial services.</p>
          <p className="text-text-secondary leading-relaxed">However, please note that investment performance is not guaranteed, and the value of your investments may fluctuate based on market conditions. Insurance covers operational risks but does not protect against market losses.</p>
        </>
      ),
    },
    // Account Management
    {
      id: 11,
      category: 'account',
      question: 'How do I create an account?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Creating an account is simple:</p>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
            <li>Click "Sign Up" and provide your email address</li>
            <li>Verify your email through the confirmation link</li>
            <li>Complete your profile with personal information</li>
            <li>Complete KYC verification (identity verification)</li>
            <li>Link your bank account or crypto wallet</li>
            <li>Start investing!</li>
          </ol>
          <p className="text-text-secondary leading-relaxed">The entire process typically takes 5-10 minutes. KYC verification is usually completed within 24 hours.</p>
        </>
      ),
    },
    {
      id: 12,
      category: 'account',
      question: 'What documents do I need for KYC verification?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">You'll need to provide:</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li>Government-issued photo ID (passport, driver's license, or national ID card)</li>
            <li>Proof of address (utility bill, bank statement, or lease agreement dated within last 3 months)</li>
            <li>Social Security Number or Tax ID (for US residents)</li>
            <li>Selfie photo for identity verification</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">All documents must be clear, legible, and show your full name and current address. For corporate accounts, additional business documentation is required.</p>
        </>
      ),
    },
    {
      id: 13,
      category: 'account',
      question: 'How do I add funds to my account?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">You can fund your account through multiple methods:</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li><strong>Bank Transfer (ACH)</strong> - Free, 1-3 business days</li>
            <li><strong>Wire Transfer</strong> - Same day, $25 fee</li>
            <li><strong>USDC Deposit</strong> - Instant, network fees apply</li>
            <li><strong>Other Cryptocurrencies</strong> - Converted to USDC automatically</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">Navigate to "Wallet" → "Add Funds" and follow the instructions for your preferred method. All deposits are confirmed via email.</p>
        </>
      ),
    },
    {
      id: 14,
      category: 'account',
      question: 'How do I withdraw funds?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Withdrawals can be made to your linked bank account or crypto wallet:</p>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
            <li>Navigate to "Wallet" → "Withdraw"</li>
            <li>Enter the withdrawal amount (minimum $50)</li>
            <li>Select your destination (bank or crypto wallet)</li>
            <li>Complete 2FA verification</li>
            <li>Confirm via email link</li>
          </ol>
          <p className="text-text-secondary leading-relaxed">Bank withdrawals take 1-3 business days. Crypto withdrawals are processed within 24 hours. A small processing fee may apply depending on the method.</p>
        </>
      ),
    },
    {
      id: 15,
      category: 'account',
      question: 'Can I have multiple accounts?',
      answer: 'Each individual may have only one personal account. However, you can create additional accounts for business entities, trusts, or retirement accounts (IRA/401k). Contact our support team to set up institutional or retirement accounts.',
    },
    // Legal & Compliance
    {
      id: 16,
      category: 'legal',
      question: 'Is BuildVest regulated?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Yes. BuildVest is fully compliant with SEC regulations and operates under applicable securities laws. We are registered with FINRA and maintain all necessary licenses for securities offerings and brokerage services.</p>
          <p className="text-text-secondary leading-relaxed">All investment opportunities are structured to comply with Regulation D, Regulation A+, or Regulation Crowdfunding, depending on the offering type. We work with top legal and compliance firms to ensure full regulatory compliance.</p>
        </>
      ),
    },
    {
      id: 17,
      category: 'legal',
      question: 'Who can invest on BuildVest?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">BuildVest is available to:</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li><strong>Accredited Investors</strong> - Can access all investment opportunities</li>
            <li><strong>Non-Accredited Investors</strong> - Can access Regulation Crowdfunding and some Regulation A+ offerings with investment limits</li>
            <li><strong>International Investors</strong> - Available in select countries, subject to local regulations</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">You must be 18 years or older and pass KYC verification. Some opportunities may have additional eligibility requirements listed in their offering documents.</p>
        </>
      ),
    },
    {
      id: 18,
      category: 'legal',
      question: 'What are the tax implications?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Investment returns may be subject to income tax, capital gains tax, or other taxes depending on your jurisdiction and the type of investment. BuildVest provides:</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li>Annual tax statements (1099 forms for US investors)</li>
            <li>Transaction history and distribution records</li>
            <li>Cost basis tracking</li>
            <li>Integration with tax preparation software</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">We recommend consulting with a qualified tax professional for personalized advice. Tax obligations vary significantly by location and individual circumstances.</p>
        </>
      ),
    },
    {
      id: 19,
      category: 'legal',
      question: 'What happens if I need to close my account?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">You may close your account at any time. However, you must:</p>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
            <li>Liquidate or transfer all active investments</li>
            <li>Withdraw all funds from your wallet</li>
            <li>Cancel any pending transactions</li>
            <li>Submit a formal closure request</li>
          </ol>
          <p className="text-text-secondary leading-relaxed">Some investments may have lock-up periods or transfer restrictions. Your tax records and transaction history will remain accessible for 7 years after account closure for compliance purposes.</p>
        </>
      ),
    },
    // Technical Support
    {
      id: 20,
      category: 'technical',
      question: 'Which browsers are supported?',
      answer: 'BuildVest works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for optimal security and performance. Mobile apps are available for iOS and Android devices.',
    },
    {
      id: 21,
      category: 'technical',
      question: 'I forgot my password. How do I reset it?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">To reset your password:</p>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
            <li>Click "Forgot Password" on the login page</li>
            <li>Enter your registered email address</li>
            <li>Check your email for the reset link (valid for 1 hour)</li>
            <li>Click the link and create a new password</li>
            <li>Log in with your new password</li>
          </ol>
          <p className="text-text-secondary leading-relaxed">If you don't receive the email within 5 minutes, check your spam folder or contact support. For security, password reset links expire after one hour.</p>
        </>
      ),
    },
    {
      id: 22,
      category: 'technical',
      question: 'How do I enable two-factor authentication?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">To enable 2FA:</p>
          <ol className="list-decimal list-inside text-text-secondary space-y-2 mb-4">
            <li>Go to Account Settings → Security</li>
            <li>Click "Enable Two-Factor Authentication"</li>
            <li>Choose your preferred method (SMS, Email, or Authenticator App)</li>
            <li>Follow the setup instructions</li>
            <li>Save your backup codes in a secure location</li>
          </ol>
          <p className="text-text-secondary leading-relaxed">We strongly recommend using an authenticator app (Google Authenticator, Authy) for maximum security. SMS and email are also available as alternatives.</p>
        </>
      ),
    },
    {
      id: 23,
      category: 'technical',
      question: 'Who do I contact for technical support?',
      answer: (
        <>
          <p className="text-text-secondary leading-relaxed mb-4">Our support team is available to help:</p>
          <ul className="list-disc list-inside text-text-secondary space-y-2 mb-4">
            <li><strong>Email:</strong> support@buildvest.com (response within 24 hours)</li>
            <li><strong>Live Chat:</strong> Available Monday-Friday, 9 AM - 6 PM EST</li>
            <li><strong>Phone:</strong> 1-800-BUILD-VEST (for urgent issues)</li>
            <li><strong>Help Center:</strong> Comprehensive guides and tutorials</li>
          </ul>
          <p className="text-text-secondary leading-relaxed">For account-specific issues, please include your registered email address when contacting support. We never ask for your password or 2FA codes.</p>
        </>
      ),
    },
  ];

  // Toggle FAQ item expansion
  const toggleFAQ = (id: number) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  // Handle category filter
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    // Close all expanded items when switching categories
    setExpandedIds(new Set());
  };

  // Handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // If searching with 3+ characters, auto-expand matching items
    if (term.length > 2) {
      const matchingIds = faqItems
        .filter(item => {
          const questionMatch = item.question.toLowerCase().includes(term.toLowerCase());
          const answerText = typeof item.answer === 'string' 
            ? item.answer 
            : item.answer.props.children.toString();
          const answerMatch = answerText.toLowerCase().includes(term.toLowerCase());
          return questionMatch || answerMatch;
        })
        .map(item => item.id);
      setExpandedIds(new Set(matchingIds));
    }
    
    // Reset category filter when searching
    if (term.length > 0) {
      setActiveCategory('all');
    }
  };

  // Filter FAQ items based on category and search
  const getFilteredItems = () => {
    return faqItems.filter(item => {
      // Category filter
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
      
      // Search filter
      if (searchTerm.length > 0) {
        const questionMatch = item.question.toLowerCase().includes(searchTerm.toLowerCase());
        const answerText = typeof item.answer === 'string' 
          ? item.answer 
          : item.answer.props.children.toString();
        const answerMatch = answerText.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && (questionMatch || answerMatch);
      }
      
      return categoryMatch;
    });
  };

  // Group items by category for display
  const getGroupedItems = () => {
    const filtered = getFilteredItems();
    const groups: { [key: string]: FAQItem[] } = {
      popular: [],
      investing: [],
      security: [],
      account: [],
      legal: [],
      technical: [],
    };
    
    // Popular questions (first 3 items)
    groups.popular = filtered.filter(item => item.id <= 3);
    
    // Other categories
    groups.investing = filtered.filter(item => item.category === 'investing' && item.id > 3);
    groups.security = filtered.filter(item => item.category === 'security' && item.id > 3);
    groups.account = filtered.filter(item => item.category === 'account');
    groups.legal = filtered.filter(item => item.category === 'legal');
    groups.technical = filtered.filter(item => item.category === 'technical');
    
    return groups;
  };

  const groupedItems = getGroupedItems();

  return (
    <div className="bg-background">
      {/* Sticky Navigation */}
      <nav id="mainNav" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="../index.html" className="flex items-center space-x-3">
                <img src="https://buildvest.net/buildvest-logo.png" alt="BuildVest" className="h-10 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation with Mega Dropdowns */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Investments Dropdown */}
              <div className="relative group">
                <button className="nav-link-with-dropdown text-text-primary hover:text-primary transition-colors duration-150 font-semibold flex items-center space-x-1">
                  <span>Investments</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="mega-dropdown absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-sm font-bold text-text-primary mb-3">For Investors</p>
                      <ul className="space-y-2">
                        <li><a href="landing_page.html" className="block px-4 py-2 rounded-lg hover:bg-primary-50 text-text-secondary hover:text-primary transition-colors">Investment Overview</a></li>
                        <li><a href="investment_marketplace.html" className="block px-4 py-2 rounded-lg hover:bg-primary-50 text-text-secondary hover:text-primary transition-colors">Browse Opportunities</a></li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-text-tertiary">Minimum $100 · Fractional ownership · Blockchain-transparent</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="nav-link-with-dropdown text-text-primary hover:text-primary transition-colors duration-150 font-semibold flex items-center space-x-1">
                  <span>Solutions</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="mega-dropdown absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-sm font-bold text-text-primary mb-3">For Asset Originators & Institutions</p>
                      <ul className="space-y-2">
                        <li><a href="originator_onboarding.html" className="block px-4 py-2 rounded-lg hover:bg-secondary-50 text-text-secondary hover:text-secondary transition-colors">Tokenization Overview</a></li>
                        <li><a href="real_estate_developers.html" className="block px-4 py-2 rounded-lg hover:bg-secondary-50 text-text-secondary hover:text-secondary transition-colors">For Real Estate Developers</a></li>
                        <li><a href="corporate_debt_private_placements.html" className="block px-4 py-2 rounded-lg hover:bg-secondary-50 text-text-secondary hover:text-secondary transition-colors">For Corporate Equity & Debt</a></li>
                        <li><a href="infrastructure_projects_landing_page.html" className="block px-4 py-2 rounded-lg hover:bg-secondary-50 text-text-secondary hover:text-secondary transition-colors">For Infrastructure Projects</a></li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-text-tertiary">Raise from $1M–$100M+ with global investors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Dropdown */}
              <div className="relative group">
                <button className="nav-link-with-dropdown text-text-primary hover:text-primary transition-colors duration-150 font-semibold flex items-center space-x-1">
                  <span>About</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="mega-dropdown absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="p-6">
                    <ul className="space-y-2">
                      <li><a href="about_build_vest.html" className="block px-4 py-2 rounded-lg hover:bg-surface text-text-secondary hover:text-text-primary transition-colors">Company</a></li>
                      <li><a href="frequently_asked_questions.html" className="block px-4 py-2 rounded-lg hover:bg-surface text-text-secondary hover:text-text-primary transition-colors">FAQs</a></li>
                      <li><a href="#" className="block px-4 py-2 rounded-lg hover:bg-surface text-text-secondary hover:text-text-primary transition-colors">Blog</a></li>
                      <li><a href="legal_compliance_center.html" className="block px-4 py-2 rounded-lg hover:bg-surface text-text-secondary hover:text-text-primary transition-colors">Legal & Compliance</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="authentication_hub.html" className="btn btn-outline">Sign In</a>
              <div className="relative group">
                <button className="btn btn-primary flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-3">
                    <a href="investment_marketplace.html" className="block px-4 py-3 rounded-lg hover:bg-primary-50 text-text-primary hover:text-primary transition-colors">
                      <div className="font-semibold">Invest Now</div>
                      <div className="text-xs text-text-secondary">Browse opportunities</div>
                    </a>
                    <a href="originator_onboarding.html" className="block px-4 py-3 rounded-lg hover:bg-secondary-50 text-text-primary hover:text-secondary transition-colors">
                      <div className="font-semibold">List Your Asset</div>
                      <div className="text-xs text-text-secondary">For originators</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors duration-150 touch-target" aria-label="Toggle mobile menu">
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Static Closed */}
        <div className="hidden lg:hidden bg-white border-t border-border shadow-lg max-h-screen overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile menu content here - same pattern as AboutBuildVestPage */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23017EFE\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')", opacity: 0.4 }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full mb-6">
              <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
              </svg>
              <span className="text-sm font-semibold text-primary">Self-Service Support</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary mb-8 leading-relaxed">
              Find answers to common questions about BuildVest, investing, security, and more. Can't find what you're looking for? Contact our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Search for answers..."
                  className="input pl-12 pr-4 py-4 text-lg"
                  aria-label="Search FAQs"
                />
                <svg className="w-6 h-6 text-text-secondary absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Navigation */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
            <button
              onClick={() => handleCategoryClick('all')}
              className={`whitespace-nowrap px-6 py-3 rounded-lg font-semibold transition-all duration-150 ${
                activeCategory === 'all'
                  ? 'active bg-primary text-white'
                  : 'bg-surface text-text-secondary hover:bg-primary-50'
              }`}
            >
              All Questions
            </button>
            <button
              onClick={() => handleCategoryClick('investing')}
              className={`whitespace-nowrap px-6 py-3 rounded-lg font-semibold transition-all duration-150 ${
                activeCategory === 'investing'
                  ? 'active bg-primary text-white'
                  : 'bg-surface text-text-secondary hover:bg-primary-50'
              }`}
            >
              Investing
            </button>
            <button
              onClick={() => handleCategoryClick('security')}
              className={`whitespace-nowrap px-6 py-3 rounded-lg font-semibold transition-all duration-150 ${
                activeCategory === 'security'
                  ? 'active bg-primary text-white'
                  : 'bg-surface text-text-secondary hover:bg-primary-50'
              }`}
            >
              Platform Security
            </button>
            <button
              onClick={() => handleCategoryClick('account')}
              className={`whitespace-nowrap px-6 py-3 rounded-lg font-semibold transition-all duration-150 ${
                activeCategory === 'account'
                  ? 'active bg-primary text-white'
                  : 'bg-surface text-text-secondary hover:bg-primary-50'
              }`}
            >
              Account Management
            </button>
            <button
              onClick={() => handleCategoryClick('legal')}
              className={`whitespace-nowrap px-6 py-3 rounded-lg font-semibold transition-all duration-150 ${
                activeCategory === 'legal'
                  ? 'active bg-primary text-white'
                  : 'bg-surface text-text-secondary hover:bg-primary-50'
              }`}
            >
              Legal & Compliance
            </button>
            <button
              onClick={() => handleCategoryClick('technical')}
              className={`whitespace-nowrap px-6 py-3 rounded-lg font-semibold transition-all duration-150 ${
                activeCategory === 'technical'
                  ? 'active bg-primary text-white'
                  : 'bg-surface text-text-secondary hover:bg-primary-50'
              }`}
            >
              Technical Support
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Popular Questions */}
          {groupedItems.popular.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 flex items-center">
                <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                Popular Questions
              </h2>
              
              <div className="space-y-4">
                {groupedItems.popular.map((item) => {
                  const isExpanded = expandedIds.has(item.id);
                  return (
                    <div key={item.id} className="card overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target"
                        aria-expanded={isExpanded}
                      >
                        <span className="font-semibold text-text-primary pr-4">{item.question}</span>
                        <svg
                          className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      <div className={`px-6 pb-5 ${isExpanded ? '' : 'hidden'}`}>
                        {typeof item.answer === 'string' ? (
                          <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Investing Category */}
          {groupedItems.investing.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 flex items-center">
                <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
                Investing
              </h2>
              
              <div className="space-y-4">
                {groupedItems.investing.map((item) => {
                  const isExpanded = expandedIds.has(item.id);
                  return (
                    <div key={item.id} className="card overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target"
                        aria-expanded={isExpanded}
                      >
                        <span className="font-semibold text-text-primary pr-4">{item.question}</span>
                        <svg
                          className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      <div className={`px-6 pb-5 ${isExpanded ? '' : 'hidden'}`}>
                        {typeof item.answer === 'string' ? (
                          <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Platform Security Category */}
          {groupedItems.security.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 flex items-center">
                <svg className="w-8 h-8 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Platform Security
              </h2>
              
              <div className="space-y-4">
                {groupedItems.security.map((item) => {
                  const isExpanded = expandedIds.has(item.id);
                  return (
                    <div key={item.id} className="card overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target"
                        aria-expanded={isExpanded}
                      >
                        <span className="font-semibold text-text-primary pr-4">{item.question}</span>
                        <svg
                          className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      <div className={`px-6 pb-5 ${isExpanded ? '' : 'hidden'}`}>
                        {typeof item.answer === 'string' ? (
                          <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Account Management Category */}
          {groupedItems.account.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 flex items-center">
                <svg className="w-8 h-8 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                Account Management
              </h2>
              
              <div className="space-y-4">
                {groupedItems.account.map((item) => {
                  const isExpanded = expandedIds.has(item.id);
                  return (
                    <div key={item.id} className="card overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target"
                        aria-expanded={isExpanded}
                      >
                        <span className="font-semibold text-text-primary pr-4">{item.question}</span>
                        <svg
                          className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      <div className={`px-6 pb-5 ${isExpanded ? '' : 'hidden'}`}>
                        {typeof item.answer === 'string' ? (
                          <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Legal & Compliance Category */}
          {groupedItems.legal.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 flex items-center">
                <svg className="w-8 h-8 text-warning mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c-.25.78.054 1.634.796 2.073C5.455 15.245 6 16 6 16.5a1.5 1.5 0 01-3 0v-.5a1 1 0 01.445-.832l.81-.54a1 1 0 01-.276-.616l-.734-2.932a1 1 0 01.445-1.087l2-1.333a1 1 0 011.11 0l2 1.333a1 1 0 01.445 1.087l-.734 2.932a1 1 0 01-.276.616l.81.54A1 1 0 0111 16v.5a1.5 1.5 0 01-3 0c0-.5.545-1.255 1.022-1.601.742-.439 1.046-1.292.796-2.073L9 10.274V8.5a1 1 0 10-2 0v1.774z" clipRule="evenodd"></path>
                </svg>
                Legal & Compliance
              </h2>
              
              <div className="space-y-4">
                {groupedItems.legal.map((item) => {
                  const isExpanded = expandedIds.has(item.id);
                  return (
                    <div key={item.id} className="card overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target"
                        aria-expanded={isExpanded}
                      >
                        <span className="font-semibold text-text-primary pr-4">{item.question}</span>
                        <svg
                          className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      <div className={`px-6 pb-5 ${isExpanded ? '' : 'hidden'}`}>
                        {typeof item.answer === 'string' ? (
                          <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Technical Support Category */}
          {groupedItems.technical.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 flex items-center">
                <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
                Technical Support
              </h2>
              
              <div className="space-y-4">
                {groupedItems.technical.map((item) => {
                  const isExpanded = expandedIds.has(item.id);
                  return (
                    <div key={item.id} className="card overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors duration-150 touch-target"
                        aria-expanded={isExpanded}
                      >
                        <span className="font-semibold text-text-primary pr-4">{item.question}</span>
                        <svg
                          className="w-6 h-6 text-text-secondary flex-shrink-0 transition-transform duration-300"
                          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      <div className={`px-6 pb-5 ${isExpanded ? '' : 'hidden'}`}>
                        {typeof item.answer === 'string' ? (
                          <p className="text-text-secondary leading-relaxed">{item.answer}</p>
                        ) : (
                          item.answer
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Support CTA */}
          <div className="mt-16 card p-8 text-center bg-gradient-to-br from-primary-50 to-secondary-50">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Still have questions?</h3>
            <p className="text-text-secondary mb-6">Our support team is here to help you with any questions or concerns.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@buildvest.com" className="btn btn-primary">
                Email Support
              </a>
              <button
                onClick={() => alert('Live chat would open here. For now, please email support@buildvest.com')}
                className="btn btn-outline"
              >
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://buildvest.net/img/BuildvestLogo_icon_white.png" alt="BuildVest" className="h-8 w-auto" />
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

          {/* Full-width Disclaimer Section */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="mb-6">
              <p className="text-slate-400 text-xs leading-relaxed">
                <strong className="text-slate-300">Investment Disclaimer:</strong> All investments involve risk, including the possible loss of principal. Past performance does not guarantee future results. BuildVest does not provide investment advice. Please consult with a qualified financial professional before making any investment decisions. Investments are subject to market risks and regulatory changes. Returns are not guaranteed and may vary significantly based on market conditions and asset performance.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-slate-400 text-xs leading-relaxed">
                <strong className="text-slate-300">Regulatory Compliance:</strong> BuildVest operates in accordance with applicable securities regulations. Investment opportunities may be subject to regulatory approval and investor accreditation requirements. Please review all offering documents carefully before investing.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-800">
              <p className="text-slate-500 text-sm mb-4 md:mb-0">
                © 2026 BuildVest. All Rights Reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="legal_compliance_center.html" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="legal_compliance_center.html" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="legal_compliance_center.html" className="text-slate-400 hover:text-white transition-colors">Risk Disclosure</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
