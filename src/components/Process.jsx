const processIcons = {
  '01': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-svg-icon">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  '02': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-svg-icon">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
      <line x1="9" y1="3" x2="9" y2="18"></line>
      <line x1="15" y1="6" x2="15" y2="21"></line>
    </svg>
  ),
  '03': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-svg-icon">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
      <line x1="14" y1="4" x2="10" y2="20"></line>
    </svg>
  ),
  '04': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-svg-icon">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  '05': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-svg-icon">
      <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M14 2c1.78 1.78 2.68 4.22 2.68 4.22M2 22s12.5-12.5 13-13c2-2 1-5 1-5s-3-1-5 1c-.5.5-13 13-13 13zM9 15l3-3M19 5l3-3M20 9l2-2"></path>
    </svg>
  ),
  '06': (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="process-svg-icon">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
      <path d="M4 20l16-16"></path>
    </svg>
  )
};

export function Process() {
  const steps = [
    { number: '01', title: 'Free Consultation', desc: 'We understand your business goals, audience, and growth bottlenecks.' },
    { number: '02', title: 'Planning & Strategy', desc: 'We map your website, funnel, and campaign structure with clarity.' },
    { number: '03', title: 'Design & Development', desc: 'From UI to code and ad setup, we build with performance in mind.' },
    { number: '04', title: 'Review & Feedback', desc: 'You review, refine, and approve before launch.' },
    { number: '05', title: 'Launch', desc: 'Your website, store, or ad campaign goes live with precision.' },
    { number: '06', title: 'Support & Scale', desc: 'We keep optimizing so growth continues after the first launch.' },
  ];

  return (
    <section className="section reveal">
      <div className="section-heading text-center">
        <span className="section-label">How We Work</span>
        <h2>A simple, transparent process that keeps momentum high.</h2>
        <p className="lead-text" style={{ margin: '0.75rem auto 0' }}>
          From initial blueprint to live scale, we follow a rigorous, optimized framework to launch and grow your digital assets.
        </p>
      </div>
      
      <div className="process-grid-premium">
        {steps.map((step) => (
          <article key={step.number} className="process-card-premium">
            <div className="process-card-header">
              <div className="process-icon-wrapper">
                {processIcons[step.number]}
              </div>
              <span className="process-badge">{step.number}</span>
            </div>
            <div className="process-card-body">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
