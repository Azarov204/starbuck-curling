import HeroLogo from "../../components/Hero/HeroLogo";
import Contact from "../../components/Contact/Contact";
import Sponsors from "../../components/Sponsors/Sponsors.jsx";
import Poster from "../../components/Poster/Poster.jsx";
import bg from "../../assets/images/image_2_crop.jpg";
import logo from "../../assets/logos/starbuck_1.png";
import poster from "../../assets/posters/poster.png";

const Home = () => {
  return (
    <>
      <HeroLogo backgroundImage={bg} logo={logo}></HeroLogo>
      <div>
        <Poster image={poster}/>
        <h1>The Starbuck Curling Club has been around for a long long long long long time.</h1>
        <h1>Blah Blah Blah Blah Blah Blah </h1>
        <h1>Blah Blah Blah Blah Blah Blah </h1>
        <h1>Blah Blah Blah Blah Blah Blah </h1>
        <h1>Blah Blah Blah Blah Blah Blah </h1>
      </div>
      <Sponsors/>
      <Contact/>
    </>
  );
};

export default Home;
