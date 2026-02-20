import Contact from "../../components/Contact/Contact.jsx";
import image from "../../assets/heros/image_1_crop.jpg";
import HeroText from "../../components/Hero/HeroText.jsx";

const Facility = () => {

  return (
    <>
      <HeroText
        backgroundImage={image}
        title="Facility & Rentals"
        description="Rent from us, our ICE wont deport you..."
      />
      <div>
        <p className="mx-auto max-w-7xl p-12">
          Ice rental - $45 per sheet for 2 hours
        </p>
      </div>
      <Contact/>
    </>
  );
}

export default Facility;