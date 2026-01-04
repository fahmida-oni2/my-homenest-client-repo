import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "animate.css";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="m-5 mt-1 rounded-xl overflow-hidden shadow-2xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-100 "
      >
        <SwiperSlide>
          <div
            className="hero h-100"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/LG30919/pexels-energepic-com-27411-313691.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-secondary/50 to-transparent"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl lg:text-7xl font-black animate__animated animate__fadeInDown">
                  Welcome to <span className="text-primary">HomeNest</span>
                </h1>
                <p className="mb-8 text-xl lg:text-2xl font-medium animate__animated animate__fadeInUp italic">
                  A Real Estate Listing Portal
                </p>
                <Link
                  to="/all-properties"
                  className="btn btn-primary text-white px-8 animate__animated animate__zoomIn"
                >
                  Browse Properties
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero h-100"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/QF9JVZ7T/pexels-jessica-bryant-592135-1370704.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-secondary/50 to-transparent"></div>
            <div className="hero-content text-neutral-content">
              <div className="max-w-3xl space-y-6 text-center">
                <h2 className="text-4xl lg:text-6xl font-bold">
                  Find Your <span className="text-primary">Dream Home</span>
                </h2>
                <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                  We are recognized for exceeding client expectations and
                  delivering great results through dedication, ease of process,
                  and extraordinary services to our worldwide clients.
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    to="/auth/register"
                    className="btn btn-primary text-white"
                  >
                    Get Started
                  </Link>
                  <Link to="/about" className="btn btn-outline btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero h-100"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/99pRvbfJ/pexels-falling4utah-2724748.jpg)",
            }}
          >
            <div className="hero-overlay bg-gradient-to-r from-secondary/50 to-transparent"></div>
            <div className="hero-content text-neutral-content flex flex-col lg:flex-row items-center">
              <div className="max-w-2xl space-y-6 text-center lg:text-left">
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Search. Compare. <br />
                  <span className="text-primary">Secure Your Space</span>
                </h2>
                <p className="text-lg lg:text-xl opacity-90">
                  Discover a seamless way to explore verified listings tailored
                  to your needs. Make confident property decisions with clarity,
                  speed, and trust.
                </p>
                <Link
                  to="/all-properties"
                  className="btn btn-primary text-white btn-lg"
                >
                  Start Searching
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
