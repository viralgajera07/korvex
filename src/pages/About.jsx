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
    </div>
  );
}
