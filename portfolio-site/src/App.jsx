import { useState } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import AnimatedBackground from "./components/AnimatedBackground";
import "./styles/animations.css";
import Navbar from "./components/Navbar";
import './App.css'
import Projects from "./sections/Projects";

function App() {
  const [theme, setTheme] = useState("default");

  return (
    <div className={`app theme-${theme}`}>
      <AnimatedBackground theme={theme} />
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <section id="home" className="section hero">
          <Home />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>
        </section>
      </main>
    </div>
  );
}

export default App;