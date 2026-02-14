import logo_1 from "../../assets/sponsors/east_meridian_electric.png";
import logo_2 from "../../assets/sponsors/meridian_hauling.jpg";
import logo_3 from "../../assets/sponsors/one_insurance.png";
import logo_4 from "../../assets/sponsors/perfectly_raw.jpg";
import logo_5 from "../../assets/sponsors/phils_honey.jpg";
import logo_6 from "../../assets/sponsors/rocky_mountain_equipment.jpg";
import logo_7 from "../../assets/sponsors/terraco.jpg";
import SponsorCard from "./SponsorCard.jsx";

const sponsors = [
  {src: logo_1, alt: "East Meridian Electric", link: "https://www.eastmeridianelectric.com"},
  {src: logo_2, alt: "Meridian Hauling", link: "https://meridianhauling.ca"},
  {src: logo_3, alt: "One Insurance", link: "https://www.oneinsurance.ca"},
  {src: logo_4, alt: "Perfectly Raw", link: "https://perfectlyraw.ca"},
  {src: logo_5, alt: "Phil's honey", link: "https://www.philshoney.com"},
  {src: logo_6, alt: "Rocky Mountain Equipment", link: "https://rockymtn.com"},
  {src: logo_7, alt: "Terraco", link: "https://www.terraco.ca"},
];

const Sponsors = () => {

  return (
    <section className="w-full py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <h2 className="mb-8 text-center text-lx font-bold tracking-widest text-gray-900">
          OUR WONDERFUL SPONSORS
        </h2>

        {/* Sponsor Cards */}
        <div className="flex flex-wrap justify-center gap-5">
          {sponsors.map((logo, index) => (
            <div
              key={index}
              className="
                flex justify-center
                w-[33.333%]
                sm:w-[25%]
                md:w-[20%]
                lg:w-[16.666%]
              "
            >
              <SponsorCard src={logo.src} link={logo.link} alt={logo.alt}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
