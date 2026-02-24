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

// const images = [
//   {
//     url: "../../assets/photos/IMG_5257.jpg",
//     alt: "Beer",
//   },
//   {
//     url: "../../assets/photos/IMG_5333.jpg",
//     alt: "Grant behind bar",
//   },
//   {
//     url: "../../assets/photos/IMG_5352.jpg",
//     alt: "Pitcher of beer",
//   },
//   {
//     url: "../../assets/photos/IMG_7960.jpg",
//     alt: "Glow Curling",
//   },
//   {
//     url: "../../assets/photos/IMG_8064.jpg",
//     alt: "Beer thingy",
//   },
// ]


const Home = () => {
  return (
    <>
      <HeroLogo backgroundImage={bg} logo={logo}></HeroLogo>
      <div>
        <Poster image={poster}/>
        <h1 className="mx-auto max-w-7xl p-12 text-2xl">
          The Starbuck Curling Club has been around for a long long long long long time.
        </h1>
      </div>
      <SlideShow images={images}/>
      <Sponsors/>
      <Contact/>
    </>
  );
};

export default Home;
