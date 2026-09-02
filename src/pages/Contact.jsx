import { useState } from 'react';
import { PhoneInput } from '../components/PhoneInput';
import { CustomSelect } from '../components/CustomSelect';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    { value: 'web', label: 'Website Development' },
    { value: 'ecom', label: 'E-Commerce Store' },
    { value: 'aiml', label: 'AI & ML Development' },
    { value: 'app', label: 'App Development' },
    { value: 'ads', label: 'Meta & Google Ads' },
    { value: 'all', label: 'Full Scale Growth Funnel' },
  ];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else if (data.details) {
        const detailsText = Object.values(data.details).join(' ');
        setErrorMessage(detailsText);
      } else {
        setErrorMessage(data.error || 'Failed to send inquiry. Please check details and try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMessage('Network error. Please ensure the backend server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page reveal visible">
      <div className="contact-header text-center">
        <span className="pill">Contact Us</span>
        <h1>Ready to build your website or scale your ads?</h1>
        <p className="lead-text">
          Reach out through the contact form or connect with us directly.
        </p>
      </div>

      <div className="contact-grid-main">
        {/* Left Column - Contact Details */}
        <div className="contact-info-col">
          <div className="info-box glass-card">
            <h3>Quick Details</h3>
            <ul className="details-list">
              <li>
                <span className="detail-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:help.korvex@gmail.com">help.korvex@gmail.com</a>
                </div>
              </li>
              <li>
                <span className="detail-icon">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/917041457314" target="_blank" rel="noreferrer">+91 70414 57314</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form-col">
          <div className="contact-form-wrapper glass-card">
            <h3>Send us a Message</h3>
            <p>Tell us about your project, target audience, and monthly growth budget.</p>

            {formSubmitted ? (
              <div className="form-success-state text-center">
                <span className="success-icon">🎉</span>
                <h4>Thank you!</h4>
                <p>Your request has been received. Our solutions architect will call or message you back within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setFormSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-main-form" onSubmit={handleContactSubmit}>
                {errorMessage && (
                  <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                    {errorMessage}
                  </div>
                )}
                <label>
                  Full Name *
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </label>

                <div className="form-row">
                  <label>
                    Email Address *
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
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
                  Service Interested In *
                  <CustomSelect
                    options={serviceOptions}
                    value={formData.service}
                    onChange={(val) => setFormData({ ...formData, service: val })}
                    placeholder="Select a capability"
                  />
                </label>

                <label>
                  Message / Context *
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project, current conversions, or budget..."
                  />
                </label>

                <button className="btn btn-primary full-width-btn" type="submit" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
