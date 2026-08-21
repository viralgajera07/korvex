import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export function Legal() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active tab based on current pathname
  const getTabFromPath = (path) => {
    if (path.includes('privacy')) return 'privacy';
    if (path.includes('refund')) return 'refund';
    if (path.includes('security')) return 'security';
    return 'terms'; // default
  };

  const [activeTab, setActiveTab] = useState(() => getTabFromPath(location.pathname));
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state when URL pathname changes
  useEffect(() => {
    setActiveTab(getTabFromPath(location.pathname));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleTabChange = (tabId, routePath) => {
    setActiveTab(tabId);
    navigate(routePath);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="legal-page reveal visible">
      {/* Hero Header */}
      <div className="legal-header text-center">
        <span className="pill">KORVEX Governance &amp; Compliance</span>
        <h1>Legal &amp; Policy Center</h1>
        <p className="lead-text">
          Transparent, fair, and clear guidelines protecting your business, privacy, and infrastructure when working with KORVEX Digital Agency.
        </p>
        <div className="legal-meta-strip">
          <span className="legal-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Last Updated: August 16, 2026
          </span>
          <span className="legal-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            Applies to all KORVEX Services &amp; Clients
          </span>
          <button className="legal-print-btn" onClick={handlePrint} title="Print Document">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            Print / Save PDF
          </button>
        </div>
      </div>

      <div className="legal-container">
        {/* Navigation Sidebar */}
        <aside className="legal-sidebar">
          <div className="sidebar-sticky-card glass-card">
            <h3 className="sidebar-title">Policies &amp; Agreements</h3>
            <nav className="legal-nav-tabs">
              <button
                className={`legal-nav-btn ${activeTab === 'terms' ? 'active' : ''}`}
                onClick={() => handleTabChange('terms', '/terms-of-service')}
              >
                <span className="nav-icon">📜</span>
                <div className="nav-btn-content">
                  <span className="nav-btn-title">Terms of Service</span>
                  <span className="nav-btn-desc">Service agreements &amp; rights</span>
                </div>
              </button>

              <button
                className={`legal-nav-btn ${activeTab === 'privacy' ? 'active' : ''}`}
                onClick={() => handleTabChange('privacy', '/privacy-policy')}
              >
                <span className="nav-icon">🔒</span>
                <div className="nav-btn-content">
                  <span className="nav-btn-title">Privacy Policy</span>
                  <span className="nav-btn-desc">Data protection &amp; cookies</span>
                </div>
              </button>

              <button
                className={`legal-nav-btn ${activeTab === 'refund' ? 'active' : ''}`}
                onClick={() => handleTabChange('refund', '/refund-policy')}
              >
                <span className="nav-icon">💳</span>
                <div className="nav-btn-content">
                  <span className="nav-btn-title">Refund Policy</span>
                  <span className="nav-btn-desc">Deposits, retains &amp; refunds</span>
                </div>
              </button>

              <button
                className={`legal-nav-btn ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => handleTabChange('security', '/security-uptime')}
              >
                <span className="nav-icon">🛡️</span>
                <div className="nav-btn-content">
                  <span className="nav-btn-title">Security &amp; Uptime</span>
                  <span className="nav-btn-desc">99.9% SLA, backups &amp; safety</span>
                </div>
              </button>
            </nav>

            <div className="sidebar-contact-box">
              <div className="sc-icon">📧</div>
              <h4>Legal Inquiries</h4>
              <p>Questions about our contract terms or privacy standards?</p>
              <a href="mailto:help.korvex@gmail.com" className="sc-email">help.korvex@gmail.com</a>
              <Link to="/contact" className="sc-link-btn">Contact Us Page &rarr;</Link>
            </div>
          </div>
        </aside>

        {/* Policy Content Area */}
        <main className="legal-content-main glass-card">
          {/* Quick Search inside document */}
          <div className="legal-search-bar">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input
              type="text"
              placeholder="Search keyword in this policy (e.g. deposit, cookies, uptime, source code)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>

          {/* TAB 1: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <article className="policy-doc">
              <div className="doc-badge">Official Agreement</div>
              <h2>Terms of Service</h2>
              <p className="doc-intro">
                Welcome to KORVEX Digital Agency ("KORVEX", "we", "us", or "our"). These Terms of Service govern your access to and use of our website, web development services, custom e-commerce software, Meta/Google ad campaign management, and digital marketing consulting. By entering into an agreement with KORVEX or using our website, you agree to comply with these terms.
              </p>

              <div className="highlight-callout">
                <span className="callout-icon">💡</span>
                <div>
                  <strong>Key Takeaway:</strong> We build digital products under clear milestones. Code ownership transitions to the client upon full payment. We maintain strict confidentiality and expect timely feedback and asset provisions.
                </div>
              </div>

              <section className="doc-section">
                <h3>1. Services &amp; Scope of Work</h3>
                <p>
                  KORVEX provides customized web development, UI/UX design, e-commerce building, Meta and Google Ads execution, SEO optimization, and web application maintenance. Specific deliverables, project scope, timelines, and costs are detailed in the official Proposal or Statement of Work (SOW) provided prior to project kickoff.
                </p>
                <ul>
                  <li>Any requests outside the defined SOW will be billed separately at our standard hourly development rate or via a mutual written addendum.</li>
                  <li>Timelines provided are estimates based on timely receipt of client assets (branding guidelines, copy, images, API keys).</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>2. Client Responsibilities &amp; Content</h3>
                <p>
                  To ensure project timelines are met, clients agree to provide necessary text copy, logo assets, credentials, and feedback in a timely manner.
                </p>
                <ul>
                  <li>The client warrants that all text, graphics, trademarks, and content supplied to KORVEX are owned by the client or used with legal permission.</li>
                  <li>KORVEX is not liable for copyright infringement or trademark disputes resulting from materials supplied by the client.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>3. Payment Terms &amp; Milestones</h3>
                <p>
                  Unless otherwise specified in writing:
                </p>
                <ul>
                  <li><strong>Fixed Web Projects:</strong> Require a 50% initial deposit prior to project initiation, with the remaining 50% due upon staging completion and prior to final source code deployment/domain transfer.</li>
                  <li><strong>Retainers &amp; Monthly Services (Ads/SEO):</strong> Billed strictly in advance at the start of each monthly billing cycle.</li>
                  <li>Invoices not paid within 14 calendar days of due date may incur a 2% late fee per month and temporary suspension of active work.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>4. Intellectual Property &amp; Source Code Ownership</h3>
                <p>
                  Upon final payment of all outstanding invoices, KORVEX transfers full intellectual property ownership of the final front-end and back-end code, assets, and design files created specifically for the project.
                </p>
                <ul>
                  <li>KORVEX retains ownership of pre-existing core frameworks, proprietary utility scripts, and reusable open-source component libraries integrated into the project.</li>
                  <li>KORVEX reserves the right to display the completed work in our digital portfolio, website case studies, and marketing materials unless a strict Non-Disclosure Agreement (NDA) is executed prior.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>5. Revisions &amp; Acceptance Period</h3>
                <p>
                  Standard project fees include up to 2 rounds of design/structural revisions during the staging review phase.
                </p>
                <ul>
                  <li>Clients receive a 7-day acceptance window upon delivery of the staging site to report bugs or alignment fixes according to specifications.</li>
                  <li>Structural or logic changes requested after final sign-off or after the 7-day acceptance window are subject to additional billing.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>6. Limitation of Liability</h3>
                <p>
                  To the maximum extent permitted by law, KORVEX shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of business profits, data loss, or third-party service interruptions (e.g., ad platform bans, hosting provider downtime, third-party API changes).
                </p>
              </section>

              <section className="doc-section">
                <h3>7. Governing Law &amp; Jurisdiction</h3>
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of India. Any legal disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat, India.
                </p>
              </section>
            </article>
          )}

          {/* TAB 2: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <article className="policy-doc">
              <div className="doc-badge">Data Protection</div>
              <h2>Privacy Policy</h2>
              <p className="doc-intro">
                At KORVEX Digital Agency, protecting your personal data and business confidentiality is fundamental. This Privacy Policy outlines how we collect, store, process, and protect your information when you interact with our website (korvex.in / localhost) or utilize our digital services.
              </p>

              <div className="highlight-callout">
                <span className="callout-icon">🛡️</span>
                <div>
                  <strong>Your Privacy Rights:</strong> We never sell your personal or business data. All form submissions and inquiry data are stored securely and used strictly for communication and project fulfillment.
                </div>
              </div>

              <section className="doc-section">
                <h3>1. Information We Collect</h3>
                <p>We may collect personal and technical information through the following interactions:</p>
                <ul>
                  <li><strong>Contact &amp; Booking Forms:</strong> Name, business email address, phone number, company name, service interest, and consultation time slots selected.</li>
                  <li><strong>Technical Analytics Data:</strong> IP address, device type, browser model, operating system, pages visited, time spent per page, and referral URLs.</li>
                  <li><strong>Client Project Information:</strong> Credentials, domain configurations, ad account IDs, and brand assets shared securely during active engagements.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>2. How We Use Your Data</h3>
                <p>Collected data is used strictly for legitimate business purposes:</p>
                <ul>
                  <li>To process inquiries, provide project quotes, and schedule strategy consultations.</li>
                  <li>To deliver and manage custom web development, ad campaigns, and SEO services.</li>
                  <li>To send project updates, transactional invoices, and essential technical alerts.</li>
                  <li>To analyze site usage and optimize website loading speeds, accessibility, and user experience.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>3. Cookies &amp; Tracking Technologies</h3>
                <p>
                  Our website uses cookies and similar tracking scripts (such as Google Analytics and Meta Pixel) to monitor site traffic and improve visitor experience.
                </p>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for security, navigation, and form submissions.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our pages anonymously.</li>
                  <li>You can choose to disable non-essential cookies via your browser settings at any time without impacting site navigation.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>4. Data Sharing &amp; Third-Party Services</h3>
                <p>
                  We do not sell, rent, or trade your personal data to third parties for marketing purposes. Data is only shared with trusted service providers who assist us in operations under strict confidentiality:
                </p>
                <ul>
                  <li>Cloud hosting &amp; server infrastructure (AWS / Vercel / Netlify)</li>
                  <li>Communication &amp; calendar integrations (WhatsApp API / Google Workspace)</li>
                  <li>Analytics &amp; ad platforms (Google Cloud / Meta Business Manager)</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>5. Data Security &amp; Retention</h3>
                <p>
                  We implement robust industry-standard technical and organizational measures to safeguard your personal data:
                </p>
                <ul>
                  <li>All website traffic is encrypted using 256-bit SSL/TLS protocols.</li>
                  <li>Access to client project data and credentials is restricted on a strict need-to-know basis with multi-factor authentication.</li>
                  <li>Inquiry and contact data is retained only for as long as necessary to fulfill project requirements or legal record-keeping.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>6. Your Data Rights &amp; Requests</h3>
                <p>
                  You have the right to request access to, correction of, or deletion of your personal information held by KORVEX. To exercise any of these rights, please email us directly at <a href="mailto:help.korvex@gmail.com">help.korvex@gmail.com</a>.
                </p>
              </section>
            </article>
          )}

          {/* TAB 3: REFUND POLICY */}
          {activeTab === 'refund' && (
            <article className="policy-doc">
              <div className="doc-badge">Financial Terms</div>
              <h2>Refund Policy</h2>
              <p className="doc-intro">
                KORVEX strives for 100% client satisfaction on every custom project. Because our services involve dedicated engineering hours, strategy, design work, and cloud infrastructure setup, the following refund guidelines govern our project commitments.
              </p>

              <div className="highlight-callout">
                <span className="callout-icon">⚖️</span>
                <div>
                  <strong>Clear &amp; Fair Commitments:</strong> Deposits cover upfront UX research and architectural planning. Full transparency is provided at every milestone sign-off.
                </div>
              </div>

              <section className="doc-section">
                <h3>1. Web Development &amp; Custom Software Projects</h3>
                <ul>
                  <li><strong>Initial Deposit (50%):</strong> Covers project discovery, wireframing, architecture setup, and visual design assets. Deposits are 100% refundable if cancellation is requested in writing within 48 hours of payment and before initial design work commences.</li>
                  <li><strong>During Active Development:</strong> Once wireframes/designs are approved and code implementation begins, the initial deposit is non-refundable as it covers allocated developer resources.</li>
                  <li><strong>Final Balance &amp; Deployment:</strong> After full staging approval and deployment of final source code to the client's server/domain, no refunds will be issued.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>2. Digital Marketing (Meta &amp; Google Ads)</h3>
                <ul>
                  <li><strong>KORVEX Agency Fee:</strong> Monthly campaign management fees are non-refundable once the billing month commences and ad setup/optimization has started.</li>
                  <li><strong>Direct Ad Spend:</strong> Ad budget paid directly to ad platforms (Meta, Google Ads, TikTok Ads) is managed within client-owned ad accounts and is non-refundable by KORVEX. Clients maintain direct control over ad platform account balances.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>3. SEO &amp; Monthly Maintenance Retainers</h3>
                <ul>
                  <li>Retainer services operate on a month-to-month or quarterly basis. Clients may cancel future retainer renewals by providing a written notice 15 days prior to the next billing cycle date.</li>
                  <li>Partial refunds are not issued for unused hours within an active monthly billing period.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>4. Project Delays &amp; Inactivity</h3>
                <p>
                  If a project is paused or delayed by the client for more than 45 consecutive days due to lack of feedback or missing assets, KORVEX reserves the right to archive the project. A reactivation fee of 15% of the total project value may apply to resume work.
                </p>
              </section>

              <section className="doc-section">
                <h3>5. Requesting a Refund</h3>
                <p>
                  To submit a formal refund or billing inquiry, please email our billing department at <a href="mailto:help.korvex@gmail.com">help.korvex@gmail.com</a> with your invoice number and project details. We process eligible refunds within 5–7 business days via the original payment method.
                </p>
              </section>
            </article>
          )}

          {/* TAB 4: SECURITY & UPTIME */}
          {activeTab === 'security' && (
            <article className="policy-doc">
              <div className="doc-badge">Reliability &amp; Safety</div>
              <h2>Security &amp; Uptime Policy</h2>
              <p className="doc-intro">
                KORVEX builds software and web infrastructure engineered for high availability, enterprise-grade data protection, and top-tier security standards. Here is how we ensure your applications remain fast, safe, and online 24/7/365.
              </p>

              <div className="highlight-callout">
                <span className="callout-icon">⚡</span>
                <div>
                  <strong>Target Uptime: 99.9% SLA</strong>. We deploy applications using modern serverless edge architecture, distributed CDNs, and automated health monitoring.
                </div>
              </div>

              <section className="doc-section">
                <h3>1. Infrastructure &amp; Hosting Architecture</h3>
                <p>
                  We leverage global high-performance cloud providers (Vercel, AWS, Cloudflare, DigitalOcean) to deliver lightning-fast response times and high availability:
                </p>
                <ul>
                  <li><strong>Global Edge Network:</strong> Static assets and compiled JavaScript/CSS bundles are cached across 250+ global POP edge nodes for ultra-low latency.</li>
                  <li><strong>Automated SSL/TLS:</strong> HTTPS encryption with TLS 1.3 is enforced across all client websites and web applications automatically.</li>
                  <li><strong>DDOS Protection:</strong> Cloudflare enterprise DDoS mitigation filters malicious traffic before reaching your application server.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>2. Security Best Practices &amp; Code Hygiene</h3>
                <p>Every web project engineered by KORVEX undergoes rigorous security checks:</p>
                <ul>
                  <li><strong>OWASP Top 10 Mitigation:</strong> Protection against Cross-Site Scripting (XSS), SQL Injection (SQLi), Cross-Site Request Forgery (CSRF), and unauthorized API access.</li>
                  <li><strong>Sanitization &amp; Validation:</strong> Strict server-side and client-side input validation on all forms and data endpoints.</li>
                  <li><strong>Dependency Auditing:</strong> Regular automated security scanning of Node modules and NPM dependencies to patch vulnerabilities proactively.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>3. Backup Protocols &amp; Data Recovery</h3>
                <p>For client web applications hosted or maintained under KORVEX care:</p>
                <ul>
                  <li>Daily automated off-site database backups with 30-day point-in-time retention.</li>
                  <li>Git version control for all source code repositories allowing instant rollback to previous stable versions in the event of an outage or bug.</li>
                  <li>Automated snapshot recovery ensuring minimal recovery time objective (RTO &lt; 1 hour).</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>4. Access Control &amp; Credential Vaulting</h3>
                <ul>
                  <li>Client credentials, API keys, and environment variables are stored in encrypted secret vaults (e.g., AWS Secrets Manager / Vercel Vault).</li>
                  <li>Multi-Factor Authentication (MFA) is strictly mandated across all internal KORVEX developer access points.</li>
                  <li>Third-party platform access is requested via delegated partner permissions (e.g., Meta Business Manager Partner access) without asking clients to share raw passwords.</li>
                </ul>
              </section>

              <section className="doc-section">
                <h3>5. System Status &amp; Incident Escalation</h3>
                <p>
                  We continuously monitor application endpoints 24/7. In the rare event of server degradation:
                </p>
                <ul>
                  <li>Our technical team receives instant SMS and Slack alerts for quick response times.</li>
                  <li>Priority maintenance clients receive direct phone and WhatsApp response support for critical system outages.</li>
                </ul>
              </section>
            </article>
          )}

          {/* Bottom Help Banner */}
          <div className="legal-bottom-help">
            <div className="lbh-content">
              <h3>Have questions regarding our policies?</h3>
              <p>Our team is available to assist with contract clarifications, security questionnaires, or privacy data requests.</p>
            </div>
            <div className="lbh-actions">
              <a href="mailto:help.korvex@gmail.com" className="btn btn-secondary">Email Support</a>
              <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
