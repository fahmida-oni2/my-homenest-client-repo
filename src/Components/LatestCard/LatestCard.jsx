import React from "react";
import { Link } from "react-router";

const LatestCard = ({ property }) => {
  const {
    propertyName,
    description,
    price,
    category,
    location,
    imageUrl,
    _id,
  } = property;
  return (
    <div className="card bg-base-100 border-gray-300 shadow-xl  hover:scale-105 transition ease-in-out m-5 ">
      <figure className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt="Property"
          className="lg:w-full md:w-[200px] w-[450px] lg:object-cover p-2"
        />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-bold text-center">{propertyName}</h2>
        <h2 className=" text-center">Category:{category}</h2>
        <h2 className=" text-center">{description}</h2>

        <div className="flex justify-between gap-5">
          <button className="flex h-10 w-30 btn btn-outline gap-2 border-gray-200 text-orange-500 bg-base-300">
            {location}
          </button>
          <button className="flex h-10 w-30 btn btn-outline gap-2 border-gray-200 text-orange-500 bg-base-300">
            {price}
          </button>
        </div>
        <Link
          to={`/all-properties/${_id}`}
          className="flex h-10 w-full btn btn-outline gap-2 border-gray-200 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default LatestCard;
