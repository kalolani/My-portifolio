import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  const linkClassNames = ({ isActive }) =>
    isActive
      ? "bg-yellow-500 inline-block rounded-full z-50"
      : "bg-stone-800 inline-block rounded-full z-50";

  return (
    <>
      <ul className="fixed top-1/2 right-2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 phone:invisible phone:z-0 laptop:visible laptop:z-50">
        <li className="link flex items-center gap-4">
          <NavLink to="/" className={` ${linkClassNames} relative z-50 icon`}>
            <div className="text-md flex items-center gap-4 absolute right-0 top-0 rounded-full invisible z-0 span">
              <p className="font-poppins text-white">home</p>
              <IoHome size={18} color="white" />
            </div>
            <IoHome size={18} color="white" />
          </NavLink>
        </li>
        <li className="link flex items-center gap-2">
          <NavLink
            to="/about"
            className={` ${linkClassNames} relative z-50 icon`}
          >
            <div className="text-md flex items-center gap-4 absolute right-0 top-0 rounded-full invisible z-0 span">
              <p className="font-poppins text-white">about</p>
              <FaUser size={18} color="white" />
            </div>
            <FaUser size={18} color="white" />
          </NavLink>
        </li>
        <li className="link flex items-center gap-2">
          <NavLink
            to="/project"
            className={` ${linkClassNames} relative z-50 icon`}
          >
            <div className="text-md flex items-center gap-4 absolute right-0 top-0 rounded-full invisible z-0 span">
              <p className="font-poppins text-white">projects</p>
              <IoBagCheckSharp size={18} color="white" />
            </div>
            <IoBagCheckSharp size={18} color="white" />
          </NavLink>
        </li>
        <li className="link flex items-center gap-2">
          <NavLink
            to="/contact"
            className={` ${linkClassNames} relative z-50 icon`}
          >
            <div className="text-md flex items-center gap-4 absolute right-0 top-0 rounded-full invisible z-0 span">
              <p className="font-poppins text-white">contact</p>
              <FaMessage size={18} color="white" />
            </div>
            <FaMessage size={18} color="white" />
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
