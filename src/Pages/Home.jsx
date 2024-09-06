/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Components/Navbar";
import Polygon from "../Components/Polygon";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { FaRegSun } from "react-icons/fa";
import "./Home.css";
import Transition from "../Transition";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-full z-30 phone:w-full">
      <div className="absolute top-12 right-6 z-50 bg-stone-800 p-4 rounded-full hover:cursor-pointer hover:bg-amber-500 phone:invisible laptop:visible">
        <FaRegSun size={18} color="white" />
      </div>
      <Polygon />
      <Navbar />
      <div className="grid grid-cols-1fr-2fr gap-0 h-full w-full z-30 phone:grid-cols-1 laptop:grid-cols-1fr-2fr">
        <div className="self-center justify-self-start ml-10 z-30 phone:justify-self-center phone:ml-0 laptop:justify-self-start laptop:ml-10 z-30 ">
          <img
            src="kale-ab.png"
            className="inline-block h-90 rounded-3xl shadow-lg shadow-black z-30 phone:mt-2 phone:h-52 w-52 rounded-full border-4 border-stone-800 laptop:h-[34rem] laptop:w-[97%] laptop:rounded-3xl border-none"
          />
        </div>
        <div className="self-center justify-self-start ml-10 phone:justify-self-end  laptop:justify-center">
          <h1 className="font-poppins text-white text-5xl tracking-wider uppercase font-bold phone:text-2xl ptab:text-3xl laptop:text-5xl">
            <span className="inline-block font-poppins text-amber-500 tracking-wider uppercase font-bold mb-4">
              i'm kaleab gemechu.
            </span>
            <br />
            web developer
          </h1>
          <p className="font-poppins text-white w-2/3 leading-loose mt-4 phone:w-full phone:text-center ptab:text-xl laptop:text-lg laptop:w-3/4 laptop:text-start">
            I'm an Ethiopian based full-stack web developer focused on crafting
            clean & user‑friendly experiences, I am passionate about building
            excellent software that improves the lives of those around me.
          </p>
          <div className="flex justify-start items-center mt-4 mb-4 laptop:mt-10">
            <Link
              to="/about"
              className="custom-button btn-arrow text-white border-2 px-4 py-2 rounded-lg border-amber-400 flex items-center"
            >
              <span className="font-poppins">more about me</span>
              <HiMiniArrowSmallRight size={30} className="btn-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transition(Home);
