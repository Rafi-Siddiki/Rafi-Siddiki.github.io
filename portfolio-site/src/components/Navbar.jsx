import  { useState, useEffect } from "react";

const THEMES = [
  { id: "default", label: "Default", icon: "/icons/default-icon.png" },
  { id: "minecraft", label: "Minecraft", icon: "/icons/minecraft-icon.png" },
  { id: "cyberpunk", label: "Cyberpunk", icon: "/icons/cyberpunk-icon.png" },
];

function Navbar({ theme, setTheme }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Get all the sections matching our nav hrefs
    const sections = document.querySelectorAll("section[id], div[id]"); // adjust selector if your sections use tags other than <section>
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        RAFI<span>.DEV</span>
      </a>

      <nav className="nav-links">
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
          Projects
        </a>
        <a href="#goals" className={activeSection === "goals" ? "active" : ""}>
          Goals
        </a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About Me
        </a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
          Contact
        </a>
      </nav>

      <div className="theme-switcher">
        {THEMES.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            className={theme === id ? "active" : ""}
            aria-pressed={theme === id}
            onClick={() => setTheme(id)}
          >
            <img src={icon} alt={""} />

          </button>
        ))}
      </div>
    </header>
  );
}

export default Navbar;