'use client';

import { useState } from 'react';

interface Document {
  title: string;
  version: string;
  content: string;
}

interface Documents {
  [key: string]: Document;
}

export default function LegalComplianceCenterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDocument, setActiveDocument] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Document data - preserving exact legal text
  const documents: Documents = {
    terms: {
      title: 'Terms of Service',
      version: 'Version 3.2 - Updated: December 1, 2025',
      content: `
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using BuildVest platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
        
        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily access the platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or public display</li>
            <li>Attempt to reverse engineer any software on the platform</li>
            <li>Remove any copyright or proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>

        <h2>3. Investment Terms</h2>
        <p>All investments made through BuildVest are subject to the following terms:</p>
        <ul>
            <li>Minimum investment amount: $100</li>
            <li>Investment opportunities are available to accredited and verified investors only</li>
            <li>All investments carry inherent risks and past performance does not guarantee future returns</li>
            <li>Investment returns are distributed quarterly to your wallet</li>
        </ul>

        <h2>4. User Account</h2>
        <p>To access certain features of the platform, you must register for an account. You agree to:</p>
        <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain the security of your password and account</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Accept responsibility for all activities that occur under your account</li>
        </ul>

        <h2>5. Disclaimer</h2>
        <p>The materials on BuildVest platform are provided on an 'as is' basis. BuildVest makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2>6. Limitations</h2>
        <p>In no event shall BuildVest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BuildVest platform.</p>

        <h2>7. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
      `
    },
    privacy: {
      title: 'Privacy Policy',
      version: 'Version 2.8 - Updated: November 15, 2025',
      content: `
        <h2>1. Information We Collect</h2>
        <p>BuildVest collects several types of information to provide and improve our service:</p>
        <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, residential address</li>
            <li><strong>Financial Information:</strong> Bank account details, investment history, transaction records</li>
            <li><strong>Identity Verification:</strong> Government-issued ID, proof of address, KYC documents</li>
            <li><strong>Usage Data:</strong> Log data, device information, IP address, browser type</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use collected information for various purposes:</p>
        <ul>
            <li>To provide and maintain our service</li>
            <li>To process your investment transactions</li>
            <li>To verify your identity and comply with KYC/AML regulations</li>
            <li>To send you notifications about your account and investments</li>
            <li>To provide customer support</li>
            <li>To detect, prevent and address technical issues and fraudulent activities</li>
            <li>To provide you with news and information about our services</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>The security of your personal information is important to us. We implement appropriate technical and organizational measures to protect your data:</p>
        <ul>
            <li>256-bit SSL encryption for all data transmission</li>
            <li>Secure data centers with 24/7 monitoring</li>
            <li>Regular security audits and penetration testing</li>
            <li>Multi-factor authentication for account access</li>
            <li>Employee training on data protection</li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul>
            <li>Service providers who assist in our operations</li>
            <li>Regulatory authorities when required by law</li>
            <li>Professional advisors including lawyers and auditors</li>
            <li>Third parties in connection with business transfers</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>You have rights regarding your personal data:</p>
        <ul>
            <li>Right to access your data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
        </ul>

        <h2>6. Cookies</h2>
        <p>We use cookies and similar tracking technologies to track activity on our platform. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.</p>

        <h2>7. Changes to Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date."</p>
      `
    },
    risk: {
      title: 'Risk Disclosure',
      version: 'Version 4.1 - Updated: December 5, 2025',
      content: `
        <h2>Important Risk Disclosures</h2>
        <p><strong>Please read this document carefully before investing.</strong> All investments involve risk, including the possible loss of principal. The following disclosures outline the key risks associated with investing through BuildVest:</p>

        <h2>1. Market Risk</h2>
        <p>The value of your investments may fluctuate due to market conditions, economic factors, and asset-specific events. Market downturns can result in significant losses.</p>

        <h2>2. Liquidity Risk</h2>
        <p>Real estate and infrastructure investments are generally illiquid. While we offer a secondary marketplace, there is no guarantee you will be able to sell your investment shares when desired or at a favorable price.</p>

        <h2>3. Loss of Principal</h2>
        <p>You may lose some or all of your invested capital. Past performance does not guarantee future results. Investment returns are not guaranteed.</p>

        <h2>4. Regulatory Risk</h2>
        <p>Changes in laws, regulations, or tax policies may adversely affect your investments. Regulatory compliance costs may impact returns.</p>

        <h2>5. Platform Risk</h2>
        <p>Technical issues, cybersecurity breaches, or operational failures could affect your ability to access or manage your investments.</p>

        <h2>6. Concentration Risk</h2>
        <p>Investing heavily in a single asset or asset class may expose you to greater risk than a diversified portfolio.</p>

        <h2>7. Inflation Risk</h2>
        <p>Inflation may erode the purchasing power of your investment returns over time.</p>

        <h2>8. Currency Risk</h2>
        <p>For international investments, currency exchange rate fluctuations may impact returns.</p>

        <h2>9. Tokenization Technology Risk</h2>
        <p>Blockchain and tokenization technologies are relatively new and may face technical, regulatory, or adoption challenges.</p>

        <h2>10. No FDIC Insurance</h2>
        <p>Your investments are not FDIC insured or protected by any government guarantee. Only cash held in your wallet may be FDIC insured through our banking partners.</p>

        <h2>Suitability</h2>
        <p>Real estate and alternative investments may not be suitable for all investors. Consider your investment objectives, risk tolerance, and financial situation before investing. Consult with a qualified financial advisor if needed.</p>

        <h2>Forward-Looking Statements</h2>
        <p>Projected returns, forecasts, and forward-looking statements are estimates only and are not guaranteed. Actual results may differ materially.</p>
      `
    },
    aml: {
      title: 'Anti-Money Laundering Policy',
      version: 'Version 2.5 - Updated: November 20, 2025',
      content: `
        <h2>AML/KYC Policy</h2>
        <p>BuildVest is committed to preventing money laundering and terrorist financing. Our Anti-Money Laundering (AML) and Know Your Customer (KYC) policies comply with applicable regulations including the Bank Secrecy Act and USA PATRIOT Act.</p>

        <h2>1. Customer Identification Program (CIP)</h2>
        <p>Before opening an account, we verify the identity of each customer by collecting and verifying:</p>
        <ul>
            <li>Full legal name</li>
            <li>Date of birth</li>
            <li>Residential address</li>
            <li>Government-issued identification number (SSN, passport, etc.)</li>
            <li>Photo identification document</li>
        </ul>

        <h2>2. Beneficial Ownership</h2>
        <p>For entity accounts, we identify and verify the beneficial owners who own 25% or more of the entity.</p>

        <h2>3. Ongoing Monitoring</h2>
        <p>We continuously monitor customer accounts and transactions for suspicious activity including:</p>
        <ul>
            <li>Unusual transaction patterns</li>
            <li>Transactions inconsistent with customer profile</li>
            <li>Structuring or attempts to avoid reporting thresholds</li>
            <li>Transactions involving high-risk jurisdictions</li>
        </ul>

        <h2>4. OFAC Screening</h2>
        <p>All customers and transactions are screened against OFAC sanctions lists and other government watch lists.</p>

        <h2>5. Suspicious Activity Reporting</h2>
        <p>We file Suspicious Activity Reports (SARs) with FinCEN when we detect potentially suspicious activities.</p>

        <h2>6. Record Retention</h2>
        <p>Customer identification records and transaction records are retained for at least 5 years as required by law.</p>

        <h2>7. Employee Training</h2>
        <p>All employees receive regular AML training to identify and prevent money laundering activities.</p>

        <h2>8. Third-Party Due Diligence</h2>
        <p>We conduct enhanced due diligence on high-risk customers and third-party service providers.</p>

        <h2>9. Blockchain Transaction Monitoring</h2>
        <p>Cryptocurrency transactions are monitored using blockchain analytics tools to detect suspicious patterns and mixing services.</p>
      `
    },
    cookies: {
      title: 'Cookie Policy',
      version: 'Version 1.9 - Updated: October 30, 2025',
      content: `
        <h2>Cookie Usage</h2>
        <p>BuildVest uses cookies and similar tracking technologies to improve your experience on our platform.</p>

        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit our website. They help us recognize you and remember your preferences.</p>

        <h2>Types of Cookies We Use</h2>
        <ul>
            <li><strong>Essential Cookies:</strong> Required for the platform to function properly</li>
            <li><strong>Performance Cookies:</strong> Collect information about how you use our platform</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
            <li><strong>Analytics Cookies:</strong> Help us understand user behavior and improve our service</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our platform.</p>

        <h2>Third-Party Cookies</h2>
        <p>We may use third-party services that set their own cookies, including:</p>
        <ul>
            <li>Google Analytics</li>
            <li>Payment processors</li>
            <li>Customer support tools</li>
            <li>Social media platforms</li>
        </ul>

        <h2>Cookie Consent</h2>
        <p>By using our platform, you consent to our use of cookies as described in this policy. You can withdraw consent at any time by adjusting your cookie settings.</p>
      `
    },
    compliance: {
      title: 'Regulatory Compliance',
      version: 'Version 3.7 - Updated: December 8, 2025',
      content: `
        <h2>SEC Registration and Compliance</h2>
        <p>BuildVest operates in accordance with securities laws and regulations. We are registered with the Securities and Exchange Commission (SEC) and comply with applicable federal and state securities regulations.</p>

        <h2>1. Securities Offerings</h2>
        <p>Investment opportunities on our platform are structured to comply with one or more of the following exemptions:</p>
        <ul>
            <li><strong>Regulation D (Rule 506(b) and 506(c)):</strong> Private placements to accredited investors</li>
            <li><strong>Regulation A+:</strong> Mini-IPOs for qualified offerings</li>
            <li><strong>Regulation Crowdfunding:</strong> Offerings available to non-accredited investors with investment limits</li>
        </ul>

        <h2>2. Investor Accreditation</h2>
        <p>We verify investor accreditation status through:</p>
        <ul>
            <li>Income verification (individual income over $200,000 or joint income over $300,000)</li>
            <li>Net worth verification (excluding primary residence)</li>
            <li>Professional certification verification</li>
            <li>Entity qualification verification</li>
        </ul>

        <h2>3. Data Protection Compliance</h2>
        <p>We comply with data protection regulations including:</p>
        <ul>
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>Other applicable state and international privacy laws</li>
        </ul>

        <h2>4. Anti-Money Laundering (AML)</h2>
        <p>Our AML program complies with:</p>
        <ul>
            <li>Bank Secrecy Act (BSA)</li>
            <li>USA PATRIOT Act</li>
            <li>FinCEN regulations</li>
            <li>OFAC sanctions requirements</li>
        </ul>

        <h2>5. Cybersecurity Standards</h2>
        <p>We maintain cybersecurity measures consistent with:</p>
        <ul>
            <li>SEC Cybersecurity Guidance</li>
            <li>NIST Cybersecurity Framework</li>
            <li>SOC 2 Type II certification</li>
            <li>ISO 27001 information security standards</li>
        </ul>

        <h2>6. Financial Industry Compliance</h2>
        <p>We adhere to:</p>
        <ul>
            <li>FINRA regulations (where applicable)</li>
            <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
            <li>Banking and payment processing regulations</li>
        </ul>

        <h2>7. Tokenization and Blockchain Compliance</h2>
        <p>Our blockchain-based tokenization complies with:</p>
        <ul>
            <li>Securities token regulations</li>
            <li>Transfer agent requirements</li>
            <li>Custody and safekeeping regulations</li>
        </ul>

        <h2>8. Investor Protection</h2>
        <p>We implement investor protection measures including:</p>
        <ul>
            <li>Disclosure requirements for all offerings</li>
            <li>Suitability assessments</li>
            <li>Investment limits for non-accredited investors</li>
            <li>Cooling-off periods where applicable</li>
        </ul>

        <h2>9. Reporting and Filing Requirements</h2>
        <p>We maintain compliance with:</p>
        <ul>
            <li>Form D filings with the SEC</li>
            <li>Offering circulars and prospectus requirements</li>
            <li>Ongoing reporting for Regulation A+ offerings</li>
            <li>Annual reports and financial statements</li>
        </ul>

        <h2>10. Regulatory Examinations</h2>
        <p>We cooperate fully with regulatory examinations and maintain detailed records for review by:</p>
        <ul>
            <li>Securities and Exchange Commission</li>
            <li>State securities regulators</li>
            <li>Other applicable regulatory bodies</li>
        </ul>
      `
    }
  };

  const showDocument = (docType: string) => {
    setActiveDocument(docType);
    setIsModalOpen(true);
  };

  const closeDocument = () => {
    setIsModalOpen(false);
    setActiveDocument(null);
  };

  const printDocument = () => {
    window.print();
  };

  const downloadDocument = () => {
    alert('Document download functionality coming soon');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Document categories with metadata
  const documentCategories = [
    {
      id: 'terms',
      title: 'Terms of Service',
      description: 'Platform usage terms and user agreements',
      version: 'Version 3.2',
      updated: 'Dec 1, 2025',
      iconColor: 'primary',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      description: 'Data protection and user privacy practices',
      version: 'Version 2.8',
      updated: 'Nov 15, 2025',
      iconColor: 'secondary',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      )
    },
    {
      id: 'risk',
      title: 'Risk Disclosure',
      description: 'Investment risks and disclaimers',
      version: 'Version 4.1',
      updated: 'Dec 5, 2025',
      iconColor: 'warning',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      )
    },
    {
      id: 'aml',
      title: 'AML Policy',
      description: 'Anti-Money Laundering compliance procedures',
      version: 'Version 2.5',
      updated: 'Nov 20, 2025',
      iconColor: 'accent',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      id: 'cookies',
      title: 'Cookie Policy',
      description: 'Cookie usage and tracking information',
      version: 'Version 1.9',
      updated: 'Oct 30, 2025',
      iconColor: 'primary',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      )
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance',
      description: 'SEC and regulatory framework compliance',
      version: 'Version 3.7',
      updated: 'Dec 8, 2025',
      iconColor: 'secondary',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
      )
    }
  ];

  // Filter documents based on search
  const filteredCategories = documentCategories.filter(cat => {
    if (!searchTerm) return true;
    return (
      cat.title.toLowerCase().includes(searchTerm) ||
      cat.description.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="bg-surface">
      {/* Sticky Navigation - Same as other pages */}
      <nav id="mainNav" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="../index.html" className="flex items-center space-x-3">
                <img src="https://buildvest.net/buildvest-logo.png" alt="BuildVest" className="h-10 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation */}
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
            {/* Mobile menu content */}
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
              <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-sm font-semibold text-primary">SEC Compliant & Regulated</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Legal & Compliance Center</h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">Comprehensive access to all platform legal documents, policies, and regulatory information</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Search legal documents, policies, or topics..."
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="card card-hover cursor-pointer"
                onClick={() => showDocument(cat.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-${cat.iconColor}-100 rounded-lg flex items-center justify-center flex-shrink-0 text-${cat.iconColor}`}>
                      {cat.icon}
                    </div>
                    <span className="badge badge-success">Active</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{cat.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{cat.description}</p>
                  <div className="flex items-center justify-between text-xs text-text-tertiary">
                    <span>{cat.version}</span>
                    <span>Updated: {cat.updated}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Compliance Certifications</h2>
            <p className="text-text-secondary">BuildVest maintains the highest standards of regulatory compliance and security</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SEC Registered */}
            <div className="card text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-2">SEC Registered</h3>
              <p className="text-sm text-text-secondary">Registered with the Securities and Exchange Commission</p>
            </div>

            {/* SOC 2 Type II */}
            <div className="card text-center p-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-2">SOC 2 Type II</h3>
              <p className="text-sm text-text-secondary">Certified for security and data protection standards</p>
            </div>

            {/* ISO 27001 */}
            <div className="card text-center p-6">
              <div className="w-16 h-16 bg-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-2">ISO 27001</h3>
              <p className="text-sm text-text-secondary">Information security management system certified</p>
            </div>

            {/* PCI DSS */}
            <div className="card text-center p-6">
              <div className="w-16 h-16 bg-warning-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-bold text-text-primary mb-2">PCI DSS</h3>
              <p className="text-sm text-text-secondary">Payment Card Industry Data Security Standard compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Contact Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Legal Inquiries</h2>
              <p className="text-text-secondary">For legal questions or compliance matters, please contact our legal team</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary mb-2">Email</h3>
                <a href="mailto:legal@buildvest.com" className="text-primary hover:underline">legal@buildvest.com</a>
              </div>

              {/* Phone */}
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary mb-2">Phone</h3>
                <a href="tel:+18005325855" className="text-primary hover:underline">1-800-LEGAL-BV</a>
              </div>

              {/* Address */}
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary mb-2">Address</h3>
                <p className="text-sm text-text-secondary">123 Financial District<br />New York, NY 10004</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a href="mailto:legal@buildvest.com" className="btn btn-primary">Contact Legal Team</a>
            </div>
          </div>
        </div>
      </section>

      {/* Document Modal */}
      {isModalOpen && activeDocument && documents[activeDocument] && (
        <div className="fixed inset-0 z-50 overflow-y-auto" onClick={closeDocument}>
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75"></div>

            {/* Modal panel */}
            <div
              className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">{documents[activeDocument].title}</h2>
                  <p className="text-sm text-text-tertiary">{documents[activeDocument].version}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={printDocument}
                    className="p-2 hover:bg-surface rounded-lg transition-colors"
                    title="Print"
                  >
                    <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                    </svg>
                  </button>
                  <button
                    onClick={downloadDocument}
                    className="p-2 hover:bg-surface rounded-lg transition-colors"
                    title="Download"
                  >
                    <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </button>
                  <button
                    onClick={closeDocument}
                    className="p-2 hover:bg-surface rounded-lg transition-colors"
                    title="Close"
                  >
                    <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-6 py-8 max-h-[70vh] overflow-y-auto">
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: documents[activeDocument].content }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

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
