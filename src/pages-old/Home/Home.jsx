import { NavLink } from "react-router-dom";

import HeroLogo from "../../components/Hero/HeroLogo";
import Contact from "../../components/Contact/Contact";
import Sponsors from "../../components/Sponsors/Sponsors.jsx";
import Map from "../../components/Map/Map.jsx";
import TopPageBlurb from "../../components/TopPageBlurb.jsx";
import bg from "../../assets/heros/image_2_crop.jpg";
import logo from "../../assets/logos/starbuck_1.png";
import { PageHero } from "../../components/PageHero.jsx";
import { SectionTitle } from "../../components/SectionTitle.jsx";

// import beer from "../../assets/photos/IMG_5257.jpg";
// import bar from "../../assets/photos/IMG_5333.jpg";
// import pitcher from "../../assets/photos/IMG_5352.jpg";
// import glow from "../../assets/photos/IMG_7960.jpg";
// import beerPourer from "../../assets/photos/IMG_8064.jpg";

// const images = [
//   {
//     url: beer,
//     alt: "Beer",
//   },
//   {
//     url: bar,
//     alt: "Grant behind bar",
//   },
//   {
//     url: pitcher,
//     alt: "Pitcher of beer",
//   },
//   {
//     url: glow,
//     alt: "Glow Curling",
//   },
//   {
//     url: beerPourer,
//     alt: "Beer thingy",
//   },
// ];

const Home = () => {
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
              We’re a small-town club in Starbuck, Manitoba where community
              comes first. Home of Ernie’s bar, our strong sense of camaraderie
              makes for fun, competitive, and welcoming men’s and ladies’
              leagues throughout the season.
            </p>
            <p>
              Home of Ernie's bar, we offer league play, open curling nights, bonspiels and glow
              curling. If you’d like to book the ice or inquire about our
              different curling leagues, please contact us, we’d love to have
              you join us.
            </p>
            <NavLink
              to="/leagues"
              className="hover:text-header-text-hover-dark"
            >
              Leagues
            </NavLink>
          </div>
        </div>
      </section>
      <Sponsors />
      <Contact />
      <Map />
    </>
  );
};

export default Home;
