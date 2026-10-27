import { useState, useEffect } from "react";

import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";

import AnimatedBackground from "./components/AnimatedBackground";
import ScrollReveal from "./components/ScrollReveal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/animations.css";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("default");

  // Dynamically update document body theme and mobile browser UI color
  useEffect(() => {
    // 1. Remove previous theme classes from body and add the new one
    document.body.className = document.body.className
      .replace(/\btheme-\S+/g, "")
      .trim();
    document.body.classList.add(`theme-${theme}`);

    // 2. Update Safari browser toolbar / theme color dynamically
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }

    // Map your theme backgrounds (matching your themes.css)
    const themeBackgrounds = {
      default: "#0f172a",
      minecraft: "#263b26",
      cyberpunk: "#100b20",
    };

    metaThemeColor.setAttribute("content", themeBackgrounds[theme] || "#0f172a");
  }, [theme]);

  return (
    <div className={`app theme-${theme}`}>
      <AnimatedBackground theme={theme} />

      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        {/* Home Section */}
        <section id="home" className="section hero">
          <ScrollReveal direction="up">
            <Home />
          </ScrollReveal>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <ScrollReveal direction="up">
            <Projects />
          </ScrollReveal>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <ScrollReveal direction="left">
            <About />
          </ScrollReveal>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <ScrollReveal direction="up">
            <h2>Contact Me</h2>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;