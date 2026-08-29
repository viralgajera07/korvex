import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { servicesData } from '../data/servicesData';

export function Navbar({ scrolled, mobileOpen, setMobileOpen }) {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', isServices: true },
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
        {navLinks.map((link) => {
          if (link.isServices) {
            return (
              <div key={link.label} className="nav-dropdown-wrapper">
                <NavLink
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {link.label}
                  <svg className="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </NavLink>

                <div className="nav-dropdown-menu">
                  {servicesData.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="dropdown-item"
                    >
                      <span className="dropdown-item-icon">{s.icon}</span>
                      <span className="dropdown-item-title">{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end={link.href === '/'}
            >
              {link.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="header-actions">
        <Link className="btn btn-primary small" to="/contact">
          Get Free Consultation
        </Link>
      </div>
    </header>
  );
}
