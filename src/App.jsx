import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DockNavbar from "./components/DockNavbar";

function App() {


  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
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
