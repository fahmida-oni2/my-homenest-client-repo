import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Loading from "../../Components/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import RatingComponent from "../../Components/RatingComponent/RatingComponent";
import {
  HiOutlineMail,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUserCircle,
  HiOutlineArrowLeft,
} from "react-icons/hi";
import { RiMoneyDollarCircleLine, RiHomeSmileLine } from "react-icons/ri";

const defaultReviewValues = {
  reviewerName: "",
  reviewText: "",
  rating: 0,
};

const PropertyDetails = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const data = loaderData?.result || {};
  const {
    _id,
    propertyName,
    price,
    imageUrl,
    category,
    postedByName,
    postedByEmail,
    postedDate,
    location,
    description,
  } = data;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: defaultReviewValues,
  });

  if (!loaderData) return <Loading />;

  function onSubmit(reviewData) {
    const submissionPayload = {
      propertyId: _id,
      propertyName,
      price,
      imageUrl,
      ...reviewData,
      submissionDate: new Date().toISOString(),
    };

    const existingReviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    localStorage.setItem(
      "reviews",
      JSON.stringify([...existingReviews, submissionPayload])
    );
    toast.success("Review submitted to your nest!");
    navigate(`/dashboard/my-ratings`, {
      state: { reviewData: submissionPayload },
    });
  }

  return (
    <div className="bg-[#FAFBFF] min-h-screen pb-20">
      <div className="ml-5 mr-5 mx-auto px-4 pt-10">
        <Link
          to="/all-properties"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-6 font-medium"
        >
          <HiOutlineArrowLeft /> Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                className="w-full h-[500px] object-cover"
                src={imageUrl}
                alt={propertyName}
              />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <span className="badge badge-primary badge-lg py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-xs">
                  {category}
                </span>
                <div className="flex items-center gap-1 text-2xl font-black text-secondary">
                  <RiMoneyDollarCircleLine className="text-primary" />
                  {price}
                </div>
              </div>

              <h1 className="text-4xl font-black text-secondary mb-4 tracking-tight">
                {propertyName}
              </h1>

              <div className="flex items-center gap-2 text-gray-500 mb-8">
                <HiOutlineLocationMarker className="text-primary text-xl" />
                <span className="text-lg font-medium">{location}</span>
              </div>

              <hr className="border-gray-100 my-6" />

              <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                <RiHomeSmileLine className="text-primary" /> About This Nest
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-secondary text-lg mb-4">
                Listing Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                  <HiOutlineUserCircle className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      Posted By
                    </p>
                    <p className="text-sm font-bold text-secondary">
                      {postedByName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                  <HiOutlineMail className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      Contact Email
                    </p>
                    <p className="text-sm font-bold text-secondary">
                      {postedByEmail}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                  <HiOutlineCalendar className="text-primary text-2xl" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">
                      Date Listed
                    </p>
                    <p className="text-sm font-bold text-secondary">
                      {postedDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Form */}
            <div className="bg-base-100 p-8 rounded-3xl shadow-xl ">
              <h4 className="text-2xl font-black text-center mb-6">
                Leave a Review
              </h4>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="text-sm font-bold  ml-1">Your Name</label>
                  <input
                    type="text"
                    {...register("reviewerName", {
                      required: "Name is required",
                    })}
                    className="w-full mt-1 px-4 py-3 rounded-xl bg-base-100 border border-base/20  placeholder:text-white/30 outline-none focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold  ml-1">Rating</label>
                  <div className=" p-2 rounded-xl mt-1 border  border-base/20">
                    <Controller
                      name="rating"
                      control={control}
                      rules={{
                        validate: (v) =>
                          v > 0 || "Please provide a star rating",
                      }}
                      render={({ field }) => (
                        <RatingComponent {...field} name="rating" />
                      )}
                    />
                  </div>
                  {errors.rating && (
                    <p className="text-rose-400 text-xs mt-1">
                      {errors.rating.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-bold  ml-1">Message</label>
                  <textarea
                    rows="4"
                    {...register("reviewText", {
                      required: "Review text is required",
                      minLength: {
                        value: 10,
                        message: "Tell us more! (Min 10 chars)",
                      },
                    })}
                    className="w-full mt-1 px-4 py-3 rounded-xl  border border-base/20  placeholder:text-white/30 outline-none focus:border-primary transition-all"
                    placeholder="How was your experience?"
                  />
                  {errors.reviewText && (
                    <p className="text-rose-400 text-xs mt-1">
                      {errors.reviewText.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full py-4 rounded-xl border-none font-bold text-lg shadow-lg shadow-primary/30"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: { background: "#22C55E", color: "#fff" },
            iconTheme: { primary: "#fff", secondary: "#22C55E" },
          },
          error: {
            style: { background: "#EF4444", color: "#fff" },
            iconTheme: { primary: "#fff", secondary: "#EF4444" },
          },
        }}
      />
    </div>
  );
};

export default PropertyDetails;
