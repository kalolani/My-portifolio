// import { RiReactjsFill } from "react-icons/ri";
// import { SiExpress } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { SiJavascript } from "react-icons/si";
// import { SiRedux } from "react-icons/si";

function Technic() {
  return (
    <div className="grid grid-cols-3 gap-4 phone:grid-cols-2 phone:gap-2 btablet:grid-cols-3">
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold text-sm phone:font-normal">
          React
        </p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-7 00 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold text-sm phone:font-normal">
          Express Js
        </p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-start self-center px-4 py-2 phone:justify-self-center">
        <p className="font-poppins font-bold text-sm phone:font-normal">
          Node Js
        </p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold text-sm phone:font-normal">
          Mongo DB
        </p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold text-sm phone:font-normal">
          Tailwind css
        </p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold text-sm phone:font-normal">
          Javascript
        </p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-end self-center px-4 py-2 phone:justify-self-center">
        <p className="font-poppins font-bold text-sm phone:font-normal">
          Redux
        </p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold text-sm phone:font-normal">
          React Router
        </p>
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-start self-center px-4 py-2 phone:justify-self-center phone:justify-self-center">
        <p className="font-poppins font-bold text-sm phone:font-normal">
          React Query
        </p>
      </div>
    </div>
  );
}

export default Technic;
