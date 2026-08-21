import { useState } from 'react';
import { PhoneInput } from '../components/PhoneInput';

export function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyJob, setApplyJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', portfolio: '', resume: '', message: '' });

  const jobs = [
    {
      title: 'UI/UX Designer (Fresher)',
      department: 'Design',
      location: 'Remote (India) / Surat',
      type: 'Full-time',
      desc: 'Create modern, user-friendly UI/UX designs for web and mobile applications.',
      responsibilities: [
        'Design website banners and social media creatives, including Instagram posts.',
        'Create modern, user-friendly UI/UX designs for web and mobile applications.',
        'Collaborate with the development team to deliver visually appealing digital experiences.'
      ],
      requirements: [
        'Basic knowledge of Figma, Adobe Photoshop, or Adobe Illustrator.',
        'A strong sense of design, typography, color theory, and layout.',
        'Creativity, attention to detail, and a willingness to learn.',
        'Freshers are encouraged to apply.'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote (India) / Surat',
      type: 'Full-time',
      desc: 'Develop and maintain full-stack React-based web applications.',
      responsibilities: [
        'Develop and maintain full-stack web applications.',
        'Build responsive user interfaces and scalable backend systems.',
        'Integrate APIs, databases, and third-party services.',
        'Collaborate with designers and other developers to deliver high-quality solutions.'
      ],
      requirements: [
        'Strong knowledge of React.js, Node.js, Express.js, and MongoDB.',
        'Experience with REST APIs, Git, and modern JavaScript (ES6+).',
        'Understanding of responsive design, performance optimization, and clean coding practices.',
        'Strong problem-solving and communication skills.'
      ]
    },
    {
      title: 'PHP Developer',
      department: 'Engineering',
      location: 'Surat Office',
      type: 'Full-time',
      desc: 'Develop, maintain, and optimize PHP/Laravel-based web applications.',
      responsibilities: [
        'Develop, maintain, and optimize PHP-based web applications.',
        'Build and integrate APIs, databases, and backend functionality.',
        'Troubleshoot, debug, and improve application performance.',
        'Work closely with the development team to deliver reliable and scalable solutions.'
      ],
      requirements: [
        'Strong knowledge of PHP and MySQL.',
        'Experience with frameworks such as Laravel or CodeIgniter is preferred.',
        'Understanding of HTML, CSS, JavaScript, and REST APIs.',
        'Familiarity with Git and modern web development practices.',
        'Strong analytical and problem-solving skills.'
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
        <h1>Build the future of digital engineering with KORVEX.</h1>
        <p className="lead-text">
          We want individuals who are passionate about writing clean code, building responsive interfaces, and driving growth metrics.
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
                <p>Thank you for applying for the <strong>{applyJob.title}</strong> position. Our engineering team will review your application and contact you via email or WhatsApp within 3 business days.</p>
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
