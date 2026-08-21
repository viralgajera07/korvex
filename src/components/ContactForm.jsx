import { useState } from 'react';
import { PhoneInput } from './PhoneInput';
import { CustomSelect } from './CustomSelect';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
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
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else if (data.details) {
        const detailsText = Object.values(data.details).join(' ');
        setErrorMessage(detailsText);
      } else {
        setErrorMessage(data.error || 'Failed to send inquiry. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setErrorMessage('Network error. Please make sure the server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section reveal">
      <div className="contact-shell">
        <div className="contact-copy">
          <span className="section-label">Ready to Build or Scale?</span>
          <h2>Ready to build your website or scale your ads?</h2>
          <p>Book a free 30-minute consultation with our team and let’s map your next growth move.</p>
          <div className="cta-row">
            <a className="btn btn-primary" href="mailto:help.korvex@gmail.com">Book Free Consultation</a>
            <a className="btn btn-outline" href="https://wa.me/917041457314?text=Hi%20KORVEX%2C%20I%20want%20to%20build%20a%20website%20%2F%20run%20ads%20for%20my%20business." target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </div>

        {submitted ? (
          <div className="contact-form glass-card text-center" style={{ padding: '32px', textAlign: 'center' }}>
            <span style={{ fontSize: '40px' }}>🎉</span>
            <h3 style={{ marginTop: '12px' }}>Inquiry Submitted!</h3>
            <p style={{ margin: '12px 0 20px', color: 'var(--text-muted, #9ca3af)' }}>
              Thank you for reaching out. We will get back to you shortly!
            </p>
            <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Send Another Message</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {errorMessage && (
              <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                {errorMessage}
              </div>
            )}
            <label>
              Name *
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            <label>
              Phone / WhatsApp Number *
              <PhoneInput
                required
                value={formData.phone}
                onChange={(val) => setFormData({ ...formData, phone: val })}
                placeholder="70414 57314"
              />
            </label>
            <label>
              Email *
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <label>
              Service Interested In
              <CustomSelect
                options={[
                  { value: 'Website Development', label: 'Website Development' },
                  { value: 'E-commerce Store', label: 'E-commerce' },
                  { value: 'Digital Marketing', label: 'Digital Marketing' },
                  { value: 'Full Scale Growth Funnel', label: 'Both' },
                ]}
                value={formData.service}
                onChange={(val) => setFormData({ ...formData, service: val })}
                placeholder="Select one"
              />
            </label>
            <label>
              Message *
              <textarea
                rows="4"
                required
                placeholder="Tell us about your project or growth goal..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </label>
            <button className="btn btn-primary" type="submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Request Consultation'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

