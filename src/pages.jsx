import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Download,
  Users,
  X,
} from "lucide-react";
import { ContactSection } from "./components/ContactSection.jsx";
import { PageHero } from "./components/PageHero.jsx";
import { SectionTitle } from "./components/SectionTitle.jsx";

export function SponsorDialog({ onClose }) {
  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="poster"
        role="dialog"
        aria-modal="true"
        aria-labelledby="poster-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="dialog-close"
          onClick={onClose}
          aria-label="Close poster"
        >
          <X size={20} />
        </button>
        <span className="eyebrow">2025–26 season</span>
        <h2 id="poster-title">
          Put your business
          <br />
          on our ice.
        </h2>
        <p>
          Support local sport, bring neighbours together, and put your brand in
          front of our community all season.
        </p>
        <div className="poster-tiers">
          <strong>Platinum · $1,500</strong>
          <span>In-ice logo, lounge sign &amp; web recognition</span>
          <strong>Gold · $750</strong>
          <span>Prominent club signage &amp; web recognition</span>
          <strong>Silver · $350</strong>
          <span>Club signage &amp; sponsor listing</span>
        </div>
        <a
          className="button button--red"
          href="mailto:sponsors@starbuckcurlingclub.ca?subject=Sponsorship inquiry"
        >
          Become a sponsor <ArrowRight size={17} />
        </a>
        <button className="print-link" onClick={() => window.print()}>
          <Download size={16} /> Print this poster
        </button>
      </div>
    </div>
  );
}

const leagueCards = [
  {
    title: "Men’s League",
    day: "Tuesday evenings",
    copy: "A competitive-but-friendly weekly draw for curlers of all experience levels. Enter as a team or ask us about finding one.",
    accent: "red",
  },
  {
    title: "Women’s League",
    day: "Thursday evenings",
    copy: "Great curling and an even better social night. New teams and individual players are always welcome.",
    accent: "blue",
  },
  {
    title: "Open Curling",
    day: "Friday evenings",
    copy: "Any combination of players, one relaxed league. Perfect for friends, couples, families, and first-time teams.",
    accent: "cream",
  },
];

export function ScheduleButton({ league }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="button button--outline" onClick={() => setOpen(!open)}>
        <CalendarDays size={17} /> {open ? "Hide schedule" : "View schedule"}
      </button>
      {open && (
        <div className="mini-schedule">
          <strong>Next draws</strong>
          <span>7:00 pm · Teams 1–4</span>
          <span>9:00 pm · Teams 5–8</span>
          <a
            href={`mailto:leagues@starbuckcurlingclub.ca?subject=${encodeURIComponent(league + " schedule")}`}
          >
            Request full schedule
          </a>
        </div>
      )}
    </>
  );
}

export function LeaguesPage() {
  return (
    <>
      <PageHero eyebrow="Play with us" title="Leagues" />
      <section className="section">
        <div className="section-shell split-intro">
          <SectionTitle
            eyebrow="2025–26 season"
            title="Your week just got better."
          />
          <div className="prose">
            <p className="lead">
              Our leagues run from late October through March, with regular
              season play, playoffs, and plenty of chances to sweep, laugh, and
              learn.
            </p>
            <p>
              Registration is open to teams and individuals. Don’t have
              equipment? No problem—we have brooms and sliders available at the
              club.
            </p>
            <div className="info-chips">
              <span>
                <Check size={15} /> All skill levels
              </span>
              <span>
                <Check size={15} /> Equipment available
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section league-section">
        <div className="section-shell">
          <SectionTitle eyebrow="Weekly draws" title="Choose your league." />
          <div className="league-grid">
            {leagueCards.map((league) => (
              <article
                className={`league-card ${league.accent}`}
                key={league.title}
              >
                <div className="league-number">
                  <Users size={22} />
                </div>
                <span className="eyebrow">{league.day}</span>
                <h3>{league.title}</h3>
                <p>{league.copy}</p>
                <ScheduleButton league={league.title} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

const rentalFeatures = [
  "Licensed lounge for up to 90 guests",
  "Four sheets of curling ice",
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
              Our club combines four sheets of well-maintained curling ice with
              a bright upstairs lounge, a full kitchen, and flexible room
              layouts. We’ll help you build a rental that fits your group.
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
              <span>From $125</span>
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

export function NotFoundPage() {
  return (
    <section className="not-found">
      <span className="eyebrow">404</span>
      <h1>That one missed the house.</h1>
      <a className="button button--red" href="/">
        Back to home
      </a>
    </section>
  );
}
