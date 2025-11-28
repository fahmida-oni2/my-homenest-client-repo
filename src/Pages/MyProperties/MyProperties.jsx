import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import UserCard from "../../Components/UserCard/UserCard";

const MyProperties = () => {
  const { user } = use(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://real-estate-api-server.vercel.app/my-properties?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-5">Your Properties</h1>
      <div className="">
        {properties.length === 0 ? (
          <p className="text-center">No properties found for your account.</p>
        ) : (
          <div className="grid grid-cols-1  lg:grid-cols-3">
            {properties.map((property) => (
              <UserCard key={property._id} property={property}></UserCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProperties;
