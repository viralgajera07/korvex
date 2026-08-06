import { useState } from 'react';

export function Faq() {
  const items = [
    { question: 'How long does it take to build a website?', answer: 'Most business websites take 7–14 days depending on complexity, while e-commerce projects may take 2–4 weeks.' },
    { question: 'Do you build e-commerce stores too?', answer: 'Yes. We build Shopify and custom e-commerce experiences focused on simple checkout, trust, and conversion.' },
    { question: 'Can you manage my ads if I already have a website?', answer: 'Absolutely. We can audit your current site and launch or improve ad campaigns around it.' },
    { question: 'Do you provide ongoing maintenance/support?', answer: 'Yes. We offer maintenance plans, speed optimization, reporting, and growth support after launch.' },
    { question: 'How do I get started?', answer: 'Book a free consultation and share your goals, timeline, and budget. We will guide the next step.' },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section reveal">
      <div className="section-heading">
        <span className="section-label">Questions, Answered</span>
        <h2>Everything you need to know before you begin.</h2>
      </div>
      <div className="faq-list">
        {items.map((item, index) => (
          <article key={item.question} className={`faq-item ${index === openIndex ? 'open' : ''}`}>
            <button onClick={() => setOpenIndex(index === openIndex ? -1 : index)}>
              <span>{item.question}</span>
              <strong>{index === openIndex ? '−' : '+'}</strong>
            </button>
            {index === openIndex && <p>{item.answer}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
