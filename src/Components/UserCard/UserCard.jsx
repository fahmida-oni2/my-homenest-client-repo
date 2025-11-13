import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UserCard = ({property}) => {
    const navigate = useNavigate()
    const {propertyName,postedByName,postedDate,price,category,location,imageUrl,_id}=property
 

    const handleDelete = ()=>{
           Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`https://real-estate-api-server.vercel.app/all-properties/${_id}`,{
            method:"DELETE",
            headers:{
                "Content-type": "application/json",
            },
          })
          .then(res=>res.json())
          .then(data=> {
           console.log(data)
           navigate(`/all-properties`)
           Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

          })
            .catch(err=>{
                console.log(err)
             toast.error('Error') 
          })

    
  }
});
    }
    return (
  <div className="card bg-base-100 border-gray-300 shadow-xl  hover:scale-105 transition ease-in-out m-5 ">
  <div >
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
     <Link to={`/update-properties/${_id}`}  className='flex h-10 rounded-full btn btn-outline gap-2 border-gray-200 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
        Update
    </Link>
     <button onClick={handleDelete}  className='flex h-10 rounded-full  btn btn-outline gap-2 border-gray-200 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
        Delete
    </button>
   </div>
   <Link to={`/all-properties/${_id}`}  className='flex h-10 w-full btn btn-outline gap-2 border-gray-200 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
        View Details
    </Link>
  </div>
  </div>



  <Toaster></Toaster>
</div>

    );
};

export default UserCard;