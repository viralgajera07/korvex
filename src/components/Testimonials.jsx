export function Testimonials() {
  const testimonials = [
    {
      quote: 'KORVEX completely transformed our online presence. Our page load speeds dropped under 0.5s and qualified lead inquiries increased by 300% within 30 days of launch.',
      name: 'Aarav Mehta',
      role: 'Founder & CEO',
      company: 'Apex Tech Solutions',
      avatar: 'AM',
      rating: 5,
      tag: 'Web Development & Ads'
    },
    {
      quote: 'The ad strategy and landing page design were flawless. We achieved a 4.2x ROAS on Meta ads in our first month. The communication on WhatsApp was daily and super clear.',
      name: 'Neha Patel',
      role: 'Head of Growth',
      company: 'Verve Lifestyle Store',
      avatar: 'NP',
      rating: 5,
      tag: 'E-Commerce & Performance Ads'
    },
    {
      quote: 'Professionalism, speed, and absolute technical competence. They delivered a custom clinic portal and booking funnel ahead of deadline.',
      name: 'Dr. Rahul Sharma',
      role: 'Medical Director',
      company: 'Zenith Health Care',
      avatar: 'RS',
      rating: 5,
      tag: 'Custom Web App'
    },
    {
      quote: 'Every step felt strategic and data-driven. The new e-commerce storefront cut cart abandonment significantly while doubling our mobile conversions.',
      name: 'Mina Kapoor',
      role: 'Managing Director',
      company: 'Luxe Retail Group',
      avatar: 'MK',
      rating: 5,
      tag: 'Store Optimization'
    },
  ];

  return (
    <section className="section reveal testimonials-creative">
      <div className="section-heading text-center">
        <span className="section-label">Client Stories &amp; Proof</span>
        <h2>Trusted by Founders &amp; High-Growth Leaders</h2>
        <p className="lead-text" style={{ margin: '0.75rem auto 0' }}>
          Here is what happens when speed, design excellence, and targeted paid strategy come together.
        </p>
      </div>

      <div className="card-grid testimonial-grid-creative">
        {testimonials.map((item) => (
          <article key={item.name} className="info-card testimonial-card-creative">
            <div className="testimonial-header">
              <div className="avatar-circle">{item.avatar}</div>
              <div className="author-info">
                <strong>{item.name}</strong>
                <span className="author-role">{item.role} · {item.company}</span>
                <span className="verified-badge">✓ Verified Client</span>
              </div>
            </div>

            <div className="stars-wrapper">
              {'★'.repeat(item.rating)}
            </div>

            <p className="testimonial-quote">“{item.quote}”</p>

            <div className="testimonial-footer">
              <span className="service-tag">{item.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
