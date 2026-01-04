import React from "react";
import logo from "../../assets/real-estate-logo.jpg";
import { FaXTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          
          {/* 1. Brand Identity Section */}
          <aside className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img 
                src={logo} 
                alt="HomeNest Logo" 
                className="h-16 w-16 rounded-full border-2 border-primary p-0.5 bg-white" 
              />
              <div>
                <h2 className="text-3xl font-black tracking-tight">
                  Home<span className="text-secondary">Nest</span>
                </h2>
                <p className="text-xs uppercase tracking-widest text-primary font-bold">
                  Since 2005
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm text-gray-300 leading-relaxed mx-auto md:mx-0">
              Providing reliable, transparent, and expert real estate services to help you find your perfect space.
            </p>
          </aside>

          {/* 2. Quick Links Section (NEW) */}
          <div className="text-center md:text-left">
            <h6 className="text-secondary font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h6>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a href="/about" className="hover:text-primary transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="/all-properties" className="hover:text-primary transition-colors duration-300">Properties</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors duration-300">Contact Support</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* 3. Newsletter Section */}
          <div className="w-full">
            <h6 className="text-secondary font-bold mb-6 uppercase tracking-wider text-sm text-center md:text-left">
              Subscribe to our Newsletter
            </h6>
            <div className="join w-full shadow-lg">
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered join-item w-full  border-white/10 text-secondary focus:outline-none focus:border-primary transition-colors"
              />
              <button className="btn btn-primary join-item px-6 text-white border-none">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-gray-800 mt-4 text-center md:text-left italic">
              * Get the latest property listings and market updates directly in your inbox.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} <span className="text-secondary font-semibold">HomeNest</span>. All rights reserved.
          </p>

          <nav className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Twitter"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="YouTube"
            >
              <FaYoutube className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;