export function Portfolio() {
  const items = [
    {
      title: 'NexGen E-Commerce Platform',
      category: 'Shopify / React',
      result: '3.4x ROAS · 0.4s Speed',
      blurb: 'Complete headless storefront overhaul built for high-speed mobile conversion and effortless checkout.',
      metrics: [
        { label: 'Conversion Boost', val: '+240%' },
        { label: 'Mobile Page Speed', val: '99/100' }
      ]
    },
    {
      title: 'Zenith Health Clinic Funnel',
      category: 'Lead Gen & Meta Ads',
      result: '210+ Bookings / Mo',
      blurb: 'Targeted hyper-local acquisition campaigns paired with a frictionless instant booking portal.',
      metrics: [
        { label: 'Cost Per Lead', val: '-42%' },
        { label: 'Monthly Appointments', val: '210+' }
      ]
    },
    {
      title: 'Aura Real Estate Group',
      category: 'PPC & Search Ads',
      result: '$4.8M Pipeline Value',
      blurb: 'High-intent Google Ads campaigns capturing qualified luxury buyer leads with automated CRM sync.',
      metrics: [
        { label: 'Qualified Leads', val: '380+' },
        { label: 'Ad ROI', val: '5.1x' }
      ]
    },
    {
      title: 'SaaS Platform Landing Page',
      category: 'Custom Web App',
      result: '+185% Free Trial Signups',
      blurb: 'Modern dark glassmorphic landing experience built with React & Vite for maximum product demo engagement.',
      metrics: [
        { label: 'Signup Conversion', val: '8.4%' },
        { label: 'Avg Time On Site', val: '3m 40s' }
      ]
    },
  ];

  return (
    <section className="section reveal portfolio-creative">
      <div className="section-heading text-center">
        <span className="section-label">Proven Results &amp; Impact</span>
        <h2>Case Studies &amp; Success Stories</h2>
        <p className="lead-text" style={{ margin: '0.75rem auto 0' }}>
          Real growth data from client campaigns and custom website launches.
        </p>
      </div>

      <div className="card-grid portfolio-grid-creative">
        {items.map((item) => (
          <article key={item.title} className="info-card portfolio-card-creative">
            <div className="portfolio-card-top">
              <span className="portfolio-category">{item.category}</span>
              <span className="portfolio-result-badge">{item.result}</span>
            </div>

            <h3>{item.title}</h3>
            <p>{item.blurb}</p>

            <div className="portfolio-metrics-grid">
              {item.metrics.map((m) => (
                <div key={m.label} className="metric-box">
                  <span className="metric-val">{m.val}</span>
                  <span className="metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="portfolio-footer">
              <a href="#contact" className="portfolio-link">
                View Strategy Breakdown →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
