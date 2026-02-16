const SponsorCardSilver = ({src, alt, link}) => {

  return (
    <div className="flex items-center justify-center">
      <a href={link} target="_blank">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="
          max-h-16
          sm:max-h-20
          md:max-h-24
          lg:max-h-28
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

export default SponsorCardSilver;