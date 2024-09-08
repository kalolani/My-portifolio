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
import { StoreProvider } from "./contexts/storeContext";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor, textColor } from "./theme";
import { useEffect, useState } from "react";

const Container = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  transition: all 0.3s linear;
`;

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const location = useLocation();

  return (
    <StoreProvider>
      <ThemeProvider theme={{ mode: theme }}>
        <Container>
          <div className="h-full w-full">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <Home
                      showLogin={showLogin}
                      setShowLogin={setShowLogin}
                      toggleTheme={toggleTheme}
                      theme={theme}
                    />
                  }
                />
                <Route
                  path="/about"
                  element={
                    <About
                      showLogin={showLogin}
                      setShowLogin={setShowLogin}
                      toggleTheme={toggleTheme}
                      theme={theme}
                    />
                  }
                >
                  <Route index element={<Technic />} />
                  <Route path="technique" element={<Technic />} />
                  <Route path="language" element={<Language />} />
                  <Route path="project" element={<ProjectManagement />} />
                  <Route path="tools" element={<Tools />} />
                  <Route path="thirdparty" element={<ThirdParty />} />
                </Route>
                <Route
                  path="/portfolio"
                  element={
                    <Projects
                      showLogin={showLogin}
                      setShowLogin={setShowLogin}
                      toggleTheme={toggleTheme}
                      theme={theme}
                    />
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Contact
                      showLogin={showLogin}
                      setShowLogin={setShowLogin}
                      toggleTheme={toggleTheme}
                      theme={theme}
                    />
                  }
                />
              </Routes>
            </AnimatePresence>
          </div>
        </Container>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
