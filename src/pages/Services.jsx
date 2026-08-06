export function Services() {
  const serviceDetails = [
    {
      id: 'web-dev',
      title: 'Custom Website Development',
      icon: '💻',
      desc: 'We build blazingly fast, custom-coded web architectures that load instantly, secure your search rankings, and convey authority.',
      features: ['React & Vite Single/Multi-page Apps', 'Responsive & Mobile-First Coding', 'Search Engine Optimization (SEO)', 'Fast Load Speeds & Clean Core Web Vitals']
    },
    {
      id: 'ecom-dev',
      title: 'E-Commerce Engineering',
      icon: '🛒',
      desc: 'Turn browsers into buyers. We create high-converting e-commerce experiences on Shopify or custom headless setups built for scale.',
      features: ['Payment Gateway Integrations', 'Frictionless Cart & Checkout Audits', 'Product Catalog Architecture', 'Conversion Rate Optimization (CRO)']
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads & Media Buying',
      icon: '📢',
      desc: 'Generate predictable ROI. We build and manage Facebook & Instagram ad campaigns designed around sales and qualified lead capture.',
      features: ['Creative Strategy & Ad Design', 'A/B Testing & Audience Sourcing', 'ROAS Tracking & Pixel Setup', 'Retargeting Funnels & Copywriting']
    },
    {
      id: 'growth-strategy',
      title: 'Funnel & Growth Strategy',
      icon: '🚀',
      desc: 'A comprehensive growth roadmap aligning your product value, landing pages, email lists, and ad spend to drive conversions.',
      features: ['Funnel Architecture Design', 'User Retention Workflows', 'Audits & Analytics Review', 'Quarterly Expansion Milestones']
    }
  ];

  const packages = [
    {
      name: 'Starter Package',
      price: '$999',
      desc: 'Perfect for local businesses wanting a fast, credible web presence to capture search traffic.',
      features: ['Custom 3-Page Website', 'SEO Setup & Performance Check', 'Contact Form Integration', '1 Month Free Support']
    },
    {
      name: 'Growth Funnel',
      price: '$2,499',
      desc: 'Best for ambitious brands seeking a high-converting landing system integrated with paid traffic channels.',
      features: ['Custom Landing Page / Multi-page', 'Full Analytics Dashboard Setup', 'Meta Ads Integration', 'A/B Lead Form Testing', '3 Months Dedicated Support'],
      popular: true
    },
    {
      name: 'Enterprise Architecture',
      price: 'Custom',
      desc: 'For businesses needing custom integrations, CMS setups, or bespoke databases.',
      features: ['Advanced React Web App', 'Custom API & Third-party Syncs', 'Product Database Setup', 'Speed Optimization & Maintenance', 'Priority 24/7 Slack Support']
    }
  ];

  return (
    <div className="services-page reveal visible">
      <div className="services-header text-center">
        <span className="pill">What We Do</span>
        <h1>We design platforms and acquisition systems that grow revenue.</h1>
        <p className="lead-text">
          No generic templates or meaningless reports. We provide clear, production-grade solutions that translate directly into business value.
        </p>
      </div>

      <section className="services-list-section">
        <div className="services-large-grid">
          {serviceDetails.map((service) => (
            <div key={service.id} className="service-detail-card glass-card">
              <div className="sd-header">
                <span className="sd-icon">{service.icon}</span>
                <h2>{service.title}</h2>
              </div>
              <p>{service.desc}</p>
              <ul className="sd-features">
                {service.features.map((feat) => (
                  <li key={feat}>
                    <span className="feat-check">✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-section">
        <div className="section-heading text-center">
          <span className="section-label">Transparent Estimates</span>
          <h2>Pricing tiers tailored to your growth stage.</h2>
          <p>Choose the scope that aligns with your active goals. Custom scopes are always available.</p>
        </div>

        <div className="card-grid pricing-grid">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`pricing-card info-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{pkg.name}</h3>
              <div className="price-tag">
                <strong>{pkg.price}</strong>
                {pkg.price !== 'Custom' && <span className="price-sub">/ project</span>}
              </div>
              <p className="pkg-desc">{pkg.desc}</p>
              <ul className="pkg-features">
                {pkg.features.map((feat) => (
                  <li key={feat}>✓ {feat}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} full-width-btn`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
