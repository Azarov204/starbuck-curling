import {useState} from "react";

const SlideShow = ({images}) => {

  const [current, setCurrent] = useState(0);
  if (!images.length) return null;
  const prevIndex = (current - 1 + images.length) % images.length;
  const nextIndex = (current + 1) % images.length;


  return (
    <div className="relative w-full max-w-3xl mx-auto py-10">
      <div className="relative h-100">
        {/* Previous Image */}
        <Slide
          src={images[prevIndex].url}
          position="left"
          onClick={() => setCurrent(prevIndex)}
        />
        {/* Current Image */}
        <Slide src={images[current].url} position="center"/>
        {/* Next Image */}
        <Slide
          src={images[nextIndex].url}
          position="right"
          onClick={() => setCurrent(nextIndex)}
        />
      </div>
      {/* Navigation Buttons */}
      <button

        onClick={() => setCurrent(prevIndex)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20
        bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur transition"
      >
        ‹
      </button>
      <button

        onClick={() => setCurrent(nextIndex)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20
        bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur transition"
      >
        ›
      </button>
    </div>
  );
}

function Slide({src, position, onClick}) {
  const base = "absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out";

  const styles = {
    left: "-translate-x-[85%] scale-90 blur-md opacity-60 z-0 cursor-pointer",
    center: "-translate-x-1/2 scale-100 blur-0 opacity-100 z-10",
    right: "-translate-x-[15%] scale-90 blur-md opacity-60 z-0 cursor-pointer",
  };

  return (
    <div className={`${base} ${styles[position]}`} onClick={onClick}>
      <div className="aspect-square rounded-2xl overflow-hidden">
        <img
          src={src}
          alt="slide"
          className="w-full h-full object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default SlideShow;