import React from "react";
import {
  FaBuildingUser,
  FaHouseCircleCheck,
  FaHandHoldingHeart,
  FaAward,
} from "react-icons/fa6";

const Statistics = () => {
  const stats = [
    {
      id: 1,
      icon: <FaHouseCircleCheck />,
      value: "2,500+",
      label: "Properties Sold",
      description: "Successfully closed deals across the country.",
    },
    {
      id: 2,
      icon: <FaBuildingUser />,
      value: "150+",
      label: "Expert Agents",
      description: "Verified professionals at your service.",
    },
    {
      id: 3,
      icon: <FaHandHoldingHeart />,
      value: "98%",
      label: "Happy Clients",
      description: "Customer satisfaction is our top priority.",
    },
    {
      id: 4,
      icon: <FaAward />,
      value: "18+",
      label: "Years Experience",
      description: "Trust built through decades of excellence.",
    },
  ];

  return (
    <section className="py-20 bg-base-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <div className="ml-5 mr-5 mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-secondary  font-black mb-4 animate__animated animate__fadeInDown">
            HomeNest <span className="text-primary">By The Numbers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate__animated animate__fadeInUp">
            Our growth is a reflection of the trust our clients place in us
            every day. Explore the milestones that define our commitment to
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group p-8 rounded-3xl bg-primary/10 border border-white/10 hover:border-primary/50 transition-all duration-500 text-center animate__animated animate__fadeInUp"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary text-4xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-black text-secondary mb-2 tracking-tight">
                {stat.value}
              </h3>

              <p className="text-primary font-bold uppercase tracking-widest text-[10px] mb-3">
                {stat.label}
              </p>

              <p className="text-base-200text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
