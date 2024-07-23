// import { RiReactjsFill } from "react-icons/ri";
// import { SiExpress } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";

function Language() {
  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-end self-center px-4 py-2">
        <p className="font-poppins font-bold">Javascript</p>
        <SiJavascript size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold"> html</p>
        <FaHtml5 size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer hover:bg-stone-700 flex items-center gap-2 font-poppins border-2 border-yellow-300 rounded-lg inline-block justify-self-start self-center px-4 py-2">
        <p className="font-poppins font-bold"> css</p>
        <FaCss3 size={20} color="rgb(21 128 61)" />
      </div>
    </div>
  );
}

export default Language;
