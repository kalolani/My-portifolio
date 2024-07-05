import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar() {
  const linkClassNames = ({ isActive }) =>
    isActive
      ? "bg-yellow-700 inline-block p-4 rounded-full"
      : "bg-stone-800 inline-block p-4 rounded-full";

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute top-16 right-2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 bg-stone-800 hover:bg-yellow-700 p-4 rounded-full cursor-pointer">
          <MdOutlineLightMode size={20} />
        </div>
        <ul className="absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 flex flex-col justify-around h-3/6">
          <li className="cursor-pointer">
            <NavLink to="/" className={linkClassNames}>
              <IoHome size={20} />
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/about" className={linkClassNames}>
              <FaUser size={20} />
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/project" className={linkClassNames}>
              <IoBagCheckSharp size={20} />
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/contact" className={linkClassNames}>
              <FaMessage size={20} />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
