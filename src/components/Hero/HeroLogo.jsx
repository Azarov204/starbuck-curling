const HeroLogo = ({backgroundImage, logo}) => {

  return (
    <section className="relative w-full h-100 sm:h-110 md:h-130 lg:h-160 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.5,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/50"/>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full mt-5">
        <img
          src={logo}
          alt="Hero Logo"
          className="max-h-[55%] max-w-[60%] sm:max-w-[70%] object-contain drop-shadow-xl"
        />
      </div>

      {/* SVG Bottom Mask */}
      <div className="absolute bottom-0 translate-y-0.5 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-15 sm:h-20 md:h-25 lg:h-30 fill-website-bg-1"
        >
          <path d="M0,30 C240,90 480,10 720,40 960,70 1200,60 1440,20 L1440,100 L0,100 Z"/>
        </svg>
      </div>

    </section>
  );
};

export default HeroLogo;
