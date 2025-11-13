import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router";

const MyRatings = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadReviews = () => {
      try {
        const storedReviews = JSON.parse(
          localStorage.getItem("reviews") || "[]"
        );
        setAllReviews(storedReviews);
      } catch (error) {
        setAllReviews([]); 
      } finally {
        setIsLoading(false);
      }
    };

    loadReviews();
  }, []);
  if (isLoading) {
    return <Loading></Loading>;
  }

  if (allReviews.length === 0) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-bold text-gray-700">
          No Reviews Saved Locally
        </h2>
        <p>Submit a review to see it here!</p>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto p-6 my-10">
      <h1 className="text-3xl font-extrabold  mb-8 border-b pb-2">
        All Saved Reviews ({allReviews.length})
      </h1>

      <div className="space-y-6 ">
        {allReviews.map((review, index) => (
          <div
            key={index}
            className="bg-white flex flex-col lg:flex-row gap-5 shadow-lg rounded-lg p-5 border border-gray-100 transition duration-300 hover:shadow-xl"
          >
            {review.imageUrl && (
              <img
                src={review.imageUrl}
                alt=''
                className="w-60 h-50 rounded-md mb-3"
              />
            )}

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {review.propertyName}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                Reviewed by:{review.reviewerName}
              </p>

              <p className="text-lg font-semibold text-yellow-600">
                Rating: {review.rating} / 5 Stars
              </p>

              <div className="mt-3 p-3 bg-gray-50 rounded-md">
                <p className="italic text-gray-700">"{review.reviewText}"</p>
              </div>

              <p className="text-xs text-gray-400 mt-3 text-right">
                {new Date(review.submissionDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
       <div className="flex justify-center items-center mb-5 mt-5">
        <Link
          to="/all-properties"
          className="btn rounded-xl text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-50"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MyRatings;
