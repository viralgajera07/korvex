import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppIcon } from './components/WhatsAppIcon';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Careers } from './pages/Careers';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';

const stats = [
  { label: 'Projects Delivered', value: 100, suffix: '+' },
  { label: 'Websites Launched', value: 100, suffix: '+' },
  { label: 'Average ROAS on Ads', value: 4, suffix: 'x+' },
  { label: 'Client Satisfaction', value: 94, suffix: '%' },
];

// Helper component to reset scroll on route transition
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const handleResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  // Hook to handle active reveal scrolling on dynamic elements
  const { pathname } = useLocation();
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="page-shell">
      <ScrollToTop />
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      
      <Navbar scrolled={scrolled} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home stats={stats} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="/terms-of-service" element={<Legal />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/privacy-policy" element={<Legal />} />
          <Route path="/refund" element={<Legal />} />
          <Route path="/refund-policy" element={<Legal />} />
          <Route path="/security" element={<Legal />} />
          <Route path="/security-uptime" element={<Legal />} />
        </Routes>
      </main>

      <Footer />

      <a
        className="whatsapp-float"
        href="https://wa.me/917041457314?text=Hi%20KORVEX%2C%20I%20want%20to%20build%20a%20website%20%2F%20run%20ads%20for%20my%20business."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="whatsapp-svg-icon" />
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
