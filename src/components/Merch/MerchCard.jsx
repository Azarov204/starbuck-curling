const MerchCard = ({frontImage, backImage, title, description, price, sizes}) => {

  return (
    <div className="w-60 block border rounded-xl">
      {/* Flip container */}
      <div className="group perspective">
        <div
          className="relative h-80 w-full transform-style-preserve-3d
          transition-transform duration-500 group-hover:rotate-y-180 shadow-lg">

          {/* Front */}
          <div className="absolute inset-0 backface-hidden">
            <img
              src={frontImage}
              alt={title}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          {/* Back */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden">
            <img
              src={backImage}
              alt={`${title} Back`}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-800">{description}</p>
        <p className="text-sm text-gray-700">{sizes}</p>
        <p className="text-lg font-bold text-primary">${price}</p>
      </div>
    </div>
  );
}

export default MerchCard;