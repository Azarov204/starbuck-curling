import {useEffect, useState} from "react";

const SlideShow = ({images = []}) => {
  const [index, setIndex] = useState(0);
  const AUTOPLAY_DELAY = 9000;
  const imageHeight = "h-45 sm:h-65 md:h-90 lg:h-110";
  const imageWidth = "w-45 sm:w-65 md:w-90 lg:w-110";

  if (!images.length) return null;
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const getPosition = (i) => {
    if (i === index) return "centre";
    if (i === (index - 1 + images.length) % images.length) return "left";
    if (i === (index + 1) % images.length) return "right";
    return "hidden";
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [index])

  return (
    <div
      className="relative w-[90%] max-w-5xl mx-auto py-8 flex items-ceter justify-center overflow-hidden">
      {/* Slides */}
      <div className={`relative flex items-center justify-center ${imageHeight} ${imageWidth}`}>
        {images.map((img, i) => {
          const pos = getPosition(i);

          return (
            <div
              key={i}
              className={`absolute transition-all duration-800 ease-in-out rounded-xl shadow-xl overflow-hidden
                ${pos === "centre" && "z-30 scale-100 opacity-100"}
                ${pos === "left" && "z-20 -translate-x-[45%] scale-75 opacity-80 blur-sm"}
                ${pos === "right" && "z-20 translate-x-[45%] scale-75 opacity-80 blur-sm"}
                ${pos === "hidden" && "scale-50 opacity-0 pointer-events-none"}
              `}
            >
              <img
                src={img.url}
                alt={img.alt}
                className={`${imageHeight} ${imageWidth} object-cover rounded-xl`}
              />
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <button
        onClick={prev}
        className={`absolute left-0 z-40 ${imageHeight} w-[15%]`}
      >
        {"<"}
      </button>
      <button
        onClick={next}
        className={`absolute right-0 z-40 ${imageHeight} w-[15%]`}
      >
        {">"}
      </button>
    </div>
  );
}

export default SlideShow;