import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar({ scrolled, mobileOpen, setMobileOpen }) {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Logo />

      <button
        className="nav-toggle"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`site-nav ${mobileOpen ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink 
            key={link.label} 
            to={link.href} 
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end={link.href === '/'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <Link className="btn btn-primary small" to="/contact">
          Get Free Consultation
        </Link>
      </div>
    </header>
  );
}
