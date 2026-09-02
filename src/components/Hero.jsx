import { Counter } from './Counter';
import { WhatsAppIcon } from './WhatsAppIcon';

const statIcons = {
  'Projects Delivered': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  ),
  'Websites Launched': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
  'Average ROAS on Ads': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
      <polyline points="4 8 10 2 14 6 20 1"></polyline>
    </svg>
  ),
  'Client Satisfaction': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
  )
};

export function Hero({ stats }) {
  const tags = ['Startups', 'E-Commerce', 'Local Brands', 'Real Estate', 'Clinics & Healthcare', 'Coaches & Creators'];

  return (
    <section id="home" className="hero-studio-wrapper reveal">
      {/* Dynamic Background Mesh Canvas */}
      <div className="studio-hero-bg">
        <div className="bg-glow-aura aura-green"></div>
        <div className="bg-glow-aura aura-cyan"></div>
        <div className="bg-dot-grid"></div>
      </div>

      <div className="hero-studio-container">
        {/* Left Hero Content */}
        <div className="hero-studio-left">
          <div className="hero-badge-pill">
            <span className="pulse-indicator"></span>
            <span>Web Development · AI Models · Digital Marketing</span>
          </div>

          <h1 className="hero-studio-title">
            We Engineer <span className="gradient-highlight">Digital Experiences</span> That Drive Revenue.
          </h1>

          <p className="hero-studio-lead">
            KORVEX builds custom-coded React platforms, high-converting e-commerce stores, and performance ad campaigns engineered for speed, authority, and predictable growth.
          </p>

          <div className="hero-studio-actions">
            <a className="btn-hero-primary" href="#contact">
              <span>Get Free Consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a
              className="btn-hero-whatsapp"
              href="https://wa.me/917041457314?text=Hi%20KORVEX%2C%20I%20want%20to%20build%20a%20website%20%2F%20run%20ads%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="wa-icon" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="hero-feature-tags">
            <div className="feature-pill">
              <span className="check-mark">✓</span>
              <span>Sub-Second Load Speed</span>
            </div>
            <div className="feature-pill">
              <span className="check-mark">✓</span>
              <span>100% Custom React &amp; Vite</span>
            </div>
            <div className="feature-pill">
              <span className="check-mark">✓</span>
              <span>SEO &amp; Conversion Engine</span>
            </div>
          </div>

          <div className="hero-partners-wrap">
            <span className="partners-label">Trusted digital partner for:</span>
            <div className="partners-pill-row">
              {tags.map((tag) => (
                <span key={tag} className="partner-tag-item">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Hero Visual Showcase */}
        <div className="hero-studio-right">
          <div className="studio-mockup-frame">
            <div className="mockup-mac-header">
              <div className="mac-dots">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              <div className="mac-address-bar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1db854" strokeWidth="3">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>https://korvex.agency/web-architecture</span>
              </div>
            </div>

            <div className="mockup-viewport">
              <div className="studio-preview-card">
                <div className="preview-top-bar">
                  <div className="preview-brand">
                    <span className="brand-dot"></span>
                    <span className="brand-title">KORVEX WEB ENGINE</span>
                  </div>
                  <span className="status-badge">PRODUCTION READY</span>
                </div>

                <div className="preview-grid-stats">
                  <div className="stat-gauge-card">
                    <div className="stat-gauge-header">
                      <span className="gauge-icon">⚡</span>
                      <span className="gauge-title">Core Web Vitals</span>
                    </div>
                    <div className="gauge-score">99/100</div>
                    <div className="gauge-bar-track">
                      <div className="gauge-bar-fill" style={{ width: '99%' }}></div>
                    </div>
                  </div>

                  <div className="stat-gauge-card">
                    <div className="stat-gauge-header">
                      <span className="gauge-icon">🚀</span>
                      <span className="gauge-title">TTFB Load Speed</span>
                    </div>
                    <div className="gauge-score">0.38s</div>
                    <div className="gauge-bar-track">
                      <div className="gauge-bar-fill cyan" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="preview-hero-mock">
                  <div className="preview-mock-title"></div>
                  <div className="preview-mock-subtitle"></div>
                  <div className="preview-mock-tags">
                    <span className="tech-tag">React 19</span>
                    <span className="tech-tag">Vite</span>
                    <span className="tech-tag">Custom CSS</span>
                    <span className="tech-tag">SEO Schema</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-top">
              <div className="badge-icon-box">⚡</div>
              <div className="badge-text-box">
                <span className="badge-title">Sub-Second Speed</span>
                <span className="badge-value">99/100 Core Web Vitals</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom">
              <div className="badge-icon-box cyan">📈</div>
              <div className="badge-text-box">
                <span className="badge-title">ROAS &amp; Sales Lift</span>
                <span className="badge-value">+4.2x Client Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Counter Bar */}
      <div className="hero-stats-banner">
        <div className="hero-stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="studio-stat-card">
              <div className="studio-stat-icon">
                {statIcons[stat.label] || (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                )}
              </div>
              <div className="studio-stat-info">
                <strong>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
