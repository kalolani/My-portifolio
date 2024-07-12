import Navbar from "../Components/Navbar";
import "./projects.css";
import { FaRegSun } from "react-icons/fa";

function Projects() {
  return (
    <div className="h-full w-full text-slate-50">
      <div className="fixed top-12 right-6 z-50 bg-stone-800 p-4 rounded-full hover:cursor-pointer hover:bg-yellow-500 phone:invisible laptop:visible">
        <FaRegSun size={18} color="white" />
      </div>
      <Navbar />,
      <div className="relative text-container">
        <h1 className="font-poppins text-6xl text-center my-24 uppercase font-extrabold text-gray-50 phone:text-4xl ptab:text-5xl laptop:text-6xl laptop:my-16">
          my <span className="text-yellow-500 font-poppins">portfolio</span>
        </h1>
      </div>
      <div className="mb-24">
        <div className="max-w-6xl m-auto grid grid-cols-3 gap-x-8 gap-y-16 items-center justify-items-center phone:grid-cols-1 phone:px-4 tablet:grid-cols-2 laptop:grid-cols-3 laptop:px-0">
          <div className="relative parent rounded-lg border-yellow-950  shadow-custom-green overflow-hidden  hover:cursor-pointer">
            <div className="img-container grid items-center justify-items-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                landing page for tour organizer company
              </p>
              <a
                href="https://kal-natours-project.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../natours.PNG" className="scale-down-up z-0 img" />
          </div>
          <div className="relative parent rounded-lg border-yellow-950 shadow-custom-green overflow-hidden  hover:cursor-pointer ">
            {" "}
            <div className="img-container grid items-center justify-items-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                landing page for real estate company
              </p>
              <a
                href="https://kal-nexter.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../nexter.PNG" className="scale-down-up" />
          </div>
          <div className="relative parent rounded-lg border-yellow-950 shadow-custom-green  overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="img-container grid items-center justify-items-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                website for food delivery company
              </p>
              <a
                href="https://kal-omni.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../omnifood.PNG" className="scale-down-up" />
          </div>
          <div className="relative parent rounded-lg border-yellow-950 shadow-custom-green  overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="img-container grid items-center justify-items-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                landing page for airlines company
              </p>
              <a
                href="https://kal-project-5.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../project-5.PNG" className="scale-down-up" />
          </div>
          <div className="relative parent rounded-lg border-yellow-950 shadow-custom-green  overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="img-container grid items-center justify-items-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                mern stack food delivery web app, including chapa payment
                integration
              </p>
              <a
                href="https://food-delivery-frontend-u8jx.onrender.com/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../food-del.PNG" className="scale-down-up" />
          </div>
          <div className="relative parent rounded-lg border-yellow-950 shadow-custom-green  overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="img-container grid items-center justify-items-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                dashboard for the food delivery web app
              </p>
              <p className="font-poppins w-3/4 self-center text-center">
                email:kgemechu908@gmail.com, pass:12345678
              </p>
              <a
                href="https://food-delivery-admin-hzdt.onrender.com/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../food-del-dash.PNG" className="scale-down-up" />
          </div>
          <div className="relative parent rounded-lg border-yellow-950 shadow-custom-green  overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="img-container grid items-center justify-items-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                a simple demo landing page for pizza cafe using react
              </p>
              <a
                href="https://kal-pizza-menu.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../react-pizza.PNG" className="scale-down-up" />
          </div>
          <div className="relative parent rounded-lg border-yellow-950 shadow-custom-green  overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="img-container grid items-center justify-items-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                weather web app for my affronex internship, used openWeather api
              </p>
              <a
                href="https://afronex-task-2-kappa.vercel.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../weather.PNG" className="scale-down-up" />
          </div>
          <div className="relative parent rounded-lg border-yellow-950 shadow-custom-green  overflow-hidden  hover:cursor-pointer">
            {" "}
            <div className="img-container grid items-center justify-items-center">
              <p className="font-poppins uppercase w-3/4 self-center text-center">
                landing page for tour organizer company
              </p>
              <a
                href="https://kal-natours-project.netlify.app/"
                target="_blank"
                className="uppercase inline-block px-6 py-2 justify-self-center m-0"
              >
                visit
              </a>
            </div>
            <img src="../natours.PNG" className="scale-down-up" />
          </div>
        </div>
        <div className="mt-20"> </div>
      </div>
    </div>
  );
}

export default Projects;
