import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200 selection:bg-primary selection:text-white">
      <div className="flex flex-col flex-grow items-center justify-center p-6 text-center animate__animated animate__fadeIn">
        <div className="max-w-md mb-8 transition-transform hover:scale-105 duration-500">
          <img
            src={errorImg}
            alt="404 Error"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        <div className="space-y-4 max-w-lg">
          <h1 className="text-5xl lg:text-6xl font-black text-secondary tracking-tighter">
            Oops! <span className="text-primary">Lost</span> in Space?
          </h1>

          <p className="text-lg text-base-content/70 font-medium px-4">
            The page you're looking for has moved or doesn't exist. Let's get
            you back to familiar territory.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            to="/"
            className="btn btn-primary btn-lg rounded-2xl text-white shadow-lg shadow-primary/30 gap-2 normal-case"
          >
            <FaHome className="text-lg" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-secondary btn-lg rounded-2xl gap-2 normal-case"
          >
            <FaArrowLeft className="text-lg" />
            Go Previous
          </button>
        </div>

        <div className="mt-16 text-base-content/30 text-xs font-bold uppercase tracking-[0.2em]">
          Error Code: 404 // HomeNest Security
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
