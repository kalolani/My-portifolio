import { SiMongodb } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

function ThirdParty() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">Mongo DB</p>
        <SiMongodb size={20} color="rgb(21 128 61)" />
      </div>

      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">Stripe</p>
        <FaCcStripe size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">SendGrid</p>
        <img src="../sendgrid.png" className="h-10 w-10" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-end self-center px-4 py-2">
        <p className="font-poppins font-bold">Redux</p>
        <SiRedux size={20} color="rgb(21 128 61)" />
      </div>
      <div className="hover:cursor-pointer flex items-center gap-2 font-poppins border-2 border-gray-300 rounded-lg inline-block justify-self-center self-center px-4 py-2">
        <p className="font-poppins font-bold">Chapa</p>
        <img src="../chapa.png" className="h-8 w-8" />
      </div>
    </div>
  );
}

export default ThirdParty;
