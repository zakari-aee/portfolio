// App.jsx
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DockNavbar from "./components/DockNavbar";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "education", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== sections[i]) {
              setActiveSection(sections[i]);
              window.history.replaceState(null, "", `#${sections[i]}`);
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <DockNavbar activeSection={activeSection} />
    </div>
  );
}

export default App;
