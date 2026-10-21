import { useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import "./styles/animations.css";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  const [theme, setTheme] = useState("default");

  return (
    <div className={`app theme-${theme}`}>
      <AnimatedBackground theme={theme} />
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <section id="home" className="section hero">
          <p>WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm Rafi.</h1>
          <h2>I build things for the web.</h2>
          <p>
            Computer Science graduate exploring software
            development and creating useful projects.
          </p>
        </section>

        <section id="projects" className="section">
          <h2>My Projects</h2>
        </section>

        <section id="goals" className="section">
          <h2>My Goals</h2>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>
        </section>
      </main>
    </div>
  );
}

export default App;