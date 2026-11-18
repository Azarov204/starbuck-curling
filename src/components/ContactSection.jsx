import { useState } from "react";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection({ showMap = false }) {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-shell contact-grid">
        <div className="contact-copy">
          <span className="eyebrow light">Get in touch</span>
          <h2>Let’s talk curling.</h2>
          <p>
            Questions about leagues, rentals, or trying curling for the first
            time? Send us a note and a club volunteer will get back to you.
          </p>
          <div className="contact-details">
            <a
              href="https://maps.google.com/?q=Starbuck+Curling+Club+Manitoba"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={20} />
              <span>
                10 Arena Road
                <br />
                Starbuck, MB R0G 2P0
              </span>
            </a>
            <a href="tel:+12047354344">
              <Phone size={20} />
              <span>(204) 735-4344</span>
            </a>
            <a href="mailto:hello@starbuckcurlingclub.ca">
              <Mail size={20} />
              <span>hello@starbuckcurlingclub.ca</span>
            </a>
            <div>
              <Clock3 size={20} />
              <span>Club hours vary by league &amp; event</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="field-row">
            <label>
              Full name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                required
                placeholder="you@email.com"
              />
            </label>
          </div>
          <div className="field-row">
            <label>
              Subject
              <input name="subject" required placeholder="How can we help?" />
            </label>
            <label>
              Phone <span>(optional)</span>
              <input name="phone" type="tel" placeholder="(204) 000-0000" />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us a little more..."
            />
          </label>
          <button className="button button--red" type="submit">
            Send message <ArrowRight size={17} />
          </button>
          {sent && (
            <p className="form-success" role="status">
              Thanks! Your message has been received.
            </p>
          )}
        </form>
      </div>
      {showMap && (
        <div className="map-wrap">
          <iframe
            title="Map of Starbuck Curling Club"
            src="https://www.google.com/maps?q=Starbuck+Curling+Club,+Starbuck,+Manitoba&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </section>
  );
}
