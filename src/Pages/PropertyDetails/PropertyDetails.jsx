import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Loading from '../../Components/Loading/Loading';
import { Controller } from 'swiper/modules';

const PropertyDetails = () => {
    const data =useLoaderData()
        console.log(data)
if (!data) {
        return <Loading></Loading>;
    }
    return (
        <div >
                 <div className='lg:flex grid grid-cols-1 gap-5 m-10  items-center  '>
                <div className=' mr-10'>
                    <img className='lg:w-250 lg:h-150 md:w-[200px] w-[250px] mx-auto lg:object-cover shadow-xl  border-gray-500   ' src={data.imageUrl} alt="" />
                </div>
                <div className='space-y-3 p-5'> 
                    <h1 className='font-extrabold text-3xl text-center'>{data.propertyName}</h1>
                    <p className='font-bold text-2xl text-center'>{data.category} Posted by <span className='text-[#632EE3]'>{data.postedByName}</span></p>
                    <p className='font-bold text-2xl text-center'>Contact Email:<span className='text-[#632EE3]'>{data.postedByEmail}</span></p>
                    <p className='font-bold text-2xl text-center'>Posted Date:<span className='text-[#632EE3]'>{data.postedDate}</span></p>
                    <div className='border-b border-solid border-b-gray-300 mt-5'>

                    </div>
                    <div className='lg:flex gap-2 m-5 justify-center items-center'>
                       
                        <div className='mr-10 flex gap-2 justify-center items-center'>
                            <p className='font-bold text-2xl text-center'> Location:</p>
                            <h1  className='font-extrabold text-2xl text-center'>{data.location}</h1>
                        </div>
                        <div className='mr-10 flex gap-2 justify-center items-center'>
                            <p className='font-bold text-2xl text-center'> Price:</p>
                            <h1  className='font-extrabold text-2xl text-center'>{data.price}</h1>
                        </div>
                       
                    </div>
                     <div className='mr-10'>
                            <p className='font-bold text-center text-3xl mb-3 border-b-2 border-solid border-b-gray-400'>Description</p>
                            <h1  className='font-extrabold text-2xl text-center'>{data.description}</h1>
                        </div>
                    
                </div>
              
            </div>
            <div className='flex justify-center items-center mb-5'>
                  <Link to='/all-properties' className='btn rounded-xl text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-50'>Go Back</Link>
              </div>
            <div className='border-b-2 border-solid border-b-gray-400 mb-5 ml-7 mr-7'>
            </div>

        </div>
    );
};

export default PropertyDetails;