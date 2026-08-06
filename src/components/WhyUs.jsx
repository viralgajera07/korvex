export function WhyUs() {
  const features = [
    { title: 'Clean, Fast-Loading Code', desc: 'Lean development that improves speed, stability, and customer experience.' },
    { title: 'Dedicated Project Manager', desc: 'A single point of contact to keep communication simple and efficient.' },
    { title: 'Transparent Communication', desc: 'We stay reachable on WhatsApp and email for updates and feedback.' },
    { title: 'SEO-Ready Websites', desc: 'Every build is structured for search visibility from day one.' },
    { title: 'ROI-Focused Ad Campaigns', desc: 'We optimize for lead quality, sales, and measurable return.' },
    { title: 'On-Time Delivery', desc: 'Reliable timelines and clear milestones from kickoff to launch.' },
  ];

  return (
    <section id="about" className="section reveal">
      <div className="section-heading">
        <span className="section-label">Built for Performance &amp; Trust</span>
        <h2>Why brands choose KORVEX for their next move.</h2>
      </div>
      <div className="card-grid features-grid">
        {features.map((feature) => (
          <article key={feature.title} className="info-card feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
