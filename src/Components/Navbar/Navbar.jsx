import React from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router';
import logo from '../../assets/real-estate-logo.jpg'
const Navbar = () => {
    const links = <>
    <li><NavLink  to='/' className='m-2'>Home</NavLink></li>
    <li><NavLink to='/all-properties'  className='m-2'>All Properties</NavLink></li>
    <li><NavLink to='/add-properties'  className='m-2'>Add Properties</NavLink></li>
    <li><NavLink to='/my-properties'  className='m-2'>My Properties</NavLink></li>
    <li><NavLink to='/my-ratings'  className='m-2'>My Ratings</NavLink></li>
    </>
    return (
     <div className="navbar bg-base-100 shadow-sm flex justify-evenly">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="0"
        className="menu menu-sm dropdown-content bg-base-100  rounded-box z-1 mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
     <img src={logo} className='h-12 w-12 ' alt="" /> 
    <Link to='/' className=" text-xl font-extrabold text-sky-800">HomeNest</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>

<div className="navbar-end flex flex-col lg:flex-row  lg:mt-0 ml-20 gap-2 ">
      <Link to='/auth/login' className='btn btn-primary hover:bg-indigo-300'>Login</Link>
    <Link to='/auth/register' className='btn btn-primary  w-18 lg:w-22 hover:bg-indigo-300'>Sign Up</Link>
</div>
  </div>)
  
 
};

export default Navbar;