import "./Hero.css";

export default function Hero({ image, title, description }) {
  const style = { "--hero-bg": `url(${image})` };

  return (
    <section className="hero" style={style}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-desc">{description}</p>
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
}
