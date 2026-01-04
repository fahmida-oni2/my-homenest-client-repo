import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot, FaTag } from "react-icons/fa6";
import { Link } from "react-router";

const Card = ({ property }) => {
  const {
    propertyName,
    postedByName,
    price,
    category,
    location,
    imageUrl,
    _id,
  } = property;

  return (
    <div className="card bg-white border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 m-5 overflow-hidden">
      {/* Property Image Section */}
      <figure className="h-56 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={propertyName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Category Badge - Matching LatestCard style */}
        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
          {category}
        </div>
      </figure>

      <div className="card-body p-6 space-y-4">
        {/* Title & Agent Info */}
        <div>
          <h2 className="text-xl font-black text-secondary line-clamp-1 mb-1">
            {propertyName}
          </h2>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <FaUserCircle className="text-primary" />
            <span>Listed by: <span className="font-semibold text-gray-700">{postedByName}</span></span>
          </div>
        </div>

        {/* Location & Price Info - Grid/Flex row to match the 'Latest' UI */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 text-gray-600 text-xs font-medium bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 flex-1">
            <FaLocationDot className="text-primary shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-secondary text-sm font-bold bg-primary/10 px-3 py-2 rounded-lg border border-primary/20">
            <FaTag className="text-primary text-xs shrink-0" />
            <span>{price}</span>
          </div>
        </div>

       
          <Link
            to={`/all-properties/${_id}`}
            className="btn btn-secondary w-full border-none text-white font-bold hover:bg-primary transition-all duration-300 shadow-lg shadow-secondary/20 rounded-xl"
          >
            View Details
          </Link>
    
      </div>
    </div>
  );
};

export default Card;