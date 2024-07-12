import Navbar from "../Components/Navbar";
import "./projects.css";
import { FaRegSun } from "react-icons/fa";

function Projects() {
  return (
    <div className="h-full text-slate-50">
      <div className="fixed top-12 right-6 z-50 bg-stone-800 p-4 rounded-full hover:cursor-pointer hover:bg-yellow-500 phone:invisible laptop:visible">
        <FaRegSun size={18} color="white" />
      </div>
      <Navbar />,
      <div className="relative text-container">
        <h1 className="font-poppins text-6xl text-center my-20 uppercase font-extrabold text-gray-50">
          my <span className="text-yellow-500 font-poppins">portfolio</span>
        </h1>
      </div>
    </div>
  );
}

export default Projects;
