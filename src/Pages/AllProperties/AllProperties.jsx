import React, { useEffect, useState } from 'react';
import "animate.css";
import { useLoaderData, useLocation } from 'react-router';
import Card from '../../Components/Card/Card';
import Loading from '../../Components/Loading/Loading';
import ErrorProperty from '../../Components/ErrorProperty/ErrorProperty';

const AllProperties = () => {
    const data =useLoaderData()
    console.log(data)
      const [search, setSearch] = useState('')
     const [loading, setLoading] = useState(false); 
  const [filteredProperty, setFilteredProperty] = useState([]);
   const location = useLocation();
  let category = null;
  if (location.search.includes('category=')) {
    category = location.search.split('category=')[1];
  }

 useEffect(() => {
    if (!data.length) return;
    setLoading(true);

    const timer = setTimeout(() => {
      const baseData = category
        ? data.filter(property => property.category === category)
        : data;

      const results = search.trim()
        ? baseData.filter(property =>
            property.propertyName.toLowerCase().includes(search.toLowerCase())
          )
        : baseData;

      setFilteredProperty(results);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [data, search, category]);

const showNoResult = filteredProperty.length === 0 && search.trim().length > 0;
    return (
         <div className='flex flex-col min-h-screen'>
            <div className='pt-10'>
                    <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown text-center">All Properties</h1>
                     <p className="text-gray-600 text-center mb-12 animate__animated animate__fadeInUp">Explore All Properties.  </p>
         </div>
           <div className='lg:flex justify-between items-center mt-5 pl-5 pr-5 mb-5 '>
             <div className='font-bold text-2xl pb-5 lg:pb-0'> 
                ({filteredProperty.length}) Property Found
            </div>
                <label className="input gap-0">
  <span className="label"></span>
  <input value={search} onChange={e=> setSearch(e.target.value)} type="search" placeholder="Search property" />
</label>
           </div>
           {loading ? (
        <div className='flex justify-center items-center p-20'>
          <Loading></Loading>
        </div>
      ) : showNoResult ? (
                <div className='flex items-center justify-center p-20'>
                    <ErrorProperty searchTerm={search}></ErrorProperty>
                </div>
            ) : (
           <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                    filteredProperty.map(property => (
                        <Card key={property._id} property={property}></Card>
                    ))}
                </div>
            )}
        </div>

    );
};

export default AllProperties;