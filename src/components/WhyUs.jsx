const whyUsIcons = [
  // Fast Code
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg-icon">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>,
  // Dedicated PM
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg-icon">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>,
  // Transparent Comm
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg-icon">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>,
  // SEO Ready
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg-icon">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>,
  // ROI Ads
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg-icon">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>,
  // On time delivery
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-svg-icon">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
];

export function WhyUs() {
  const features = [
    { title: 'Clean, Fast-Loading Code', desc: 'Lean custom development optimized for instant page speeds, zero bloat, and top Google Core Web Vitals scores.', highlight: '< 0.5s Load Speed' },
    { title: 'Dedicated Project Manager', desc: 'Direct, single-point communication with zero middleman delays so your project stays perfectly on track.', highlight: 'Direct Access' },
    { title: 'Transparent Communication', desc: 'We stay continuously reachable on WhatsApp and Email with real-time progress updates and design reviews.', highlight: 'Daily Updates' },
    { title: 'SEO-Ready Architecture', desc: 'Every build is pre-configured with schema metadata, semantic HTML, and technical SEO best practices.', highlight: 'Rank Ready' },
    { title: 'ROI-Focused Ad Campaigns', desc: 'Data-backed ad strategy engineered for lead quality, low Cost-per-Acquisition (CPA), and maximum ROAS.', highlight: '4.2x Avg ROAS' },
    { title: 'Guaranteed On-Time Delivery', desc: 'Strict milestone tracking and reliable sprint schedules ensuring your website or campaign launches on schedule.', highlight: '100% On Time' },
  ];

  return (
    <section id="about" className="section reveal why-us-creative">
      <div className="section-heading text-center">
        <span className="section-label">Built for Speed, Scale &amp; Trust</span>
        <h2>Why Ambitious Brands Partner With KORVEX</h2>
        <p className="lead-text" style={{ margin: '0.75rem auto 0' }}>
          We eliminate project friction, slow load times, and wasted ad spend with an engineering-first digital growth approach.
        </p>
      </div>

      <div className="card-grid features-grid-creative">
        {features.map((feature, idx) => (
          <article key={feature.title} className="info-card feature-card-creative">
            <div className="feature-card-header">
              <div className="feature-icon-badge">
                {whyUsIcons[idx]}
              </div>
              <span className="feature-tag">{feature.highlight}</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            <div className="feature-glow-accent"></div>
          </article>
        ))}
      </div>
    </section>
  );
}
