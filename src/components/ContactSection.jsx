import { useState } from "react";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection({ showMap = false }) {
  const [sent, setSent] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("subject", "New Starbuck Curling Club Website Submission");
    formData.append("access_key", "827456ad-13d2-4dc3-9a5b-688b53c0be56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSent(true);
      setSubmitMsg("Thanks! Your message has been sent.");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setSubmitMsg("Error! Something went wrong.");
    }
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
                60 Arena Blvd
                <br />
                Starbuck, MB R0G 2P0
              </span>
            </a>
            <a href="tel:+12047352463">
              <Phone size={20} />
              <span>(204) 735-2463</span>
            </a>
            <a href="mailto:starbuckmenscurling@gmail.com">
              <Mail size={20} />
              <span>starbuckmenscurling@gmail.com</span>
            </a>
            <div>
              <Clock3 size={20} />
              <span>Club hours vary by league &amp; event</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="field-row">
            {/* Name */}
            <label>
              Full name
              <input name="name" required placeholder="Your name" />
            </label>

            {/* Email */}
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
            {/* Subject */}
            <label>
              Subject
              <input name="subject" required placeholder="How can we help?" />
            </label>

            {/* Phone */}
            <label>
              Phone <span>(optional)</span>
              <input name="phone" type="tel" placeholder="(204) 123-4567" />
            </label>
          </div>

          {/* Message */}
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
              {submitMsg}
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
