import { ContactSection } from "../components/ContactSection.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { SectionTitle } from "../components/SectionTitle.jsx";
import { Sponsors } from "../components/Sponsors.jsx";

export function HomePage() {
  return (
    <>
      <PageHero />
      <section className="section welcome">
        <div className="section-shell split-intro">
          <SectionTitle
            eyebrow="Welcome to the club"
            title="Curling belongs to everyone."
          />
          <div className="prose">
            <p className="lead">
              More Than Just Curling — A Community on and off the Ice
            </p>
            <p>
              Located in Starbuck, Manitoba, our curling club is built on
              community, camaraderie, and a shared love of the game. Home of
              Ernie’s Bar, we pride ourselves on creating a welcoming atmosphere
              where curlers of all skill levels can enjoy friendly competition,
              make lasting friendships, and be part of a close-knit community.
            </p>
            <p>
              Whether you're a seasoned curler or picking up a broom for the
              first time, there's something for everyone. We offer regular
              league play, open curling nights, bonspiels, and glow curling.
              Interested in joining a league, booking the ice, or learning more
              about what we offer? Get in touch — we'd love to welcome you to
              the club!
            </p>
            {/* <TextLink href="/leagues">Find your league</TextLink> */}
          </div>
        </div>
      </section>

      <Sponsors />
      <ContactSection showMap />
    </>
  );
}
