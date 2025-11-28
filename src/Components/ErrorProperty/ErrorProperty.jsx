import React from "react";
import { Link } from "react-router";

const ErrorProperty = () => {
  return (
    <div className="flex flex-col min-h-screen  space-y-3 items-center justify-center">
      <h1 className="text-center font-extrabold text-4xl ">
        OPPS!! Property NOT FOUND
      </h1>
      <p className="text-center  ">
        The Property you are requesting is not found on our website. please try
        another property
      </p>
      <div className="flex items-center justify-center">
        <Link
          to="/"
          className="btn rounded-xl text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorProperty;
