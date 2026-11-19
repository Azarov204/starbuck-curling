import { useState } from "react";
import { CalendarDays, Check, Users } from "lucide-react";
import { ContactSection } from "../components/ContactSection.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";

const leagueCards = [
  {
    title: "Men’s League",
    day: "Wednesday and Thursday evenings",
    copy: "A competitive-but-friendly weekly draw for curlers of all experience levels. Enter as a team or ask us about finding one.",
    accent: "red",
  },
  {
    title: "Women’s League",
    day: "TBD evenings",
    copy: "Great curling and an even better social night. New teams and individual players are always welcome.",
    accent: "blue",
  },
  {
    title: "Open Curling",
    day: "TBD",
    copy: "Any combination of players, one relaxed league. Perfect for friends, couples, families, and first-time teams.",
    accent: "cream",
  },
];

export function LeaguePage() {
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
              Our leagues run from November through March, with regular season
              play, playoffs, and plenty of chances to sweep, laugh, and learn.
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
