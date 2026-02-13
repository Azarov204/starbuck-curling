const Poster = ({image}) => {

  return (
    <div className="flex items-center justify-center h-full">
      <img src={image} alt="Poster" className="max-w-3xl w-[80%]"/>
    </div>
  );
};

export default Poster;
