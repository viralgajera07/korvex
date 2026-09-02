import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ServiceIcon } from '../components/ServiceIcon';

export function Services() {
  return (
    <div className="services-page reveal visible">
      <div className="services-header text-center">
        <span className="pill">What We Do</span>
        <h1>We design platforms and acquisition systems that grow revenue.</h1>
        <p className="lead-text">
          No generic templates or meaningless reports. Click on any service below to open its dedicated page with complete capabilities, execution blueprints, and consultation options.
        </p>
      </div>

      <section className="services-list-section">
        <div className="services-large-grid">
          {servicesData.map((service) => (
            <div key={service.slug} className="service-detail-card glass-card">
              <div className="sd-header">
                <div className="service-icon-wrapper">
                  <ServiceIcon slug={service.slug} />
                </div>
                <h2>{service.title}</h2>
              </div>
              <p>{service.description}</p>

              <ul className="sd-features">
                {service.bullets.map((feat) => (
                  <li key={feat}>
                    <svg className="service-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="sd-card-action">
                <Link to={`/services/${service.slug}`} className="btn btn-outline full-width-btn">
                  View Dedicated {service.title} Page →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
