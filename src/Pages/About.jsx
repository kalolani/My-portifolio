/* eslint-disable react/prop-types */
import Navbar from "../Components/Navbar";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { GoCpu } from "react-icons/go";
import { IoGitBranchOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import "./About.css";
import { useStores } from "../contexts/storeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import Transition from "../Transition";
import { MdMenu } from "react-icons/md";
import MenuDropDown from "../Components/MenuDropdown";
import { IoClose } from "react-icons/io5";

function About({ theme, toggleTheme }) {
  const { activeSection, setActiveSection, isOpen, handleIsOpen } = useStores();

  function handleSection(section) {
    setActiveSection(activeSection === section ? "" : section);
  }
  console.log(activeSection);

  return (
    <div className="mb-20 w-full phone:w-screen phone:mb-20">
      <MenuDropDown />

      <div
        onClick={toggleTheme}
        className={`absolute top-12 right-7 z-50 ${
          theme === "light" ? "bg-stone-400" : "bg-stone-800"
        } p-4 rounded-full hover:cursor-pointer hover:bg-amber-500 phone:invisible laptop:visible`}
      >
        {theme === "light" ? (
          <MdNightlightRound size={18} color="white" />
        ) : (
          <MdOutlineWbSunny size={18} color="white" />
        )}
      </div>
      <div
        onClick={() => handleIsOpen()}
        className={`${
          theme === "light" ? " bg-stone-400" : "bg-stone-800"
        } absolute top-12 phone:top-4 right-7 phone:right-5 z-[5000] p-4 rounded-full hover:cursor-pointer hover:bg-amber-500 laptop:w-0 laptop:opacity-0`}
      >
        {isOpen ? (
          <IoClose size={20} color="white" />
        ) : (
          <MdMenu size={20} color="white" />
        )}
      </div>
      <Navbar theme={theme} />
      <div className="relative text-containers z-10">
        <h1 className="font-poppins text-3xl text-center py-20 uppercase text-6xl font-extrabold phone:text-4xl ptab:text-5xl laptop:text-6xl laptop:py-16">
          about <span className="text-amber-500 font-poppins">me</span>
        </h1>
      </div>
      <div className="font-poppins grid grid grid-cols-2 laptop:max-w-[900px] desktop:max-w-[1150px] m-auto gap-4 phone:grid-cols-1 phone:m-auto tablet:grid-cols-2 laptop:grid-cols-2">
        <div className="">
          <h3 className="uppercase font-poppins phone:mb-4 ptab:w-[85%] ptab:text-center tablet:text-start ptab:mb-4 text-xl font-bold phone:text-xl phone:text-start phone:m-auto phone:px-6 mdphone:text-center tablet:pl-0 laptop:text-2xl laptop:text-start laptop:px-0">
            personal information
          </h3>
          <div className="grid grid-cols-2 phone:px-8 w-[85%] laptop:w-full phone:m-auto phone:grid-cols-1 phone:gap-6 ptab:grid-cols-2 tablet:grid-cols-1 laptop:grid-cols-[auto_1fr] tablet:gap-0 laptop:gap-10 laptop:px-0">
            <div className="flex flex-col gap-6 mdphone:items-center ptab:items-start tablet:items-start laptop:items-start">
              <p className="font-poppins">
                <span className="font-poppins text-md"> First Name</span> :{" "}
                <span className="bold font-poppins text-md">Kaleab</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-md"> Last Name</span> :{" "}
                <span className="bold font-poppins text-md">Gemechu</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppns text-md"> Age</span> :{" "}
                <span className="bold font-poppins text-md">24 Years</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-md">Nationality</span> :{" "}
                <span className="bold font-poppins text-md">Ethiopian</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-md">Freelance</span> :{" "}
                <span className="bold font-poppins text-md">Available</span>
              </p>
            </div>
            <div className="flex flex-col gap-6 mdphone:items-center ptab:items-start tablet:items-start">
              <p className="font-poppins phone:text-base">
                <span className="font-poppins text-md">Address</span> :{" "}
                <span className="bold font-poppins text-md">Dilla</span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-md">Phone</span> :{" "}
                <span className="bold font-poppins text-md">+251916163516</span>
              </p>
              <p className="font-poppins phone:text-base">
                <span className="font-poppins text-md"> Email</span> :{" "}
                <span className="bold font-poppins text-md">
                  kgemechu908@gmail.com
                </span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-md">Github</span> :{" "}
                <span className="bold font-poppins text-md">
                  www.github.com/kalolani
                </span>
              </p>
              <p className="font-poppins">
                <span className="font-poppins text-md">Language</span> :{" "}
                <span className="bold font-poppins text-md ">
                  Amharic,English,Afaan Oromo
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center mb-4 phone:justify-center phone:mt-4 mdphone:justify-center mtab:justify-center tablet:justify-center tablet:mr-20 tablet:mt-4 laptop:justify-start">
            <a
              href="/assets/CV.pdf"
              download="kal intern resume.pdf"
              className="custom-button btn-arrow border-2 px-4 py-2 rounded-lg border-amber-400 flex items-center"
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
              <p className="font-poppins uppercase tablet:text-sm laptop:text-xl">
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
              <p className="font-poppins uppercase tablet:text-sm laptop:text-xl">
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
              <p className="font-poppins uppercase tablet:text-sm laptop:text-xl">
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
              <p className="font-poppins uppercase tablet:text-sm laptop:text-xl">
                years of <br />
                experiance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-poppins tablet:max-w-3xl laptop:max-w-[900px] desktop:max-w-[1100px] m-auto mt-20 mb-20 py-16 bg-stone-600 rounded-2xl px-6 phone:px-4">
        <div className="grid grid-cols-2 gap-6 phone:grid-cols-1 btablet:grid-cols-2">
          <div>
            <ul className="flex flex-col gap-4">
              <Link
                to="technique"
                onClick={() => {
                  handleSection("technic");
                }}
                className={`${
                  activeSection === "technic" ? "bg-amber-500" : "bg-stone-400"
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
                  activeSection === "language" ? "bg-amber-500" : "bg-stone-400"
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
                    : "bg-stone-400"
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
                  activeSection === "tools" ? "bg-amber-500" : "bg-stone-400"
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
                  activeSection === "project" ? "bg-amber-500" : "bg-stone-400"
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
