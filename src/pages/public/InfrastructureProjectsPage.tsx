import React, { useState } from 'react';

// TypeScript interfaces
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  amount: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  status: string;
  timeline: string;
}

interface Challenge {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface Solution {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

interface TrustIndicator {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const InfrastructureProjectsPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set());
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  
  // Form state for consultation modal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectValue: '',
    timeline: '',
    message: ''
  });

  const toggleFaq = (id: number) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedFaqs(newExpanded);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert(`Consultation request submitted!\n\nProject: ${formData.projectType}\nValue: ${formData.projectValue}\nTimeline: ${formData.timeline}\n\nOur team will contact you within 24 hours.`);
    setIsConsultationModalOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      projectValue: '',
      timeline: '',
      message: ''
    });
  };

  const challenges: Challenge[] = [
    {
      id: 1,
      icon: '💰',
      title: 'Limited Capital Access',
      description: 'Traditional financing often falls short for large-scale infrastructure projects, creating funding gaps that delay or cancel critical developments.'
    },
    {
      id: 2,
      icon: '📋',
      title: 'Complex Approval Process',
      description: 'Navigate multiple regulatory bodies, environmental assessments, and community consultations that can take years to complete.'
    },
    {
      id: 3,
      icon: '💸',
      title: 'High Transaction Costs',
      description: 'Legal fees, due diligence costs, and intermediary charges can consume 5-15% of project capital before construction begins.'
    },
    {
      id: 4,
      icon: '⏱️',
      title: 'Lengthy Timelines',
      description: 'From concept to funding can take 18-36 months through traditional channels, during which costs escalate and opportunities diminish.'
    }
  ];

  const solutions: Solution[] = [
    {
      id: 1,
      icon: '🏗️',
      title: 'Flexible Deal Structures',
      description: 'Design custom financing structures that match your project needs - debt, equity, hybrid models, or revenue-sharing arrangements.'
    },
    {
      id: 2,
      icon: '🌍',
      title: 'Global Investor Access',
      description: 'Connect with institutional investors, development banks, and impact funds across 50+ countries actively seeking infrastructure opportunities.'
    },
    {
      id: 3,
      icon: '✅',
      title: 'Automated Compliance',
      description: 'Smart contracts ensure regulatory compliance across jurisdictions, reducing legal costs and accelerating approval timelines.'
    },
    {
      id: 4,
      icon: '⚡',
      title: 'On-Chain Settlement',
      description: 'Instant capital deployment and milestone-based disbursements through blockchain technology, eliminating bank delays.'
    },
    {
      id: 5,
      icon: '📊',
      title: 'Real-Time Performance Tracking',
      description: 'Transparent project dashboards showing construction progress, financial metrics, and ESG impact for all stakeholders.'
    },
    {
      id: 6,
      icon: '💱',
      title: 'Secondary Market Liquidity',
      description: 'Enable investors to trade positions before project completion, reducing capital lock-up periods and attracting more funding.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      number: '01',
      title: 'Submit Project Details',
      description: 'Upload feasibility studies, engineering plans, financial projections, and environmental assessments through our secure portal.'
    },
    {
      id: 2,
      number: '02',
      title: 'Structure & Validate',
      description: 'Our team works with you to design optimal capital structure, conduct due diligence, and prepare investor materials (2-4 weeks).'
    },
    {
      id: 3,
      number: '03',
      title: 'Deploy & Raise Capital',
      description: 'Launch your offering to qualified investors globally. Real-time dashboard shows fundraising progress and investor commitments.'
    },
    {
      id: 4,
      number: '04',
      title: 'Track & Report',
      description: 'Automated milestone tracking, disbursement management, and transparent reporting keep all stakeholders informed throughout project lifecycle.'
    }
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Solar Energy Farm',
      location: 'Garissa County, Kenya',
      amount: '$85M',
      description: 'Large-scale solar installation providing clean energy to 150,000 households while creating sustainable jobs in rural Kenya.',
      metrics: [
        { label: 'Capacity', value: '200 MW' },
        { label: 'Jobs Created', value: '2,800' },
        { label: 'Timeline', value: '18 months' },
        { label: 'CO₂ Reduction', value: '180K tons/year' }
      ],
      status: 'Operational',
      timeline: 'Funded in 4 months • Completed ahead of schedule'
    },
    {
      id: 2,
      title: 'Metro Rail System',
      location: 'Lagos, Nigeria',
      amount: '$120M',
      description: 'Modern metro infrastructure connecting suburban areas to city center, reducing commute times by 60% for 500,000 daily passengers.',
      metrics: [
        { label: 'Track Length', value: '25 km' },
        { label: 'Jobs Created', value: '3,500' },
        { label: 'Timeline', value: '36 months' },
        { label: 'Daily Riders', value: '500K' }
      ],
      status: 'Under Construction',
      timeline: 'Funded in 6 months • Phase 1 opens Q2 2026'
    },
    {
      id: 3,
      title: 'Water Treatment Facility',
      location: 'East African Region',
      amount: '$28M',
      description: 'State-of-the-art water purification plant serving multiple municipalities, providing clean water to 500,000 residents.',
      metrics: [
        { label: 'Capacity', value: '50M liters/day' },
        { label: 'Jobs Created', value: '800' },
        { label: 'Timeline', value: '15 months' },
        { label: 'Residents Served', value: '500K' }
      ],
      status: 'Operational',
      timeline: 'Funded in 3 months • Commissioned Oct 2024'
    }
  ];

  const trustIndicators: TrustIndicator[] = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Regulatory Compliance',
      description: 'Registered with SEC and FCA. All offerings comply with securities regulations in operating jurisdictions.'
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Bank-Grade Security',
      description: 'SOC 2 Type II certified infrastructure. Multi-signature wallets and cold storage for digital assets.'
    },
    {
      id: 3,
      icon: '🏦',
      title: 'Institutional Partners',
      description: 'Backed by leading development banks, impact investors, and infrastructure funds with $8B+ in AUM.'
    },
    {
      id: 4,
      icon: '📈',
      title: 'Proven Track Record',
      description: '$2B+ in infrastructure projects funded. 45+ successful completions across 12 countries since 2020.'
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What types of infrastructure projects are eligible for funding?',
      answer: 'We fund a wide range of infrastructure projects including renewable energy (solar, wind, hydro), transportation (roads, rail, ports), water and sanitation, telecommunications, and social infrastructure (schools, hospitals). Projects typically range from $10M to $500M+ in value. Our focus is on economically viable projects with clear revenue models, strong development teams, and positive environmental/social impact. We work across emerging and developed markets globally.'
    },
    {
      id: 2,
      question: 'How long does the funding process take?',
      answer: 'The timeline varies by project complexity and size, but typically ranges from 3-6 months from initial submission to capital deployment. This includes: Due diligence and structuring (4-6 weeks), regulatory approvals (2-4 weeks), investor marketing (4-8 weeks), and closing/disbursement (2-3 weeks). This is significantly faster than traditional infrastructure financing which can take 18-36 months. We can expedite the process for projects with complete documentation and strong fundamentals.'
    },
    {
      id: 3,
      question: 'What are the minimum requirements to apply?',
      answer: 'Projects should have: (1) Completed feasibility studies and engineering assessments, (2) Necessary permits or clear path to obtaining them, (3) Experienced development team with relevant track record, (4) Detailed financial projections and revenue model, (5) Environmental and social impact assessments, and (6) Minimum project value of $10M USD. We also require projects to have clear construction timelines and identified contractors or partners for project execution.'
    },
    {
      id: 4,
      question: 'Can I raise both debt and equity for my project?',
      answer: 'Yes, absolutely. We specialize in structuring hybrid capital stacks that combine debt, equity, and revenue-sharing arrangements. This flexibility allows you to optimize your capital structure based on project economics, risk profile, and desired control levels. Common structures include: senior debt (60-70%), mezzanine financing (15-20%), and equity (15-20%). Our team works with you to design the optimal mix that balances cost of capital with financial sustainability.'
    },
    {
      id: 5,
      question: 'How are funds disbursed during construction?',
      answer: 'Funds are released through milestone-based smart contracts, ensuring capital efficiency and investor confidence. Typical milestones include: (1) Site preparation and mobilization (15-20%), (2) Foundation and structural work (25-30%), (3) Major equipment installation (20-25%), (4) Systems integration and testing (15-20%), and (5) Commissioning and handover (10-15%). Each milestone requires independent engineer verification and photographic evidence. Unused funds remain in escrow until subsequent milestones are achieved.'
    },
    {
      id: 6,
      question: 'What fees does BuildVest charge?',
      answer: 'Our fee structure is transparent and project-based: (1) Upfront structuring fee: 1.5-2.5% of total raise (covers due diligence, legal, structuring), (2) Platform fee: 0.5-1% annually on deployed capital (covers technology, reporting, compliance), and (3) Success fee: 3-5% on successful capital deployment. For projects over $100M, fees are negotiable. We do not charge application or consultation fees. Our interests are aligned with yours - we only succeed when you secure funding.'
    },
    {
      id: 7,
      question: 'Who can invest in infrastructure projects on your platform?',
      answer: 'Our platform serves accredited investors, institutional investors, family offices, development finance institutions, impact funds, and sovereign wealth funds. Individual investors must meet accreditation requirements in their jurisdiction (typically $200K+ annual income or $1M+ net worth). For larger projects ($50M+), we often syndicate with institutional partners who lead investment rounds. All investors undergo KYC/AML verification and must acknowledge risk disclosures before participating.'
    },
    {
      id: 8,
      question: 'How do you ensure ESG compliance and impact measurement?',
      answer: 'Every project undergoes rigorous ESG assessment using IFC Performance Standards and UN Sustainable Development Goals frameworks. We require: (1) Environmental Impact Assessments from certified consultants, (2) Community engagement plans and social impact studies, (3) Regular monitoring and reporting through our platform, (4) Third-party verification of impact metrics (annual), and (5) Grievance mechanisms for affected communities. Projects must achieve minimum ESG scores to qualify for funding, and ongoing compliance is monitored throughout the project lifecycle.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BuildVest
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-400 transition-colors">For Investors</a>
              <a href="#" className="hover:text-blue-400 transition-colors">For Originators</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Marketplace</a>
              <a href="#" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Resources</a>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium">
                Sign In
              </button>
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all font-medium shadow-lg"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-gray-700">
              <a href="#" className="block py-2 hover:text-blue-400 transition-colors">For Investors</a>
              <a href="#" className="block py-2 hover:text-blue-400 transition-colors">For Originators</a>
              <a href="#" className="block py-2 hover:text-blue-400 transition-colors">Marketplace</a>
              <a href="#" className="block py-2 hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="block py-2 hover:text-blue-400 transition-colors">Resources</a>
              <div className="pt-3 space-y-2">
                <button className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium">
                  Sign In
                </button>
                <button 
                  onClick={() => {
                    setIsConsultationModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-20 overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400">🏗️</span>
              <span className="text-sm font-medium">Infrastructure Project Financing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Accelerate Infrastructure Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Through Digital Capital Markets
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Fund roads, energy, water, and transport projects faster with global investor access, 
              transparent blockchain tracking, and automated compliance.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>$2B+ Infrastructure Funded</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>45+ Projects Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>SEC Regulated</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all"
              >
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 rounded-lg text-lg font-semibold border border-white border-opacity-20 transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Infrastructure Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Infrastructure Financing Challenges
            </h2>
            <p className="text-lg text-gray-600">
              Traditional financing models create significant barriers for critical infrastructure development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BuildVest Solution Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The BuildVest Solution
            </h2>
            <p className="text-lg text-gray-600">
              Modern infrastructure financing powered by blockchain technology and global capital markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              From project submission to capital deployment in 4 streamlined steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step) => (
              <div key={step.id} className="flex flex-col md:flex-row items-start gap-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real infrastructure projects funded through BuildVest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-200">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold">{study.amount}</span>
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                      {study.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                  <p className="text-blue-100 text-sm">{study.location}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-xs text-gray-500 pt-3 border-t border-gray-200">
                    {study.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Why BuildVest Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why BuildVest?
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by developers, investors, and governments worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {trustIndicators.map((indicator) => (
              <div key={indicator.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center border border-blue-100">
                <div className="text-4xl mb-4">{indicator.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{indicator.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{indicator.description}</p>
              </div>
            ))}
          </div>

          {/* Compliance Badges */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Compliance & Certifications</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
                  <span className="text-3xl">🏛️</span>
                </div>
                <span className="text-sm font-medium text-gray-700">SEC Registered</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mb-2">
                  <span className="text-3xl">🔒</span>
                </div>
                <span className="text-sm font-medium text-gray-700">SOC 2 Type II</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-2">
                  <span className="text-3xl">✅</span>
                </div>
                <span className="text-sm font-medium text-gray-700">ISO 27001</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-xl flex items-center justify-center mb-2">
                  <span className="text-3xl">🌐</span>
                </div>
                <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about infrastructure project financing
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  aria-expanded={expandedFaqs.has(faq.id)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                      expandedFaqs.has(faq.id) ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaqs.has(faq.id) && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button 
              onClick={() => setIsConsultationModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Fund Your Infrastructure Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 100+ developers who have successfully raised capital through BuildVest. 
              Get started today with a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 rounded-lg text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all"
              >
                Schedule Free Consultation
              </button>
              <button className="px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 rounded-lg text-lg font-semibold border border-white border-opacity-20 transition-all">
                Download Project Guide
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">$2B+</div>
                <div className="text-sm text-gray-400">Total Funded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">45+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">12</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">3-6mo</div>
                <div className="text-sm text-gray-400">Avg. Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Schedule a Consultation</h3>
                <button
                  onClick={() => setIsConsultationModalOpen(false)}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-blue-100 mt-2">Tell us about your infrastructure project and our team will contact you within 24 hours</p>
            </div>

            <form onSubmit={handleConsultationSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Acme Development Corp"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select project type...</option>
                  <option value="renewable-energy">Renewable Energy (Solar/Wind/Hydro)</option>
                  <option value="transportation">Transportation (Roads/Rail/Ports)</option>
                  <option value="water-sanitation">Water & Sanitation</option>
                  <option value="telecommunications">Telecommunications</option>
                  <option value="social-infrastructure">Social Infrastructure (Schools/Hospitals)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Value *</label>
                  <select
                    required
                    value={formData.projectValue}
                    onChange={(e) => setFormData({ ...formData, projectValue: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select range...</option>
                    <option value="10-25m">$10M - $25M</option>
                    <option value="25-50m">$25M - $50M</option>
                    <option value="50-100m">$50M - $100M</option>
                    <option value="100-250m">$100M - $250M</option>
                    <option value="250m+">$250M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Timeline *</label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline...</option>
                    <option value="immediate">Immediate (0-3 months)</option>
                    <option value="short-term">Short-term (3-6 months)</option>
                    <option value="medium-term">Medium-term (6-12 months)</option>
                    <option value="long-term">Long-term (12+ months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Briefly describe your project, location, current status, and any specific questions..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" required className="mt-1" id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to receive communications from BuildVest and understand that my information will be handled according to the Privacy Policy.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setIsConsultationModalOpen(false)}
                  className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BuildVest
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Democratizing access to African real estate and infrastructure investment opportunities through blockchain technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">For Investors</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Properties</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Returns Calculator</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Investment Guide</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">For Developers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">List Your Project</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Originator Platform</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Developer Resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                © 2024 BuildVest. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Risk Disclosure</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Legal</a>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-4 text-center">
              Investment involves risk, including possible loss of principal. Past performance does not guarantee future results. 
              BuildVest is a registered funding portal with the SEC. All investments are subject to regulatory approval and compliance.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InfrastructureProjectsPage;