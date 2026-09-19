import { useState, useEffect } from 'react';
import { Page, Project } from './types';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Synchronize state with URL hash for clean addressable sharing, while keeping it fallback-safe
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '') as Page;
      if (hash && [
        'home', 'about', 'services', 'meta-ads', 'google-ads', 
        'website-development', 'app-development', 'seo', 'social-media-growth', 
        'portfolio', 'case-study', 'contact', 'privacy-policy', 
        'terms-conditions', 'refund-policy', 'disclaimer', 'thank-you'
      ].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on mount to capture initial loaded url route
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0 });
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            onNavigate={handleNavigate} 
            onSelectProject={setSelectedProject} 
          />
        );
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'meta-ads':
      case 'google-ads':
      case 'website-development':
      case 'app-development':
      case 'seo':
      case 'social-media-growth':
        return <ServiceDetail page={currentPage} onNavigate={handleNavigate} />;
      case 'portfolio':
        return (
          <Portfolio 
            onNavigate={handleNavigate} 
            onSelectProject={setSelectedProject} 
          />
        );
      case 'case-study':
        return (
          <CaseStudyDetail 
            project={selectedProject} 
            onNavigate={handleNavigate} 
          />
        );
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'privacy-policy':
      case 'terms-conditions':
      case 'refund-policy':
      case 'disclaimer':
        return <Legal page={currentPage} />;
      case 'thank-you':
        return <ThankYou onNavigate={handleNavigate} />;
      default:
        return <NotFound onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between">
      {/* SEO Engine */}
      <SEO page={currentPage} subTitle={selectedProject?.name} />

      {/* Premium Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Fluid Stage */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* High-End Dark Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
