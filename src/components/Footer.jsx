import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Logo />
        <p>Websites &amp; Growth Marketing for Ambitious Brands.</p>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><Link to="/services">Web Development</Link></li>
          <li><Link to="/services">E-Commerce</Link></li>
          <li><Link to="/services">Digital Marketing</Link></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/blog">Blog &amp; Insights</Link></li>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Refund Policy</a></li>
        </ul>
      </div>
      <div>
        <h4>Get in Touch</h4>
        <ul>
          <li><a href="tel:+917041457314">+91 70414 57314</a></li>
          <li><a href="mailto:help.korvex@gmail.com">help.korvex@gmail.com</a></li>
          <li>Adajan, Surat, India</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <span>© 2026 KORVEX. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
