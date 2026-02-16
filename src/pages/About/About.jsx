import HeroText from "../../components/Hero/HeroText";
import image from "../../assets/heros/image_1_crop.jpg";
import Contact from "../../components/Contact/Contact.jsx";

const About = () => {
  return (
    <>
      <HeroText
        backgroundImage={image}
        title="About Us"
        description="Starbuck Curling Club"
      ></HeroText>
      <div className="container">
        <h1 className="mx-auto max-w-7xl p-12 text-2xl">
          The Starbuck Curling Club has been around for a long long long long long time.
          More information about the club. We have beer for $5 and popcorn and milk...
        </h1>
      </div>
      <Contact/>
    </>
  );
};

export default About;
