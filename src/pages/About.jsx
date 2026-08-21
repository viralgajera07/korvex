export function About() {
  const values = [
    {
      title: 'Uncompromising Quality',
      desc: 'We reject generic templates. We build custom-coded, high-performance web applications tailored to your specific business operations.',
      icon: '💎'
    },
    {
      title: 'Data-Driven Choices',
      desc: 'We rely on analytics, creative testing, and user behavioral data to optimize your conversion rates and scale your advertising campaigns.',
      icon: '📊'
    },
    {
      title: 'Absolute Transparency',
      desc: 'No hidden fees or vanity metrics. You get detailed, weekly reports showing actual conversions, lead counts, and ROAS performance.',
      icon: '🤝'
    }
  ];

  const milestones = [
    { year: '2023', title: 'Agency Founded', desc: 'Started KORVEX with a vision to merge premium web design with performance marketing.' },
    { year: '2024', title: '50+ Launches', desc: 'Scaled operations and delivered custom digital architectures for businesses across 4 continents.' },
    { year: '2025', title: 'Core Tech Stack Upgrade', desc: 'Transitioned to React + Vite and modern APIs for ultra-fast page speed and SEO optimization.' },
    { year: '2026', title: 'Looking Forward', desc: 'Pioneering AI integrations and interactive web user interfaces for hyper-growth.' }
  ];

  const partners = [
    {
      id: 'consistency',
      name: 'Consistency',
      category: 'Cloud Infrastructure & SLA',
      metric: '99.99% Uptime',
      desc: 'Enterprise-grade cloud infrastructure, automated failover architecture, and continuous performance optimization for zero-downtime web applications.',
      accent: '#1db854',
      logo: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.4" />
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="3" />
          <path d="M18 24L22 28L30 18" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'strategy',
      name: 'Strategy',
      category: 'Brand & Growth Architecture',
      metric: '3.4x Avg ROAS',
      desc: 'Data-driven marketing funnels, strategic market positioning, and campaign architectures that convert high-intent traffic into sustained revenue.',
      accent: '#10b981',
      logo: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
          <path d="M8 40L18 26L26 32L40 10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 10H40V22" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="26" r="3" fill="currentColor" />
          <circle cx="26" cy="32" r="3" fill="currentColor" />
          <circle cx="40" cy="10" r="4" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'velocity',
      name: 'Velocity',
      category: 'CDN & Speed Optimization',
      metric: '< 0.4s Latency',
      desc: 'Lightning-fast global edge network delivery, instant asset caching, and Core Web Vitals optimization to maximize conversion speed.',
      accent: '#06b6d4',
      logo: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
          <path d="M26 6L10 26H24L22 42L38 22H24L26 6Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'quantum',
      name: 'Quantum',
      category: 'AI Analytics & Intelligence',
      metric: '10M+ Data Points',
      desc: 'Machine learning analytics models, multi-channel attribution tracking, and predictive customer journey insights for rapid scaling.',
      accent: '#8b5cf6',
      logo: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
          <rect x="12" y="12" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="3" />
          <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.5" />
          <path d="M24 6V12M24 36V42M6 24H12M36 24H42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'synergy',
      name: 'Synergy',
      category: 'Enterprise API Integrations',
      metric: '100+ Connected APIs',
      desc: 'Robust API middleware bridging CRM tools, payment processors, ERP systems, and custom databases into unified digital workflows.',
      accent: '#ec4899',
      logo: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
          <path d="M14 16C14 11.5817 17.5817 8 22 8H26C30.4183 8 34 11.5817 34 16C34 20.4183 30.4183 24 26 24H22C17.5817 24 14 27.5817 14 32C14 36.4183 17.5817 40 22 40H26C30.4183 40 34 36.4183 34 32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="14" cy="16" r="3" fill="currentColor" />
          <circle cx="34" cy="32" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'elevate',
      name: 'Elevate',
      category: 'Conversion UX Engineering',
      metric: '+42% Conv. Rate',
      desc: 'Psychology-backed visual interface designs, interactive product flows, and frictionless UI architectures built for maximum buyer conversion.',
      accent: '#f59e0b',
      logo: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="partner-svg-logo">
          <path d="M24 8L38 20V38H10V20L24 8Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 16L30 24H18L24 16Z" fill="currentColor" />
          <path d="M24 24V32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="about-page reveal visible">
      <div className="about-header text-center">
        <span className="pill">About KORVEX</span>
        <h1>We merge engineering with performance marketing.</h1>
        <p className="lead-text">
          KORVEX was built to bridge the gap between design agencies that don't understand marketing and marketing agencies that can't build clean software.
        </p>
      </div>

      <section className="about-intro-grid grid-2">
        <div className="intro-card glass-card">
          <h2>Our Philosophy</h2>
          <p>
            We believe that a beautiful website is useless if it doesn't attract traffic. Likewise, expensive ad campaigns are wasted if they drive visitors to a slow, confusing website.
          </p>
          <p>
            KORVEX brings these two vital dimensions together under one unified growth strategy. We build fast, high-converting platforms and run intelligent, targeted ads that make them profitable.
          </p>
        </div>
        <div className="intro-image-container">
          <div className="design-pattern-orb"></div>
          <div className="stat-highlight-box">
            <span className="h-number">100%</span>
            <span className="h-text">Custom Built Codebases</span>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-heading text-center">
          <span className="section-label">Our Core Values</span>
          <h2>The principles guiding our work.</h2>
        </div>
        <div className="card-grid values-grid">
          {values.map((v) => (
            <div key={v.title} className="info-card value-card">
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-heading text-center">
          <span className="section-label">Our Journey</span>
          <h2>How we got here.</h2>
        </div>
        <div className="timeline-container">
          {milestones.map((m, idx) => (
            <div key={m.year} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content glass-card">
                <span className="timeline-year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Premium Partners Showcase Section */}
      <section className="partners-section">
        <div className="section-heading text-center">
          <span className="section-label pill-accent">Strategic Ecosystem</span>
          <h2>Powered by World-Class Partners</h2>
          <p className="lead-text">
            We collaborate with industry-leading technology platforms and strategic innovators to engineer seamless, high-converting digital ecosystems.
          </p>
        </div>

        {/* Dynamic Partner Marquee Ticker */}
        <div className="partner-marquee-container">
          <div className="partner-marquee-track">
            {partners.concat(partners).map((p, idx) => (
              <div key={`${p.id}-marquee-${idx}`} className="partner-marquee-item">
                <span className="marquee-logo-icon">{p.logo}</span>
                <span className="marquee-name">{p.name}</span>
                <span className="marquee-dot">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Partners Grid */}
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card glass-card" style={{ '--partner-accent': partner.accent }}>
              <div className="partner-card-header">
                <div className="partner-logo-wrapper">
                  {partner.logo}
                </div>
                <span className="partner-metric-badge">{partner.metric}</span>
              </div>

              <div className="partner-card-body">
                <span className="partner-category">{partner.category}</span>
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-desc">{partner.desc}</p>
              </div>

              <div className="partner-card-footer">
                <span className="partner-status">
                  <span className="status-dot"></span>
                  Verified Strategic Partner
                </span>
                <span className="partner-arrow">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

