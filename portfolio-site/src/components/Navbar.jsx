
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const THEMES = [
  { id: "default", label: "Default", icon: "/icons/default-icon.png" },
  { id: "minecraft", label: "Minecraft", icon: "/icons/minecraft-icon.png" },
  { id: "cyberpunk", label: "Cyberpunk", icon: "/icons/cyberpunk-icon.png" },
];

function Navbar({ theme, setTheme }) {
  // Existing state: tracks which page section is active.
  const [activeSection, setActiveSection] = useState("home");

  // NEW: tracks whether the mobile menu is open.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Existing IntersectionObserver logic for active sections.
  useEffect(() => {
    // Only observe the actual page sections, not navbar elements.
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // NEW: closes the mobile menu.
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo: preserved from your original navbar */}
      <a href="#home" className="logo" onClick={closeMenu}>
        RAFI<span>.DEV</span>
      </a>

      {/* NEW: hamburger button, visible only on smaller screens */}
      <button
        type="button"
        className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
        onClick={() => {
          setIsMenuOpen((previousState) => !previousState);
        }}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="nav-panel"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NEW: groups your existing links and theme icons */}
      <div
        id="nav-panel"
        className={`nav-panel ${isMenuOpen ? "is-open" : ""}`}
      >
        {/* Navigation links: existing activeSection behavior preserved */}
        <nav className="nav-links" aria-label="Main navigation">
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={closeMenu}
          >
            About Me
          </a>

          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>

        {/* Theme buttons: all your original icons are preserved */}
        <div className="theme-switcher" aria-label="Choose a theme">
          {THEMES.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              className={theme === id ? "active" : ""}
              aria-label={`Switch to ${label} theme`}
              aria-pressed={theme === id}
              onClick={() => {
                setTheme(id);
                closeMenu();
              }}
            >
              <img src={icon} alt="" />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
