const Poster = ({image}) => {

  return (
    <div className="flex items-center justify-center h-full my-10">
      <img src={image} alt="Poster" className="max-w-3xl w-[80%] border-2 rounded-xl"/>
    </div>
  );
};

export default Poster;
