export function Services() {
  const items = [
    {
      title: 'Website Development',
      description: 'Custom-coded websites built for trust, speed, and clear conversion paths.',
      bullets: ['Business Websites', 'Landing Pages', 'Web Apps', 'CMS Setup'],
      icon: '01',
    },
    {
      title: 'E-Commerce Development',
      description: 'High-converting stores that make buying effortless on every device.',
      bullets: ['Shopify & Custom Stores', 'Payment Integration', 'Product Catalogs', 'Cart Optimization'],
      icon: '02',
    },
    {
      title: 'Meta Ads Management',
      description: 'Lead and sales campaigns designed around performance, retention, and creative testing.',
      bullets: ['Lead Gen Campaigns', 'Sales Ads', 'Retargeting', 'Creative Testing'],
      icon: '03',
    },
    {
      title: 'Social Media Marketing',
      description: 'Strategic content and community growth that builds brand presence and trust.',
      bullets: ['Instagram Growth', 'Content Calendar', 'Brand Positioning', 'Community Management'],
      icon: '04',
    },
    {
      title: 'Analytics & Maintenance',
      description: 'Reliable management after launch to keep your website and ads performing smoothly.',
      bullets: ['Maintenance Plans', 'Speed Optimization', 'Ad Reporting Dashboards', 'SEO Basics'],
      icon: '05',
    },
    {
      title: 'Growth Strategy',
      description: 'A focused roadmap that aligns your website, funnel, and ad spend around one goal.',
      bullets: ['Conversion Audits', 'Funnel Planning', 'Retention Strategy', 'Quarterly Growth Roadmaps'],
      icon: '06',
    },
  ];

  return (
    <section id="services" className="services-section-wrapper reveal">
      <div className="section-heading text-center">
        <span className="section-label">What We Do</span>
        <h2>Premium digital services for brands that want faster growth.</h2>
        <p className="services-lead-desc">
          From custom websites to paid acquisition, every service is built to simplify your growth and sharpen your conversion rate.
        </p>
      </div>

      <div className="services-card-grid">
        {items.map((item) => (
          <article key={item.title} className="service-card-item">
            <div className="service-card-top">
              <span className="service-number-badge">{item.icon}</span>
            </div>
            <h3 className="service-card-title">{item.title}</h3>
            <p className="service-card-desc">{item.description}</p>
            <ul className="service-bullets-list">
              {item.bullets.map((bullet) => (
                <li key={bullet}>
                  <svg className="service-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
