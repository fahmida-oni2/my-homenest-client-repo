import React, { Suspense } from "react";
import Banner from "../../Components/Banner/Banner";
import "animate.css";
import ChoosingSec from "../../Components/ChoosingSec/ChoosingSec";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import LatestProperty from "../../Components/LatestProperty/LatestProperty";
import Statistics from "../../Components/Statistics/Statistics";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Logo from "../../Components/Logo/Logo";

const Home = () => {
  const latestPropertyPromise = fetch(
    "https://real-estate-api-server.vercel.app/latest-properties"
  ).then((res) => res.json());
  return (
    <div>
      <Banner></Banner>

      <section className=" py-16 bg-base-200 text-center px-4">
        <h2 className="text-4xl text-secondary font-black mb-4 animate__animated animate__fadeInDown">
          Our <span className="text-primary">Latest Properties</span>
        </h2>
        <p className="text-base-content/70 mb-12 animate__animated animate__fadeInUp">
          Effortlessly find, compare, and secure our latest properties.
        </p>
        <Suspense
          fallback={
            <div className="text-center  text-lg font-semibold text-indigo-500 animate-pulse">
              Loading the Latest Properties...
            </div>
          }
        >
          <LatestProperty latestPropertyPromise={latestPropertyPromise} />
        </Suspense>
      </section>

      <section className=" py-16 bg-base-100">
        <Logo></Logo>
      </section>
      <section className=" py-16 bg-base-100">
        <ChoosingSec></ChoosingSec>
      </section>
      <section className=" py-16 bg-base-100">
        <Statistics></Statistics>
      </section>

      <section className=" py-16 bg-base-100">
        <Testimonials></Testimonials>
      </section>
      {/* Agent */}
      <section className=" py-16 bg-base-200">
        <div className="ml-5 mr-5 mx-auto text-center px-4">
          <h2 className="text-4xl text-secondary font-black mb-4 animate__animated animate__fadeInDown">
            Meet Our <span className="text-primary">Expert Agents</span>
          </h2>
          <p className="text-base-content/70 mb-12 animate__animated animate__fadeInUp">
            Connect with our verified professionals to get the best market
            insights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Mike Rutter",
                id: "987654321",
                listings: 4,
                img: "https://i.ibb.co.com/DHtBCZ6F/image.png",
              },
              {
                name: "Janet Richmond",
                id: "987654322",
                listings: 2,
                img: "https://i.ibb.co.com/gLg1bZx5/person1.jpg",
              },
              {
                name: "Maria Barlo",
                id: "987654323",
                listings: 5,
                img: "https://i.ibb.co.com/7JGxC0QY/person2jpg.jpg",
              },
              {
                name: "Stephen Cheves",
                id: "987654325",
                listings: 3,
                img: "https://i.ibb.co.com/W4pVzyd5/person3.jpg",
              },
            ].map((agent, index) => (
              <div
                key={index}
                className="group flex flex-col items-center bg-base-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-base-300 animate__animated animate__fadeInUp"
              >
                <div className="relative mb-4">
                  <img
                    src={agent.img}
                    alt={agent.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-all"
                  />
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg">
                    {agent.listings} listings
                  </span>
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  {agent.name}
                </h3>
                <p className="text-xs text-primary font-semibold mb-3">
                  ID: {agent.id}
                </p>
                <p className="text-base-content/60 text-sm leading-relaxed mb-6">
                  Highly skilled professional with a strong reputation for
                  excellence in the real estate market.
                </p>
                <div className="flex space-x-4">
                  <Link
                    to="#"
                    className="text-base-content/40 hover:text-primary transition-colors text-xl"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    to="#"
                    className="text-base-content/40 hover:text-primary transition-colors text-xl"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    to="#"
                    className="text-base-content/40 hover:text-primary transition-colors text-xl"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
