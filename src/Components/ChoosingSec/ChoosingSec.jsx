import React from "react";

const ChoosingSec = () => {
  return (
    <div className="max-w-6xl mx-auto text-center px-4">
      <h2 className="text-4xl text-black font-bold mb-4 animate__animated animate__fadeInDown">
        Why Choose Us
      </h2>
      <p className="text-gray-600 mb-12 animate__animated animate__fadeInUp">
        Effortlessly find, compare, and secure your dream home with
        HomeNest—trusted by thousands for transparency and ease.
      </p>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex  items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInLeft">
          <img
            src="https://i.ibb.co.com/9HcBM4nL/Experience.png"
            alt=""
            className="h-20 w-20 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-black">
            Expertise & Experience
          </h3>
          <p className="text-gray-500 text-center">
            Over 20 years of helping clients find their dream homes
          </p>
        </div>
        <div className="flex items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInUp">
          <img
            src="https://i.ibb.co.com/PG4qrtZc/listing.png"
            alt=""
            className="h-20 w-20 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-black">
            Wide Range of Listings
          </h3>
          <p className="text-gray-500 text-center">
            Thousands of verified listings across the city to match every need.
          </p>
        </div>
        <div className="flex  items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInRight">
          <img
            src="https://i.ibb.co.com/VcgCpcG5/trustes.jpg"
            alt="Learn"
            className="h-20 w-20 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-black">
            Verified & Trustworthy Properties
          </h3>
          <p className="text-gray-500 text-center">
            All listings are thoroughly verified for your peace of mind.
          </p>
        </div>
        <div className="flex  items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInRight">
          <img
            src="https://i.ibb.co.com/GQSHSKDC/assistance.jpg"
            alt="Learn"
            className="h-20 w-20 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-black">
            Personalized Assistance
          </h3>
          <p className="text-gray-500 text-center">
            Dedicated experts to guide you from search to final deal.
          </p>
        </div>
        <div className="flex  items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInRight">
          <img
            src="https://i.ibb.co.com/HfzVb94n/price.jpg"
            alt="Learn"
            className="h-20 w-20 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-black">
            Competitive Prices & Deals
          </h3>
          <p className="text-gray-500 text-center">
            Get the best value with our exclusive property deals.
          </p>
        </div>
        <div className="flex  items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 animate__animated animate__fadeInRight">
          <img
            src="https://i.ibb.co.com/S4LmdkXG/ratings.jpg"
            alt="Learn"
            className="h-20 w-20 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-black">
            Positive Customer <br /> Reviews
          </h3>
          <p className="text-gray-500 text-center">
            Rated 4.9/5 by 500+ happy clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChoosingSec;
