import HeroText from "../../components/Hero/HeroText";
import Contact from "../../components/Contact/Contact.jsx";
import image from "../../assets/images/image_1_crop.jpg";
import toque_front from "../../assets/merch/toque_front.png";
import toque_back from "../../assets/merch/toque_back.png";
import hoodie_front from "../../assets/merch/hoodie_front.png";
import MerchCard from "../../components/Merch/MerchCard.jsx";

const Merch = () => {
  return (
    <>
      <HeroText
        backgroundImage={image}
        title="Merch"
        description="Give us money, get something cool"
      ></HeroText>
      <div className="relative w-full">
        <div className="flex justify-center items-center min-h-60">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <MerchCard
              frontImage={toque_front}
              backImage={toque_back}
              title="Starbuck Toque"
              description="Put on head, stay warm"
              price="40"
              sizes="one size"
            />
            <MerchCard
              frontImage={hoodie_front}
              backImage={hoodie_front}
              title="Starbuck Hoodie"
              description="Put on body, stay warm"
              price="50"
              sizes="S, M, L, XL"
            />
          </div>
        </div>
        <h1>Swag swag swag</h1>
        <h1>Swag swag swag</h1>
        <h1>Swag swag swag</h1>
        <h1>Swag swag swag</h1>
        <h1>Swag swag swag</h1>
        <h1>Swag swag swag</h1>
        <h1>Swag swag swag</h1>
        <h1>Swag swag swag</h1>
      </div>
      <Contact/>
    </>
  );
};
export default Merch;
