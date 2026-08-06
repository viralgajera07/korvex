export function ContactForm() {
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

        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Phone / WhatsApp Number
            <input type="text" placeholder="+91 70414 57314" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Service Interested In
            <select defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Website Development</option>
              <option>E-commerce</option>
              <option>Digital Marketing</option>
              <option>Both</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell us about your project or growth goal..." />
          </label>
          <button className="btn btn-primary" type="submit">Request Consultation</button>
        </form>
      </div>
    </section>
  );
}
