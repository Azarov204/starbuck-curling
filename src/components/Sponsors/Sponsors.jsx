import logo_1 from "../../assets/sponsors/east_meridian_electric.png";
import logo_2 from "../../assets/sponsors/meridian_hauling.jpg";
import logo_3 from "../../assets/sponsors/one_insurance.png";
import logo_4 from "../../assets/sponsors/perfectly_raw.jpg";
import logo_5 from "../../assets/sponsors/phils_honey.webp";
import logo_6 from "../../assets/sponsors/rocky_mountain_equipment.jpg";
import logo_7 from "../../assets/sponsors/terraco.jpg";


const Sponsors = () => {

  return (
    <div className="flex overflow-hidden space-x-16">
      <div className="flex space-x-16 object-contain h-10 animate-slide-left">
        <img loading="lazy" src={logo_1} className=""/>
        <img loading="lazy" src={logo_2} className=""/>
        <img loading="lazy" src={logo_3} className=""/>
        {/*<img loading="lazy" src={logo_4} className=""/>*/}
        {/*<img loading="lazy" src={logo_5} className=""/>*/}
        {/*<img loading="lazy" src={logo_6} className=""/>*/}
        {/*<img loading="lazy" src={logo_7} className=""/>*/}
      </div>
      <div className="flex space-x-16 object-contain h-10 animate-slide-left aria-hidden:true">
        <img loading="lazy" src={logo_1} className=""/>
        <img loading="lazy" src={logo_2} className=""/>
        <img loading="lazy" src={logo_3} className=""/>
        {/*<img loading="lazy" src={logo_4} className=""/>*/}
        {/*<img loading="lazy" src={logo_5} className=""/>*/}
        {/*<img loading="lazy" src={logo_6} className=""/>*/}
        {/*<img loading="lazy" src={logo_7} className=""/>*/}
      </div>
    </div>
  );
};

export default Sponsors;
