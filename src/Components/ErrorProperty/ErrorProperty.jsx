import React from "react";
import { Link } from "react-router";
import { HiOutlineHomeModern, HiOutlineMagnifyingGlass } from "react-icons/hi2";

const ErrorProperty = ({ searchTerm }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 min-h-[60vh] animate__animated animate__fadeIn">
  
      <div className="relative mb-8">
        <div className="bg-primary/10 p-10 rounded-full">
          <HiOutlineHomeModern className="text-primary text-7xl" />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-full shadow-lg">
          <HiOutlineMagnifyingGlass className="text-secondary text-2xl font-black" />
        </div>
      </div>

  
      <div className="text-center max-w-md space-y-4">
        <h1 className="text-3xl md:text-4xl font-black text-secondary tracking-tight">
          Nest Not Found
        </h1>
        
        <p className="text-gray-500 leading-relaxed">
          {searchTerm ? (
            <>
              We couldn't find any properties matching <span className="font-bold text-primary italic">"{searchTerm}"</span>. 
              Try adjusting your filters or searching for something else.
            </>
          ) : (
            "The property you're looking for seems to have flown the nest. Let's find you a different one!"
          )}
        </p>
      </div>

     
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link
          to="/all-properties"
          className="btn btn-secondary border-none px-8 py-3 rounded-2xl text-white font-bold shadow-lg shadow-secondary/20 transition-all hover:-translate-y-1"
        >
          View All Properties
        </Link>
        
        <Link
          to="/"
          className="btn btn-ghost text-primary font-bold hover:bg-primary/5 rounded-2xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorProperty;