const SponsorCardGold = ({src, alt, link}) => {

  return (
    <div className="flex items-center justify-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="
          max-h-18
          sm:max-h-22
          md:max-h-26
          lg:max-h-30
          w-auto
          object-contain
          transition-all
          duration-250
          ease-in-out
          opacity-90
          hover:opacity-100
          hover:scale-115
        "
        />
      </a>
    </div>
  );
}

export default SponsorCardGold;