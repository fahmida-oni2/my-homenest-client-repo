import React from "react";
import Banner from "../../Components/Banner/Banner";
import "animate.css";
import ChoosingSec from "../../Components/ChoosingSec/ChoosingSec";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
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
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
            Real Estate Agent
          </h2>
          <p className="text-gray-600 mb-12 animate__animated animate__fadeInUp">
           Meet Our agents and get their contact details and link to their agent
            profile.
          </p>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md   animate__animated animate__fadeInLeft">
        <div>
            <img src="https://i.ibb.co.com/DHtBCZ6F/image.png" alt="" className="w-full h-48 object-cover"/>
        <span class="absolute bg-primary bottom-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
            4 listings
        </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Mike Rutter</h3>
        <p class="text-sm text-gray-600 mt-1">Member ID: 987654321</p>
        <p class="text-gray-700 mt-4 text-sm leading-relaxed">
            Mike Rutter is a highly skilled and personable real estate agent with a strong reputation ...
        </p>
       <div class="flex justify-between items-center mt-6 pt-4  border-gray-200">
            <div class="flex space-x-3 text-gray-500 text-lg">
                <Link href="" className="hover:text-blue-600">
                    <FaFacebook></FaFacebook>
                </Link>
                <Link href="" className="hover:text-blue-600">
                   <FaXTwitter></FaXTwitter>
                </Link>
                <Link href="" className="hover:text-blue-600">
                    <FaLinkedin></FaLinkedin>
                </Link>
            </div>
      </div>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md   animate__animated animate__fadeInLeft">
        <div>
            <img src="https://i.ibb.co.com/gLg1bZx5/person1.jpg" alt="" className="w-full h-48 object-cover"/>
        <span class="absolute bg-primary bottom-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
            2 listings
        </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Janet Richmond</h3>
        <p class="text-sm text-gray-600 mt-1">Member ID: 987654322</p>
        <p class="text-gray-700 mt-4 text-sm leading-relaxed">
            Janet Richmond is a highly skilled and personable real estate agent with a strong reputation ...
        </p>
         <div class="flex justify-between items-center mt-6 pt-4  border-gray-200">
            <div class="flex space-x-3 text-gray-500 text-lg">
                <Link href="" className="hover:text-blue-600">
                    <FaFacebook></FaFacebook>
                </Link>
                <Link href="" className="hover:text-blue-600">
                   <FaXTwitter></FaXTwitter>
                </Link>
                <Link href="" className="hover:text-blue-600">
                    <FaLinkedin></FaLinkedin>
                </Link>
            </div>
      </div>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md   animate__animated animate__fadeInLeft">
        <div>
            <img src="https://i.ibb.co.com/7JGxC0QY/person2jpg.jpg" alt="" className="w-full h-48 object-cover"/>
        <span class="absolute bg-primary bottom-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
            5 listings
        </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Maria Barlo</h3>
        <p class="text-sm text-gray-600 mt-1">Member ID: 987654323</p>
        <p class="text-gray-700 mt-4 text-sm leading-relaxed">
            Maria Barlo is a highly skilled and personable real estate agent with a strong reputation ...
        </p>
        <div class="flex justify-between items-center mt-6 pt-4  border-gray-200">
            <div class="flex space-x-3 text-gray-500 text-lg">
                <Link href="" className="hover:text-blue-600">
                    <FaFacebook></FaFacebook>
                </Link>
                <Link href="" className="hover:text-blue-600">
                   <FaXTwitter></FaXTwitter>
                </Link>
                <Link href="" className="hover:text-blue-600">
                    <FaLinkedin></FaLinkedin>
                </Link>
            </div>
      </div>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md   animate__animated animate__fadeInLeft">
        <div>
            <img src="https://i.ibb.co.com/W4pVzyd5/person3.jpg" alt="" className="w-full h-48 object-cover"/>
        <span class="absolute  bottom-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
            3 listings
        </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Stephen Cheves</h3>
        <p class="text-sm text-gray-600 mt-1">Member ID: 987654325</p>
        <p class="text-gray-700 mt-4 text-sm leading-relaxed">
            Stephen Cheves is a highly skilled and personable real estate agent with a strong reputation ...
        </p>
        <div class="flex justify-between items-center mt-6 pt-4  border-gray-200">
            <div class="flex space-x-3 text-gray-500 text-lg">
                <Link href="" className="hover:text-blue-600">
                    <FaFacebook></FaFacebook>
                </Link>
                <Link href="" className="hover:text-blue-600">
                   <FaXTwitter></FaXTwitter>
                </Link>
                <Link href="" className="hover:text-blue-600">
                    <FaLinkedin></FaLinkedin>
                </Link>
            </div>
      </div>
    </div>
        </div>
        </div>
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
                      Message
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
