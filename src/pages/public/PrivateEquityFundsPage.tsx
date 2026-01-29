import React, { useState } from 'react';

// TypeScript interfaces
interface Challenge {
  icon: string;
  title: string;
  description: string;
}

interface Solution {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface CaseStudy {
  type: string;
  aum: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const PrivateEquityFundsPage: React.FC = () => {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Set<string>>(new Set());

  // Toggle FAQ
  const toggleFaq = (id: string) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedFaqs(newExpanded);
  };

  // Data structures
  const challenges: Challenge[] = [
    {
      icon: '💧',
      title: 'Limited Liquidity',
      description: 'Traditional PE funds lock capital for 7-10 years with no secondary market access, creating significant liquidity constraints for LPs.',
    },
    {
      icon: '💰',
      title: 'High Minimums',
      description: 'Typical minimum investments of $250K-$5M+ exclude many qualified investors and limit diversification opportunities.',
    },
    {
      icon: '📋',
      title: 'Administrative Burden',
      description: 'Manual LP onboarding, capital calls, distributions, and reporting consume resources and introduce delays.',
    },
    {
      icon: '🌍',
      title: 'Limited Market Reach',
      description: 'Geographic and regulatory barriers restrict access to global capital pools and diverse investor bases.',
    },
  ];

  const solutions: Solution[] = [
    {
      icon: '🪙',
      title: 'Portfolio Tokenization',
      description: 'Convert fund interests into digital securities that maintain all legal rights while enabling fractional ownership and improved liquidity.',
    },
    {
      icon: '🔄',
      title: 'Secondary Trading',
      description: 'Provide LPs with optional liquidity through compliant secondary markets while maintaining fund stability and GP control.',
    },
    {
      icon: '📊',
      title: 'Fractional Ownership',
      description: 'Lower minimum investments to $5K-$50K+ to access broader investor bases and enable better portfolio diversification.',
    },
    {
      icon: '✅',
      title: 'Automated Compliance',
      description: 'Smart contracts handle KYC/AML verification, accreditation checks, and transfer restrictions automatically and continuously.',
    },
    {
      icon: '📢',
      title: 'Smart Distribution',
      description: 'Automate capital calls and distributions with instant settlement, reduced costs, and complete audit trails.',
    },
    {
      icon: '🌐',
      title: 'Global Access',
      description: 'Reach international investors through compliant multi-jurisdiction infrastructure supporting 50+ countries.',
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Submit Fund Documentation',
      description: 'Upload fund agreements, compliance docs, and investor materials. Our team reviews structure and regulatory requirements.',
    },
    {
      number: '02',
      title: 'Structure & Validate',
      description: 'We work with your legal team to structure tokenization, ensure regulatory compliance, and configure smart contracts.',
    },
    {
      number: '03',
      title: 'Deploy & Raise Capital',
      description: 'Launch your tokenized fund on BuildVest. Access our investor network and marketing support for fundraising.',
    },
    {
      number: '04',
      title: 'Operate & Report',
      description: 'Manage your fund with automated capital calls, distributions, reporting, and optional secondary market liquidity.',
    },
  ];

  const caseStudies: CaseStudy[] = [
    {
      type: 'Growth Equity Fund',
      aum: '$28M AUM',
      title: 'Africa Tech Ventures II',
      description: 'Pan-African growth equity fund targeting Series A-B technology companies across Kenya, Nigeria, and South Africa. Tokenization enabled access to diaspora investors and reduced minimum from $500K to $25K.',
      metrics: [
        { label: 'Capital Raised', value: '$28M in 4 months' },
        { label: 'Investor Base', value: '340 LPs (vs 45 target)' },
        { label: 'Avg Investment', value: '$82K (85% under $250K)' },
        { label: 'Secondary Volume', value: '$3.2M traded (11% of AUM)' },
      ],
    },
    {
      type: 'Infrastructure Fund',
      aum: '$42M AUM',
      title: 'East Africa Infrastructure Partners',
      description: 'Fund focused on renewable energy and transportation projects in Kenya, Uganda, and Tanzania. Tokenization provided LPs with quarterly liquidity windows and streamlined reporting.',
      metrics: [
        { label: 'Time to Close', value: '5 months (vs 12 months projected)' },
        { label: 'Operating Costs', value: '40% reduction vs traditional structure' },
        { label: 'LP Satisfaction', value: '94% (liquidity & transparency)' },
        { label: 'Accredited Jurisdictions', value: '18 countries represented' },
      ],
    },
    {
      type: 'Impact Fund',
      aum: '$65M AUM',
      title: 'Sub-Saharan Impact Fund III',
      description: 'Multi-sector impact fund with ESG focus across 8 African markets. Smart contracts automated impact reporting and aligned distributions with sustainability milestones.',
      metrics: [
        { label: 'ESG Automation', value: 'Real-time impact dashboards' },
        { label: 'Milestone Tracking', value: '100% automated verification' },
        { label: 'Reporting Savings', value: '120 hours/quarter saved' },
        { label: 'Investor Engagement', value: '3.5x increase vs Fund II' },
      ],
    },
  ];

  const faqs: FAQ[] = [
    {
      id: 'faq-1',
      question: 'How does tokenization affect fund governance and GP control?',
      answer: 'Tokenization does not change fund governance structures. GPs maintain full decision-making authority, advisory board composition, and management rights as defined in your LPA. Tokens represent economic interests only - voting rights, information rights, and other governance provisions remain with traditional legal agreements. You can customize transfer restrictions, lockup periods, and secondary market controls to align with your fund strategy.',
    },
    {
      id: 'faq-2',
      question: 'What regulatory frameworks apply to tokenized PE funds?',
      answer: 'Tokenized fund interests are securities subject to existing regulations (SEC in US, FCA in UK, CMA in Kenya, etc.). We structure offerings as Reg D/Reg S in the US, with parallel registrations in other jurisdictions as needed. Our platform maintains compliance with KYC/AML requirements, accredited investor verification, transfer restrictions, and reporting obligations. We work with your legal counsel to ensure full compliance with applicable securities laws.',
    },
    {
      id: 'faq-3',
      question: 'How does secondary market liquidity work for PE funds?',
      answer: 'Secondary trading is optional and fully customizable. You can: (1) Prohibit secondary trading entirely, (2) Allow trading during specific windows (e.g., quarterly), (3) Require GP approval for all transfers, or (4) Enable open secondary trading subject to transfer restrictions. Smart contracts enforce all rules automatically. Secondary pricing is market-driven but you can set floors to protect fund valuations. Many GPs use limited liquidity as an LP benefit while maintaining fund stability.',
    },
    {
      id: 'faq-4',
      question: 'What are the costs of tokenizing a PE fund?',
      answer: 'Tokenization costs typically range from $50K-$150K depending on fund complexity, jurisdictions, and features. This includes legal structuring, smart contract development, compliance setup, and platform integration. Ongoing costs are 0.5-1.5% of AUM annually (vs 2-3% for traditional fund administration), covering custody, compliance monitoring, reporting, and secondary market operations. Most funds see net cost savings within 12-18 months due to reduced administrative overhead.',
    },
    {
      id: 'faq-5',
      question: 'Can we tokenize an existing fund or only new funds?',
      answer: 'Both options are possible. For existing funds, we can tokenize either: (1) New capital raises (follow-on closes), or (2) Existing LP interests with their consent. The latter requires LP approval and may trigger tax considerations, so we work closely with your legal and tax advisors. For funds with significant remaining life and capital needs, tokenizing follow-on closes is often the cleanest approach. New funds can be structured with tokenization from inception.',
    },
    {
      id: 'faq-6',
      question: 'How are capital calls and distributions handled?',
      answer: 'Capital calls and distributions are automated through smart contracts. For capital calls, the system: (1) Calculates each LP\'s obligation based on their ownership, (2) Sends automated notifications with payment instructions, (3) Tracks payments and sends reminders, (4) Records all activity on-chain for audit trails. Distributions work similarly with instant settlement to LP wallets or linked bank accounts. This eliminates wire fees, reduces administrative time by 80%+, and provides real-time transparency to all parties.',
    },
    {
      id: 'faq-7',
      question: 'What investor protections are in place?',
      answer: 'Multiple layers of investor protection: (1) Custody: Assets held by institutional-grade custodians with insurance, (2) Smart contract security: All contracts audited by top firms, (3) Regulatory compliance: Full KYC/AML, accreditation verification, and transfer restrictions, (4) Legal agreements: Traditional LPAs and subscription documents maintain all legal rights, (5) Transparency: Real-time portfolio visibility and reporting, (6) Segregation: Each fund operates independently with separate smart contracts and custody arrangements.',
    },
    {
      id: 'faq-8',
      question: 'What happens if BuildVest ceases operations?',
      answer: 'Your fund operates independently of BuildVest. If we ceased operations: (1) Smart contracts continue functioning autonomously on the blockchain, (2) Fund governance and operations continue under your control, (3) Legal agreements and LP rights remain fully enforceable, (4) Assets remain in custody with institutional custodians, (5) You can migrate to another platform or manage directly. We also provide source code and documentation for fund self-management. Think of us as infrastructure, not a critical dependency.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Dark Originator Theme */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 border-b border-blue-800 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">BV</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">BuildVest</div>
                <div className="text-blue-300 text-xs">Fund Tokenization</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-blue-200 hover:text-white transition-colors">
                For Investors
              </a>
              <a href="/real-estate-developers" className="text-blue-200 hover:text-white transition-colors">
                Real Estate
              </a>
              <a href="/corporate-debt" className="text-blue-200 hover:text-white transition-colors">
                Corporate Debt
              </a>
              <a href="/private-equity-funds" className="text-white font-semibold">
                PE Funds
              </a>
              <a href="/about" className="text-blue-200 hover:text-white transition-colors">
                About
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
                Start Onboarding
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-800">
              <div className="flex flex-col space-y-3">
                <a href="/" className="text-blue-200 hover:text-white px-4 py-2">
                  For Investors
                </a>
                <a href="/real-estate-developers" className="text-blue-200 hover:text-white px-4 py-2">
                  Real Estate
                </a>
                <a href="/corporate-debt" className="text-blue-200 hover:text-white px-4 py-2">
                  Corporate Debt
                </a>
                <a href="/private-equity-funds" className="text-white font-semibold px-4 py-2">
                  PE Funds
                </a>
                <a href="/about" className="text-blue-200 hover:text-white px-4 py-2">
                  About
                </a>
                <button className="mx-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg">
                  Start Onboarding
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/95 to-gray-900/98"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-blue-200">
                <span className="text-2xl">🏛️</span>
                <span className="text-sm font-medium">SEC Regulated</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <span className="text-2xl">🔒</span>
                <span className="text-sm font-medium">Bank-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <span className="text-2xl">🌍</span>
                <span className="text-sm font-medium">50+ Countries</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Unlock Portfolio Liquidity With <span className="text-blue-300">Tokenization</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Transform your private equity fund into a digital security. Lower minimums, provide LP liquidity, automate operations, and access global capital markets.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl">
                Start Onboarding →
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30">
                Book Consultation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-white">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-300">$5B+</div>
                <div className="text-sm text-blue-200">AUM Supported</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-300">60+</div>
                <div className="text-sm text-blue-200">Funds Tokenized</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-3xl font-bold text-blue-300">18,000+</div>
                <div className="text-sm text-blue-200">Active LPs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Traditional PE Fund Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Private equity fund managers face significant structural barriers that limit growth, increase costs, and constrain LP access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BuildVest Solution Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The BuildVest Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade tokenization platform that modernizes PE fund operations while maintaining full regulatory compliance and GP control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:border-blue-300"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your tokenized fund in 4-8 weeks with full legal and technical support from our experienced team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl font-bold rounded-full mb-4 mx-auto">
                  {step.number}
                </div>

                {/* Connecting Line (except last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-200 -z-10"></div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading PE funds across Africa are using tokenization to enhance LP experiences and unlock new capital sources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {study.type}
                  </span>
                  <span className="text-2xl font-bold text-blue-600">{study.aum}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>

                <div className="space-y-3 border-t border-gray-200 pt-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                      <span className="text-sm text-gray-600 font-medium">{metric.label}:</span>
                      <span className="text-sm text-gray-900 font-bold text-right ml-2">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Compliance & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Institutional infrastructure trusted by fund managers overseeing billions in AUM.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Regulatory Compliance */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏛️</span>
                Regulatory Compliance
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">SEC/FCA Registration</div>
                    <div className="text-sm text-gray-600">Registered with major securities regulators</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">KYC/AML Automation</div>
                    <div className="text-sm text-gray-600">Real-time verification with leading providers</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Accreditation Verification</div>
                    <div className="text-sm text-gray-600">Automated investor qualification checks</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Multi-Jurisdiction Support</div>
                    <div className="text-sm text-gray-600">Compliant operations in 50+ countries</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Transfer Restrictions</div>
                    <div className="text-sm text-gray-600">Smart contract enforcement of all legal requirements</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Audit & Reporting</div>
                    <div className="text-sm text-gray-600">Complete transparency and regulatory reporting</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Infrastructure */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">🔒</span>
                Security Infrastructure
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Institutional Custody</div>
                    <div className="text-sm text-gray-600">Bank-grade custody with insurance coverage</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Smart Contract Audits</div>
                    <div className="text-sm text-gray-600">Audited by top blockchain security firms</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Multi-Sig Security</div>
                    <div className="text-sm text-gray-600">Multi-signature requirements for critical operations</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Penetration Testing</div>
                    <div className="text-sm text-gray-600">Regular security assessments by third parties</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Monitoring</div>
                    <div className="text-sm text-gray-600">Real-time threat detection and response</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-gray-900">Disaster Recovery</div>
                    <div className="text-sm text-gray-600">Redundant systems and backup procedures</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="text-2xl">🏛️</span>
              <span className="font-semibold">SEC Regulated</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="text-2xl">🛡️</span>
              <span className="font-semibold">FCA Authorized</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="text-2xl">✅</span>
              <span className="font-semibold">ISO 27001</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions from private equity fund managers about tokenization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={expandedFaqs.has(faq.id)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
                  <span className="text-2xl text-blue-600 flex-shrink-0">
                    {expandedFaqs.has(faq.id) ? '−' : '+'}
                  </span>
                </button>

                {expandedFaqs.has(faq.id) && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Tokenize Your Fund?
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join 60+ fund managers who have modernized their operations with BuildVest. Book a consultation to discuss your specific requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button className="px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-xl">
                Start Onboarding →
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30">
                Schedule a Call
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-sm text-blue-200 mb-1">Average Setup Time</div>
                <div className="text-2xl font-bold text-white">4-8 Weeks</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-sm text-blue-200 mb-1">Operating Cost Reduction</div>
                <div className="text-2xl font-bold text-white">40-60%</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-sm text-blue-200 mb-1">LP Satisfaction</div>
                <div className="text-2xl font-bold text-white">94%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">BV</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">BuildVest</div>
                  <div className="text-blue-400 text-xs">Fund Tokenization</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Enterprise tokenization platform for private equity funds seeking enhanced liquidity and global reach.
              </p>
            </div>

            {/* For Fund Managers */}
            <div>
              <h4 className="text-white font-semibold mb-4">For Fund Managers</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Platform Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Legal & Compliance
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>partnerships@buildvest.africa</li>
                <li>+254 (0) 709 XXX XXX</li>
                <li className="pt-4">
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Twitter
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>© 2024 BuildVest. All rights reserved.</div>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-500 max-w-4xl">
              <p>
                <strong>Important Disclaimer:</strong> Tokenized fund interests are securities and involve
                risk of loss. Past performance does not guarantee future results. BuildVest is a technology
                platform and does not provide investment advice. All investments are subject to regulatory
                approval and investor qualification requirements. Consult your legal, tax, and financial
                advisors before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivateEquityFundsPage;