import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getServiceBySlug, servicesData } from '../data/servicesData';
import { PhoneInput } from '../components/PhoneInput';
import { CustomSelect } from '../components/CustomSelect';

export function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: service ? service.title : '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!service) {
    return (
      <div className="services-page reveal visible text-center" style={{ padding: '80px 20px' }}>
        <h2>Service Not Found</h2>
        <p style={{ margin: '16px 0 24px', color: '#64748b' }}>
          The requested service page does not exist or has been moved.
        </p>
        <Link to="/services" className="btn btn-primary">
          Back to All Services
        </Link>
      </div>
    );
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: service.title,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: service.title, message: '' });
      } else if (data.details) {
        const detailsText = Object.values(data.details).join(' ');
        setErrorMessage(detailsText);
      } else {
        setErrorMessage(data.error || 'Failed to submit request. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMessage('Network error. Please make sure the backend server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="service-detail-page reveal visible">
      {/* Top Breadcrumb Header */}
      <div className="sd-nav-bar">
        <Link to="/services" className="sd-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back to All Services
        </Link>
      </div>

      {/* Hero Section */}
      <header className="sd-hero-section">
        <div className="sd-hero-badge-wrap">
          <span className="sd-number-tag">{service.number}</span>
          <span className="sd-icon-badge">{service.icon}</span>
        </div>
        <h1 className="sd-hero-title">{service.heroTitle}</h1>
        <p className="sd-hero-tagline">{service.tagline}</p>
        <div className="sd-hero-cta-row">
          <a href="#book-consultation" className="btn btn-primary">
            Request {service.title} Consultation
          </a>
          <a href="#capabilities" className="btn btn-outline">
            Explore Capabilities
          </a>
        </div>
      </header>

      {/* Main Overview */}
      <section className="sd-overview-section">
        <div className="glass-card sd-overview-card">
          <h3>Overview &amp; Impact</h3>
          <p className="sd-full-desc">{service.fullDescription}</p>
        </div>
      </section>

      {/* Capabilities / Features Grid */}
      <section id="capabilities" className="sd-capabilities-section">
        <div className="section-heading text-center">
          <span className="section-label">Core Capabilities</span>
          <h2>What We Build &amp; Deliver in {service.title}</h2>
          <p>End-to-end technical execution tailored around your modern business requirements.</p>
        </div>

        <div className="sd-bullets-grid">
          {service.bullets.map((bullet, idx) => (
            <div key={bullet} className="sd-bullet-card glass-card">
              <div className="sd-bullet-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="sd-bullet-content">
                <span className="sd-bullet-num">Capability {String(idx + 1).padStart(2, '0')}</span>
                <h4>{bullet}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Benefits */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="sd-benefits-section">
          <div className="section-heading text-center">
            <span className="section-label">Strategic Value</span>
            <h2>Why Brands Choose Our {service.title}</h2>
          </div>

          <div className="sd-benefits-grid">
            {service.benefits.map((benefit, i) => (
              <div key={benefit.title} className="sd-benefit-card info-card">
                <span className="benefit-index">0{i + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Execution Process Timeline */}
      {service.processSteps && (
        <section className="sd-process-section">
          <div className="section-heading text-center">
            <span className="section-label">Execution Blueprint</span>
            <h2>Our 4-Step Delivery Process</h2>
            <p>A proven roadmap engineered for rapid turnaround and bulletproof execution.</p>
          </div>

          <div className="sd-process-grid">
            {service.processSteps.map((stepItem) => (
              <div key={stepItem.step} className="sd-process-card glass-card">
                <div className="sd-process-step-badge">{stepItem.step}</div>
                <h3>{stepItem.title}</h3>
                <p>{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="sd-faq-section">
          <div className="section-heading text-center">
            <span className="section-label">Questions &amp; Answers</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="sd-faq-list">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="sd-faq-card glass-card">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Dedicated Consultation CTA Form */}
      <section id="book-consultation" className="sd-contact-cta-section">
        <div className="sd-contact-shell glass-card">
          <div className="sd-contact-copy">
            <span className="section-label">Get Started</span>
            <h2>Ready to transform your business with {service.title}?</h2>
            <p>Book a free 30-minute technical consultation with our solution architects. We will evaluate your scope and map a clear execution path.</p>
            <div className="sd-direct-contact">
              <div>
                <strong>Direct Email:</strong> <a href="mailto:help.korvex@gmail.com">help.korvex@gmail.com</a>
              </div>
              <div>
                <strong>WhatsApp:</strong> <a href="https://wa.me/917041457314" target="_blank" rel="noreferrer">+91 70414 57314</a>
              </div>
            </div>
          </div>

          <div className="sd-form-wrap">
            {submitted ? (
              <div className="form-success-state text-center" style={{ padding: '32px 16px' }}>
                <span style={{ fontSize: '44px' }}>🎉</span>
                <h3 style={{ marginTop: '12px' }}>Inquiry Submitted!</h3>
                <p style={{ margin: '12px 0 20px', color: '#64748b' }}>
                  Thank you for reaching out regarding <strong>{service.title}</strong>. Our team will contact you within 24 hours!
                </p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="sd-form">
                {errorMessage && (
                  <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>
                    {errorMessage}
                  </div>
                )}
                <label>
                  Full Name *
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>

                <div className="form-row">
                  <label>
                    Email Address *
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </label>

                  <label>
                    WhatsApp Number *
                    <PhoneInput
                      required
                      value={formData.phone}
                      onChange={(val) => setFormData({ ...formData, phone: val })}
                      placeholder="70414 57314"
                    />
                  </label>
                </div>

                <label>
                  Selected Capability
                  <input
                    type="text"
                    disabled
                    value={service.title}
                    style={{ opacity: 0.85, cursor: 'not-allowed', backgroundColor: 'rgba(0,0,0,0.03)' }}
                  />
                </label>

                <label>
                  Project Details / Requirements *
                  <textarea
                    rows="4"
                    required
                    placeholder={`Tell us about your requirements for ${service.title}...`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </label>

                <button className="btn btn-primary full-width-btn" type="submit" disabled={submitting}>
                  {submitting ? 'Submitting Inquiry...' : `Request ${service.title} Consultation`}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="sd-other-services">
        <div className="section-heading text-center">
          <span className="section-label">Explore Capabilities</span>
          <h2>Other Services by KORVEX</h2>
        </div>

        <div className="sd-other-grid">
          {otherServices.slice(0, 3).map((item) => (
            <div key={item.slug} className="sd-other-card glass-card" onClick={() => navigate(`/services/${item.slug}`)}>
              <div className="sd-other-top">
                <span className="sd-other-badge">{item.number}</span>
                <span className="sd-other-icon">{item.icon}</span>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link to={`/services/${item.slug}`} className="sd-other-link">
                View Dedicated Page →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
