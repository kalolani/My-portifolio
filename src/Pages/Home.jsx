import Navbar from "../Components/Navbar";
import Polygon from "../Components/Polygon";

function Home() {
  return (
    <div className="relative h-full text-slate-50 overflow-hidden">
      <div className="absolute absolute top-1/2 left-3/5 transform -translate-x-1/2 -translate-y-1/2 w-128 ml-24">
        <div className="flex gap-6">
          <div className="block w-6 h-1 bg-yellow-500 mt-6"></div>
          <h1 className="font-poppins text-5xl tracking-wider font-bold mb-2">
            <span className="text-yellow-500 font-poppins text-5xl tracking-wider font-bold mb-2 inline-block">
              {" "}
              I'M KALEAB GEMECHU.
            </span>
            <br />
            WEB DEVELOPER
          </h1>
        </div>
        <p className="font-poppins text-left tracking-wider leading-loose mt-4">
          I'm an Ethiopian based full stack web developer focused on crafting
          clean & user‑friendly experiences, I am passionate about building
          excellent software that improves the lives of those around me.
        </p>
        <button>MORE ABOUT ME</button>
      </div>
      <Polygon />
      <Navbar />

      <div className="absolute h-full w-1/3 top-10 left-10">
        <img
          src="kale-ab.png"
          className="h-144 w-full block rounded-3xl shadow-md shadow-black"
        />
      </div>
    </div>
  );
}

export default Home;
