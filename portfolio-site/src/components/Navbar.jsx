import { useState } from "react";

import { NAV_LINKS } from "../data/navigation";
import { THEMES } from "../data/themes";
import useActiveSection from "../hooks/useActiveSection";
import "./Navbar.css";

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

function Navbar({ themeId, onThemeChange }) {
  const activeSection = useActiveSection(SECTION_IDS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        RAFI<span>.DEV</span>
      </a>

      {/* Hamburger button, visible only on smaller screens */}
      <button
        type="button"
        className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="nav-panel"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="nav-panel" className={`nav-panel ${isMenuOpen ? "is-open" : ""}`}>
        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : undefined}
              aria-current={activeSection === id ? "true" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="theme-switcher" role="group" aria-label="Choose a theme">
          {THEMES.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              className={themeId === id ? "active" : undefined}
              aria-label={`Switch to ${label} theme`}
              aria-pressed={themeId === id}
              onClick={() => {
                onThemeChange(id);
                closeMenu();
              }}
            >
              <img src={icon} alt="" width="28" height="28" />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
