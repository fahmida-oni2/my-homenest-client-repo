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
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { IoBedOutline, IoWaterOutline, IoExpandOutline } from "react-icons/io5";
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
    status,
    area,
    bedrooms,
    bathrooms,
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
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <Link
          to="/all-properties"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-6 font-bold group"
        >
          <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white bg-white animate__animated animate__fadeIn">
              <img
                className="w-full h-[550px] object-cover"
                src={imageUrl}
                alt={propertyName}
              />
              <div className="absolute top-6 left-6 flex gap-3">
                <div className="badge badge-primary font-black py-5 px-6 shadow-xl uppercase tracking-tighter italic">
                  {category}
                </div>
                {status === "Verified" && (
                  <div className="badge bg-green-500 border-none text-white font-black py-5 px-6 shadow-xl flex gap-2 uppercase tracking-tighter">
                    <HiOutlineShieldCheck size={18} /> {status}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                <div className="space-y-2">
                  <h1 className="text-5xl font-black text-secondary tracking-tight leading-none">
                    {propertyName}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-400">
                    <HiOutlineLocationMarker className="text-primary text-xl" />
                    <span className="text-xl font-medium">{location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-1">
                    Listing Price
                  </span>
                  <span className="text-4xl font-black text-secondary tracking-tighter">
                    {price}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { icon: <IoBedOutline />, label: "Bedrooms", val: bedrooms },
                  {
                    icon: <IoWaterOutline />,
                    label: "Bathrooms",
                    val: bathrooms,
                  },
                  {
                    icon: <IoExpandOutline />,
                    label: "Living Area",
                    val: area,
                  },
                ].map((spec, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center justify-center border border-transparent hover:border-primary/20 hover:bg-white transition-all"
                  >
                    <div className="text-primary text-3xl mb-2">
                      {spec.icon}
                    </div>
                    <span className="text-2xl font-black text-secondary tracking-tighter">
                      {spec.val}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">
                      {spec.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-secondary flex items-center gap-2">
                  <RiHomeSmileLine className="text-primary" /> About this Nest
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg font-medium italic">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="font-black text-secondary text-xl mb-6 tracking-tight italic">
                The Agent
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <HiOutlineUserCircle className="text-primary text-3xl" />
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-gray-400 font-black uppercase">
                      Property Owner
                    </p>
                    <p className="font-bold text-secondary truncate">
                      {postedByName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <HiOutlineMail className="text-primary text-3xl" />
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-gray-400 font-black uppercase">
                      Direct Email
                    </p>
                    <p className="font-bold text-secondary truncate">
                      {postedByEmail}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <HiOutlineCalendar className="text-primary text-3xl" />
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase">
                      Published
                    </p>
                    <p className="font-bold text-secondary">{postedDate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-base-100 p-10 rounded-[2.5rem] shadow-2xl ">
              <h4 className="text-3xl font-black text-center mb-8 tracking-tighter uppercase italic">
                Leave a <span className="text-primary">Review</span>
              </h4>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("reviewerName", {
                      required: "Name is required",
                    })}
                    className="w-full px-5 py-4 rounded-2xl bg-base-300k border border-black bg-white/5  placeholder:text-base/20 focus:border-primary outline-none transition-all font-bold"
                    placeholder="E.g. John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest  ml-1">
                    Rating
                  </label>
                  <div className="p-4 rounded-2xl bg-white/5 border border-black flex justify-center">
                    <Controller
                      name="rating"
                      control={control}
                      rules={{ validate: (v) => v > 0 || "Rating required" }}
                      render={({ field }) => (
                        <RatingComponent {...field} name="rating" />
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest  ml-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    {...register("reviewText", {
                      required: "Text required",
                      minLength: { value: 10, message: "Min 10 chars" },
                    })}
                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-black  placeholder:text-base/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Describe your visit..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full h-16 rounded-2xl border-none font-black text-xl uppercase tracking-widest shadow-xl shadow-primary/30"
                >
                  Post Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default PropertyDetails;
