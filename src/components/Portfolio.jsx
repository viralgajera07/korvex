export function Portfolio() {
  const items = [
    { title: 'E-commerce Store Redesign', result: '3.2x faster load time', blurb: 'A cleaner storefront experience with stronger conversion on mobile.' },
    { title: 'Local Business Website', result: '150+ leads in first month', blurb: 'A high-trust site built to capture enquiries from local search and ads.' },
    { title: 'Meta Ads Campaign — Clinic', result: '210 booked appointments', blurb: 'Targeted lead generation campaigns focused on qualified local demand.' },
    { title: 'Google Ads — Real Estate', result: '380 qualified leads', blurb: 'A focused paid search approach with better lead quality and ROI.' },
  ];

  return (
    <section className="section reveal">
      <div className="section-heading">
        <span className="section-label">Our Work &amp; Results</span>
        <h2>Illustrative examples of how we create momentum.</h2>
      </div>
      <div className="card-grid portfolio-grid">
        {items.map((item) => (
          <article key={item.title} className="info-card portfolio-card">
            <span className="mini-pill">Illustrative result</span>
            <h3>{item.title}</h3>
            <p>{item.blurb}</p>
            <strong>{item.result}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
