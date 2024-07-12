import Navbar from "../Components/Navbar";
import { FaRegSun } from "react-icons/fa";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { GoCpu } from "react-icons/go";
import { IoGitBranchOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

import "./About.css";
import { useState } from "react";
function About() {
  const [activeTechnic, isActiveTechnic] = useState(false);
  const [activeLanguage, isActiveLanguage] = useState(false);
  const [activeThirdparty, isActiveThirdparty] = useState(false);
  const [activeTools, isActiveTools] = useState(false);
  const [activeProject, isActiveProject] = useState(false);
  let activeClass;
  let languageActive;
  let thirdpartyActive;
  let toolsActive;
  let projectActive;
  if (activeTechnic) {
    activeClass = "bg-green-500";
  }
  if (activeThirdparty) {
    thirdpartyActive = "bg-green-500";
  }
  if (activeLanguage) {
    languageActive = "bg-green-500";
  }
  if (activeTools) {
    toolsActive = "bg-green-500";
  }
  if (activeProject) {
    projectActive = "bg-green-500";
  }

  function handleTechnic() {
    isActiveTechnic(!activeTechnic);
    isActiveLanguage(false);
    isActiveThirdparty(false);
    isActiveTools(false);
    isActiveProject(false);
  }

  function handleLanguage() {
    isActiveTechnic(false);
    isActiveLanguage(!activeLanguage);
    isActiveThirdparty(false);
    isActiveTools(false);
    isActiveProject(false);
  }
  function handleThirdparty() {
    isActiveTechnic(false);
    isActiveLanguage(false);
    isActiveThirdparty(!activeThirdparty);
    isActiveTools(false);
    isActiveProject(false);
  }
  function handleTools() {
    isActiveTechnic(false);
    isActiveLanguage(false);
    isActiveThirdparty(false);
    isActiveTools(!activeTools);
    isActiveProject(false);
  }
  function handleProject() {
    isActiveTechnic(false);
    isActiveLanguage(false);
    isActiveThirdparty(false);
    isActiveTools(false);
    isActiveProject(!activeProject);
  }
  console.log(activeTechnic);
  console.log(activeClass);
  return (
    <div className="text-slate-50 w-full phone:w-full">
      <div className="fixed top-12 right-6 z-50 bg-stone-800 p-4 rounded-full hover:cursor-pointer hover:bg-yellow-500 phone:invisible laptop:visible">
        <FaRegSun size={18} color="white" />
      </div>
      <Navbar />
      <div className="relative text-container">
        <h1 className="font-poppins text-3xl text-center my-20 uppercase text-6xl font-extrabold text-gray-50 phone:text-4xl ptab:text-5xl laptop:text-6xl laptop:my-16">
          about <span className="text-yellow-500 font-poppins">me</span>
        </h1>
      </div>
      <div className="font-poppins grid grid grid-cols-2 max-w-6xl m-auto gap-6 phone:grid-cols-1 phone:m-auto laptop:grid-cols-2">
        <div className="">
          <h3 className="uppercase font-poppins mb-8 text-2xl font-bold phone:text-xl phone:text-start phone:px-6 mdphone:text-center laptop:text-2xl laptop:text-start laptop:px-0">
            personal information
          </h3>
          <div className="grid grid-cols-2 phone:px-8 phone:grid-cols-1 phone:gap-6 mtab:grid-cols-2 tablet:gap-20 laptop:gap-0 laptop:px-0">
            <div className="flex flex-col gap-6 mdphone:items-center mtab:items-start tablet:items-end laptop:items-start">
              <p className="font-poppins">
                <span className="font-poppins text-gray-200"> First Name</span>{" "}
                : <span className="bold font-poppins">Kaleab</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-200"> Last Name</span> :{" "}
                <span className="bold font-poppins">Gemechu</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppns text-gray-200"> Age</span> :{" "}
                <span className="bold font-poppins">24 Years</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-200">Nationality</span>{" "}
                : <span className="bold font-poppins">Ethiopian</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-200">Freelance</span> :{" "}
                <span className="bold font-poppins">Available</span>
              </p>
            </div>
            <div className="flex flex-col gap-6 mdphone:items-center mtab:items-start">
              <p className="font-poppins phone:text-base">
                <span className="font-poppins text-gray-200">Address</span> :{" "}
                <span className="bold font-poppins">Dilla</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-200">Phone</span> :{" "}
                <span className="bold font-poppins">+251916163516</span>
              </p>
              <p className="font-poppins phone:text-base">
                <span className="font-poppins text-gray-200"> Email</span> :{" "}
                <span className="bold font-poppins ">
                  kgemechu908@gmail.com
                </span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-200">Github</span> :{" "}
                <span className="bold font-poppins">
                  www.github.com/kalolani
                </span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-200">Language</span> :{" "}
                <span className="bold font-poppins">
                  Amharic,English,Afaan Oromo
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center mt-4 mb-4 phone:justify-start phone:px-6 mdphone:justify-center mtab:justify-start tablet:justify-center tablet:mt-10 laptop:justify-start">
            <button className="custom-button btn-arrow text-white border-2 px-4 py-2 rounded-lg border-yellow-400 flex items-center">
              <span className="font-poppins uppercase">download cv</span>
              <HiMiniArrowSmallRight size={30} className="btn-arrow" />
            </button>
          </div>
        </div>
        <div className="font-poppins grid grid-cols-2 gap-6 px-6 phone:grid-cols-1 ptab:grid-cols-2">
          <div className="border-2 border-stone-800 rounded-lg px-8 py-6">
            <h1 className="font-poppins text-4xl font-extrabold text-yellow-500">
              2 <sup>+</sup>
            </h1>
            <div className="flex items-start gap-4">
              <div className="w-8 h-0.5 bg-gray-600 mt-3"></div>
              <p className="font-poppins uppercase text-xl">
                years of <br />
                experiance
              </p>
            </div>
          </div>
          <div className="border-2 border-stone-800 rounded-lg px-6 py-6">
            <h1 className="font-poppins text-4xl font-extrabold text-yellow-500">
              2 <sup>+</sup>
            </h1>
            <div className="flex items-start gap-4">
              <div className="w-8 h-0.5 bg-gray-600 mt-3"></div>
              <p className="font-poppins uppercase text-xl">
                years of <br />
                experiance
              </p>
            </div>
          </div>
          <div className="border-2 border-stone-800 rounded-lg px-6 py-6">
            <h1 className="font-poppins text-4xl font-extrabold text-yellow-500">
              10 <sup>+</sup>
            </h1>
            <div className="flex items-start gap-4">
              <div className="w-8 h-0.5 bg-gray-600 mt-3"></div>
              <p className="font-poppins uppercase text-xl">
                project&apos;s <br />
                completed
              </p>
            </div>
          </div>
          <div className="border-2 border-stone-800 rounded-lg px-6 py-6">
            <h1 className="font-poppins text-4xl font-extrabold text-yellow-500">
              2 <sup>+</sup>
            </h1>
            <div className="flex items-start gap-4">
              <div className="w-8 h-0.5 bg-gray-600 mt-3"></div>
              <p className="font-poppins uppercase text-xl">
                years of <br />
                experiance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-poppins max-w-6xl m-auto my-20 py-16 bg-stone-900 rounded-2xl px-6 phone:px-4 ">
        <div className="grid grid-cols-2 gap-6 phone:grid-cols-1 btablet:grid-cols-2">
          <div>
            <ul className="flex flex-col gap-4">
              <Link
                to="technique"
                onClick={() => handleTechnic()}
                className={`${activeClass} link hover:bg-green-600 flex items-center justify-between py-4 px-6 bg-stone-800 rounded-lg hover:cursor-pointer`}
              >
                <p className="text font-poppins uppercase font-bold">
                  technical
                </p>
                <HiOutlineCodeBracketSquare size={25} />
              </Link>
              <Link
                to="language"
                onClick={() => handleLanguage()}
                className={`${languageActive} link hover:bg-green-600 flex items-center justify-between py-4 px-6 bg-stone-800 rounded-lg hover:cursor-pointer`}
              >
                {" "}
                <p className="text font-poppins uppercase font-bold">
                  languages
                </p>
                <IoCodeSlashOutline size={25} />
              </Link>
              <Link
                to="thirdparty"
                onClick={() => handleThirdparty()}
                className={`${thirdpartyActive} link hover:bg-green-600 flex items-center justify-between py-4 px-6 bg-stone-800 rounded-lg hover:cursor-pointer`}
              >
                {" "}
                <p className="text font-poppins uppercase font-bold">
                  third-party apis
                </p>
                <GoDatabase size={25} />
              </Link>
              <Link
                to="tools"
                onClick={() => handleTools()}
                className={`${toolsActive} link hover:bg-green-600 flex items-center justify-between py-4 px-6 bg-stone-800 rounded-lg hover:cursor-pointer`}
              >
                {" "}
                <p className="text font-poppins uppercase font-bold">tools</p>
                <GoCpu size={25} />
              </Link>
              <Link
                to="project"
                onClick={() => handleProject()}
                className={`${projectActive} link hover:bg-green-600 flex items-center justify-between py-4 px-6 bg-stone-800 rounded-lg hover:cursor-pointer`}
              >
                {" "}
                <p className="text font-poppins uppercase font-bold">
                  project management
                </p>
                <IoGitBranchOutline size={25} />
              </Link>
            </ul>
          </div>
          <div className="bg-stone-600 pt-4 px-4 rounded-lg py-4 ">
            <h1 className="font-poppins uppercase font-extrabold tracking-wide text-center text-5xl mb-6">
              skills
            </h1>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
