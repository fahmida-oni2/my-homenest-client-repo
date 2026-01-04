import "./Navbar.css";
import { Link, NavLink } from "react-router";
import logo from "../../assets/real-estate-logo.jpg";
import toast, { Toaster } from "react-hot-toast";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "HomeNest"
  );

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // handle theme
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "HomeNest");
  };
  const handleLogOut = () => {
    signOutUser()
      .then((result) => {
        toast.success("SignOut successfully");
        setIsDropdownOpen(false);
      })
      .catch((error) => {
        toast.error("Logout failed. Please try again.");
      });
  };
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const links = (
    <>
      <li>
        <NavLink to="/" className="m-2">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-properties" className="m-2">
          All Properties
        </NavLink>
      </li>
       <li>
        <NavLink to="/about" className="m-2">
          About
        </NavLink>
      </li>
       <li>
        <NavLink to="/contact" className="m-2">
          Contact Us
        </NavLink>
      </li>
       <li>
        <NavLink to="/privacy" className="m-2">
          Privacy Policy
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard" className="m-2">
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li>
        <div className="flex justify-start m-2">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            checked={theme === "dark"}
            className="toggle"
          />
        </div>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 text-base-content  rounded-box z-10 mt-3 w-52 p-2 shadow border border-base-300"
          >
            {links}
          </ul>
        </div>
        <img src={logo} className="h-10 w-10 mr-2 " alt="" />
        <Link to="/" className=" text-xl font-extrabold text-secondary">
          HomeNest
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
      </div>

      <div className="navbar-end ">
        {user ? (
          <div className="relative">
            <img
              onClick={handleDropdown}
              src={`${user.photoURL}`}
              className="h-10 w-10  rounded-full border-2 border-primary hover:scale-105 transition  cursor-pointer "
              alt="User"
            />

            {isDropdownOpen && (
              <div className="absolute right-0 mt-1 w-48 z-5 bg-base-100 rounded-lg shadow-xl space-y-3  border border-base-300">
                <div className="p-4 border-b border-base-200">
                  <p className="text-sm font-bold text-secondary truncate">
                    {user.displayName}
                  </p>
                  <p className="text-xs text-base-content/70 truncate">
                    {user.email}
                  </p>

                  <div className="mt-2 flex flex-col gap-1">
                    <Link
                      to="/dashboard/profile"
                      className="btn btn-success btn-outline btn-sm w-full"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className=" btn btn-error btn-outline btn-sm w-full "
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/auth/login" className="btn btn-primary text-white">
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-primary text-white ">
              Sign Up
            </Link>
          </div>
        )}
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: { background: "#22C55E", color: "#fff" },
            iconTheme: { primary: "#fff", secondary: "#22C55E" },
          },
          error: {
            style: { background: "#EF4444", color: "#fff" },
            iconTheme: { primary: "#fff", secondary: "#EF4444" },
          },
        }}
      />
    </div>
  );
};

export default Navbar;
