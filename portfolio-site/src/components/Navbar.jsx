const THEMES = [
  { id: "default", label: "Default" },
  { id: "minecraft", label: "Minecraft" },
  { id: "cyberpunk", label: "Cyberpunk" },
];

function Navbar({ theme, setTheme }) {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        RAFI<span>.DEV</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#goals">Goals</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="theme-switcher">
        {THEMES.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={theme === id ? "active" : ""}
            aria-pressed={theme === id}
            onClick={() => setTheme(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Navbar;