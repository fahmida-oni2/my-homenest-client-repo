import React from "react";
import logo from "../../assets/real-estate-logo.jpg";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <footer className="footer lg:flex justify-between items-center bg-black text-white border-base-300 border-t px-10 py-4">
        <aside>
          <figure>
            <img src={logo} alt="" className="h-20 w-20 rounded-full" />
          </figure>
          <p>
            HomeNest
            <br />
            Providing reliable real estate services since 1992
          </p>
        </aside>
        <nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item text-black"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>{" "}
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal  bg-black text-white p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
         <nav className="">
          <div className="grid grid-flow-col gap-4">
            <a >
              <CiFacebook className="h-10 w-10" />
            </a>
            <a>
              <FaXTwitter className="h-10 w-10" />
            </a>
            <a>
              <FaYoutube className="h-10 w-10" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
