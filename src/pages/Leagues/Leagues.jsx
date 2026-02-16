import HeroText from "../../components/Hero/HeroText";
import image from "../../assets/heros/image_2_crop.jpg";
import Contact from "../../components/Contact/Contact.jsx";

const Leagues = () => {
  return (
    <>
      <HeroText
        backgroundImage={image}
        title="Leagues"
        description="Different Leagues we offer at the Starbuck Curling Club"
      />
      <div className="container">
        <h1 className="mx-auto max-w-7xl px-12 text-2xl">Men's League</h1>
        <h1 className="mx-auto max-w-7xl p-12 text-2xl">Women's League</h1>
      </div>
      <Contact/>
    </>
  );
};
export default Leagues;
