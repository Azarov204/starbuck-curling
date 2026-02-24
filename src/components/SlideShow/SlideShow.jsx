import {useEffect, useState} from "react";

const SlideShow = ({images = []}) => {
  const [index, setIndex] = useState(0);
  const AUTOPLAY_DELAY = 9000;
  const imageSize = "w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-110 lg:h-110"

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
      className="relative w-[80%] max-w-5xl mx-auto py-8 flex items-ceter justify-center overflow-hidden">
      {/* Slides */}
      <div className={`relative flex items-center justify-center ${imageSize}`}>
        {images.map((img, i) => {
          const pos = getPosition(i);

          return (
            <div
              key={i}
              className={`absolute transition-all duration-1200 ease-in-out rounded-xl shadow-xl overflow-hidden
                ${pos === "centre" && "z-30 scale-100 opacity-100"}
                ${pos === "left" && "z-20 -translate-x-[50%] scale-75 opacity-80 blur-sm"}
                ${pos === "right" && "z-20 translate-x-[50%] scale-75 opacity-80 blur-sm"}
                ${pos === "hidden" && "scale-50 opacity-0 pointer-events-none"}
              `}
            >
              <img
                src={img.url}
                alt={img.alt}
                className={`${imageSize} object-cover rounded-xl`}
              />
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition cursor-pointer"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition cursor-pointer"
      >
        ▶
      </button>
    </div>
  );
}

export default SlideShow;