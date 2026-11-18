import logo from "../assets/logos/starbuck_3.png";

const TopPageBlurb = ({ title, desc, desc2 = "", includeLogo = false }) => {
  return (
    <div className="flex flex-col items-center">
      {includeLogo && (
        <img
          src={logo}
          alt="Starbuck Curling Club Logo"
          className="h-[clamp(60px,10vw,110px)] mb-6 object-cover"
        />
      )}
      {title && <h1 className="mb-2 font-bold text-center">{title}</h1>}
      <div className="mb-6 h-1 w-[clamp(100px,25vw,400px)] bg-starbuck" />
      {desc && <p className="text-center py-2 pb-6">{desc}</p>}
      {desc2 && <p className="text-center py-2">{desc2}</p>}
    </div>
  );
};

export default TopPageBlurb;
