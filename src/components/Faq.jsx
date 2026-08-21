import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Faq() {
  const items = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most business websites take 7–14 days depending on complexity, while e-commerce projects may take 2–4 weeks.'
    },
    {
      question: 'Do you build e-commerce stores too?',
      answer: 'Yes. We build Shopify and custom e-commerce experiences focused on simple checkout, trust, and conversion.'
    },
    {
      question: 'Can you manage my ads if I already have a website?',
      answer: 'Absolutely. We can audit your current site and launch or improve ad campaigns around it.'
    },
    {
      question: 'Do you provide ongoing maintenance/support?',
      answer: 'Yes. We offer maintenance plans, speed optimization, reporting, and growth support after launch.'
    },
    {
      question: 'How do I get started?',
      answer: 'Book a free consultation and share your goals, timeline, and budget. We will guide the next step.'
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section-container reveal">
      <div className="faq-section-wrapper">
        <div className="section-heading text-center">
          <span className="section-label">Questions, Answered</span>
          <h2>Everything you need to know before you begin.</h2>
          <p className="faq-lead-desc">
            Got questions about timelines, process, or support? We've got clear answers to help you get started with confidence.
          </p>
        </div>

        <div className="faq-accordion-grid">
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <article
                key={item.question}
                className={`faq-card-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <div className="faq-icon-pill">
                    <svg
                      className="faq-chevron-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                <div className={`faq-answer-collapse ${isOpen ? 'show' : ''}`}>
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="faq-footer-cta">
          <p>Still have questions? We're here to help.</p>
          <Link to="/contact" className="faq-contact-btn">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

