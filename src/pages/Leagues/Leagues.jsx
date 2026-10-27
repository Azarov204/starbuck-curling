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
        bottomMaskColor={"var(--color-website-bg-1)"}
      />
      <div className="mx-auto max-w-5xl px-16 pb-6">
        <p className="text-center py-2">
          The Starbuck Curling Club hosts both men’s and ladies leagues that run
          through the winter from November through March. Our ladies curl on
          Tuesday nights with the men curling on one of Wednesday and Thursday
          nights. There is always room for new teams and spares are welcomed. If
          you’re interested in joining or have any questions about any of the
          men’s or ladies leagues, please reach out using the contact form.
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="pt-4">
          <LeagueInfo
            title="Men's League"
            desc="Men’s winter club running from November - March, with playoffs and prizes."
            startDay=""
            gameDay="Wednesdays and Thursdays at 7:30pm"
            scheduleImg={scheduleImg}
            registerInfo="Adam: (204) 222-2222 | email@email.com"
          />
        </div>
        <div className="pt-10">
          <LeagueInfo
            title="Women's League"
            desc="Women’s winter club running from November - March, with playoffs and prizes."
            startDay=""
            gameDay="Tuesdays at 7:30pm"
            scheduleImg={scheduleImg}
            registerInfo="Adamithy: (204) 222-2222 | email@email.com"
          />
        </div>
        <div className="pt-10 pb-30">
          <LeagueInfo
            title="Open Curling"
            desc="Are full season commitments too much but you’re still interested in throwing a few
                rocks? Open curling might just be for you. On select Fridays, we do open curling night
                which are 2 person teams and 4-end games. No sweeping and play as much as you’d
                like! These make for quick games, lots of fun, and also a great way to try out the game if
                you are just starting out. Keep an eye out for our next open curling night on our
                instagram page."
          />
        </div>
      </div>
      <Contact />
    </>
  );
};
export default Leagues;
