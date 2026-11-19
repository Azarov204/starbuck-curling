import { ArrowRight } from "lucide-react";
import { ContactSection } from "../components/ContactSection.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";

const rentalFeatures = [
  "Licensed lounge for up to x guests",
  "Three sheets of curling ice",
  "Kitchen and serving area",
  "Tables, chairs, and accessible washrooms",
];

export function FacilityPage() {
  return (
    <>
      <PageHero eyebrow="Gather here" title="Facility & Rentals" />
      <section className="section">
        <div className="section-shell split-intro">
          <SectionTitle
            eyebrow="Our facility"
            title="More than a curling rink."
          />
          <div className="prose">
            <p className="lead">
              A practical, welcoming venue for bonspiels, celebrations,
              meetings, and community events in the heart of Starbuck.
            </p>
            <p>
              Our club combines three sheets of well-maintained curling ice with
              a bright upstairs lounge, Ernie's bar, and flexible room layouts.
              We’ll help you build a rental that fits your group.
            </p>
          </div>
        </div>
      </section>
      <section className="rental-band">
        <div className="section-shell rental-grid">
          <div>
            <span className="eyebrow light">Rent the club</span>
            <h2>Make the space yours.</h2>
            <p>
              From family socials to staff curling nights, our volunteer team
              can help with ice time, lounge access, and the details that make
              an event run smoothly.
            </p>
            <a className="button button--cream" href="#contact">
              Ask about availability <ArrowRight size={17} />
            </a>
          </div>
          <div className="feature-list">
            {rentalFeatures.map((feature, index) => (
              <div key={feature}>
                <span>0{index + 1}</span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section rental-options">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Rental options"
            title="A space for every gathering."
          />
          <div className="option-grid">
            <article>
              <span>From $45</span>
              <h3>Lounge rental</h3>
              <p>
                Birthday parties, showers, meetings, and community gatherings
                with kitchen access.
              </p>
            </article>
            <article>
              <span>Custom quote</span>
              <h3>Ice &amp; lounge</h3>
              <p>
                A complete social curling experience for staff events, family
                groups, and fundraisers.
              </p>
            </article>
            <article>
              <span>Seasonal</span>
              <h3>Bonspiels</h3>
              <p>
                Multi-sheet bookings with flexible lounge access for your
                one-day or weekend event.
              </p>
            </article>
          </div>
          <p className="fine-print">
            Rates are a starting point and may vary by date, duration, and setup
            requirements. Contact us for a current quote.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
