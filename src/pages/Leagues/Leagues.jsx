import HeroText from "../../components/Hero/HeroText";
import image from "../../assets/heros/image_2_crop.jpg";
import scheduleImg from "../../assets/posters/poster.png";
import Contact from "../../components/Contact/Contact.jsx";
import LeagueInfo from "../../components/LeagueInfo/LeagueInfo.jsx";

const Leagues = () => {
  return (
    <>
      <HeroText
        backgroundImage={image}
        title="Leagues"
        description="Come play!"
      />
      <div className="mx-auto max-w-6xl px-16 pb-6">
        <h6 className="text-center py-2">
          The Starbuck Curling Club hosts both men’s and ladies leagues
          that run through the winter from November through March.
          Our ladies curl on Tuesday nights with the men curling on one of Wednesday and Thursday nights.
          There is always room for new teams and spares are welcomed. If you’re interested in joining or have
          any questions about any of the men’s or ladies leagues, please reach out using the contact form.
        </h6>
      </div>
      <LeagueInfo
        name="Men's League"
        desc="Tranditional competition and camaraderie"
        startDay="League starts Nov 4, 2025"
        gameDay="Wednesdays at 7:30pm or Thursdays at 7:30pm"
        scheduleImg={scheduleImg}
        registerInfo="Adam: (204) 222-2222 | email@email.com"
      />
      <LeagueInfo
        name="Women's League"
        desc="Tranditional competition and camaraderie for women"
        startDay="League starts Nov 6, 2025"
        gameDay="Tuesdays at 7:30pm"
        scheduleImg={scheduleImg}
        registerInfo="Adamithy: (204) 222-2222 | email@email.com"
      />
      <Contact/>
    </>
  );
};
export default Leagues;
