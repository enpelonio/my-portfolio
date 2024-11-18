const Card = ({ className, onClick, imgSrc, title, description }) => {
  return (
    <>
      {/* Card component */}
      <div
        className={`w-full h-[65vh] shadow-lg rounded-lg p-4 flex flex-col justify-between hover:opacity-75 cursor-pointer ${className}`}
        onClick={onClick}
      >
        {/* Image container */}
        <div className="flex-grow flex items-center justify-center p-4">
          <img
            src={imgSrc}
            alt="Card Image"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Text container */}
        <div className="text-left mt-4 pb-4 overflow-y-scroll">
          <h3 className="text-2xl font-heading">{title}</h3>
          <p className="text-sm font-body text-gray-600">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
