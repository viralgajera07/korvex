import { useState } from 'react';
import { PhoneInput } from '../components/PhoneInput';

export function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyJob, setApplyJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', portfolio: '', resume: '', message: '' });

  const jobs = [
    {
      title: 'Sales Executive / Sales Person',
      department: 'Sales & Revenue',
      location: 'Remote',
      type: 'Full-time',
      desc: 'Drive client acquisition, pitch website development and digital marketing services to prospective business owners.',
      responsibilities: [
        'Identify and generate leads for custom website development, e-commerce, and paid advertising services.',
        'Conduct sales calls, present project proposals, and close service contracts with clients.',
        'Follow up on inbound inquiries and manage active sales pipelines.',
        'Work closely with client founders to understand business needs and recommend tailored agency solutions.'
      ],
      requirements: [
        'Proven track record in B2B sales, agency sales, or IT service selling.',
        'Excellent verbal communication, presentation, and closing skills.',
        'Strong understanding of digital services (Websites, Shopify, Meta/Google Ads).',
        'Target-driven mindset with high motivation and self-discipline.'
      ]
    },
    {
      title: 'Business Development Executive (BDE)',
      department: 'Business Development',
      location: 'Remote',
      type: 'Full-time',
      desc: 'Identify new business opportunities, build outbound pipelines, and establish strategic partnerships to scale agency growth.',
      responsibilities: [
        'Research market sectors, discover prospective client opportunities, and execute targeted outreach.',
        'Build outbound pipelines via cold email, LinkedIn networking, and strategic outreach.',
        'Scope client project requirements with technical leads and prepare customized proposals.',
        'Establish long-term relationships with brand owners, enterprise clients, and growth partners.'
      ],
      requirements: [
        '1+ years of experience as a Business Development Executive in an IT or Marketing Agency setup.',
        'Strong lead generation, cold outreach, and client relationship management capabilities.',
        'Familiarity with agency service workflows (Web Dev, AI, Performance Ads).',
        'Goal-oriented with strong analytical and negotiation skills.'
      ]
    }
  ];

  const handleApplyClick = (job, e) => {
    e.stopPropagation();
    setApplyJob(job);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', portfolio: '', resume: '', message: '' });
  };

  return (
    <div className="careers-page reveal visible">
      <div className="careers-header text-center">
        <span className="pill">We Are Hiring</span>
        <h1>Drive business expansion &amp; growth with KORVEX.</h1>
        <p className="lead-text">
          We are looking for result-oriented Sales Professionals and Business Development Executives (BDE) to expand our market reach and build lasting client relationships.
        </p>
      </div>

      <div className="jobs-section">
        <h2>Open Positions ({jobs.length})</h2>
        <div className="jobs-list">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="job-card glass-card"
              onClick={() => setSelectedJob(selectedJob?.title === job.title ? null : job)}
            >
              <div className="job-card-header">
                <div>
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-dept">{job.department}</span>
                    <span className="job-loc">{job.location}</span>
                    <span className="job-type">{job.type}</span>
                  </div>
                </div>
                <button
                  className="btn btn-outline"
                  onClick={(e) => handleApplyClick(job, e)}
                >
                  Apply Now
                </button>
              </div>

              <p className="job-short-desc">{job.desc}</p>

              <div className="job-expand-indicator">
                {selectedJob?.title === job.title ? 'Click to collapse details ▲' : 'Click to view full details ▼'}
              </div>

              {selectedJob?.title === job.title && (
                <div className="job-details-dropdown" onClick={(e) => e.stopPropagation()}>
                  <hr className="job-divider" />
                  <div className="job-details-grid">
                    <div>
                      <h4>Key Responsibilities:</h4>
                      <ul>
                        {job.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Requirements & Skills:</h4>
                      <ul>
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="job-details-action text-right">
                    <button
                      className="btn btn-primary"
                      onClick={(e) => handleApplyClick(job, e)}
                    >
                      Fill Application Form
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      {applyJob && (
        <div className="modal-overlay" onClick={() => setApplyJob(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setApplyJob(null)}>×</button>

            {formSubmitted ? (
              <div className="form-success-state text-center">
                <span className="success-icon">🎉</span>
                <h3>Application Submitted!</h3>
                <p>Thank you for applying for the <strong>{applyJob.title}</strong> position. Our hiring team will review your application and contact you via email or WhatsApp within 3 business days.</p>
                <button className="btn btn-primary" onClick={() => setApplyJob(null)}>Close Window</button>
              </div>
            ) : (
              <>
                <h3>Apply for {applyJob.title}</h3>
                <p className="modal-subtitle">{applyJob.department} · {applyJob.location}</p>

                <form className="careers-apply-form" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <label>
                      Full Name *
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </label>
                    <label>
                      Email Address *
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </label>
                  </div>

                  <div className="form-row">
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
                      Resume Link (GDrive/Dropbox) *
                      <input
                        type="url"
                        required
                        value={formData.resume}
                        onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                        placeholder="https://drive.google.com/..."
                      />
                    </label>
                  </div>

                  <label>
                    Portfolio or GitHub Link (Optional)
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      placeholder="https://github.com/..."
                    />
                  </label>

                  <label>
                    Brief Cover Note
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us why you are a great fit for KORVEX..."
                    />
                  </label>

                  <button className="btn btn-primary full-width-btn" type="submit">Submit Application</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
