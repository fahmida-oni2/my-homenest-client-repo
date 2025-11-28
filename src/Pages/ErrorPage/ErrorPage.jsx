import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col min-h-screen bg-base-200 space-y-3 items-center justify-center">
        <img src={errorImg} alt="" />
        <h1 className="text-center font-extrabold text-4xl text-[#001931]">
          Oops, page not found!
        </h1>
        <p className="text-center  text-[#001931]">
          The page you are looking for is not available.
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
    </div>
  );
};

export default ErrorPage;
