export function Testimonials() {
  const testimonials = [
    { quote: 'The site launch felt premium and strategic from the first day. Our enquiries increased immediately.', name: 'Aarav M.', role: 'Founder, Sample Brand' },
    { quote: 'The team made the whole process effortless. Clear updates, sharp design, and measurable gains.', name: 'Neha P.', role: 'Marketing Lead, Sample Studio' },
    { quote: 'We needed both a better website and ads that actually convert. KORVEX delivered both.', name: 'Rahul S.', role: 'Owner, Sample Clinic' },
    { quote: 'Every step felt thoughtful and professional. The store is faster and easier to use.', name: 'Mina K.', role: 'Director, Sample Retailer' },
  ];

  return (
    <section className="section reveal">
      <div className="section-heading">
        <span className="section-label">What Clients Say</span>
        <h2>Sample feedback from founders and growing teams.</h2>
      </div>
      <div className="card-grid testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="info-card testimonial-card">
            <div className="stars">★★★★★</div>
            <p>“{item.quote}”</p>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
