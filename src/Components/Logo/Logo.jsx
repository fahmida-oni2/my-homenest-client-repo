import "animate.css";

const Logo = () => {
  const brands = [
    "METROCITY",
    "URBAN_SPACE",
    "SKYLINE_INC",
    "DWELL_CO",
    "AVENUE_RE",
    "NEST_FINDER",
  ];

  return (
    <div className="w-full py-16 bg-base-100 overflow-hidden select-none">
      {/* Header Section - Matched to your "Why Choose" style */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl lg:text-5xl text-secondary font-black mb-4 animate__animated animate__fadeInDown">
          Our Global <span className="text-primary">Partners</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto animate__animated animate__fadeInUp">
          HomeNest collaborates with industry-leading agencies to ensure
          exclusive access to the most premium properties in the market.
        </p>
      </div>

      <div className="relative flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex gap-20 whitespace-nowrap animate__animated animate__slideInLeft animate__infinite marquee-linear py-2">
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-3xl lg:text-4xl font-black italic tracking-tighter text-secondary/20 hover:text-primary transition-all duration-500 cursor-default hover:scale-110"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-linear {
          animation-timing-function: linear !important;
          animation-duration: 35s !important;
        }
        .marquee-linear:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Logo;
