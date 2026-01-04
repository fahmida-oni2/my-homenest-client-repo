import React from "react";
// Importing specific icons from react-icons
import { HiOutlineLocationMarker, HiOutlineUserCircle } from "react-icons/hi";
import { RiHomeHeartLine, RiVerifiedBadgeFill } from "react-icons/ri";
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
    <div className="group card bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 m-4 rounded-3xl overflow-hidden">
      {/* Image Section */}
      <figure className="relative h-60 overflow-hidden">
        <img
          src={imageUrl}
          alt={propertyName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
          <RiHomeHeartLine className="text-indigo-600" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            {category}
          </span>
        </div>
      </figure>

      {/* Content Section */}
      <div className="card-body p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-slate-800 line-clamp-1">
            {propertyName}
          </h2>
          <div className="flex flex-col items-end">
            <span className="text-indigo-600 font-black text-xl">${price}</span>
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Total Price</span>
          </div>
        </div>

        {/* Info Rows */}
        <div className="space-y-2.5 mb-6">
          <div className="flex items-center gap-2 text-slate-500">
            <HiOutlineLocationMarker className="text-indigo-500 text-lg" />
            <span className="text-sm italic">{location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-600">
              <HiOutlineUserCircle className="text-indigo-400 text-lg" />
              <span className="text-sm font-medium">{postedByName}</span>
            </div>
            {/* Trust Indicator */}
            <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
              <RiVerifiedBadgeFill />
              <span>Verified</span>
            </div>
          </div>
        </div>

        {/* Themed Button */}
        <div className="card-actions">
          <Link
            to={`/all-properties/${_id}`}
            className="btn btn-secondary hover:bg-primary w-full border-none text-white rounded-xl transition-colors duration-300 shadow-md shadow-indigo-100"
          >
            View This Nest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;