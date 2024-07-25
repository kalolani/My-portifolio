import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import Technic from "./Components/Technic";
import Language from "./Components/Language";
import ProjectManagement from "./Components/ProjectManagement";
import Tools from "./Components/Tools";
import ThirdParty from "./Components/ThirdParty";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="h-full w-full">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route index element={<Technic replace to="technique" />} />
            <Route index path="technique" element={<Technic />} />
            <Route path="language" element={<Language />} />
            <Route path="project" element={<ProjectManagement />} />
            <Route path="tools" element={<Tools />} />
            <Route path="thirdparty" element={<ThirdParty />} />
          </Route>
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
