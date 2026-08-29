import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer-premium">
      <div className="footer-ambient-glow" aria-hidden="true"></div>
      
      <div className="footer-container-inner">
        <div className="footer-brand-column">
          <div className="footer-logo-wrap">
            <Logo />
          </div>
          <p className="footer-brand-desc">
            KORVEX builds high-performance websites, e-commerce storefronts, custom AI/ML architecture, and data-driven ad campaigns that turn visitors into loyal customers.
          </p>
          <div className="footer-contact-list">
            <a href="tel:+917041457314" className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +91 70414 57314
            </a>
            <a href="mailto:help.korvex@gmail.com" className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              help.korvex@gmail.com
            </a>
            <div className="footer-contact-item address-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>235, Apple Square, Near Swastic Plaza, Yogichowk, Surat - 395010</span>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/website-development">Web Development</Link></li>
            <li><Link to="/services/e-commerce-development">E-Commerce Stores</Link></li>
            <li><Link to="/services/ai-ml-development">AI &amp; ML Development</Link></li>
            <li><Link to="/services/app-development">App Development</Link></li>
            <li><Link to="/services/meta-ads-management">Meta Ads Management</Link></li>
            <li><Link to="/services/social-media-marketing">Social Media Marketing</Link></li>
            <li><Link to="/services/analytics-maintenance">Analytics &amp; Maintenance</Link></li>
            <li><Link to="/services/growth-strategy">Growth Strategy</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About KORVEX</Link></li>
            <li><Link to="/careers">Careers &amp; Team</Link></li>
            <li><Link to="/blog">Blog &amp; Insights</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal &amp; Policy</h4>
          <ul>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/security-uptime">Security &amp; Uptime</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <span>© {new Date().getFullYear()} KORVEX Digital Agency. All Rights Reserved.</span>
          <div className="footer-status-badge">
            <span className="status-indicator"></span> All Systems Operational
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to Top">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
