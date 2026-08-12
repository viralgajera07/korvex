import { useState } from 'react';

export function Blog() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Dev', 'Paid Ads', 'Strategy'];

  const posts = [
    {
      id: 1,
      title: 'Why Fast Load Times are the Secret to 2x E-Commerce Conversion Rates',
      category: 'Web Dev',
      readTime: '5 min read',
      date: 'July 10, 2026',
      author: 'Viral Gajera',
      authorRole: 'Head of Engineering',
      featured: true,
      summary: 'Every millisecond of latency costs sales. Explore how custom code, asset optimization, and edge hosting turn bounces into completed checkout orders.',
      coverGradient: 'linear-gradient(135deg, #0b1329 0%, #1e293b 100%)',
      content: (
        <>
          <p className="article-intro">In modern e-commerce, speed is not just a technical specification; it is your ultimate conversion driver. Multiple studies indicate that a website loading in 1 second has a conversion rate 3x higher than a site loading in 5 seconds.</p>
          
          <div className="takeaway-box">
            <strong>Key Takeaway:</strong> A 100ms delay in page load time can hurt conversion rates by 7%. Custom-coded React setups eliminate server-side bloat and keep load speeds under 0.5s.
          </div>

          <h3>1. The Real Cost of Latency</h3>
          <p>When a page takes longer than 3 seconds to render on a mobile device, over 53% of users bounce. That means you are spending hard-earned money on Meta Ads or Google Search to attract high-intent visitors, only to lose them before they even view your products.</p>

          <h3>2. Why Shopify Templates and WordPress Suffer</h3>
          <p>Traditional themes are bloated with redundant CSS, heavy JavaScript libraries, and third-party tracking scripts. While plugins offer quick convenience, they add dozens of server round-trips that drag down your page speed and Google Core Web Vitals score.</p>

          <h3>3. KORVEX Speed Strategies</h3>
          <ul>
            <li><strong>Headless Architecture:</strong> Decouple your front-end using React and Vite, serving static assets via global CDNs.</li>
            <li><strong>Next-Gen Image Compression:</strong> Automatically convert image files to WebP or AVIF formats with responsive srcset sizes.</li>
            <li><strong>Code Splitting & Lazy Loading:</strong> Only load the specific Javascript needed for the active page, deferring non-essential scripts.</li>
          </ul>

          <blockquote className="article-quote">
            "Performance engineering is the highest ROI marketing strategy you can implement because it lowers CPA across every active traffic channel."
          </blockquote>

          <h3>4. Actionable Steps for Growth Brands</h3>
          <p>Audit your site with Google PageSpeed Insights. If your mobile performance score is under 80, prioritizing front-end clean-up will immediately lower your customer acquisition cost (CAC).</p>
        </>
      )
    },
    {
      id: 2,
      title: 'How to Optimize Your Facebook Ad Budget for Creative Testing',
      category: 'Paid Ads',
      readTime: '6 min read',
      date: 'July 05, 2026',
      author: 'Rohan Sharma',
      authorRole: 'Growth Strategist',
      featured: false,
      summary: 'Stop guessing which ad graphic works. Learn how to structure sandbox testing campaigns to discover winning ad hooks without wasting budget.',
      coverGradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
      content: (
        <>
          <p className="article-intro">The single biggest factor determining ad performance today is the creative asset. With Meta’s targeting algorithm becoming automated, your copywriting and visual hooks are what select your customers.</p>
          
          <div className="takeaway-box">
            <strong>Key Takeaway:</strong> Run a separate "Creative Sandbox" campaign with dynamic asset options before moving top-performing Post IDs into primary scaling budgets.
          </div>

          <h3>1. The Sandbox Testing Structure</h3>
          <p>Never test unproven creatives inside your active scaling campaigns. Create a dedicated Sandbox campaign with a modest budget. Use dynamic creative inputs (3 graphics, 2 headlines, 2 primary text options) to let Meta's algorithm isolate the winning combination.</p>

          <h3>2. Identifying the Hook Rate</h3>
          <p>Measure success by the "3-Second Video Play Rate" divided by total impressions (Hook Rate). If your video hook is below 35%, your opening 3 seconds are weak and need immediate revision, regardless of whether the ad generated accidental sales.</p>

          <h3>3. Moving Winners to Scale</h3>
          <p>Once an ad concept proves itself in the sandbox with stable Cost-Per-Acquisition (CPA), import the exact post ID into your primary scaling CBO campaign to preserve existing social proof (likes, comments, shares).</p>
        </>
      )
    },
    {
      id: 3,
      title: 'React vs. WordPress: Which Technology Stack Fits Your Growth Stage?',
      category: 'Strategy',
      readTime: '4 min read',
      date: 'June 28, 2026',
      author: 'Viral Gajera',
      authorRole: 'Head of Engineering',
      featured: false,
      summary: 'Analyze performance, scalability, security vulnerabilities, and long-term maintenance costs of page builders vs. custom React codebases.',
      coverGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      content: (
        <>
          <p className="article-intro">Choosing the technology stack for your website is a long-term business decision that affects security, scalability, search rankings, and conversion capabilities.</p>
          
          <h3>WordPress & Page Builders: The Traditional Choice</h3>
          <p>Ideal for basic content publishers, blogs, and simple business cards where non-technical staff make daily text edits without developer assistance. However, it is inherently vulnerable to security exploits and plugin conflicts.</p>

          <h3>React & Modern Front-Ends: The Custom Powerhouse</h3>
          <p>React is engineered for dynamic web apps, portals, SaaS platforms, and high-converting e-commerce checkouts. It compiles into static assets, meaning there is no database for attackers to exploit, and page navigation is instant.</p>

          <div className="takeaway-box">
            <strong>Recommendation:</strong> If your website is your main customer acquisition engine, invest in a custom React platform. For simple brochure sites, standard CMS builders suffice.
          </div>
        </>
      )
    },
    {
      id: 4,
      title: 'The E-Commerce Checkout Audit: 5 Friction Points Destroying Revenue',
      category: 'Web Dev',
      readTime: '7 min read',
      date: 'June 20, 2026',
      author: 'Priya Mehta',
      authorRole: 'UI/UX Lead',
      featured: false,
      summary: 'Eliminate surprise fees, multi-page redirects, and mandatory account creations to recover up to 30% of abandoned shopping carts.',
      coverGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      content: (
        <>
          <p className="article-intro">Cart abandonment is the silent killer of e-commerce margins. By optimizing your checkout funnel, you turn existing site traffic into instant revenue without increasing ad spend.</p>
          
          <h3>1. Mandatory Account Registration</h3>
          <p>Requiring users to create a password and confirm email prior to purchasing causes immediate drop-off. Offer a seamless One-Click Guest Checkout option by default.</p>

          <h3>2. Unexpected Shipping & Tax Charges</h3>
          <p>Surprise costs at the final payment step cause over 48% of cart abandonments. Display estimated taxes and shipping costs directly on the product detail page or cart drawer.</p>

          <h3>3. Mobile Payment Friction</h3>
          <p>Integrate Apple Pay, Google Pay, and instant UPI payment buttons at the top of the payment screen to enable 1-tap checkout on smartphones.</p>
        </>
      )
    },
    {
      id: 5,
      title: 'High-Intent Search Campaigns for Local Businesses & Service Clinics',
      category: 'Paid Ads',
      readTime: '5 min read',
      date: 'June 14, 2026',
      author: 'Rohan Sharma',
      authorRole: 'Growth Strategist',
      featured: false,
      summary: 'Capture ready-to-buy local buyers using exact-match keyword groups, call extensions, and dedicated instant consultation funnels.',
      coverGradient: 'linear-gradient(135deg, #134e4a 0%, #0f766e 100%)',
      content: (
        <>
          <p className="article-intro">Local service businesses don't need millions of impressions; they need direct phone calls and qualified appointment bookings from customers in their service area.</p>

          <h3>1. Exact Match vs. Broad Match Search</h3>
          <p>Broad match search keywords often drain budget on irrelevant queries. Focus your budget on high-intent exact match keywords paired with strict negative keyword lists.</p>

          <h3>2. Dedicated Landing Pages vs. Homepage</h3>
          <p>Never send paid Google Search ad traffic to your home page. Direct users to a hyper-specific landing page that answers their exact problem with a clear 30-second booking form.</p>
        </>
      )
    },
    {
      id: 6,
      title: 'Conversion Copywriting Secrets: Turning Features into Emotional Drivers',
      category: 'Strategy',
      readTime: '6 min read',
      date: 'June 02, 2026',
      author: 'Priya Mehta',
      authorRole: 'UI/UX Lead',
      featured: false,
      summary: 'Learn how to write headlines, subheadings, and call-to-action buttons that address customer objections and inspire immediate action.',
      coverGradient: 'linear-gradient(135deg, #311b92 0%, #4527a0 100%)',
      content: (
        <>
          <p className="article-intro">Design attracts the eye, but copy sells the transformation. Learn the psychological framework behind high-converting digital copy.</p>

          <h3>1. Feature vs. Benefit vs. Transformation</h3>
          <p>Instead of stating "We build 0.4s fast websites" (Feature), state "Get 2x More Sales From Your Ad Traffic" (Transformation). Focus on the business result your client desires.</p>

          <h3>2. Overcoming Objections Above the Fold</h3>
          <p>Address fear, risk, and doubt directly in your hero subheadline. Include trust badges, money-back guarantees, or real client metrics to eliminate hesitancy.</p>
        </>
      )
    }
  ];

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  const filteredPosts = filter === 'All'
    ? posts
    : posts.filter((post) => post.category === filter);

  return (
    <div className="blog-page reveal visible">
      {/* Subpage Header */}
      <div className="blog-header text-center">
        <span className="pill">Insights &amp; Growth Playbooks</span>
        <h1>Growth Marketing &amp; Web Engineering Insights</h1>
        <p className="lead-text">
          Actionable frameworks, code optimizations, and performance ad strategies straight from the KORVEX engineering team.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="filter-nav-container">
        <div className="filter-nav text-center">
          {categories.map((cat) => {
            const count = cat === 'All' ? posts.length : posts.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {cat} <span className="filter-count">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Post Spotlight (When 'All' filter is active) */}
      {filter === 'All' && featuredPost && (
        <section className="featured-blog-spotlight">
          <article 
            className="featured-post-card glass-card"
            onClick={() => setActiveArticle(featuredPost)}
          >
            <div className="featured-post-badge">⭐ Spotlight Article</div>
            <div className="featured-post-grid">
              <div className="featured-post-content">
                <div className="bp-meta">
                  <span className="bp-cat">{featuredPost.category}</span>
                  <span className="bp-date">{featuredPost.date}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p className="featured-summary">{featuredPost.summary}</p>
                <div className="featured-author-row">
                  <div className="author-avatar">{featuredPost.author.charAt(0)}</div>
                  <div className="author-info">
                    <strong>{featuredPost.author}</strong>
                    <span>{featuredPost.authorRole}</span>
                  </div>
                  <span className="bp-time-pill">{featuredPost.readTime}</span>
                </div>
                <div className="featured-action">
                  <span className="btn btn-primary small">Read Full Guide →</span>
                </div>
              </div>
              <div className="featured-post-visual" style={{ background: featuredPost.coverGradient }}>
                <div className="visual-graphic-glow"></div>
                <div className="visual-card-mock">
                  <span className="mock-tag">KORVEX Case Insight</span>
                  <span className="mock-title">0.4s Speed Target</span>
                  <span className="mock-metric">+240% Conversions</span>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Main Blog Cards Grid */}
      <section className="blog-grid-section">
        <h3 className="section-subheading">
          {filter === 'All' ? 'Latest Articles & Guides' : `${filter} Articles`}
        </h3>
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="info-card blog-post-card"
              onClick={() => setActiveArticle(post)}
            >
              <div className="bp-card-banner" style={{ background: post.coverGradient }}>
                <span className="bp-cat-badge">{post.category}</span>
                <span className="bp-read-time">{post.readTime}</span>
              </div>
              <div className="bp-card-body">
                <div className="bp-meta">
                  <span className="bp-date">{post.date}</span>
                  <span className="bp-author">{post.author}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="bp-summary">{post.summary}</p>
              </div>
              <div className="bp-footer">
                <span className="bp-author-role">{post.authorRole}</span>
                <span className="bp-link">Read Article →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Article Detail Modal / Reader */}
      {activeArticle && (
        <div className="modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="modal-content glass-card blog-reader-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveArticle(null)} aria-label="Close modal">×</button>
            <div className="blog-reader-header">
              <div className="reader-meta-row">
                <span className="pill">{activeArticle.category}</span>
                <span className="bp-time-header">{activeArticle.readTime} · {activeArticle.date}</span>
              </div>
              <h2>{activeArticle.title}</h2>
              <div className="reader-author-bar">
                <div className="author-avatar">{activeArticle.author.charAt(0)}</div>
                <div>
                  <strong>{activeArticle.author}</strong>
                  <span className="author-sub">{activeArticle.authorRole} at KORVEX</span>
                </div>
              </div>
            </div>
            <hr className="blog-divider" />
            <div className="blog-reader-body">
              {activeArticle.content}
            </div>
            <div className="blog-reader-footer text-center">
              <h4>Ready to apply these strategies to your brand?</h4>
              <p>Let's audit your site performance or design a high-converting Meta ad funnel for your business.</p>
              <div className="footer-modal-actions">
                <a href="#contact" className="btn btn-primary" onClick={() => setActiveArticle(null)}>
                  Get Free Consultation
                </a>
                <a href="https://wa.me/917041457314" target="_blank" rel="noreferrer" className="btn btn-outline">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

