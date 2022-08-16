import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useParallax } from "react-scroll-parallax";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Bio from "./components/Bio/Bio";
import Contact from "./components/Contact/Contact";

function App() {
  const { ref } = useParallax({ speed: -155 });
  return (
    <div id="intro" className="main-container">
      <div className="main-container-center">
        <Navbar />
        <div className="main-container-text">
          <div className="main-text">
            <p ref={ref}>
              Hi, I'm <span style={{ color: "#9DE6F5" }}>Conor Goddard</span>, a
              full-stack developer.
            </p>
          </div>
          <img
            className="bg-img"
            ref={ref}
            src="https://cdn.mos.cms.futurecdn.net/uPsn9Sja6CMbXfBFCBvS8Y-1200-80.jpg"
            alt="background"
          />
        </div>
        <About />
        <Work />
        <Experience />
        <Bio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
