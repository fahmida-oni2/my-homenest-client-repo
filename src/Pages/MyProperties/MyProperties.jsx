import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading/Loading';
import UserCard from '../../Components/UserCard/UserCard';

const MyProperties = () => {
    const {user} = use(AuthContext)
    const [properties,setProperties] =useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`http://localhost:3000/my-properties?email=${user.email}`)
        .then(res=> res.json())
        .then(data=>{
           setProperties(data)
           setLoading(false)
        })
    },[])
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                    properties.map(property => (
                        <UserCard key={property._id} property={property}></UserCard>
                    ))}
                </div>
        </div>
    );
};

export default MyProperties;