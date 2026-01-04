import React from "react";
import { FaQuoteLeft, FaStar, FaBuilding } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Property Manager",
      company: "Skyline Realty",
      image: "https://i.pravatar.cc/150?u=sarah",
      text: "HomeNest transformed how we track property revenue. The dashboard is intuitive, fast, and the insights helped us increase occupancy by 15%.",
      stars: 5,
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Real Estate Investor",
      company: "Chen Capital",
      image: "https://i.pravatar.cc/150?u=marcus",
      text: "The most professional management tool I've used. Integrating my entire portfolio was seamless, and the automated reporting saves me hours every week.",
      stars: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Leasing Agent",
      company: "Urban Living",
      image: "https://i.pravatar.cc/150?u=elena",
      text: "Our tenants love the streamlined communication. HomeNest isn't just a backend tool; it's a bridge between us and our clients.",
      stars: 5,
    },
  ];

  return (
    <section className="bg-base-100 ml-5 mr-5 relative overflow-hidden">
      <div className=" mx-auto ml-5 mr-5 relative z-10">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl lg:text-5xl text-secondary font-black mb-4 animate__animated animate__fadeInDown">
            Trusted by the <span className="text-primary italic">Best</span> in
            the Industry
          </h2>

          <p className="text-base-content/70 max-w-2xl mx-auto text-lg font-medium animate__animated animate__fadeInUp">
            See how <span className="font-bold text-secondary">HomeNest</span>{" "}
            is redefining property management for thousands of users worldwide
            through transparency and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group p-8 rounded-3xl bg-base-200/50 border border-base-300 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <FaQuoteLeft size={40} />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" size={14} />
                ))}
              </div>

              <p className="text-base-content/70 leading-relaxed mb-8 font-medium">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="avatar">
                  <div className="w-14 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-2 transition-transform group-hover:scale-110">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-secondary tracking-tight">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs font-bold text-base-content/40 uppercase tracking-tighter">
                    <FaBuilding size={10} className="text-primary" />
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
