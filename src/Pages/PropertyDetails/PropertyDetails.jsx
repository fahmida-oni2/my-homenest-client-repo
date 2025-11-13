import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Loading from "../../Components/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import RatingComponent from "../../Components/RatingComponent/RatingComponent";
import { AuthContext } from "../../Provider/AuthProvider";
const defaultReviewValues = {
  reviewerName: "",
  reviewText: "",
  rating: 0,
};
const PropertyDetails = () => {
  const data = useLoaderData();
  console.log(data)
  const navigate = useNavigate();
  const { _id, propertyName, price, imageUrl } = data;
  if (!data) {
    return <Loading></Loading>;
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: defaultReviewValues,
  });

  function onSubmit(reviewData) {
    const submissionPayload = {
      propertyId: _id,
      propertyName: propertyName,
      price: price,
      imageUrl: imageUrl,
      ...reviewData,
      submissionDate: new Date().toISOString(),
    };

    const existingReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    const updatedReviews = [...existingReviews, submissionPayload];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    toast.success("Review submitted");
    navigate(`/my-ratings`, { state: { reviewData: submissionPayload } });
  }

  return (
    <div>
      <div className="lg:flex grid grid-cols-1 gap-5 m-10  items-center  ">
        <div className=" mr-10">
          <img
            className="lg:w-150 lg:h-100 md:w-[200px] w-[250px] mx-auto lg:object-cover shadow-xl  border-gray-500   "
            src={data.imageUrl}
            alt=""
          />
        </div>
        <div className="space-y-3 p-5">
          <h1 className="font-extrabold text-3xl text-center">
            {data.propertyName}
          </h1>
          <p className="font-bold text-2xl text-center">
            Category: {data.category}
          </p>
           <p className="font-bold text-2xl text-center">
    Posted by: <span className="text-[#632EE3]">{data.postedByName}</span>
          </p>
          <p className="font-bold text-2xl text-center">
            Contact Email:
            <span className="text-[#632EE3]">{data.postedByEmail}</span>
          </p>
          <p className="font-bold text-2xl text-center">
            Posted Date:
            <span className="text-[#632EE3]">{data.postedDate}</span>
          </p>
          <div className="border-b border-solid border-b-gray-300 mt-5"></div>
          <div className="lg:flex gap-2 m-5 justify-center items-center">
            <div className="mr-10 flex gap-2 justify-center items-center">
              <p className="font-bold text-2xl text-center"> Location:</p>
              <h1 className="font-extrabold text-2xl text-center">
                {data.location}
              </h1>
            </div>
            <div className="mr-10 flex gap-2 justify-center items-center">
              <p className="font-bold text-2xl text-center"> Price:</p>
              <h1 className="font-extrabold text-2xl text-center">
                {data.price}
              </h1>
            </div>
          </div>
          <div className="mr-10">
            <p className="font-bold text-center text-3xl mb-3 border-b-2 border-solid border-b-gray-400">
              Description
            </p>
            <h1 className="font-extrabold text-2xl text-center">
              {data.description}
            </h1>
          </div>
        </div>
      </div>

      {/* --- Review Submission Form (Replacing Enrollment Form) --- */}
       <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-full lg:max-w-sm shrink-0 shadow-2xl hero-content flex-col mt-5 lg:mt-0">
        <div className="card-body p-6 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pt-3 border-t mt-3 border-gray-200 space-y-3"
          >
            <h4 className="text-2xl font-bold text-center ">
              Submit Your Review
            </h4>

            <div>
              <label
                htmlFor="reviewerName"
                className="label block text-base font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
               id="reviewerName"
                name="UserName"
               {...register("reviewerName")}
                className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-600 sm:text-sm cursor-not-allowed"
              />
              {errors.reviewerName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.reviewerName.message}
                </p>
              )}
            </div>
              <label className="label block text-base font-medium mb-2">
                Your Rating
              </label>
              <Controller
                name="rating"
                control={control}
                rules={{
                  validate: (value) =>
                    value > 0 || "Please provide a star rating",
                }}
                render={({ field }) => (
                  <RatingComponent
                    {...field}
                    name="rating" 
                  />
                )}
              />
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rating.message}
                </p>
              )}
              <div>
              <label
                htmlFor="reviewText"
                className="label block text-base font-medium"
              >
                Review Text
              </label>
              <textarea
                id="reviewText"
                rows="4"
                {...register("reviewText", {
                  required: "Review text is required",
                  minLength: { value: 10, message: "Minimum 10 characters" },
                })}
                className="input w-full p-3 border border-gray-300 rounded-lg focus:ring-[#632EE3] focus:border-[#632EE3]"
                placeholder="Write your review here..."
              />
              {errors.reviewText && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.reviewText.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-full py-3 rounded-lg font-semibold text-lg transition shadow-md"
            >
              Submit 
            </button>
          </form>
        </div>
        </div>
    </div>
      <div className="flex justify-center items-center mb-5 mt-5">
        <Link
          to="/all-properties"
          className="btn rounded-xl text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-50"
        >
          Go Back
        </Link>
      </div>
      <div className="border-b-2 border-solid border-b-gray-400 mb-5 ml-7 mr-7"></div>
      <Toaster></Toaster>
    
    </div>
  );
};

export default PropertyDetails;
