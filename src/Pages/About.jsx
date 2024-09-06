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
import { useStores } from "../contexts/storeContext";

import Transition from "../Transition";

function About() {
  const { activeSection, setActiveSection } = useStores();

  function handleSection(section) {
    setActiveSection(activeSection === section ? "" : section);
  }
  console.log(activeSection);

  return (
    <div className="mb-20 text-slate-50 w-full phone:w-full phone:mb-20">
      <div className="fixed top-12 right-6 z-50 bg-stone-800 p-4 rounded-full hover:cursor-pointer hover:bg-amber-500 phone:invisible laptop:visible">
        <FaRegSun size={18} color="white" />
      </div>
      <Navbar />
      <div className="relative text-containers">
        <h1 className="font-poppins text-3xl text-center my-20 uppercase text-6xl font-extrabold text-gray-50 phone:text-4xl ptab:text-5xl laptop:text-6xl laptop:my-16">
          about <span className="text-amber-500 font-poppins">me</span>
        </h1>
      </div>
      <div className="font-poppins grid grid grid-cols-2 max-w-[1150px] m-auto gap-4 phone:grid-cols-1 phone:m-auto laptop:grid-cols-2">
        <div className="">
          <h3 className="uppercase font-poppins mb-8 text-xl font-bold phone:text-xl phone:text-start phone:px-6 mdphone:text-center laptop:text-2xl laptop:text-start laptop:px-0">
            personal information
          </h3>
          <div className="grid grid-cols-2 phone:px-8 phone:grid-cols-1 phone:gap-6 mtab:grid-cols-2 tablet:gap-20 laptop:gap-0 laptop:px-0">
            <div className="flex flex-col gap-6 mdphone:items-center mtab:items-start tablet:items-end laptop:items-start">
              <p className="font-poppins">
                <span className="font-poppins text-md text-gray-400">
                  {" "}
                  First Name
                </span>{" "}
                : <span className="bold font-poppins text-md">Kaleab</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-400 text-md">
                  {" "}
                  Last Name
                </span>{" "}
                : <span className="bold font-poppins text-md">Gemechu</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppns text-gray-400 text-md"> Age</span>{" "}
                : <span className="bold font-poppins text-md">24 Years</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-400 text-md">
                  Nationality
                </span>{" "}
                : <span className="bold font-poppins text-md">Ethiopian</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-400 text-md">
                  Freelance
                </span>{" "}
                : <span className="bold font-poppins text-md">Available</span>
              </p>
            </div>
            <div className="flex flex-col gap-6 mdphone:items-center mtab:items-start">
              <p className="font-poppins phone:text-base">
                <span className="font-poppins text-gray-400 text-md">
                  Address
                </span>{" "}
                : <span className="bold font-poppins text-md">Dilla</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-400 text-md">
                  Phone
                </span>{" "}
                :{" "}
                <span className="bold font-poppins text-md">+251916163516</span>
              </p>
              <p className="font-poppins phone:text-base">
                <span className="font-poppins text-gray-400 text-md">
                  {" "}
                  Email
                </span>{" "}
                :{" "}
                <span className="bold font-poppins text-md">
                  kgemechu908@gmail.com
                </span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-400 text-md">
                  Github
                </span>{" "}
                :{" "}
                <span className="bold font-poppins text-md">
                  www.github.com/kalolani
                </span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-gray-400 text-md">
                  Language
                </span>{" "}
                :{" "}
                <span className="bold font-poppins text-md ">
                  Amharic,English,Afaan Oromo
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center mb-4 phone:justify-start mdphone:justify-center mtab:justify-start tablet:justify-center tablet:mt-0 laptop:justify-start">
            <a
              href="/assets/CV.pdf"
              download="kal intern resume.pdf"
              className="custom-button btn-arrow text-white border-2 px-4 py-2 rounded-lg border-amber-400 flex items-center"
            >
              <span className="font-poppins uppercase">download cv</span>
              <HiMiniArrowSmallRight size={30} className="btn-arrow" />
            </a>
          </div>
        </div>
        <div className="h-1/2 font-poppins grid grid-cols-2 gap-6 px-6 phone:grid-cols-1 ptab:grid-cols-2">
          <div className="border border-stone-800 rounded-lg px-10 py-8">
            <h1 className="font-poppins text-4xl font-extrabold text-amber-500">
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
          <div className="border border-stone-800 rounded-lg px-10 py-6">
            <h1 className="font-poppins text-4xl font-extrabold text-amber-500">
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
          <div className="border border-stone-800 rounded-lg px-10 py-8">
            <h1 className="font-poppins text-4xl font-extrabold text-amber-500">
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
          <div className="border border-stone-800 rounded-lg px-10 py-8">
            <h1 className="font-poppins text-4xl font-extrabold text-amber-500">
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
      <div className="font-poppins max-w-5xl m-auto mt-20 mb-20 py-16 bg-stone-900 rounded-2xl px-6 phone:px-4">
        <div className="grid grid-cols-2 gap-6 phone:grid-cols-1 btablet:grid-cols-2">
          <div>
            <ul className="flex flex-col gap-4">
              <Link
                to="technique"
                onClick={() => {
                  handleSection("technic");
                }}
                className={`${
                  activeSection === "technic" ? "bg-amber-500" : "bg-stone-800"
                } flex items-center justify-between py-4 px-6 rounded-lg hover:bg-amber-500 hover:cursor-pointer`}
              >
                <p className="text font-poppins uppercase font-bold">
                  technical
                </p>
                <HiOutlineCodeBracketSquare size={25} />
              </Link>
              <Link
                to="language"
                onClick={() => handleSection("language")}
                className={`${
                  activeSection === "language" ? "bg-amber-500" : "bg-stone-800"
                } flex items-center justify-between py-4 px-6 rounded-lg hover:bg-amber-500 hover:cursor-pointer`}
              >
                {" "}
                <p className="text font-poppins uppercase font-bold">
                  languages
                </p>
                <IoCodeSlashOutline size={25} />
              </Link>
              <Link
                to="thirdparty"
                onClick={() => handleSection("thirdparty")}
                className={`${
                  activeSection === "thirdparty"
                    ? "bg-amber-500"
                    : "bg-stone-800"
                } flex items-center justify-between py-4 px-6 rounded-lg hover:bg-amber-500 hover:cursor-pointer`}
              >
                {" "}
                <p className="text font-poppins uppercase font-bold">
                  third-party apis
                </p>
                <GoDatabase size={25} />
              </Link>
              <Link
                to="tools"
                onClick={() => handleSection("tools")}
                className={`${
                  activeSection === "tools" ? "bg-amber-500" : "bg-stone-800"
                } flex items-center justify-between py-4 px-6 rounded-lg hover:bg-amber-500 hover:cursor-pointer`}
              >
                {" "}
                <p className="text font-poppins uppercase font-bold">tools</p>
                <GoCpu size={25} />
              </Link>
              <Link
                to="project"
                onClick={() => handleSection("project")}
                className={`${
                  activeSection === "project" ? "bg-amber-500" : "bg-stone-800"
                } flex items-center justify-between py-4 px-6 rounded-lg hover:bg-amber-500 hover:cursor-pointer`}
              >
                {" "}
                <p className="text font-poppins uppercase font-bold">
                  project management
                </p>
                <IoGitBranchOutline size={25} />
              </Link>
            </ul>
          </div>
          <div className="pt-4 px-4 rounded-lg py-4 border-2 border-amber-200">
            <h1 className="font-poppins uppercase font-extrabold tracking-wide text-center text-5xl mb-16 text-amber-300">
              skills
            </h1>
            <Outlet />
          </div>
        </div>
      </div>
      <h1 className="mt-20 opacity-0">k</h1>
    </div>
  );
}

export default Transition(About);
