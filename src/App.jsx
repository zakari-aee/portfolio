import DockNavbar from './components/DockNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <DockNavbar />
      <div className="pb-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
