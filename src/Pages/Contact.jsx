import Navbar from "../Components/Navbar";
import { FaRegSun } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

import "./contact.css";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
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
    <div className=" w-full h-full text-slate-50">
      <div className="fixed top-12 right-6 z-50 bg-stone-800 p-4 rounded-full hover:cursor-pointer hover:bg-yellow-500 phone:invisible laptop:visible">
        <FaRegSun size={18} color="white" />
      </div>
      <Navbar />
      <div className="relative contact-container my-20 phone:my-10 tablet:my-20 laptop:my-20">
        <h1 className="font-poppins text-6xl text-center uppercase font-extrabold text-gray-50 phone:text-3xl ptab:text-5xl laptop:text-6xl laptop:my-16">
          get in<span className="text-yellow-500 font-poppins"> touch</span>
        </h1>
      </div>
      <div className="max-w-6xl m-auto grid grid-cols-1fr-3fr justify-self-center gap-6 phone:grid-cols-1 laptop:grid-cols-1fr-3fr">
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

            <div className="flex flex-col gap-4">
              <p className="font-poppins uppercase">mail me</p>
              <p className="font-poppins font-bold phone:text-sm">
                kgemechu908@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {/* s<MdEmail size={25} className="text-yellow-300" /> */}
            <FaSquarePhone size={25} className="text-yellow-500" />

            <div className="flex flex-col gap-2">
              <p className="font-poppins uppercase">call me</p>
              <p className="font-poppins font-bold">+251916163516</p>
            </div>
          </div>
          <div className="flex gap-4 mt-2 ">
            <a
              href="https://www.linkedin.com/in/kaleab-gemechu-456ab9259/"
              target="_blank"
              className="bg-stone-800 p-2 rounded-lg hover:cursor-pointer hover:bg-yellow-500"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://www.instagram.com/kal_olani/"
              target="_blank"
              className="bg-stone-800 p-2 rounded-lg hover:cursor-pointer hover:bg-yellow-500"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://t.me/kal_olani7"
              target="_blank"
              className="bg-stone-800 p-2 rounded-lg hover:cursor-pointer hover:bg-yellow-500"
            >
              <FaTelegramPlane size={30} />
            </a>
            <a
              href="https://x.com/kaleab481039"
              target="_blank"
              className="bg-stone-800 p-2 rounded-lg hover:cursor-pointer hover:bg-yellow-500"
            >
              <FaXTwitter size={30} />
            </a>
          </div>
        </div>
        <div className="self-center justify-self-center phone:w-3/4 laptop:w-10/12">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 phone:flex-col laptop:flex-row">
                <div>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="border-none p-4 rounded-lg bg-stone-800 focus:border-yellow-300 outline-none focus:outline-yellow-300 phone:w-full"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    className="p-4 rounded-lg bg-stone-800 focus:border-yellow-300 outline-none focus:outline-yellow-300 phone:w-full"
                    required
                  />
                </div>
                <div className="laptop:ml-2">
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="subject"
                    className="p-4 rounded-lg bg-stone-800 focus:border-yellow-300 outline-none focus:outline-yellow-300 phone:w-full"
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-56 p-4 rounded-lg bg-stone-800 outline-none focus:outline-yellow-300"
                  required
                ></textarea>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="custom-button flex items-center gap-2 font-poppins uppercase border-2 border-yellow-300 py-2 px-4 rounded-lg"
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

export default Contact;
