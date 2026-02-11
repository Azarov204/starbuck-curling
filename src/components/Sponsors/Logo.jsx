const Logo = ({image, link, alt = ""}) => {

  return (
    <a href={link} target="_blank">
      <img
        loading="lazy"
        src={image}
        alt={alt}
        className="
           mx-2 md:mx-6 h-12 md:h-24 inline
           transition-transform duration-200
           hover:scale-115
           will-change:transform
        "
      />
    </a>
  );
}

export default Logo;