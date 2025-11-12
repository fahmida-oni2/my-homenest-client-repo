import React from 'react';
import { Link } from 'react-router';

const UserCard = ({property}) => {
    const {propertyName,postedByName,postedDate,price,category,location,imageUrl,_id}=property
    return (
  <div className="card bg-base-100 border-gray-300 shadow-xl  hover:scale-105 transition ease-in-out m-5 ">
  <figure className='h-48 overflow-hidden'>
    <img
      src={imageUrl}
      alt="Property" 
      className='lg:w-full md:w-[200px] w-[450px] lg:object-cover p-2'/>
  </figure>
  <div className="card-body space-y-3">
    <h2 className="text-2xl font-bold text-center">{propertyName}</h2>
        <h2 className="text-center">Category:{category}</h2>
         <h2 className=" text-center">Posted by: {postedByName}</h2>
       <h2 className=" text-center">{postedDate}</h2>
   <div className='flex justify-between'>
    <p className=''>
      {location}
    </p>
    <button  className='flex h-10 w-30 btn btn-outline gap-2 border-gray-200 text-orange-500 bg-base-300'>
        {price}
    </button>
   </div>
   <div className='flex justify-between'>
     <Link to={`/update-properties/$(_id)`}  className='flex h-10 rounded-full btn btn-outline gap-2 border-gray-200 text-white bg-blue-800'>
        Update
    </Link>
     <Link to={`/all-properties/$(_id)`}  className='flex h-10 rounded-full  btn btn-outline gap-2 border-gray-200 text-white bg-blue-800'>
        Delete
    </Link>
   </div>
   <Link to={`/all-properties/$(_id)`}  className='flex h-10 w-full btn btn-outline gap-2 border-gray-200 text-white bg-blue-800'>
        View Details
    </Link>
  </div>
</div>
    );
};

export default UserCard;