import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Layout Components (Eagerly loaded for instant shell)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Modals & Floating Widgets
import DemoModal from './components/ui/DemoModal';
import ContactModal from './components/ui/ContactModal';
import QuickContactFloat from './components/ui/QuickContactFloat';
import PageLoader from './components/ui/PageLoader';

// Critical Route: Eagerly imported for instant First Contentful Paint
import HomePage from './pages/HomePage';

// Code-Split Subroutes (Lazy loaded on demand to minimize initial JS bundle size)
const LeadGenPage = lazy(() => import('./pages/LeadGenPage'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const WhatsAppMarketingPage = lazy(() => import('./pages/features/WhatsAppMarketingPage'));
const LeadManagementPage = lazy(() => import('./pages/features/LeadManagementPage'));
const ChatbotPage = lazy(() => import('./pages/features/ChatbotPage'));
const TeamInboxPage = lazy(() => import('./pages/features/TeamInboxPage'));
const AutomationPage = lazy(() => import('./pages/features/AutomationPage'));
const AnalyticsPage = lazy(() => import('./pages/features/AnalyticsPage'));
const IntegrationsPage = lazy(() => import('./pages/features/IntegrationsPage'));

const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const ManufacturingPage = lazy(() => import('./pages/solutions/ManufacturingPage'));
const EcommercePage = lazy(() => import('./pages/solutions/EcommercePage'));
const EducationPage = lazy(() => import('./pages/solutions/EducationPage'));
const RealEstatePage = lazy(() => import('./pages/solutions/RealEstatePage'));
const ServicesPage = lazy(() => import('./pages/solutions/ServicesPage'));
const HealthcarePage = lazy(() => import('./pages/solutions/HealthcarePage'));

const PricingPage = lazy(() => import('./pages/PricingPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// High-performance lightweight route fallback (preserves Navbar and Footer)
function RouteLoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 select-none">
      <div className="w-10 h-10 rounded-full border-2 border-zinc-200 border-t-[#ff5500] animate-spin mb-4" />
      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
        <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
        <span>Loading eBizChat...</span>
      </div>
    </div>
  );
}

// Scroll to top or to hash element on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
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
    <div className="flex flex-col min-h-screen bg-[#fcfbf8] text-[#0a0a0a] selection:bg-[#ff5500] selection:text-white font-sans overflow-x-hidden w-full relative">
      <PageLoader />
      <ScrollToTop />
      <Navbar onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />

      <main className="flex-1">
        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
          <Route
            path="/"
            element={<HomePage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/leadgen"
            element={<LeadGenPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
          <Route
            path="/lead-generation"
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
          <Route
            path="/solutions/healthcare"
            element={<HealthcarePage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
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
          <Route
            path="/blog/:slug"
            element={<BlogPostPage onOpenDemoModal={openDemoModal} onOpenContactModal={openContactModal} />}
          />
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
            path="/about-orizer"
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
        </Suspense>
      </main>

      <Footer />

      {/* Global Modals & Floating Quick Contact Suite */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      <QuickContactFloat />
    </div>
  );
}
