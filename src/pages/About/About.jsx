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
        bottomMaskColor={"var(--color-website-bg-1)"}
      />
      <p className="mx-auto max-w-6xl px-16 p-12">
        The Starbuck Curling Club has been around for a long long long long long
        time. More information about the club. We have beer for $5 and popcorn
        and milk...
      </p>
      <Contact />
    </>
  );
};

export default About;
