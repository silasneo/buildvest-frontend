'use client';

import { useState, useMemo } from 'react';

// Types
interface Investment {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'real-estate' | 'infrastructure' | 'renewable-energy' | 'commercial';
  targetReturn: number;
  minInvestment: number;
  fundingProgress: number;
  companyName: string;
  companyAvatarUrl: string;
  investorCount: number;
  location: 'north-america' | 'europe' | 'asia' | 'latin-america';
}

export default function PublicMarketplacePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  
  // Filter states
  const [categoryFilters, setCategoryFilters] = useState({
    'real-estate': true,
    'infrastructure': true,
    'renewable-energy': true,
    'commercial': true,
  });
  
  const [amountFilter, setAmountFilter] = useState('all');
  
  const [yieldFilters, setYieldFilters] = useState({
    '8-10': true,
    '10-12': true,
    '12-15': true,
    '15+': true,
  });
  
  const [locationFilters, setLocationFilters] = useState({
    'north-america': true,
    'europe': true,
    'asia': true,
    'latin-america': true,
  });

  // Mock investment data
  const mockInvestments: Investment[] = [
    {
      id: 1,
      title: 'Downtown Office Complex',
      description: 'Prime commercial property in growing business district with long-term tenants',
      imageUrl: 'https://images.unsplash.com/photo-1635071247661-ede154087b09',
      category: 'real-estate',
      targetReturn: 14.2,
      minInvestment: 100,
      fundingProgress: 68,
      companyName: 'Urban Developments',
      companyAvatarUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d72e8d2f-1763293273692.png',
      investorCount: 245,
      location: 'north-america',
    },
    {
      id: 2,
      title: 'Solar Energy Farm',
      description: 'Large-scale solar panel farm with renewable energy infrastructure',
      imageUrl: 'https://images.unsplash.com/photo-1641959164820-631b4cbf324c',
      category: 'renewable-energy',
      targetReturn: 11.8,
      minInvestment: 250,
      fundingProgress: 92,
      companyName: 'Green Energy Co',
      companyAvatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 312,
      location: 'north-america',
    },
    {
      id: 3,
      title: 'Residential Apartment Complex',
      description: 'Modern luxury apartments in high-demand neighborhood with excellent amenities',
      imageUrl: 'https://images.unsplash.com/photo-1460317442991-0ec209397118',
      category: 'real-estate',
      targetReturn: 12.5,
      minInvestment: 500,
      fundingProgress: 45,
      companyName: 'Metro Housing LLC',
      companyAvatarUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 156,
      location: 'europe',
    },
    {
      id: 4,
      title: 'Highway Toll Road Project',
      description: 'Strategic toll road connecting major metropolitan areas with guaranteed revenue',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      category: 'infrastructure',
      targetReturn: 9.2,
      minInvestment: 1000,
      fundingProgress: 78,
      companyName: 'TransAsia Infrastructure',
      companyAvatarUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 489,
      location: 'asia',
    },
    {
      id: 5,
      title: 'Wind Turbine Installation',
      description: 'Offshore wind farm with state-of-the-art turbines and excellent wind conditions',
      imageUrl: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51',
      category: 'renewable-energy',
      targetReturn: 13.8,
      minInvestment: 150,
      fundingProgress: 55,
      companyName: 'WindPower Europe',
      companyAvatarUrl: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 201,
      location: 'europe',
    },
    {
      id: 6,
      title: 'Shopping Mall Renovation',
      description: 'Complete renovation of major shopping center in prime retail location',
      imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6',
      category: 'commercial',
      targetReturn: 10.5,
      minInvestment: 300,
      fundingProgress: 82,
      companyName: 'Retail Ventures',
      companyAvatarUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 367,
      location: 'north-america',
    },
    {
      id: 7,
      title: 'Logistics Warehouse Complex',
      description: 'Modern warehouse facility near major port with long-term e-commerce tenants',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
      category: 'commercial',
      targetReturn: 11.2,
      minInvestment: 750,
      fundingProgress: 61,
      companyName: 'LogiSpace Partners',
      companyAvatarUrl: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 289,
      location: 'asia',
    },
    {
      id: 8,
      title: 'Hydro Power Plant',
      description: 'Small-scale hydroelectric facility with consistent water flow and revenue',
      imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
      category: 'renewable-energy',
      targetReturn: 15.6,
      minInvestment: 100,
      fundingProgress: 34,
      companyName: 'HydroTech Solutions',
      companyAvatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 134,
      location: 'latin-america',
    },
    {
      id: 9,
      title: 'Luxury Hotel Development',
      description: 'Boutique hotel in popular tourist destination with year-round occupancy',
      imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
      category: 'commercial',
      targetReturn: 14.8,
      minInvestment: 500,
      fundingProgress: 71,
      companyName: 'Hospitality Group',
      companyAvatarUrl: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 423,
      location: 'europe',
    },
    {
      id: 10,
      title: 'Airport Parking Facility',
      description: 'Multi-level parking structure at international airport with steady revenue',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
      category: 'infrastructure',
      targetReturn: 8.9,
      minInvestment: 200,
      fundingProgress: 88,
      companyName: 'AeroParking Inc',
      companyAvatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 567,
      location: 'north-america',
    },
    {
      id: 11,
      title: 'Student Housing Project',
      description: 'Purpose-built student accommodation near major university campus',
      imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      category: 'real-estate',
      targetReturn: 13.2,
      minInvestment: 250,
      fundingProgress: 52,
      companyName: 'Campus Living',
      companyAvatarUrl: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 198,
      location: 'europe',
    },
    {
      id: 12,
      title: 'Data Center Infrastructure',
      description: 'Tier-3 data center with major tech companies as anchor tenants',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
      category: 'infrastructure',
      targetReturn: 12.1,
      minInvestment: 1500,
      fundingProgress: 95,
      companyName: 'DataHub Technologies',
      companyAvatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      investorCount: 678,
      location: 'asia',
    },
  ];

  // Filter and sort investments
  const filteredInvestments = useMemo(() => {
    let filtered = mockInvestments;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(inv =>
        inv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inv.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inv.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    filtered = filtered.filter(inv => categoryFilters[inv.category]);

    // Apply amount filter
    if (amountFilter !== 'all') {
      if (amountFilter === '100-500') {
        filtered = filtered.filter(inv => inv.minInvestment >= 100 && inv.minInvestment <= 500);
      } else if (amountFilter === '500-1000') {
        filtered = filtered.filter(inv => inv.minInvestment >= 500 && inv.minInvestment <= 1000);
      } else if (amountFilter === '1000+') {
        filtered = filtered.filter(inv => inv.minInvestment >= 1000);
      }
    }

    // Apply yield filter
    const activeYields = Object.entries(yieldFilters)
      .filter(([_, active]) => active)
      .map(([range]) => range);
    
    if (activeYields.length > 0 && activeYields.length < 4) {
      filtered = filtered.filter(inv => {
        const ret = inv.targetReturn;
        return activeYields.some(range => {
          if (range === '8-10') return ret >= 8 && ret < 10;
          if (range === '10-12') return ret >= 10 && ret < 12;
          if (range === '12-15') return ret >= 12 && ret < 15;
          if (range === '15+') return ret >= 15;
          return false;
        });
      });
    }

    // Apply location filter
    filtered = filtered.filter(inv => locationFilters[inv.location]);

    // Apply sorting
    if (sortBy === 'highest-yield') {
      filtered = [...filtered].sort((a, b) => b.targetReturn - a.targetReturn);
    } else if (sortBy === 'lowest-min') {
      filtered = [...filtered].sort((a, b) => a.minInvestment - b.minInvestment);
    } else if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => b.investorCount - a.investorCount);
    }

    return filtered;
  }, [searchTerm, categoryFilters, amountFilter, yieldFilters, locationFilters, sortBy, mockInvestments]);

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    
    if (searchTerm) count++;
    
    const activeCats = Object.values(categoryFilters).filter(v => v).length;
    if (activeCats < 4) count += (4 - activeCats);
    
    if (amountFilter !== 'all') count++;
    
    const activeYields = Object.values(yieldFilters).filter(v => v).length;
    if (activeYields < 4) count += (4 - activeYields);
    
    const activeLocs = Object.values(locationFilters).filter(v => v).length;
    if (activeLocs < 4) count += (4 - activeLocs);
    
    return count;
  }, [searchTerm, categoryFilters, amountFilter, yieldFilters, locationFilters]);

  // Handlers
  const handleClearFilters = () => {
    setSearchTerm('');
    setCategoryFilters({
      'real-estate': true,
      'infrastructure': true,
      'renewable-energy': true,
      'commercial': true,
    });
    setAmountFilter('all');
    setYieldFilters({
      '8-10': true,
      '10-12': true,
      '12-15': true,
      '15+': true,
    });
    setLocationFilters({
      'north-america': true,
      'europe': true,
      'asia': true,
      'latin-america': true,
    });
  };

  const handleCategoryChange = (category: keyof typeof categoryFilters) => {
    setCategoryFilters(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const handleYieldChange = (range: keyof typeof yieldFilters) => {
    setYieldFilters(prev => ({ ...prev, [range]: !prev[range] }));
  };

  const handleLocationChange = (loc: keyof typeof locationFilters) => {
    setLocationFilters(prev => ({ ...prev, [loc]: !prev[loc] }));
  };

  const getCategoryLabel = (category: string): string => {
    const labels: { [key: string]: string } = {
      'real-estate': 'Real Estate',
      'infrastructure': 'Infrastructure',
      'renewable-energy': 'Renewable Energy',
      'commercial': 'Commercial',
    };
    return labels[category] || category;
  };

  return (
    <div className="bg-surface min-h-screen">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="landing_page.html" className="flex items-center space-x-3">
                <img src="https://buildvest.net/buildvest-logo.png" alt="BuildVest" className="h-10 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="landing_page.html#how-it-works" className="text-text-secondary hover:text-primary transition-colors duration-150 font-medium">How It Works</a>
              <a href="investment_marketplace.html" className="text-primary font-semibold border-b-2 border-primary pb-1">Marketplace</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="authentication_hub.html" className="btn btn-primary">Join | Log in</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors duration-150 touch-target"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="investment_marketplace.html" className="block text-primary font-semibold py-2">Marketplace</a>
              <a href="landing_page.html#how-it-works" className="block text-text-secondary hover:text-primary transition-colors duration-150 font-medium py-2">How It Works</a>
              <div className="pt-4 space-y-3">
                <a href="authentication_hub.html" className="block w-full btn btn-primary text-center">Join | Log in</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-3">Investment Marketplace</h1>
            <p className="text-lg text-text-secondary">Discover verified tokenized real-world asset opportunities</p>
          </div>

          {/* Mobile Filter & Sort Bar */}
          <div className="lg:hidden mb-6 flex items-center gap-3">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex-1 btn btn-outline flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="badge badge-primary text-xs px-2 py-0.5">{activeFilterCount}</span>
              )}
            </button>
            <div className="relative flex-1">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input pr-10 appearance-none cursor-pointer w-full"
              >
                <option value="newest">Newest First</option>
                <option value="highest-yield">Highest Yield</option>
                <option value="lowest-min">Lowest Min. Investment</option>
                <option value="popular">Most Popular</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="card p-6 sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-text-primary">Filters</h2>
                  <button
                    onClick={handleClearFilters}
                    className="text-sm text-primary hover:text-primary-700 font-medium transition-colors duration-150"
                  >
                    Clear All
                  </button>
                </div>

                {/* Search Input */}
                <div className="mb-6">
                  <label htmlFor="searchInput" className="block text-sm font-medium text-text-primary mb-2">Search</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="searchInput"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input pl-10"
                      placeholder="Search investments..."
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h3 className="text-sm font-semibold text-text-primary mb-3">Asset Category</h3>
                  <div className="space-y-2">
                    {Object.entries(categoryFilters).map(([key, value]) => (
                      <label key={key} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() => handleCategoryChange(key as keyof typeof categoryFilters)}
                          className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                        />
                        <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">
                          {getCategoryLabel(key)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Investment Amount Range */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h3 className="text-sm font-semibold text-text-primary mb-3">Investment Amount</h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="amount-range"
                        checked={amountFilter === 'all'}
                        onChange={() => setAmountFilter('all')}
                        className="w-5 h-5 border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">All Amounts</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="amount-range"
                        checked={amountFilter === '100-500'}
                        onChange={() => setAmountFilter('100-500')}
                        className="w-5 h-5 border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">$100 - $500</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="amount-range"
                        checked={amountFilter === '500-1000'}
                        onChange={() => setAmountFilter('500-1000')}
                        className="w-5 h-5 border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">$500 - $1,000</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="amount-range"
                        checked={amountFilter === '1000+'}
                        onChange={() => setAmountFilter('1000+')}
                        className="w-5 h-5 border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">$1,000+</span>
                    </label>
                  </div>
                </div>

                {/* Yield Expectations */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h3 className="text-sm font-semibold text-text-primary mb-3">Expected Yield (APY)</h3>
                  <div className="space-y-2">
                    {Object.entries(yieldFilters).map(([key, value]) => (
                      <label key={key} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={() => handleYieldChange(key as keyof typeof yieldFilters)}
                          className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                        />
                        <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">
                          {key === '15+' ? '15%+' : `${key.replace('-', '% - ')}%`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Geographic Location */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-text-primary mb-3">Location</h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={locationFilters['north-america']}
                        onChange={() => handleLocationChange('north-america')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">North America</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={locationFilters.europe}
                        onChange={() => handleLocationChange('europe')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">Europe</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={locationFilters.asia}
                        onChange={() => handleLocationChange('asia')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">Asia</span>
                    </label>
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={locationFilters['latin-america']}
                        onChange={() => handleLocationChange('latin-america')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">Latin America</span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-text-secondary">
                    Showing <span className="font-semibold text-text-primary">{filteredInvestments.length}</span> investment opportunities
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="input pr-10 appearance-none cursor-pointer min-w-[200px]"
                    >
                      <option value="newest">Newest First</option>
                      <option value="highest-yield">Highest Yield</option>
                      <option value="lowest-min">Lowest Min. Investment</option>
                      <option value="popular">Most Popular</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Investment Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredInvestments.map((investment) => (
                  <div
                    key={investment.id}
                    className="card card-hover group cursor-pointer"
                    onClick={() => window.location.href = 'asset_detail_page.html'}
                  >
                    <div className="relative h-56 overflow-hidden rounded-t-lg">
                      <img
                        src={investment.imageUrl}
                        alt={investment.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800';
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="badge badge-success">Verified</span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="badge bg-white text-text-primary">{getCategoryLabel(investment.category)}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                        {investment.title}
                      </h3>
                      <p className="text-text-secondary mb-4 line-clamp-2">{investment.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-text-secondary mb-1">Target Return</p>
                          <p className="text-lg font-bold text-secondary">{investment.targetReturn}% APY</p>
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary mb-1">Min. Investment</p>
                          <p className="text-lg font-bold text-text-primary">${investment.minInvestment}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-text-secondary">Funding Progress</span>
                          <span className="font-semibold text-text-primary">{investment.fundingProgress}%</span>
                        </div>
                        <div className="w-full bg-surface-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${investment.fundingProgress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-2">
                          <img
                            src={investment.companyAvatarUrl}
                            alt={investment.companyName}
                            className="w-8 h-8 rounded-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100';
                            }}
                          />
                          <span className="text-sm font-medium text-text-secondary">{investment.companyName}</span>
                        </div>
                        <span className="text-sm text-text-tertiary">{investment.investorCount} investors</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredInvestments.length === 0 && (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto text-text-tertiary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">No investments found</h3>
                  <p className="text-text-secondary mb-4">Try adjusting your filters to see more results</p>
                  <button onClick={handleClearFilters} className="btn btn-primary">Clear Filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileFilterOpen(false)}
          ></div>

          {/* Filter Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white overflow-y-auto animate-slide-in-right">
            <div className="sticky top-0 bg-white border-b border-border p-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-text-primary">Filters</h2>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 hover:bg-surface rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="p-6">
              {/* Search Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-text-primary mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input pl-10"
                    placeholder="Search investments..."
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="text-sm font-semibold text-text-primary mb-3">Asset Category</h3>
                <div className="space-y-2">
                  {Object.entries(categoryFilters).map(([key, value]) => (
                    <label key={key} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handleCategoryChange(key as keyof typeof categoryFilters)}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">
                        {getCategoryLabel(key)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Investment Amount Range */}
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="text-sm font-semibold text-text-primary mb-3">Investment Amount</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="mobile-amount-range"
                      checked={amountFilter === 'all'}
                      onChange={() => setAmountFilter('all')}
                      className="w-5 h-5 border-border text-primary focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">All Amounts</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="mobile-amount-range"
                      checked={amountFilter === '100-500'}
                      onChange={() => setAmountFilter('100-500')}
                      className="w-5 h-5 border-border text-primary focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">$100 - $500</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="mobile-amount-range"
                      checked={amountFilter === '500-1000'}
                      onChange={() => setAmountFilter('500-1000')}
                      className="w-5 h-5 border-border text-primary focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">$500 - $1,000</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="mobile-amount-range"
                      checked={amountFilter === '1000+'}
                      onChange={() => setAmountFilter('1000+')}
                      className="w-5 h-5 border-border text-primary focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">$1,000+</span>
                  </label>
                </div>
              </div>

              {/* Yield Expectations */}
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="text-sm font-semibold text-text-primary mb-3">Expected Yield (APY)</h3>
                <div className="space-y-2">
                  {Object.entries(yieldFilters).map(([key, value]) => (
                    <label key={key} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handleYieldChange(key as keyof typeof yieldFilters)}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                      />
                      <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">
                        {key === '15+' ? '15%+' : `${key.replace('-', '% - ')}%`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Geographic Location */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-text-primary mb-3">Location</h3>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={locationFilters['north-america']}
                      onChange={() => handleLocationChange('north-america')}
                      className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">North America</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={locationFilters.europe}
                      onChange={() => handleLocationChange('europe')}
                      className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">Europe</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={locationFilters.asia}
                      onChange={() => handleLocationChange('asia')}
                      className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">Asia</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={locationFilters['latin-america']}
                      onChange={() => handleLocationChange('latin-america')}
                      className="w-5 h-5 rounded border-border text-primary focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-150">Latin America</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="sticky bottom-0 bg-white border-t border-border p-4 flex gap-3">
              <button onClick={handleClearFilters} className="flex-1 btn btn-outline">Clear All</button>
              <button onClick={() => setIsMobileFilterOpen(false)} className="flex-1 btn btn-primary">Apply Filters</button>
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
