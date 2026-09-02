import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { servicesData } from '../data/servicesData';
import { ServiceIcon } from './ServiceIcon';

export function Navbar({ scrolled, mobileOpen, setMobileOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const isMobile = () => window.innerWidth <= 1024;

  const handleServicesClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setServicesOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (isMobile()) return;
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile()) return;
    leaveTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  const closeAll = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setServicesOpen(false);
    setMobileOpen(false);
  };

  // Close when clicking anywhere outside the services dropdown
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', isServices: true },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className={`studio-dock-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="dock-grid-layout">
        {/* Left Segment: Logo */}
        <div className="dock-segment dock-brand">
          <Logo />
        </div>

        {/* Center Segment: Floating Nav Dock */}
        <nav className={`dock-segment dock-nav ${mobileOpen ? 'mobile-show' : ''}`}>
          {navItems.map((item) => {
            if (item.isServices) {
              return (
                <div
                  key={item.label}
                  ref={servicesRef}
                  className={`dock-services-trigger ${servicesOpen ? 'submenu-open' : ''}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`dock-link services-btn ${servicesOpen ? 'active' : ''}`}
                    onClick={handleServicesClick}
                    aria-expanded={servicesOpen}
                  >
                    <span>Services</span>
                    <svg
                      className={`chevron ${servicesOpen ? 'open' : ''}`}
                      width="10" height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {/* Services Drawer */}
                  <div className={`services-drawer ${servicesOpen ? 'visible' : ''}`}>
                    <div className="drawer-inner">
                      <div className="drawer-heading">
                        <span>SOLUTIONS &amp; CAPABILITIES</span>
                        <Link to="/services" onClick={closeAll}>View All Services ↗</Link>
                      </div>
                      <div className="drawer-services-grid">
                        {servicesData.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            onClick={closeAll}
                            className="drawer-item"
                          >
                            <div className="drawer-icon-box">
                              <ServiceIcon slug={s.slug} width={16} height={16} />
                            </div>
                            <div className="drawer-item-info">
                              <span className="d-title">{s.title}</span>
                              <span className="d-desc">{s.description}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={closeAll}
                className={({ isActive }) => (isActive ? 'dock-link active' : 'dock-link')}
                end={item.href === '/'}
              >
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right Segment: Action CTA */}
        <div className="dock-segment dock-actions">
          <Link to="/contact" className="dock-cta-btn" onClick={closeAll}>
            <span>Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          <button
            className="dock-mobile-btn"
            onClick={() => { setMobileOpen(!mobileOpen); setServicesOpen(false); }}
            aria-label="Toggle menu"
          >
            <span className={`bar ${mobileOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
