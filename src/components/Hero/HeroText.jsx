const HeroText = ({ backgroundImage, title, description, bottomMaskColor }) => {
  const svgFillStyle = { fill: bottomMaskColor };

  return (
    <section className="hero-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.5,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/60" />

      {/* Content */}
      <div className="max-w-7xl h-full mx-auto pr-[10%] relative flex justify-center items-center text-dark-text mt-4">
        <div>
          <h1 className="hero-title">{title}</h1>
          <h2 className="hero-subtitle">{description}</h2>
        </div>
      </div>

      {/* SVG Bottom Mask */}
      <div className="absolute bottom-0 translate-y-0.5 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="hero-svg-mask-height"
          style={svgFillStyle}
        >
          <path d="M0,30 C240,90 480,10 720,40 960,70 1200,60 1440,20 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroText;
