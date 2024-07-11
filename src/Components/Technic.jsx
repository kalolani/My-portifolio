import { RiReactjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";

function Technic() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">React</p>
        <RiReactjsFill size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">Express Js</p>
        <SiExpress size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-start self-center px-4 py-2">
        <p className="font-poppins font-bold">Node Js</p>
        <FaNodeJs size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">Mongo DB</p>
        <SiMongodb size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">Tailwind css</p>
        <RiTailwindCssFill size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">Javascript</p>
        <SiJavascript size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-end self-center px-4 py-2">
        <p className="font-poppins font-bold">Redux</p>
        <SiRedux size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">React Router</p>
        <img src="../reactrouter.png" className="h-10 w-10" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-start self-center px-4 py-2">
        <p className="font-poppins font-bold">React Query</p>
        <img src="../react-query.png" className="h-10 w-10" />
      </div>
    </div>
  );
}

export default Technic;
