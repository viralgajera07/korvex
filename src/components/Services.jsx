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
    <section id="services" className="section reveal">
      <div className="section-heading">
        <span className="section-label">What We Do</span>
        <h2>Premium digital services for brands that want faster growth.</h2>
        <p>From custom websites to paid acquisition, every service is built to simplify your growth and sharpen your conversion rate.</p>
      </div>
      <div className="card-grid services-grid">
        {items.map((item) => (
          <article key={item.title} className="info-card service-card">
            <div className="card-number">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
