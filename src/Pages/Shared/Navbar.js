import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  if (user) {
    // console.log(user);
  }

  const handleSignout = ()=>{
    localStorage.removeItem("accessToken")
    signOut(auth);
  }

  const navItems = (
    <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/appointment"}>Appointment</NavLink></li>
        <li><NavLink to={"/review"}>Reviews</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
        {
          user && <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
        }
        {
          user ? <li><Link to={"/login"} onClick={handleSignout}>Logout</Link></li>  : <li><Link to={"/login"}>Login</Link></li>
        }
        
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            
            
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Doctors Portal</Link>
          
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-2">{navItems}</ul>  
          </div>
          <div className="">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">drawer</label>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
