import plat_1 from "../../assets/sponsors/platinum/perfectly_raw.jpg";
import plat_2 from "../../assets/sponsors/platinum/one_insurance.png";
import plat_3 from "../../assets/sponsors/platinum/access_logo.jpg";

import gold_1 from "../../assets/sponsors/gold/east_meridian_electric.png";
import gold_2 from "../../assets/sponsors/gold/terraco.jpg";
import gold_3 from "../../assets/sponsors/gold/phils_honey.jpg";

import silver_1 from "../../assets/sponsors/silver/meridian_hauling.jpg";
import silver_2 from "../../assets/sponsors/silver/rocky_mountain_equipment.jpg";
import silver_3 from "../../assets/sponsors/silver/extreme_coatings.png";
import silver_4 from "../../assets/sponsors/silver/enns_brothers.jpg";
import silver_5 from "../../assets/sponsors/silver/rosenort_motors.jpg";

import sponsorship_package from "./../../assets/sponsors/sponsorship_package.jpg";

import SponsorCardPlatinum from "./SponsorCardPlatinum.jsx";
import SponsorCardGold from "./SponsorCardGold.jsx";
import SponsorCardSilver from "./SponsorCardSilver.jsx";


const platSponsors = [
  {src: plat_1, alt: "Perfectly Raw", link: "https://perfectlyraw.ca"},
  {src: plat_2, alt: "One Insurance", link: "https://www.oneinsurance.ca"},
  {src: plat_3, alt: "Access Credit Union", link: "https://accesscu.ca/en/personal"},
];

const goldSponsors = [
  {src: gold_1, alt: "East Meridian Electric", link: "https://www.eastmeridianelectric.com"},
  {src: gold_2, alt: "Terraco", link: "https://www.terraco.ca"},
  {src: gold_3, alt: "Phil's honey", link: "https://www.philshoney.com"},
];

const silverSponsors = [
  {src: silver_1, alt: "Meridian Hauling", link: "https://meridianhauling.ca"},
  {src: silver_2, alt: "Rocky Mountain Equipment", link: "https://rockymtn.com"},
  {src: silver_3, alt: "Extreme Coatings", link: "https://www.extremecoatings.ca"},
  {src: silver_4, alt: "Enns Brother", link: "https://www.ennsbrothers.com"},
  {src: silver_5, alt: "Rosenort Motors", link: "https://rosenortmotors.com"},
];

const Sponsors = () => {

  return (
    <section className="w-full py-8 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold tracking-widest text-sponsor-dark-text">
          OUR WONDERFUL SPONSORS
        </h2>

        {/* All Sponsor Cards */}
        <div className="">
          {/* Platinum Sponsor Title */}
          <div className="flex flex-wrap justify-center items-center">
            <span className="h-0.5 w-12 md:w-32 bg-gray-400"></span>
            <h6
              className="px-3 text-center font-bold tracking-widest text-shadow-xs text-gray-400">
              PLATINUM SPONSORS
            </h6>
            <span className="h-0.5 w-12 md:w-32 bg-gray-400"></span>
          </div>

          {/* Platinum Sponsor Cards */}
          <div className="flex flex-wrap justify-center pb-8 pt-2">
            {platSponsors.map((logo, index) => (
              <div
                key={index}
                className="
                flex justify-center
                w-[33.333%]
                sm:w-[25%]
              "
              >
                <SponsorCardPlatinum src={logo.src} link={logo.link} alt={logo.alt}/>
              </div>
            ))}
          </div>

          {/* Gold Sponsor Title */}
          <div className="flex flex-wrap justify-center items-center">
            <span className="h-0.5 w-10 md:w-26 bg-yellow-400"></span>
            <h6
              className="px-3 text-center font-bold tracking-widest text-shadow-xs text-yellow-400">
              GOLD SPONSORS
            </h6>
            <span className="h-0.5 w-10 md:w-26 bg-yellow-400"></span>
          </div>
          {/* Gold Sponsor Cards */}
          <div className="flex flex-wrap justify-center pb-8">
            {goldSponsors.map((logo, index) => (
              <div
                key={index}
                className="
                flex justify-center
                w-[33.333%]
                sm:w-[25%]
              "
              >
                <SponsorCardGold src={logo.src} link={logo.link} alt={logo.alt}/>
              </div>
            ))}
          </div>

          {/* Silver Sponsor Title */}
          <div className="flex flex-wrap justify-center items-center">
            <span className="h-0.5 w-8 md:w-20 bg-gray-500"></span>
            <h6
              className="px-3 text-center font-bold tracking-widest text-shadow-xs text-gray-500">
              SILVER SPONSORS
            </h6>
            <span className="h-0.5 w-8 md:w-20 bg-gray-500"></span>
          </div>

          {/* Silver Sponsor Cards */}
          <div className="flex flex-wrap justify-center gap-5 pt-2">
            {silverSponsors.map((logo, index) => (
              <div
                key={index}
                className="
                flex justify-center
                w-[33.333%]
                sm:w-[25%]
                md:w-[18%]
              "
              >
                <SponsorCardSilver src={logo.src} link={logo.link} alt={logo.alt}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto max-w-4xl px-10 text-center pt-6 text-sponsor-dark-text">
        Thank you to our wonderful sponsors who make everything possible.
        Interested in joining our community?
        Check out our{" "}
        <a
          href={sponsorship_package}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline cursor-pointer"
        >
          sponsorship package
        </a>
        , we’d love to hear from you!
      </p>
    </section>
  );
}

export default Sponsors;
