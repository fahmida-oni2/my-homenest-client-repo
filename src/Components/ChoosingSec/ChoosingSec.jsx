import React from "react";
import "animate.css";

const ChoosingSec = () => {
  const reasons = [
    {
      title: "Expertise & Experience",
      desc: "Over 20 years of helping clients find their dream homes.",
      img: "https://i.ibb.co.com/9HcBM4nL/Experience.png",
      animation: "animate__fadeInLeft",
    },
    {
      title: "Wide Range of Listings",
      desc: "Thousands of verified listings across the city to match every need.",
      img: "https://i.ibb.co.com/PG4qrtZc/listing.png",
      animation: "animate__fadeInUp",
    },
    {
      title: "Verified Properties",
      desc: "All listings are thoroughly verified for your peace of mind.",
      img: "https://i.ibb.co.com/VcgCpcG5/trustes.jpg",
      animation: "animate__fadeInRight",
    },
    {
      title: "Personal Assistance",
      desc: "Dedicated experts to guide you from search to final deal.",
      img: "https://i.ibb.co.com/GQSHSKDC/assistance.jpg",
      animation: "animate__fadeInLeft",
    },
    {
      title: "Competitive Prices",
      desc: "Get the best value with our exclusive property deals.",
      img: "https://i.ibb.co.com/HfzVb94n/price.jpg",
      animation: "animate__fadeInUp",
    },
    {
      title: "Customer Reviews",
      desc: "Rated 4.9/5 by 500+ happy clients across the country.",
      img: "https://i.ibb.co.com/S4LmdkXG/ratings.jpg",
      animation: "animate__fadeInRight",
    },
  ];

  return (
    <div className="ml-5 mr-5 mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl text-secondary font-black mb-4 animate__animated animate__fadeInDown">
          Why Choose <span className="text-primary">HomeNest</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto animate__animated animate__fadeInUp">
          Effortlessly find, compare, and secure your dream home with 
          HomeNest—trusted by thousands for transparency and ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center text-center bg-base-100 p-8 rounded-2xl shadow-sm border border-base-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate__animated ${reason.animation}`}
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
              <img
                src={reason.img}
                alt={reason.title}
                className="relative h-20 w-20 rounded-full object-cover border-2 border-primary p-1 bg-white"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
              {reason.title}
            </h3>
            <p className="text-base-content/60 leading-relaxed">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoosingSec;