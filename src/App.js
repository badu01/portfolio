
import Certificates from "./components/Certificates.jsx";
import Experience from "./Sections/Experience.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./Sections/About.jsx";
import Hero from "./Sections/Hero.jsx";
import Projects from "./Sections/Projects.jsx";
import ConnectMe from "./Sections/ConnectMe.jsx";
// import ParallaxText from "./components/motion/ParallelScroll.jsx";

function App() {
  return (
    <div className="snap-y snap-mandatory">
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Certificates/>
      <Projects/>
      <ConnectMe/>
    </div>
  );
}

export default App;
