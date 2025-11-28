import React, { use } from "react";
import LatestCard from "../LatestCard/LatestCard";

const LatestProperty = ({ latestPropertyPromise }) => {
  const properties = use(latestPropertyPromise);
  console.log(properties);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <LatestCard key={property._id} property={property}></LatestCard>
      ))}
    </div>
  );
};

export default LatestProperty;
