import Certificates from "./components/Certificates.jsx";
import Experience from "./Sections/Experience.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./Sections/About.jsx";
import Hero from "./Sections/Hero.jsx";
import Projects from "./Sections/Projects.jsx";
import ConnectMe from "./Sections/ConnectMe.jsx";
import { useEffect, useState } from "react";
import Loading from "./Sections/Loading.jsx";
// import ParallaxText from "./components/motion/ParallelScroll.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="snap-y snap-mandatory ">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Certificates />
          <Projects />
          <ConnectMe />
        </div>
      )}
    </>
  );
}

export default App;
