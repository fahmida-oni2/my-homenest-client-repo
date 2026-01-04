import React from "react";
import {
  FaHouseFlag,
  FaHandshakeAngle,
  FaUsersGear,
  FaAward,
} from "react-icons/fa6";
import logo from "../../assets/real-estate-logo.jpg";

const About = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <section className="bg-secondary/50 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <img
            src={logo}
            alt="HomeNest Logo"
            className="h-24 w-24 rounded-full border-4 border-primary p-1 bg-white mb-8 shadow-2xl"
          />
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Building Dreams <span className="text-primary">Since 2005</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            At HomeNest, we don't just sell properties; we find the spaces where
            memories are made. With over two decades of experience, we've become
            a cornerstone of the real estate community.
          </p>
        </div>
      </section>

      <section className="mx-auto px-4 -mt-10 ml-5 mr-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Properties Sold", value: "15k+" },
            { label: "Happy Clients", value: "12k+" },
            { label: "Expert Agents", value: "150+" },
            { label: "Awards Won", value: "25+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center"
            >
              <h3 className="text-3xl font-black text-secondary">
                {stat.value}
              </h3>
              <p className="text-xs uppercase tracking-widest text-primary font-bold mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto ml-5 mr-5 px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              Our Mission: Redefining the{" "}
              <span className="text-primary">Real Estate</span> Experience.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We started with a simple belief: the process of buying or selling
              a home should be transparent, stress-free, and deeply personal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team combines cutting-edge market data with old-fashioned
              local expertise to ensure you get the best value, whether you're a
              first-time buyer or a seasoned investor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400"
                  alt="Modern office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 bg-primary rounded-2xl flex items-center justify-center p-6 text-white text-center">
                <p className="font-bold italic text-lg">
                  "The best way to predict the future is to create it."
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=400"
                  alt="Luxury home"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 bg-secondary rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=400"
                  alt="Neighborhood"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-4 ml-5 mr-5">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary">
              Our Core Values
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<FaHouseFlag />}
              title="Integrity First"
              desc="Honesty and transparency are at the heart of every handshake."
            />
            <ValueCard
              icon={<FaHandshakeAngle />}
              title="Client Focused"
              desc="Your goals are our priority. We listen, then we deliver."
            />
            <ValueCard
              icon={<FaUsersGear />}
              title="Expertise"
              desc="Navigating the market with data-driven insights and experience."
            />
            <ValueCard
              icon={<FaAward />}
              title="Excellence"
              desc="We don't settle for average results. We strive for the best."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-primary text-4xl flex justify-center">{icon}</div>
    <h4 className="text-xl font-bold text-secondary">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default About;
