/* eslint-disable react/prop-types */
import Navbar from "../Components/Navbar";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import "./projects.css";
import Transition from "../Transition";
import MenuDropDown from "../Components/MenuDropdown";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { useStores } from "../contexts/storeContext";

function Projects({ theme, toggleTheme }) {
  const { isOpen, handleIsOpen } = useStores();
  return (
    <div className="h-full w-full">
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
      <Navbar theme={theme} />,
      <div className="relative text-container z-0">
        <h1 className="font-poppins text-6xl text-center my-24 uppercase font-extrabold phone:text-4xl ptab:text-5xl laptop:text-6xl laptop:my-16">
          my <span className="text-yellow-500 font-poppins">portfolio</span>
        </h1>
      </div>
      <div className="mb-8">
        <div className="max-w-5xl m-auto grid grid-cols-3 gap-x-8 gap-y-16 items-center justify-items-center phone:grid-cols-1 phone:px-4 tablet:grid-cols-2 laptop:grid-cols-3 laptop:px-0 laptop:max-w-[800px] desktop:max-w-5xl overflow-hidden">
          <div className="group z-0 relative parent rounded-md border-2 border-amber-500 overflow-hidden hover:cursor-pointer">
            <div className="absolute bg-amber-500 bg-opacity-85 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 grid items-center justify-items-center transition-all duration-[500ms] origin-center overflow-hidden">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                landing page for tour organizer company
              </p>
              <a
                href="https://kal-natours-project.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 border bg-amber-700 hover:bg-amber-950 rounded-sm justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img
              src="../natours.PNG"
              className="z-0 scale-down-up img overflow-hidden"
            />
          </div>

          <div className="group relative parent rounded-md border-2 border-amber-500 overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="absolute bg-amber-500 bg-opacity-85 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 grid items-center justify-items-center transition-all duration-[500ms] origin-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                website for abbysinia software solutions
              </p>
              <a
                href="https://abyssinia-coral.vercel.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 border bg-amber-700 hover:bg-amber-950 rounded-sm justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../abby.PNG" className="z-0 scale-down-up" />
          </div>
          <div className="group z-0 relative parent rounded-md border-2 border-amber-500 overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="absolute bg-amber-500 bg-opacity-85 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 grid items-center justify-items-center transition-all duration-[500ms] origin-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                website for food delivery company
              </p>
              <a
                href="https://kal-omni.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 border bg-amber-700 hover:bg-amber-950 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../omnifood.PNG" className="z-0 scale-down-up" />
          </div>
          <div className="group relative parent rounded-md border-2 border-amber-500 overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="absolute bg-amber-500 bg-opacity-85 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 grid items-center justify-items-center transition-all duration-[500ms] origin-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                landing page for airlines company
              </p>
              <a
                href="https://kal-project-5.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 border bg-amber-700 hover:bg-amber-950 rounded-sm justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../project-5.PNG" className="z-0 scale-down-up" />
          </div>
          <div className="group relative parent rounded-md border-2 border-amber-500 overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="absolute bg-amber-500 bg-opacity-85 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 grid items-center justify-items-center transition-all duration-[500ms] origin-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                mern stack food delivery web app, including chapa payment
                integration
              </p>
              <a
                href="https://food-delivery-frontend-u8jx.onrender.com/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 border bg-amber-700 hover:bg-amber-950 rounded-sm justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../food-del.PNG" className="z-0 scale-down-up" />
          </div>
          <div className="group relative parent rounded-md border-2 border-amber-500 overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="absolute bg-amber-500 bg-opacity-85 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 grid items-center justify-items-center transition-all duration-[500ms] origin-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                dashboard for the food delivery web app
              </p>
              <p className="font-poppins w-3/4 self-center text-center">
                email:kgemechu908@gmail.com, pass:12345678
              </p>
              <a
                href="https://food-delivery-admin-hzdt.onrender.com/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 border bg-amber-700 hover:bg-amber-950 rounded-sm justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../food-del-dash.PNG" className="z-0 scale-down-up" />
          </div>
          <div className="group relative parent rounded-md border-2 border-amber-500 overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="absolute bg-amber-500 bg-opacity-85 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 grid items-center justify-items-center transition-all duration-[500ms] origin-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                a simple demo landing page for pizza cafe using react
              </p>
              <a
                href="https://kal-pizza-menu.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 border bg-amber-700 hover:bg-amber-950 rounded-sm justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../react-pizza.PNG" className="z-0 scale-down-up" />
          </div>
          <div className="group relative parent rounded-md border-2 border-amber-500 overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="absolute bg-amber-500 bg-opacity-85 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 grid items-center justify-items-center transition-all duration-[500ms] origin-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                weather web app for my affronex internship, used openWeather api
              </p>
              <a
                href="https://afronex-task-2-kappa.vercel.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 border bg-amber-700 hover:bg-amber-950 rounded-sm justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../weather.PNG" className="z-0 scale-down-up" />
          </div>
          <div className="group z-0 relative parent rounded-md border-2 border-amber-500 overflow-hidden  hover:cursor-pointer ">
            {" "}
            <div className="absolute bg-amber-500 bg-opacity-85 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 grid items-center justify-items-center transition-all duration-[500ms] origin-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                landing page for real estate company
              </p>
              <a
                href="https://kal-nexter.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 border bg-amber-700 hover:bg-amber-950 rounded-sm justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../nexter.PNG" className="z-0 scale-down-up" />
          </div>
        </div>
      </div>
      <h1 className="opacity-0">kaleab</h1>
    </div>
  );
}

export default Transition(Projects);
