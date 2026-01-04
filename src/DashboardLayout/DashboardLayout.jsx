import React from "react";
import { FaTicketAlt, FaUserAlt } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import { TbTransactionDollar } from "react-icons/tb";
import { MdRateReview } from "react-icons/md";
import logo from '../assets/real-estate-logo.jpg'

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
        {/* Dashboard Header/Navbar */}
        <nav className="navbar w-full bg-base-100 shadow-sm border-b border-base-300 sticky top-0 z-10">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-bold text-secondary">Dashboard</div>
        </nav>

      
        <div className="p-8 pb-4 animate__animated animate__fadeInDown">
          <div className="border-b-2 border-base-300 pb-5">
             <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary">
               Welcome to <span className="text-primary">HomeNest</span> Dashboard
             </h1>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8 pt-0 grow">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        
        <div className="menu p-4 w-64 min-h-full bg-base-100 text-base-content border-r border-base-300">
          {/* Brand/Logo Section */}
          <div className="flex items-center gap-3 px-2 mb-8">
            <img src={logo} className="h-10 w-10 rounded-lg shadow-sm" alt="Logo" />
            <span className="text-xl font-black text-secondary tracking-tight">HomeNest</span>
          </div>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                <span className="flex items-center gap-3 font-medium">
                   🏠 Homepage
                </span>
              </Link>
            </li>



            <li>
              <NavLink to="/dashboard/profile" className={({isActive}) => isActive ? "active" : ""}>
                <FaUserAlt className="text-lg" />
                My Profile
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/my-properties">
                <FaTicketAlt className="text-lg" />
                My Properties
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/add-properties">
                <TbTransactionDollar className="text-lg" />
                Add Properties
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/my-ratings">
                <MdRateReview className="text-lg" />
                My Ratings
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;