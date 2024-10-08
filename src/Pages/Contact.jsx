/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Navbar from "../Components/Navbar";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import "./contact.css";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Transition from "../Transition";
import MenuDropDown from "../Components/MenuDropdown";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { useStores } from "../contexts/storeContext";

function Contact({ theme, toggleTheme }) {
  const { isOpen, handleIsOpen } = useStores();
  const [name, setName] = useState("");
  console.log(theme);
  // const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  console.log(successMessage);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6d92ac7e-6da5-4f25-9e7c-7f7301978c60");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMessage("Message sent successfully!!!");
    } else {
      setSuccessMessage("⛔Error occured while sending message");
    }
  };
  return (
    <div className="w-full h-full">
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
      <div className="relative contact-container py-20 phone:py-10 phone:pt-16 mdphone:pt-10 tablet:py-20 laptop:py-2">
        <h1 className="relative font-poppins text-6xl text-center uppercase font-extrabold phone:text-3xl ptab:text-5xl laptop:text-6xl laptop:my-16">
          get in<span className="text-yellow-500 font-poppins"> touch</span>
        </h1>
      </div>
      <div className="max-w-6xl m-auto grid grid-cols-1fr-3fr justify-self-center gap-6 phone:grid-cols-1 smlaptop:max-w-[900px] laptop:max-w-[930px] desktop:max-w-6xl laptop:grid-cols-1fr-3fr">
        <div className="w-3/4 flex flex-col gap-4 phone:self-center phone:justify-self-center latop:justify-self-start laptop:w-full">
          <h1 className="uppercase font-poppins font-bold text-2xl inline phone:text-center laptop:text-start">
            {" "}
            don't be shy!
          </h1>
          <p className="font-poppins text-base leading-6  ">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="flex gap-4">
            {/* <HiOutlineMailOpen size={25} className="text-yellow-300" /> */}
            <MdEmail size={25} className="text-yellow-500" />

            <div className="flex phone:flex laptop:flex-col gap-4">
              <p className="font-poppins uppercase">mail me</p>
              <p className="font-poppins font-bold phone:text-sm">
                kgemechu908@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {/* s<MdEmail size={25} className="text-yellow-300" /> */}
            <FaSquarePhone size={25} className="text-yellow-500" />

            <div className="flex phone:flex laptop:flex-col gap-2">
              <p className="font-poppins uppercase">call me</p>
              <p className="font-poppins font-bold">+251916163516</p>
            </div>
          </div>
          <div className="flex phone:gap-[6px] mdphone:gap-4 mt-2 ">
            <a
              href="https://www.linkedin.com/in/kaleab-gemechu-456ab9259/"
              target="_blank"
              className="bg-amber-500 p-2 rounded-lg hover:cursor-pointer hover:bg-amber-800 transition-all"
            >
              <FaLinkedinIn size={30} color="rgb(248 250 252)" />
            </a>
            <a
              href="https://www.instagram.com/kal_olani/"
              target="_blank"
              className="bg-amber-500 p-2 rounded-lg hover:cursor-pointer hover:bg-amber-800 transition-all"
            >
              <FaInstagram size={30} color="rgb(248 250 252)" />
            </a>
            <a
              href="https://t.me/kal_olani7"
              target="_blank"
              className="bg-amber-500 p-2 rounded-lg hover:cursor-pointer hover:bg-amber-800 transition-all"
            >
              <FaTelegramPlane size={30} color="rgb(248 250 252)" />
            </a>
            <a
              href="https://x.com/kaleab481039"
              target="_blank"
              className="bg-amber-500 p-2 rounded-lg hover:cursor-pointer hover:bg-amber-800 transition-all"
            >
              <FaXTwitter size={30} color="rgb(248 250 252)" />
            </a>
            <a
              href="https://github.com/kalolani"
              target="_blank"
              className="bg-amber-500 p-2 rounded-lg hover:cursor-pointer hover:bg-amber-800 transition-all"
            >
              <FaGithub size={30} color="rgb(248 250 252)" />
            </a>
          </div>
        </div>
        <div className="self-center justify-self-center phone:w-3/4 laptop:w-10/12">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 phone:flex-col laptop:flex-row">
                <div
                  className={`${
                    theme === "light"
                      ? "border border-amber-500 rounded-lg"
                      : ""
                  }`}
                >
                  <input
                    name="name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className={`${
                      theme === "light" ? "bg-slate-50 border" : "bg-stone-800"
                    } border-none p-4 rounded-lg focus:border-yellow-300 outline-none focus:outline-yellow-300 phone:w-full`}
                    required
                  />
                </div>
                <div
                  className={`${
                    theme === "light"
                      ? "border border-amber-500 rounded-lg"
                      : ""
                  }`}
                >
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    className={`${
                      theme === "light" ? "bg-slate-50 border" : "bg-stone-800"
                    } border-none p-4 rounded-lg focus:border-yellow-300 outline-none focus:outline-yellow-300 phone:w-full`}
                    required
                  />
                </div>
                <div
                  className={`laptop:ml-2 ${
                    theme === "light"
                      ? "border border-amber-500 rounded-lg"
                      : ""
                  }`}
                >
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="subject"
                    className={`${
                      theme === "light" ? "bg-slate-50 border" : "bg-stone-800"
                    } border-none p-4 rounded-lg focus:border-yellow-300 outline-none focus:outline-yellow-300 phone:w-full`}
                    required
                  />
                </div>
              </div>
              <div
                className={`${
                  theme === "light" ? "border border-amber-500 rounded-lg" : ""
                }`}
              >
                <textarea
                  placeholder="Your Message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${
                    theme === "light"
                      ? "bg-slate-50 border-2 outline-amber-500"
                      : "bg-stone-800 outline-none focus:border-yellow-300 focus:outline-yellow-300"
                  } border-none p-4 h-56 rounded-lg phone:w-full`}
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="custom-button flex items-center gap-2 font-poppins uppercase border-2 border-amber-500 py-2 px-4 rounded-lg"
                >
                  Send message
                  <span className="btn-arrow">
                    <IoIosArrowRoundForward size={25} />
                  </span>
                </button>
                <p
                  className={`${
                    successMessage ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {successMessage}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <h1 className="mt-2 invisible">kaleab</h1>
    </div>
  );
}

export default Transition(Contact);
