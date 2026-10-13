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
      <div className="mx-auto max-w-7xl px-16 pb-12">
        <p className="text-center pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          mauris quis erat hendrerit eleifend. Etiam et aliquam erat. Donec
          ullamcorper venenatis aliquet. Praesent vehicula, justo in faucibus
          rhoncus, dui massa tincidunt nisl, sed placerat ligula sem sit amet
          elit. Donec vel lacinia ipsum, sed suscipit elit. Sed at mi suscipit,
          auctor mauris et, dignissim velit. Sed fringilla dapibus auctor. Morbi
          eget pharetra ex.
        </p>
        <p className="text-center pb-6">
          Mauris at vestibulum lacus. Duis consequat nisl nec malesuada
          elementum. Aliquam nec velit nulla. Cras non blandit libero. Aliquam
          aliquam magna nec lectus maximus, quis posuere massa ultrices. Aliquam
          erat volutpat. Ut tempor vitae diam et porta. Aenean at gravida
          lectus. Nulla vehicula eget magna in pretium. Ut mollis sem ac ipsum
          rutrum, a hendrerit dui tempor.
        </p>
      </div>
      <Contact />
    </>
  );
};

export default About;
