import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/public/HomePage';
import InvestorLandingPage from './pages/public/InvestorLandingPage';
import AboutBuildVestPage from './pages/public/AboutBuildVestPage';
import FrequentlyAskedQuestionsPage from './pages/public/FrequentlyAskedQuestionsPage';
import LegalComplianceCenterPage from './pages/public/LegalComplianceCenterPage';
import HelpSupportPage from './pages/public/HelpSupportPage';
import PublicMarketplacePage from './pages/public/PublicMarketplacePage';
import RealEstateDevelopersPage from './pages/public/RealEstateDevelopersPage';
import CorporateDebtPrivatePlacementsPage from './pages/public/CorporateDebtPrivatePlacementsPage';
import PrivateEquityFundsPage from './pages/public/PrivateEquityFundsPage';
import InfrastructureProjectsPage from './pages/public/InfrastructureProjectsPage';
import OriginatorOnboardingPage from './pages/public/OriginatorOnboardingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TEMPORARY PHASE-1 ROUTING — to be removed in PHASE 2 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/invest" element={<InvestorLandingPage />} />
        <Route path="/about" element={<AboutBuildVestPage />} />
        <Route path="/faq" element={<FrequentlyAskedQuestionsPage />} />
        <Route path="/legal" element={<LegalComplianceCenterPage />} />
        <Route path="/help" element={<HelpSupportPage />} />
        <Route path="/marketplace" element={<PublicMarketplacePage />} />
        <Route path="/real-estate" element={<RealEstateDevelopersPage />} />
        <Route path="/corporate-debt" element={<CorporateDebtPrivatePlacementsPage />} />
        <Route path="/private-equity" element={<PrivateEquityFundsPage />} />
        <Route path="/infrastructure" element={<InfrastructureProjectsPage />} />
        <Route path="/originators" element={<OriginatorOnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
