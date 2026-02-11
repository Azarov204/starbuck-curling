import logo_1 from "../../assets/sponsors/east_meridian_electric.png";
import logo_2 from "../../assets/sponsors/meridian_hauling.jpg";
import logo_3 from "../../assets/sponsors/one_insurance.png";
import logo_4 from "../../assets/sponsors/perfectly_raw.jpg";
import logo_5 from "../../assets/sponsors/phils_honey.webp";
import logo_6 from "../../assets/sponsors/rocky_mountain_equipment.jpg";
import logo_7 from "../../assets/sponsors/terraco.jpg";
import Logo from "./Logo.jsx";

const Sponsors = () => {

  return (
    <div
      className="group relative overflow-hidden bg-white
       whitespace-nowrap py-6 my-5 w-[90%] max-w-7xl m-auto
        mask-[linear-gradient(to_right,transparent_0,white_32px,white_calc(100%-32px),transparent_100%)]
        md:mask-[linear-gradient(to_right,transparent_0,white_128px,white_calc(100%-128px),transparent_100%)]"
    >
      <div className="animate-slide-left inline-block w-max h-12 md:h-24">
        <Logo image={logo_1} link="https://www.eastmeridianelectric.com/"/>
        <Logo image={logo_2} link="https://meridianhauling.ca/"/>
        <Logo image={logo_3} link="https://www.oneinsurance.ca/"/>
        <Logo image={logo_4} link="https://perfectlyraw.ca/"/>
        <Logo image={logo_5} link="https://www.philshoney.com/"/>
        <Logo image={logo_6} link="https://rockymtn.com/"/>
        <Logo image={logo_7} link="https://www.terraco.ca/"/>
      </div>
      <div className="animate-slide-left inline-block w-max h-12 md:h-24">
        <Logo image={logo_1} link="https://www.eastmeridianelectric.com/"/>
        <Logo image={logo_2} link="https://meridianhauling.ca/"/>
        <Logo image={logo_3} link="https://www.oneinsurance.ca/"/>
        <Logo image={logo_4} link="https://perfectlyraw.ca/"/>
        <Logo image={logo_5} link="https://www.philshoney.com/"/>
        <Logo image={logo_6} link="https://rockymtn.com/"/>
        <Logo image={logo_7} link="https://www.terraco.ca/"/>
      </div>
    </div>
  );
};

export default Sponsors;
