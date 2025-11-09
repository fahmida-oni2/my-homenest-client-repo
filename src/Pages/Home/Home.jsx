import React from "react";
import Banner from "../../Components/Banner/Banner";
import "animate.css";
import ChoosingSec from "../../Components/ChoosingSec/ChoosingSec";
const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <section>
        <p>Featured real estate section</p>
      </section>

      <section className=" py-16 bg-gray-50"></section>
       <ChoosingSec></ChoosingSec>
      <section>
        <p>Real Estate Agents</p>
      </section>
      
      <section>
        <p>Design Custom Real Estate Inquiry Forms</p>
      </section>
    </div>
  );
};

export default Home;
