import "./HeroLogo.css";

const HeroLogo = ({ image, logo }) => {
  const style = { "--hero-bg": `url(${image})` };

  return (
    <section className="hero" style={style}>
      <div className="hero-content">
        <img className="hero-logo" src={logo} alt="Hero Logo" />
      </div>
      <>
        <svg
          className="hero-divider"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C240,90 480,90 720,60 960,30 1200,20 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </>
    </section>
  );
};

export default HeroLogo;
