import { SectionTitle } from "../components/SectionTitle.jsx";
import sponsorship_package from "../assets/sponsors/sponsorship_package_26-27.pdf";

import plat_1 from "../assets/sponsors/platinum/perfectly_raw.svg";
import plat_2 from "../assets/sponsors/platinum/one_insurance.png";
import plat_3 from "../assets/sponsors/platinum/access.svg";
import plat_4 from "../assets/sponsors/platinum/prairie_flour_mills.png";

import gold_1 from "../assets/sponsors/gold/east_meridian_electric.png";
import gold_2 from "../assets/sponsors/gold/terraco.png";
import gold_3 from "../assets/sponsors/gold/phils_honey.png";

import silver_1 from "../assets/sponsors/silver/meridian_hauling.jpg";
import silver_2 from "../assets/sponsors/silver/rocky_mountain_equipment.jpg";
import silver_3 from "../assets/sponsors/silver/extreme_coatings.png";
import silver_4 from "../assets/sponsors/silver/enns_brothers.jpg";
import silver_5 from "../assets/sponsors/silver/rosenort_motors.jpg";

const tiers = [
  {
    name: "Platinum",
    cardClass: "sponsor-card-platinum",
    label:
      "text-slate-700 bg-gradient-to-r from-slate-200 to-slate-100 ring-slate-300",
    sponsors: [
      { name: "Perfectly Raw", url: "https://perfectlyraw.ca", logo: plat_1 },
      {
        name: "One Insurance",
        url: "https://www.oneinsurance.ca",
        logo: plat_2,
      },
      {
        name: "Access Credit Union",
        url: "https://accesscu.ca/en/personal",
        logo: plat_3,
      },
      {
        name: "Prairie Flour Mills",
        url: "https://prairieflour.com/",
        logo: plat_4,
      },
    ],
  },
  {
    name: "Gold",
    cardClass: "sponsor-card-gold",
    label: "text-amber-800 bg-amber-100 ring-amber-300",
    sponsors: [
      {
        name: "East Meridian Electric",
        url: "https://www.eastmeridianelectric.com",
        logo: gold_1,
      },
      { name: "Terraco", url: "https://www.terraco.ca", logo: gold_2 },
      { name: "Phil's Honey", url: "https://www.philshoney.com", logo: gold_3 },
    ],
  },
  {
    name: "Silver",
    cardClass: "sponsor-card-silver",
    label: "text-zinc-600 bg-zinc-100 ring-zinc-300",
    sponsors: [
      {
        name: "Meridian Hauling",
        url: "https://meridianhauling.ca",
        logo: silver_1,
      },
      {
        name: "Rocky Mountain Equipment",
        url: "https://rockymtn.com",
        logo: silver_2,
      },
      {
        name: "Extreme Coatings",
        url: "https://www.extremecoatings.ca",
        logo: silver_3,
      },
      {
        name: "Enns Brothers",
        url: "https://www.ennsbrothers.com",
        logo: silver_4,
      },
      {
        name: "Rosenort Motors",
        url: "https://rosenortmotors.com",
        logo: silver_5,
      },
    ],
  },
];

export function Sponsors() {
  return (
    <section className="section sponsors">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Our supporters"
          title="Powered by local pride."
          intro={
            <>
              Thank you to our wonderful sponsors who help keep curling
              accessible and our ice keen. Interested in becoming a sponsor?
              Check out our{" "}
              <a
                href={sponsorship_package}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline cursor-pointer"
              >
                sponsorship package
              </a>
            </>
          }
        />
        <div className="mx-auto max-w-7xl">
          <div className="mt-10 space-y-10">
            {tiers.map((tier) => (
              <div key={tier.name}>
                <div className="mb-2 flex flex-col items-center gap-2">
                  <span
                    className={`rounded-full px-4 py-1 text-md font-semibold uppercase tracking-widest ring-1 ${tier.label}`}
                  >
                    {tier.name}
                  </span>
                </div>
                <div className="sponsor-collection">
                  {tier.sponsors.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.name} website`}
                      className={`sponsor-card ${tier.cardClass}`}
                    >
                      <img src={s.logo} alt={s.name} className="sponsor-logo" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
