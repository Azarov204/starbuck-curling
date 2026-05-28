import HeroLogo from "../../components/Hero/HeroLogo";
import Contact from "../../components/Contact/Contact";
import Poster from "../../components/Poster/Poster.jsx";
import Sponsors from "../../components/Sponsors/Sponsors.jsx";
import SlideShow from "../../components/SlideShow/SlideShow.jsx";
import bg from "../../assets/heros/image_2_crop.jpg";
import logo from "../../assets/logos/starbuck_1.png";
import poster from "../../assets/posters/poster.png";

import beer from "../../assets/photos/IMG_5257.jpg";
import bar from "../../assets/photos/IMG_5333.jpg";
import pitcher from "../../assets/photos/IMG_5352.jpg";
import glow from "../../assets/photos/IMG_7960.jpg";
import beerPourer from "../../assets/photos/IMG_8064.jpg";

const images = [
  {
    url: beer,
    alt: "Beer",
  },
  {
    url: bar,
    alt: "Grant behind bar",
  },
  {
    url: pitcher,
    alt: "Pitcher of beer",
  },
  {
    url: glow,
    alt: "Glow Curling",
  },
  {
    url: beerPourer,
    alt: "Beer thingy",
  },
]

const Home = () => {
  return (
    <>
      <HeroLogo backgroundImage={bg} logo={logo}></HeroLogo>
      <div>
        <div className="mx-auto max-w-5xl px-16 pb-12">
          <h4 className="flex justify-center font-bold pb-4">
            Welcome to the Starbuck Curling Club!
          </h4>
          <h6 className="text-center py-2">
            We’re a small-town club in Starbuck, Manitoba where community comes first.
            Home of Ernie’s bar, our strong sense of camaraderie makes for fun,
            competitive, and welcoming men’s and ladies’ leagues throughout the season.
          </h6>
          <h6 className="text-center">
            We also offer league play, open curling nights, bonspiels and glow curling.
            If you’d like to book the ice or inquire about our different curling leagues,
            please contact us, we’d love to have you join us.
          </h6>
        </div>
      </div>
      <Poster image={poster}/>
      <SlideShow images={images}/>
      <Sponsors/>
      <Contact/>
    </>
  );
};

export default Home;
