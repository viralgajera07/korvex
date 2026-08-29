import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export function Services() {
  return (
    <section id="services" className="services-section-wrapper reveal">
      <div className="section-heading text-center">
        <span className="section-label">What We Do</span>
        <h2>Premium digital services for brands that want faster growth.</h2>
        <p className="services-lead-desc">
          From custom websites and AI/ML architecture to paid acquisition, click on any service below to explore its dedicated page and technical capabilities.
        </p>
      </div>

      <div className="services-card-grid">
        {servicesData.map((item) => (
          <article key={item.slug} className="service-card-item">
            <Link to={`/services/${item.slug}`} className="service-card-top-link">
              <div className="service-card-top">
                <span className="service-number-badge">{item.number}</span>
                <span className="service-emoji-icon">{item.icon}</span>
              </div>
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-desc">{item.description}</p>
            </Link>

            <ul className={`service-bullets-list ${item.bullets.length > 4 ? 'grid-bullets' : ''}`}>
              {item.bullets.map((bullet) => (
                <li key={bullet}>
                  <svg className="service-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="service-card-footer">
              <Link to={`/services/${item.slug}`} className="service-explore-btn">
                Explore Dedicated Page
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
