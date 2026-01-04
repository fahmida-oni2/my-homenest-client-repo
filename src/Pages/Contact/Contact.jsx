import React from "react";
import {
  FaPhoneFlip,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <div className="bg-secondary/50 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto">
          Have questions about a property or want to list your home? We're here
          to help you every step of the way.
        </p>
      </div>

      <div className="ml-5 mr-5 mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-gray-50 rounded-2xl flex items-center gap-4 border border-gray-100">
              <div className="bg-primary/10 p-4 rounded-xl text-primary">
                <FaPhoneFlip className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                  Call Us
                </p>
                <p className="text-secondary font-semibold">
                  +1 (555) 000-1234
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl flex items-center gap-4 border border-gray-100">
              <div className="bg-primary/10 p-4 rounded-xl text-primary">
                <FaEnvelope className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                  Email Us
                </p>
                <p className="text-secondary font-semibold">
                  support@homenest.com
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl flex items-center gap-4 border border-gray-100">
              <div className="bg-primary/10 p-4 rounded-xl text-primary">
                <FaLocationDot className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                  Visit Us
                </p>
                <p className="text-secondary font-semibold">
                  123 Real Estate Ave, Dhaka
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-base-100 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-base-100 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary ml-1">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-base-100 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                  <option>Buying a Property</option>
                  <option>Selling a Property</option>
                  <option>Property Management</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary ml-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl bg-base-100 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-secondary hover:shadow-none transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-sm" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
