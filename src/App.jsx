import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DockNavbar from "./components/DockNavbar";

function App() {
  return (
    <div className="w-screen overflow-x-hidden bg-black">
      <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <DockNavbar />
    </div>
  );
}

export default App;