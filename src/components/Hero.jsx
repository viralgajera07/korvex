import { Counter } from './Counter';
import { WhatsAppIcon } from './WhatsAppIcon';

const statIcons = {
  'Projects Delivered': (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  'Websites Launched': (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  ),
  'Average ROAS on Ads': (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
      <path d="M4 20l16-16"></path>
    </svg>
  ),
  'Client Satisfaction': (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stat-icon-svg">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
    </svg>
  )
};

export function Hero({ stats }) {
  const tags = ['Startups', 'E-commerce', 'Local Businesses', 'Real Estate', 'Clinics', 'Coaches'];

  return (
    <section id="home" className="hero reveal hero-banner-card">
      <div className="hero-bg-wrapper" aria-hidden="true">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="hero-bg-media"
          onError={(e) => { e.currentTarget.src = '/hero-bg.png'; }}
        />
        <div className="hero-bg-overlay"></div>
        <div className="hero-bg-grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="pill">Web Development · E-Commerce · Digital Marketing</span>
          <h1>
            We Build Websites That <span className="accent-text">Convert</span> &amp; Ads That <span className="accent-text">Sell</span>
          </h1>
          <p className="hero-lead">
            KORVEX helps ambitious brands launch high-performance websites, e-commerce stores, and data-driven campaigns that turn visitors into paying customers.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get Free Consultation
            </a>
            <a className="btn btn-outline" href="https://wa.me/917041457314?text=Hi%20KORVEX%2C%20I%20want%20to%20build%20a%20website%20%2F%20run%20ads%20for%20my%20business." target="_blank" rel="noreferrer">
              <WhatsAppIcon className="btn-icon" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="hero-features">
            <span className="feature-item">
              <span className="feature-icon">✓</span> Built for Speed
            </span>
            <span className="feature-item">
              <span className="feature-icon">✓</span> SEO Optimized
            </span>
            <span className="feature-item">
              <span className="feature-icon">✓</span> High-Converting
            </span>
          </div>

          <div className="trusted-by-section">
            <span className="trusted-title">Growth partners for:</span>
            <div className="tag-marquee" aria-label="Core client segments">
              {tags.map((tag) => (
                <span key={tag} className="tag-item">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="browser-mockup">
            <div className="browser-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-address">https://korvex.co/dashboard</div>
            </div>

            <div className="browser-content">
              <div className="mock-dashboard">
                <div className="dashboard-sidebar">
                  <div className="sidebar-logo"></div>
                  <div className="sidebar-nav">
                    <span className="nav-item active"></span>
                    <span className="nav-item"></span>
                    <span className="nav-item"></span>
                    <span className="nav-item"></span>
                  </div>
                </div>

                <div className="dashboard-main">
                  <div className="main-header">
                    <div className="header-title"></div>
                    <div className="header-status">Live Campaigns</div>
                  </div>

                  <div className="widgets-grid">
                    <div className="widget-card">
                      <div className="widget-label">Conversion Rate</div>
                      <div className="widget-value">3.8% <span className="trend positive">+2.4%</span></div>
                      <div className="widget-sparkline">
                        <svg viewBox="0 0 100 30" className="sparkline-svg">
                          <path d="M 0 25 Q 20 5 40 18 T 80 8 T 100 2" fill="none" stroke="#1db854" strokeWidth="2.5" strokeLinecap="round" />
                          <circle cx="100" cy="2" r="3" fill="#1db854" />
                        </svg>
                      </div>
                    </div>

                    <div className="widget-card">
                      <div className="widget-label">Ad Spend ROAS</div>
                      <div className="widget-value">4.2x <span className="trend positive">Target 4x</span></div>
                      <div className="widget-progress">
                        <div className="progress-bar" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="analytics-card">
                    <div className="analytics-header">
                      <div className="analytics-title"></div>
                      <div className="analytics-subtitle">Sales & Conversions</div>
                    </div>
                    <div className="analytics-chart">
                      <svg viewBox="0 0 300 85" className="chart-svg">
                        <defs>
                          <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#1db854" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#1db854" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M 0 75 Q 50 40 100 50 T 200 25 T 300 12 L 300 85 L 0 85 Z" fill="url(#chart-grad)" />
                        <path d="M 0 75 Q 50 40 100 50 T 200 25 T 300 12" fill="none" stroke="#1db854" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="300" cy="12" r="4" fill="#1db854" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glass Widgets */}
            <div className="floating-widget glass-sales">
              <span className="f-icon">💰</span>
              <div className="f-info">
                <span className="f-label">Sales Revenue</span>
                <span className="f-value">$12,450.00</span>
              </div>
            </div>

            <div className="floating-widget glass-leads">
              <span className="f-icon">🚀</span>
              <div className="f-info">
                <span className="f-label">Conversion Growth</span>
                <span className="f-value">+324% this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats-wrap">
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-icon-wrapper">
                {statIcons[stat.label] || (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="stat-icon-svg">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                )}
              </div>
              <div className="stat-content">
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
