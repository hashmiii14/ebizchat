import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Modals & Floating Widgets
import DemoModal from './components/ui/DemoModal';
import ContactModal from './components/ui/ContactModal';
import QuickContactFloat from './components/ui/QuickContactFloat';
import PageLoader from './components/ui/PageLoader';

// Pages
import HomePage from './pages/HomePage';
import LeadGenPage from './pages/LeadGenPage';
import FeaturesPage from './pages/FeaturesPage';
import WhatsAppMarketingPage from './pages/features/WhatsAppMarketingPage';
import LeadManagementPage from './pages/features/LeadManagementPage';
import ChatbotPage from './pages/features/ChatbotPage';
import TeamInboxPage from './pages/features/TeamInboxPage';
import AutomationPage from './pages/features/AutomationPage';
import AnalyticsPage from './pages/features/AnalyticsPage';
import IntegrationsPage from './pages/features/IntegrationsPage';

import SolutionsPage from './pages/SolutionsPage';
import ManufacturingPage from './pages/solutions/ManufacturingPage';
import EcommercePage from './pages/solutions/EcommercePage';
import EducationPage from './pages/solutions/EducationPage';
import RealEstatePage from './pages/solutions/RealEstatePage';
import ServicesPage from './pages/solutions/ServicesPage';

import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-brand-500 selection:text-white font-sans">
      <PageLoader />
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/leadgen"
            element={<LeadGenPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />

          {/* Features Routes */}
          <Route
            path="/features"
            element={<FeaturesPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/features/whatsapp-marketing"
            element={<WhatsAppMarketingPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/features/lead-management"
            element={<LeadManagementPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/features/chatbot"
            element={<ChatbotPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/features/team-inbox"
            element={<TeamInboxPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/features/automation"
            element={<AutomationPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/features/analytics"
            element={<AnalyticsPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/features/integrations"
            element={<IntegrationsPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />

          {/* Solutions Routes */}
          <Route
            path="/solutions"
            element={<SolutionsPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/solutions/manufacturing"
            element={<ManufacturingPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/solutions/ecommerce"
            element={<EcommercePage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/solutions/education"
            element={<EducationPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/solutions/real-estate"
            element={<RealEstatePage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/solutions/services"
            element={<ServicesPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />

          {/* Core Routes */}
          <Route
            path="/pricing"
            element={<PricingPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/resources"
            element={<ResourcesPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage onOpenContactModal={openContactModal} />} />
          <Route
            path="/case-studies"
            element={<CaseStudiesPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/about"
            element={<AboutPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/contact"
            element={<ContactPage onOpenDemoModal={openDemoModal} />}
          />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Modals & Floating Quick Contact Suite */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      <QuickContactFloat />
    </div>
  );
}
