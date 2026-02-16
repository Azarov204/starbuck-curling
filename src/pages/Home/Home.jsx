import HeroLogo from "../../components/Hero/HeroLogo";
import Contact from "../../components/Contact/Contact";
import Poster from "../../components/Poster/Poster.jsx";
import bg from "../../assets/heros/image_2_crop.jpg";
import logo from "../../assets/logos/starbuck_1.png";
import poster from "../../assets/posters/poster.png";
import Sponsors from "../../components/Sponsors/Sponsors.jsx";

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
      <Sponsors/>
      <Contact/>
    </>
  );
};

export default Home;
