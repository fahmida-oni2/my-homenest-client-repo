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

      <section className=" py-16 bg-gray-50">
        <ChoosingSec></ChoosingSec>
      </section>
       <section className=" py-16 bg-gray-50">
        <p>Real Estate Agents</p>
      </section>
      <section className=" py-16 bg-gray-50">
        <form>
          <div className="bg-base-200 max-w-6xl mx-auto  px-4">
            <div className="hero-content flex flex-col ">
              <div>
                <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
                  Make an Enquiry
                </h1>
              </div>
              <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body ">
                  <fieldset className="fieldset">
                    <label className="label font-bold text-black">Name</label>
                    <input
                      type="Name"
                      className="input"
                      placeholder="Name"
                      required
                    />
                    <label className="label font-bold text-black">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      required
                    />
                    <label className="label font-bold text-black">
                      Mobile No
                    </label>
                    <input
                      type="Mobile"
                      className="input"
                      placeholder="Mobile No"
                      required
                    />
                    <label className="label font-bold text-black">
                      Message{" "}
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Message"
                    />
                    <button className="btn btn-primary hover:bg-indigo-300 mt-4">
                      Submit
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Home;
