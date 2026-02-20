const HeroText = ({backgroundImage, title, description}) => {

  return (
    <section className="relative w-full h-110 sm:h-150 lg:h-170 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.5,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white/60"/>

      {/* Content */}
      <div className="max-w-7xl h-full mx-auto pr-[20%] relative flex justify-center items-center text-dark-text">
        <div>
          <h1 className="font-bold text-5xl xs:text-6xl sm:text-7xl lg:text-8xl">{title}</h1>
          <h5>{description}</h5>
        </div>
      </div>

      {/* SVG Bottom Mask */}
      <div className="absolute bottom-0 translate-y-0.5 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-35 fill-website-bg"
        >
          <path d="M0,30 C240,90 480,10 720,40 960,70 1200,60 1440,20 L1440,100 L0,100 Z"/>
        </svg>
      </div>

    </section>
  );
};

export default HeroText;
