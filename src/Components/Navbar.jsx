import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";

import { BsBagFill } from "react-icons/bs";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <ul className="fixed top-1/2 right-7 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-12 phone:invisible phone:z-0 laptop:visible laptop:z-50">
        <li className="group relative">
          <NavLink to="/" className="inline-block rounded-lg z-50">
            {({ isActive }) => (
              <div
                className={`text-md flex items-center gap-0 ${
                  isActive ? "bg-amber-500" : "bg-stone-800"
                } hover:bg-amber-500 active:bg-amber-500 group-hover:gap-4 py-3 group-hover:py-3 px-4 absolute right-0 top-0 rounded-full z-0 uppercase transition-all duration-[400ms] origin-left will-change-transform`}
              >
                <div className="w-0 group-hover:w-full transition-all duration-[500ms]">
                  <p className="font-poppins text-white w-0 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-[50ms] origin-right will-change-transform">
                    home
                  </p>
                </div>
                <div>
                  <IoHomeSharp size={18} color="white" />
                </div>
              </div>
            )}
          </NavLink>
        </li>
        <li className="group relative">
          <NavLink to="/about" className="inline-block rounded-lg z-50">
            {({ isActive }) => (
              <div
                className={`text-md flex items-center gap-0 ${
                  isActive ? "bg-amber-500" : "bg-stone-800"
                } hover:bg-amber-500 active:bg-amber-500 group-hover:gap-4 py-3 group-hover:py-3 px-4 absolute right-0 top-0 rounded-full z-0 uppercase transition-all duration-[400ms] origin-left will-change-transform`}
              >
                <div className="w-0 h-full group-hover:w-full group-hover:h-full transition-all duration-[500ms] origin-right">
                  <p className="font-poppins text-white w-0 h-full opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-[50ms] origin-left will-change-transform">
                    home
                  </p>
                </div>
                <div>
                  <FaUserGroup size={18} color="white" />
                </div>
              </div>
            )}
          </NavLink>
        </li>
        <li className="group relative">
          <NavLink to="/project" className="inline-block rounded-lg z-50">
            {({ isActive }) => (
              <div
                className={`text-md flex items-center gap-0 ${
                  isActive ? "bg-amber-500" : "bg-stone-800"
                } hover:bg-amber-500 active:bg-amber-500 group-hover:gap-4 py-3 group-hover:py-3 px-4 absolute right-0 top-0 rounded-full z-0 uppercase transition-all duration-[400ms] origin-left will-change-transform`}
              >
                <div className="w-0 h-full group-hover:w-full group-hover:h-full transition-all duration-[500ms] origin-right">
                  <p className="font-poppins text-white w-0 h-full opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-[50ms] origin-left will-change-transform">
                    home
                  </p>
                </div>
                <div>
                  <BsBagFill size={18} color="white" />
                </div>
              </div>
            )}
          </NavLink>
        </li>
        <li className="group relative">
          <NavLink to="/contact" className="inline-block rounded-lg z-50">
            {({ isActive }) => (
              <div
                className={`text-md flex items-center gap-0 ${
                  isActive ? "bg-amber-500" : "bg-stone-800"
                } hover:bg-amber-500 active:bg-amber-500 group-hover:gap-4 py-3 group-hover:py-3 px-4 absolute right-0 top-0 rounded-full z-0 uppercase transition-all duration-[400ms] origin-left will-change-transform`}
              >
                <div className="w-0 h-full group-hover:w-full group-hover:h-full transition-all duration-[500ms] origin-right">
                  <p className="font-poppins text-white w-0 h-full opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-[50ms] origin-left will-change-transform">
                    home
                  </p>
                </div>
                <div>
                  <RiMessage2Fill size={18} color="white" />
                </div>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
