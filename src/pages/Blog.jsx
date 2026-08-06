import { useState } from 'react';

export function Blog() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Dev', 'Paid Ads', 'Strategy'];

  const posts = [
    {
      title: 'Why Fast Load Times are the Secret to 2x E-Commerce Conversion Rates',
      category: 'Web Dev',
      readTime: '5 min read',
      date: 'July 10, 2026',
      summary: 'Every millisecond of latency costs sales. Explore how custom code and asset optimization turn bounces into completed orders.',
      content: (
        <>
          <p>In modern e-commerce, speed is not just a technical specification; it is your ultimate conversion driver. Multiple studies indicate that a website loading in 1 second has a conversion rate 3x higher than a site loading in 5 seconds.</p>
          <h3>1. The Real Cost of Latency</h3>
          <p>When a page takes longer than 3 seconds to render on a mobile device, over 53% of users bounce. That means you are spending money on Meta Ads or SEO to attract high-intent visitors, only to lose them before they even view your products.</p>
          <h3>2. Why Shopify Templates and WordPress Suffer</h3>
          <p>Traditional themes are bloated with redundant CSS, heavy JavaScript libraries, and third-party tracking scripts. While plugins offer convenience, they add server calls that drag down your page speed.</p>
          <h3>3. KORVEX Speed Strategies</h3>
          <ul>
            <li><strong>Headless Architecture:</strong> Decouple your front-end using React and Vite, serving static assets via global CDNs.</li>
            <li><strong>Image Compression:</strong> Automatically convert image files to WebP or AVIF formats.</li>
            <li><strong>Code Splitting:</strong> Only load the specific Javascript needed for the active page, deferring others.</li>
          </ul>
        </>
      )
    },
    {
      title: 'How to Optimize Your Facebook Ad Budget for Maximizing Creative Testing',
      category: 'Paid Ads',
      readTime: '6 min read',
      date: 'July 05, 2026',
      summary: 'Stop guessing which ad graphic works. Learn how to structure testing campaigns to find winning creatives without wasting budget.',
      content: (
        <>
          <p>The single biggest factor determining ad performance today is the creative asset. With Meta’s targeting algorithm becoming automated, your copywriting and visual hooks are what select your customers.</p>
          <h3>1. The Sandbox Testing Structure</h3>
          <p>Never test new creatives in your active scaling campaigns. Create a dedicated "Creative Sandbox" campaign with a small budget. Use dynamic creative inputs (3 graphics, 2 headlines, 2 primary texts) to let the algorithm find the best combination.</p>
          <h3>2. Identifying the Hook Rate</h3>
          <p>Measure success by the "3-Second Video Play Rate" divided by impressions (Hook Rate). If your video hook is below 35%, your intro hook is weak and needs to be replaced, regardless of whether the ad generated sales.</p>
          <h3>3. Moving Winners to Scale</h3>
          <p>Once an ad concept proves itself in the sandbox with stable Cost-Per-Acquisition (CPA), import the exact post ID into your primary scaling CBO campaign to maintain social proof (likes/comments).</p>
        </>
      )
    },
    {
      title: 'React vs. WordPress: Which Stack is Right for Your Business Website?',
      category: 'Strategy',
      readTime: '4 min read',
      date: 'June 28, 2026',
      summary: 'Analyze the performance, scalability, security, and long-term costs of standard page builders compared to custom code.',
      content: (
        <>
          <p>Choosing the technology stack for your website is a long-term business decision that affects security, scalability, and conversion capabilities.</p>
          <h3>WordPress: The Traditional Choice</h3>
          <p>Ideal for simple content publishers, blogs, and businesses that need in-house staff to make daily text adjustments without developer assistance. However, it is vulnerable to security exploits and requires persistent database backups.</p>
          <h3>React: The Custom Powerhouse</h3>
          <p>React is built for dynamic web apps, portals, and e-commerce checkouts. It compiles into static HTML/JS files, meaning there is no database for hackers to exploit, and loading is near-instantaneous.</p>
          <h3>Our Recommendation</h3>
          <p>If your website is the primary channel for customer acquisition or product interaction, invest in a custom React setup. If it is a basic digital business card with low traffic, WordPress or Webflow is sufficient.</p>
        </>
      )
    }
  ];

  const filteredPosts = filter === 'All' ? posts : posts.filter((post) => post.category === filter);

  return (
    <div className="blog-page reveal visible">
      <div className="blog-header text-center">
        <span className="pill">Insights & Strategies</span>
        <h1>Growth marketing and web engineering insights.</h1>
        <p className="lead-text">
          We share actual strategies and case breakdowns that we use to optimize conversions and scale client budgets.
        </p>
      </div>

      <div className="filter-nav text-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <article 
            key={post.title} 
            className="info-card blog-post-card"
            onClick={() => setActiveArticle(post)}
          >
            <div className="bp-meta">
              <span className="bp-cat">{post.category}</span>
              <span className="bp-date">{post.date}</span>
            </div>
            <h3>{post.title}</h3>
            <p className="bp-summary">{post.summary}</p>
            <div className="bp-footer">
              <span className="bp-time">{post.readTime}</span>
              <span className="bp-link">Read Full Article →</span>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Drawer */}
      {activeArticle && (
        <div className="modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="modal-content glass-card blog-reader-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveArticle(null)}>×</button>
            <div className="blog-reader-header">
              <span className="pill">{activeArticle.category}</span>
              <span className="bp-time-header">{activeArticle.readTime} · {activeArticle.date}</span>
              <h2>{activeArticle.title}</h2>
            </div>
            <hr className="blog-divider" />
            <div className="blog-reader-body">
              {activeArticle.content}
            </div>
            <div className="blog-reader-footer text-center">
              <h4>Want to implement these strategies for your business?</h4>
              <p>Let's map out your growth funnel and custom code requirements.</p>
              <a href="#contact" className="btn btn-primary" onClick={() => setActiveArticle(null)}>
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
